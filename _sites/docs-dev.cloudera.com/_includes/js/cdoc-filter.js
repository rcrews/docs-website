var INTERNAL_REPO_DOMAINS = ['vpc.cloudera.com', 'gce.cloudera.com', 'jenkins.cloudera.com'];
var ARCHIVE_CLOUDERA_COM = 'archive.cloudera.com';
var ARCHIVE_CLOUDERA_COM_FREE = 'https://' + ARCHIVE_CLOUDERA_COM;
var ARCHIVE_CLOUDERA_COM_PAID = 'https://USERNAME:PASSWORD@' + ARCHIVE_CLOUDERA_COM + '/p';

function RepoGenerator(product, productLabel) {
  this.BASE_URL = ARCHIVE_CLOUDERA_COM_FREE;
  this.product = product;
  this.productLabel = productLabel;
  this.productLabelLower = this.productLabel.toLowerCase().replace(/ /, '-');
}

/**
 * Parses the string and returns the major version.
 * @param {string} version
 */
RepoGenerator.prototype.getMajorVersion = function(version) {
  if (version) {
    var parts = version.split('.');
    if (parts.length > 0) {
      return parts[0];
    }
  }
  return '?';
};

/**
 * If str does not end with a '/', append '/'.
 * @param {string} str
 */
RepoGenerator.prototype.appendSlash = function(str) {
  if (str.charAt(str.length - 1) !== '/') {
    return str + '/';
  }
  return str;
};

/**
 * Generates the url.
 * @param {string} baseUrl
 */
RepoGenerator.prototype.generateCommon = function(baseUrl, pdVersion, os, osVersion, osCodename, x8664, yumOrApt) {
  if (baseUrl === '' || !baseUrl) {
    baseUrl = this.BASE_URL;
  }
  var i, internalRepo;
  var osMajor = this.getMajorVersion(osVersion);
  var pdMajor = this.getMajorVersion(pdVersion);
  baseUrl = this.appendSlash(baseUrl);

  if (baseUrl.indexOf(this.BASE_URL) !== -1) {
    if (pdMajor === '5') {
      // e.g. https://archive.cloudera.com/cm5/redhat/7/x86_64/cm/
      return baseUrl + this.product + pdMajor + '/' + os + '/' + osCodename + '/' + x8664 + '/' + this.product + '/';
    }
    // e.g. https://archive.cloudera.com/cm6/6.x.0/redhat7/yum/
    return this.appendSlash(baseUrl + this.product + pdMajor + '/' + pdVersion + '/' + os + osMajor + '/' + yumOrApt);
  }

  for (i = 0; i < INTERNAL_REPO_DOMAINS.length; i++) {
    internalRepo = INTERNAL_REPO_DOMAINS[i];
    // web_server/cloudera-repos is what we recommend customers use to setup their local repository,
    // so they must not be found.
    if (baseUrl.indexOf(internalRepo) !== -1 && baseUrl.indexOf('cloudera-repos') === -1) {
      if (pdMajor === '5') {
        // e.g. http://*.vpc.cloudera.com/s3/build/281574/redhat/7/x86_64/cm/
        return baseUrl + os + '/' + osCodename + '/' + x8664 + '/' + this.product + '/';
      }
      // http://*.vpc.cloudera.com/s3/build/282043/cm6/6.x.0/redhat7/yum/
      return this.appendSlash(baseUrl + this.product + pdMajor + '/' + pdVersion + '/' + os + osMajor + '/' + yumOrApt);
    }
  }

  if (pdMajor === '5') {
    // this is customer's custom repository using repo-as-tarball.
    // e.g. http://example/com/cm5/
    return this.appendSlash(baseUrl + this.product + pdMajor);
  }
  // this is customer's custom repository wget --recursive from archive.cloudera.com
  // e.g. http://example.com/cm6/6.x.0/redhat7/yum/
  return this.appendSlash(baseUrl + this.product + pdMajor + '/' + pdVersion + '/' + os + osMajor + '/' + yumOrApt);
};


/**
 * @param {string} baseUrl
 */
RepoGenerator.prototype.generateRHELUrl = function(baseUrl, pdVersion, os, osVersion) {
  var osCodename = this.getMajorVersion(osVersion);
  return this.generateCommon(baseUrl, pdVersion, os, osVersion, osCodename, 'x86_64', 'yum');
};

/**
 * @param {string} baseUrl
 */
RepoGenerator.prototype.generateBaseUrl = function(baseUrl, pdVersion, os, osVersion) {
  var pdMajor = this.getMajorVersion(pdVersion);
  if (pdMajor === '5') {
    return this.generateRHELUrl(baseUrl, pdVersion, os, osVersion) + pdVersion;
  }
  return this.generateRHELUrl(baseUrl, pdVersion, os, osVersion);
};

RepoGenerator.prototype.generateDebCommon = function(baseUrl, pdVersion, os, osVersion, osCodename) {
  return this.generateCommon(baseUrl, pdVersion, os, osVersion, osCodename, 'amd64', 'apt');
};

RepoGenerator.prototype.generateDeb = function(baseUrl, pdVersion, os, osVersion, osCodename) {
  return this.generateDebCommon(baseUrl, pdVersion, os, osVersion, osCodename) + ' ' + osCodename + '-' + this.product + pdVersion + ' contrib';
};

RepoGenerator.prototype.generateClouderaManagerRepo = function(url, pdVersion, os, osVersion) {
  var baseUrl = this.generateBaseUrl(url, pdVersion, os, osVersion);
  var gpgKey = this.generateRHELUrl(url, pdVersion, os, osVersion) + 'RPM-GPG-KEY-cloudera';
  return ['[' + this.productLabelLower + ']',
    '# Packages for ' + this.productLabel,
    'name=' + this.productLabel,
    'baseurl=' + baseUrl,
    'gpgkey=' + gpgKey,
    'gpgcheck=1'].join('\n');
};

RepoGenerator.prototype.generateClouderaList = function(baseUrl, pdVersion, os, osVersion, osCodename) {
  var deb = this.generateDeb(baseUrl, pdVersion, os, osVersion, osCodename);
  return ['# Packages for ' + this.productLabel,
    'deb ' + deb,
    'deb-src ' + deb
  ].join('\n');
};

(function($) {
  function scrollTo(el, offset) {
    if (el) {
      $('html, body').animate({
        scrollTop: el.offset().top - offset
      }, 100);
    }
  }

  function anchorOnTheFly(id) {
    var $id = $(id);
    if($id.length) {
      if(!$id.hasClass('anchor')) {
        scrollTo($id, 70);
      } else {
        scrollTo($id, 0);
      }
    }
  }

  function isPage(name) {
    var pathParts = window.location.pathname.split('/');
    var filename = pathParts[pathParts.length - 1];

    return filename.indexOf(name) !== -1;
  }

  function isPackageRepoPage() {
    return isPage('create_local_package');
  }

  function isParcelRepoPage() {
    return isPage('create_local_parcel');
  }

  function isCMUpgradePage() {
    return isPage('cm_upgrade');
  }

  function isCMDowngradePage() {
    return isPage('cm_downgrade');
  }

  function isHueUpgradePage() {
    return isPage('cdh_upgrade_hue');
  }

  function isCDHUpgradePage() {
    return isPage('cdh_upgrade');
  }

  function isHostUpgradeBeforePage() {
    return isPage('os_upgrade_prepare') || isPage('os_upgrade_backup');
  }

  function isHostUpgradeAfterPage() {
    return isPage('os_upgrade_after');
  }
  
  function isJDKUpgradePage() {
    return isPage('jdk');
  }
  
  var repoGenerator;
  if (isPackageRepoPage() || isParcelRepoPage()) {
    repoGenerator = new RepoGenerator('cm', 'Cloudera Manager');
  } else if (isCMUpgradePage()) {
    repoGenerator = new RepoGenerator('cm', 'Cloudera Manager');
  } else if (isCMDowngradePage()) {
    repoGenerator = new RepoGenerator('cm', 'Cloudera Manager');
  } else if (isCDHUpgradePage()) {
    repoGenerator = new RepoGenerator('cdh', 'Cloudera CDH');
  } else if (isHostUpgradeBeforePage() || isHostUpgradeAfterPage()) {
    repoGenerator = new RepoGenerator('cm', 'Cloudera Manager');
  }

  /**
   * @returns {string} 'cdoc-' + input category.
   * @param {string} category e.g. 'os', 'cm', db', 'cdh'
   */
  function getClassPrefix(category) {
    return 'cdoc-' + category;
  }

  /**
   * @returns {string} category-fromOrDest or just category.
   * @param {string} category e.g. 'os', 'cm', db', 'cdh'
   * @param {string} option e.g. 'from' or 'dest'
   */
  function getClassPrefixAndOption(category, option) {
    var result = option ? category + '-' + option: category;
    return getClassPrefix(result);
  }

  function getPath() {
    var url = window.location.href;
    if (url.indexOf('?') !== -1) {
      url = url.split('?')[0];
    } else {
      url = url.split('#')[0];
    }
    return url;
  }

  /**
   * For a URL that looks like part.html?xyz=abc#anchor,
   * retrieve the 'xyz=abc' part.
   */
  function getParamValue() {
    var url = window.location.href;
    if (url.indexOf('?') !== -1) {
      url = url.split('?')[1];
    }
    if (url.indexOf('#') !== -1) {
      url = url.split('#')[0];
    }
    return url || '';
  }

  function getHashValue() {
    var url = window.location.href;
    if (url.indexOf('#') !== -1) {
      return url.split('#')[1];
    }
    return '';
  }

  function unparam(queryParams) {
    var ret = {};
    var nvs = queryParams.replace(/\+/g, ' ').split('&');
    $(nvs).each(function(i, nv) {
      var eqPos = nv.indexOf('=');
      if (eqPos !== -1) {
        var name = decodeURIComponent(nv.substring(0, eqPos));
        var value = decodeURIComponent(nv.substring(eqPos + 1));
        ret[name] = value;
      }
    });
    return ret;
  }

  /**
   * Saves the selection to storage.
   * @param {string} category
   * @param {string} fromOrDest
   * @param {string} value
   */
  function persist(category, fromOrDest, value) {
    var key = getClassPrefixAndOption(category, fromOrDest);
    if (localStorage && localStorage.setItem) {
      localStorage.setItem(key, value);
    }
  }

  /**
   * Retrieves the selection to storage.
   * @param {string} category e.g. 'os'.
   * @param {string} fromOrDest 'from' or 'dest'
   */
  function retrieve(category, fromOrDest) {
    var key = getClassPrefixAndOption(category, fromOrDest);
    if (localStorage && localStorage.getItem) {
      return localStorage.getItem(key);
    }
  }

  function getAllVersions(versionsString) {
    var i, versionList = $.trim(versionsString).split(/\s+/);
    for (i = 0; i < versionList.length; i++) {
      versionList[i] = $.trim(versionList[i]);
    }
    return versionList;
  }

  function getAllFreeCMVersions() {
    var i, versions = $('.current_cm_releases').text();
    if (versions) {
      return getAllVersions(versions);
    }
    // Remove once upgrade points to a single version.
    versions = [];
    for (i = 15; i >= 0; i--) {
      versions.push('5.' + i);
    }
    return versions;
  }

  /**
   * @return {string[]} A list of paid CM versions, e.g. ['6.3.3']
   */
  function getAllPaidCMVersions() {
    var i, paidVersions = $('.current_cm_paid_releases').text();
    return getAllVersions(paidVersions);
  }

  function getAllFreeCDHVersions() {
    var i, versions = $('.current_cdh_releases').text();
    if (versions) {
      return getAllVersions(versions);
    }
    // Remove once upgrade points to a single version.
    versions = [];
    for (i = 15; i >= 0; i--) {
      versions.push('5.' + i);
    }
    return versions;
  }

  function getAllPaidCDHVersions() {
    var i, paidVersions = $('.current_cdh_paid_releases').text();
    return getAllVersions(paidVersions);
  }
  
  /** 
   * JD 4.2.2020: Add a separate function for getting all Cloudera Runtime releases
   * 
   */
  function getAllCrVersions() {
    var i, paidCrVersions = $('.current_cr_releases').text()
    return getAllVersions(paidCrVersions);
  }

  /**
   * Updates the archive_cloudera_com_input input box's value.
   * @param {string} val The new value for this input box.
   */
  function setArchiveClouderaInput(val) {
    $('#archive_cloudera_com_input').val(val);
  }

  /**
   * If the archive_cloudera_com_input input box contains
   * an archive.cloudera.com value, then we should update
   * it if a paywall option selected.
   * @param {boolean} paid Determine which base URL to use. If true,
   * then we should generate a URL that is for the paywall.
   */
  function checkAndAdjustArchiveClouderaInput(paid) {
    var currValue = $('#archive_cloudera_com_input').val();

    // Adjust the input based on the paywall selection.
    if (currValue && currValue.indexOf(ARCHIVE_CLOUDERA_COM) !== -1 || $.trim(currValue) === '') {
      setArchiveClouderaInput(paid ? ARCHIVE_CLOUDERA_COM_PAID : ARCHIVE_CLOUDERA_COM_FREE);
    }
  }

  /**
   * Adjusts the archive cloudera input field based on whether
   * the selected version is from a category (cm/cdh) should be behind the paywall or not.
   * Otherwise it does nothing.
   * @param {string} category the selected category, e.g. 'cm' or 'cdh'
   * @param {string} version the selected version, e.g. '6.3.3'
   */
  function adjustArchiveClouderaInput(category, version) {
    if (category === 'cm') {
      var allPaidVersions = getAllPaidCMVersions();
      checkAndAdjustArchiveClouderaInput(allPaidVersions.indexOf(version) !== -1);
    } else if (category === 'cdh') {
      var allPaidCDHVersions = getAllPaidCDHVersions();
      checkAndAdjustArchiveClouderaInput(allPaidCDHVersions.indexOf(version) !== -1);
    }
  }

  function populateRepoAndList() {
    var cmVersion, cdhVersion, pdVersion = '';

    var category;
    var defaultCmVersion = getAllFreeCMVersions()[0];
    var defaultCdhVersion = getAllFreeCDHVersions()[0];

    if (isCMUpgradePage()) {
      cmVersion = $('#cdoc-cm-dest-select').val();
      pdVersion = cmVersion || defaultCmVersion;
      category = 'cm';
    } else if (isCMDowngradePage()) {
      cmVersion = $('#cdoc-cm-dest-select').val();
      pdVersion = cmVersion || defaultCmVersion;
      category = 'cm';
    } else if (isCDHUpgradePage()) {
      cdhVersion = $('#cdoc-cdh-dest-select').val();
      pdVersion = cdhVersion || defaultCdhVersion;
      category = 'cdh';
    } else if (isHostUpgradeBeforePage() || isHostUpgradeAfterPage()) {
      cmVersion = $('#cdoc-cm-select').val();
      pdVersion = cmVersion || defaultCmVersion;
      category = 'cdh';
    }

    if (pdVersion && repoGenerator) {
      var baseUrl = $('#archive_cloudera_com_input').val();
      if (baseUrl === '') {
        // Update to the correct value based on the CM/CDH version selection.
        adjustArchiveClouderaInput(category, pdVersion);
      }
      var osSelection = $('#cdoc-os-select').val();
      var os, osVersion, osCodename, osParts = osSelection ? osSelection.split(' ') : [];
      if (osParts.length >= 2) {
        os = osParts[0];
        osVersion = osParts[1];
        osCodename = osParts[2];
      }
      var clouderaManagerRepo = repoGenerator.generateClouderaManagerRepo(baseUrl, pdVersion, os || 'redhat', osVersion || '7', '');
      var slesRepo = repoGenerator.generateClouderaManagerRepo(baseUrl, pdVersion, os || 'sles', osVersion || '12', '');
      var clouderaList = repoGenerator.generateClouderaList(baseUrl, pdVersion, os || 'debian', osVersion || '8', osCodename || 'jessie');
      $('.cdoc-cloudera-manager-repo-redhat-content').text(clouderaManagerRepo);
      $('.cdoc-cloudera-manager-repo-sles-content').text(slesRepo);
      $('.cdoc-cloudera-list-content').text(clouderaList);
      if (baseUrl) {
        $('.cdoc-custom_repo_url').text(baseUrl);
        // If the value contains ARCHIVE_CLOUDERA_COM, then
        // no need to store it.
        if (baseUrl.indexOf(ARCHIVE_CLOUDERA_COM) !== -1) {
          persist('package_repository', '', '');
        } else {
          persist('package_repository', '', baseUrl);
        }
      }
    }
  }

  var $archiveUrlContainer = $('.cdoc-package-repository-container');
  if ($archiveUrlContainer.length > 0) {
    var baseUrl = retrieve('package_repository', '');
    if (!baseUrl || baseUrl === 'undefined') {
      // If we retrieved an invalid or empty value, start from the free version
      // If we have selected a paid version, this input box would be automatically overwritten.
      baseUrl = ARCHIVE_CLOUDERA_COM_FREE;
    }
    $('<input>').attr('id', 'archive_cloudera_com_input').attr('type', 'text').addClass('form-control cdoc-archive_cloudera_com_input').val(baseUrl).attr('placeholder', ARCHIVE_CLOUDERA_COM).appendTo($archiveUrlContainer);
    $('<button>').attr('id', 'archive_cloudera_com_btn').addClass('cdoc-archive_cloudera_com_btn').text('Apply').appendTo($archiveUrlContainer);
    $('#archive_cloudera_com_input').change(function() {
      populateRepoAndList();
      sendAnalytics('repo_url', 'change');
    });
    $('#archive_cloudera_com_btn').click(function() {
      populateRepoAndList();
      sendAnalytics('repo_url', 'apply');
    });
  }

  /**
   * @returns {string} the id of the SELECT control.
   */
  function getSelectId(category, fromOrDest) {
    return getClassPrefixAndOption(category, fromOrDest) + '-select';
  }

  /**
   * Determine the opposite of fromOrDest.
   */
  function getOther(fromOrDest) {
    if (fromOrDest === 'from') {
      return 'dest';
    }
    if (fromOrDest === 'dest') {
      return 'from';
    }
    return fromOrDest;
  }

  function showCategory($elems, category) {
    $elems.removeClass('cdoc-hidden-' + category);
    if ($elems.is('option')) {
      $elems.attr('disabled', false);
    }
  }

  function hideCategory($elems, category) {
    $elems.addClass('cdoc-hidden-' + category);
    if ($elems.is('option')) {
      $elems.attr('disabled', true);
    }
  }

  /**
   * @returns {string} The class pattern that we use to perform matching.
   */
  function getClassPatternFromCategory(category, selected) {
    return '[class*="' + getClassPrefixAndOption(category, selected) + '"]';
  }

  function resetCategory(category) {
    var pattern = getClassPatternFromCategory(category);
    $(pattern).each(function(i, elem) {
      showCategory($(elem), category);
    });
  }

  /**
   * For the category, set the value as selected.
   * Everything with CSS class that begins with cdoc-category will be made hidden.
   * Everything with CSS class that begins with cdoc-category for the selected value will be made visible.
   * @param {string} category - The selected category.
   * @param {string} selected - The selected value within the category.
   * TODO: if we want to support multiple selected, then we need to make selected an array.
   */
  function changeValue(category, selected) {

    console.log('changeValue ' + category + ' ' + selected);
    var pattern = getClassPatternFromCategory(category);

    if (selected === '') {
      showCategory($(pattern), category);
    } else {
      selected = selected.replace(/\./g, '_');
      var selectedPattern = getClassPatternFromCategory(category, selected);
      hideCategory($(pattern), category);
      showCategory($(selectedPattern), category);
    }

    // We often use dt as a way of labeling the category.
    if (selected === '') {
      $('dt' + pattern).show();
    } else {
      $('dt' + pattern).hide();
    }
  }

  /**
   * Some versions contain the string x.
   * We assume this means a large unknown version.
   */
  function parse(x) {
    if (x === 'x') {
      return 9999;
    }
    return parseInt(x, 10);
  }

  function lessThan(a, b) {
    return a < b;
  }

  function greaterThan(a, b) {
    return a > b;
  }

  function equal(a, b) {
    return a === b;
  }

  /**
   * @return {boolean} if versionA and versionB matches by the comparator function.
   * @param {string} versionA
   * @param {string} versionB
   * @param {function(number, number):boolean} func
   * @param {boolean} defaultValue
   */
  function compare(versionA, versionB, func, defaultValue) {
    if (versionA === undefined || versionA === null || versionB === undefined || versionB === undefined) {
      return false;
    }
    var partsA = versionA.split('.');
    var partsB = versionB.split('.');
    var lenA = partsA.length;
    var lenB = partsB.length;
    var partA, partB, i;
    for (i = 0; i < lenA || i < lenB; i++) {
      partA = i < lenA ? parse(partsA[i]) : 0;
      partB = i < lenB ? parse(partsB[i]) : 0;
      if (partA !== partB) {
        return func(partA, partB);
      }
    }
    return defaultValue;
  }

  function isLessThanOrEqual(versionA, versionB) {
    return compare(versionA, versionB, lessThan, true);
  }

  function isLessThan(versionA, versionB) {
    return compare(versionA, versionB, lessThan, false);
  }

  function isGreaterThanOrEqual(versionA, versionB) {
    return compare(versionA, versionB, greaterThan, true);
  }

  function isGreaterThan(versionA, versionB) {
    return compare(versionA, versionB, greaterThan, false);
  }

  function isEqual(versionA, versionB) {
    return compare(versionA, versionB, equal, true);
  }

  function isGreaterThanOrEqualAndCompatible(versionA, versionB) {
    var result = isGreaterThanOrEqual(versionA, versionB);
    if (!result) {
      return false;
    }
    if (isGreaterThanOrEqual(versionA, '6.0') ) {
      if (isLessThan(versionA, '6.1') && isGreaterThanOrEqual(versionB, '5.15') && isLessThan(versionB, '6.0')) {
        // 6.0 and 5.15+ doesn't work.
        return false;
      }
      // 6.0+ and 5.6- doesn't work.
      if (isLessThan(versionB, '5.7')) {
        return false;
      }
    }
    return true;
  }

  function isLessThanOrEqualAndCompatible(versionA, versionB) {
    var result = isLessThanOrEqual(versionA, versionB);
    if (!result) {
      return false;
    }
    if (isGreaterThanOrEqual(versionB, '6.0') ) {
      // 6.0 and 5.15+ doesn't work.
      if (isLessThan(versionB, '6.1') && isGreaterThanOrEqual(versionA, '5.15') && isLessThan(versionA, '6.0')) {
        return false;
      }
      // 6.0+ and 5.6- doesn't work.
      if (isLessThan(versionA, '5.7')) {
        return false;
      }
    }
    return true;
  }

  /**
   * @returns {boolean} true if str is in the array.
   */
  function contains(array, str) {
    return array.some(function(item) {
      return item === str;
    });
  }

  /**
   * @return {boolean} true if parts matches the selection
   * @param {string[]} parts The css class name e.g. cdoc-category-version
   */
  function versionCompare(parts, selection) {
    console.log('versionCompare ' + parts.join(', ') + ' ' + selection);
    var version = parts[2].replace(/_/g, '.');
    if (contains(parts, 'max')) {
      if (isLessThanOrEqual(selection, version)) {
        return true;
      }
    } else if (contains(parts, 'min')) {
      if (isGreaterThanOrEqual(selection, version)) {
        return true;
      }
    } else {
      if (isEqual(selection, version)) {
        return true;
      }
    }
    return false;
  }

  /**
   * @returns {boolean} true if the element should be shown.
   * @param {DOM} $elem
   * @param {string} category - category
   * @param {string} from The smallest version
   * @param {string} dest The largest version
   */
  function shouldShow($elem, category, from, dest) {
    var i, classes = $elem.attr('class').split(/[ ]+/);
    var parts, clazz, conditions = [];
    var prefix = getClassPrefix(category);
    for (i = 0; i < classes.length; i++) {
      clazz = classes[i];
      if (clazz.indexOf(prefix) === 0) {
        // only one that we care about.
        parts = clazz.split('-');
        if (from !== '' && contains(parts, 'from')) {
          conditions.push(versionCompare(parts, from));
        } else if (dest !== '' && contains(parts, 'dest')) {
          conditions.push(versionCompare(parts, dest));
        }
      }
    }
    return !contains(conditions, false);
  }

  /**
   * Suppose an element contains the class "cdoc-redhat-7-min cdoc-redhat-7_9999-max"
   * shouldsShowSingular($element, 'cdoc-redhat', '7') will try to
   * determine if this should be shown.
   * @param {DOM} $elem
   * @param {string} category
   * @param {string} value
   */
  function shouldShowElementWithVersion($elem, category, value) {
    var i, classes = $elem.attr('class').split(/[ ]+/);
    var parts, clazz, conditions = [];
    var prefix = getClassPrefix(category);
    for (i = 0; i < classes.length; i++) {
      clazz = classes[i];
      if (clazz.indexOf(prefix) === 0) {
        // only one that we care about.
        parts = clazz.split('-');
        if (contains(parts, 'min') || contains(parts, 'max')) {
          conditions.push(versionCompare(parts, value));
        }
      }
    }
    return !contains(conditions, false);
  }

  /**
   * When the category from / dest changes, show/hide all related elements.
   * @param {string} category
   * @param {string} from
   * @param {string} dest
   */
  function changeRange(category, from, dest) {
    console.log('change range ' + category + ' ' + from + ' ' + dest);
    var pattern = getClassPatternFromCategory(category);

    if (from === '' && dest === '') {
      showCategory($(pattern), category);
    } else {
      $(pattern).each(function(i, elem) {
        var $elem = $(elem);
        if (shouldShow($elem, category, from, dest)) {
          showCategory($elem, category);
        } else {
          hideCategory($elem, category);
        }
      });
    }
  }

  /**
   * When the category specific value changes.
   */
  function changeSpecificValue(category, suboption, specificValue) {
    var pattern = getClassPatternFromCategory('specific-' + category, suboption);
    $(pattern).text(specificValue);
  }

  /**
   * @param {string} category
   * @param {string} version
   */
  function changeVersion(category, version) {
    console.log('change version check ' + category + ' ' + version);
    var pattern = getClassPatternFromCategory(category);
    $(pattern).each(function(i, elem) {
      var $elem = $(elem);
      if (shouldShowElementWithVersion($elem, category, version)) {
        showCategory($elem, category);
      } else {
        hideCategory($elem, category);
      }
    });
    if (version === '') {
      $('dt' + pattern).show();
    } else {
      $('dt' + pattern).hide();
    }
  }

  function showSelectionWithFunc(category, selected, $selection, func) {
    $selection.find('option').each(function(i, option) {
      var value = $(option).attr('value');
      if (value !== '') {
        if (isEqual(value, selected) || func(value, selected)) {
          showCategory($(option), category);
        } else {
          hideCategory($(option), category);
        }
      }
    });
    var currentValue = $selection.val();
    if (!isEqual(currentValue, selected) && !func(currentValue, selected)) {
      $selection.val('');
    }
  }

  function showGreaterThanOrEqualOnlyMinusIncompatible(category, selected, $selection) {
    showSelectionWithFunc(category, selected, $selection, isGreaterThanOrEqualAndCompatible);
  }

  function showLessThanOrEqualOnlyMinusIncompatible(category, selected, $selection) {
    showSelectionWithFunc(category, selected, $selection, isLessThanOrEqualAndCompatible);
  }

  /**
   * @param {string} category
   * @param {string} fromOrDest
   * @param {string} [selected]
   */
  function changeSelection(category, fromOrDest, selected) {
    $('.cdoc-upgrade-empty-instruction').hide();
    if (!selected) {
      selected = '';
    }
    if (fromOrDest) {
      var $otherSelection = $('#' + getSelectId(category, getOther(fromOrDest)));
      var other = $otherSelection.val() || '';
      if (fromOrDest === 'from') {
        changeRange(category, selected, other);
        showGreaterThanOrEqualOnlyMinusIncompatible(category, selected, $otherSelection);
      } else if (fromOrDest === 'dest') {
        changeRange(category, other, selected);
      } else {
        changeRange(category, selected, selected);
      }
      changeSpecificValue(category, fromOrDest, selected);
      if (fromOrDest === 'dest') {
        // When we have From version and Dest version, only the destination selection matters.
        adjustArchiveClouderaInput(category, selected);
      }
    } else {
      var parts = selected.split(' ');
      if (parts.length > 0) {
        changeValue(category, parts[0]);
        changeSpecificValue(category, '', parts[0]);
      }
      // Only OS today has a special encoding where
      // the first value is the os, the second and the third
      // correspond to the version and the codename respectively.
      if (parts.length > 1) {
        changeSpecificValue(category, 'version', parts[1]);
        if (category === 'os') {
          resetCategory('redhat');
          resetCategory('ubuntu');
          resetCategory('sles');
          resetCategory('debian');
        }
        changeVersion(parts[0], parts[1]);
      }

      if (parts.length > 2) {
        changeSpecificValue(category, 'codename', parts[2]);
      }
      if (category === 'cm') {
        // This occurs on the CDH upgrade page.
        var $fromSelection = $('#' + getSelectId('cdh', 'from'));
        var $destSelection = $('#' + getSelectId('cdh', 'dest'));

        // The third digit is the maintainence version. CM x.y.0 supports all CDH x.y.? or below.
        var selectedParts = selected.split('.');
        if (selectedParts.length === 3) {
          selectedParts[2] = 9999;
        }
        selected = selectedParts.join('.');
        showLessThanOrEqualOnlyMinusIncompatible(category, selected, $fromSelection);
        showLessThanOrEqualOnlyMinusIncompatible(category, selected, $destSelection);
        // We also want to make sure the CM version is used to determine
        // whether certain sections are shown or not. We could extend
        // this to other categories later.
        changeVersion(category, selected);
      }
      adjustArchiveClouderaInput(category, selected);
    }
    persist(category, fromOrDest, selected);
  }

  /**
   * @param {string} category e.g. 'os'.
   * @param {string} fromOrDest 'from' or 'dest'
   */
  function restore(category, fromOrDest) {
    var params = unparam(getParamValue());
    var key = getClassPrefixAndOption(category, fromOrDest);
    var value = params[key] || retrieve(category, fromOrDest);
    if (value) {
      if ((category === 'cdh' || category === 'cm') && value.indexOf('5') === 0) {
        var valueParts = value.split('.');
        if (valueParts.length >= 2) {
          value = valueParts.splice(0, 2).join('.');
        }
      }
      var $select = $('#' + getSelectId(category, fromOrDest));
      if ($select && $select.find('option[value=\'' + value + '\'][class!=\'cdoc-hidden-' + category + '\']').length > 0) {
        $select.val(value);
        changeSelection(category, fromOrDest, value);
      }
    }
  }

  function beginRefresh() {
    $('.cdoc-upgrade-content-updated').hide();
    $('.cdoc-upgrade-refresh-content').show();
  }

  function endRefresh() {
    window.setTimeout(function() {
      $('.cdoc-upgrade-refresh-content').hide();
      $('.cdoc-upgrade-content-updated').show();
    }, 500);
  }

  var cdocUnrestoredFilters = 0;

  function addSeparator($parent) {
    $('<hr>').appendTo($parent);
  }

  /**
   * Generates the filter HTML and add it to the page.
   * @param {string} label - The label of the filter. e.g. Operating System
   * @param {string} category - The category of the filter.
   * @param {string} fromOrDest
   * @param {object} options
   * @param {DOM} $parent
   */
  function addFilter(label, category, fromOrDest, options, $parent, additionalCss) {
    cdocUnrestoredFilters += 1;

    var $formGroup = $('<div>').addClass('form-group');
    if (additionalCss) {
      $formGroup.addClass(additionalCss);
    }
    var i, $select = $('<select>').attr('id', getSelectId(category, fromOrDest)).addClass('form-control');
    for (i in options) {
      if (options.hasOwnProperty(i)) {
        $('<option>').attr('value', options[i].value).text(options[i].label).appendTo($select);
      }
    }
    $select.on('change', function(evt) {
      beginRefresh();
      changeSelection(category, fromOrDest, $select.val());
      populateRepoAndList();
      endRefresh();
      if (fromOrDest) {
        sendAnalytics('filter', category + '-' + fromOrDest, $select.val());
      } else {
        sendAnalytics('filter', category, $select.val());
      }
    });
    $('<label>').text(label).addClass('control-label').appendTo($formGroup);
    var $div = $('<div>').addClass('controls').appendTo($formGroup);
    $select.appendTo($div);
    $formGroup.appendTo($parent);

    // We want all filters to be present before we perform restore.
    window.setTimeout(function() {
      restore(category, fromOrDest);
      cdocUnrestoredFilters -= 1;
      // When the # of filter restoration reaches zero,
      // populate all the information and do another anchor update.
      if (cdocUnrestoredFilters === 0) {
        populateRepoAndList();
        if (document.location.hash) {
          anchorOnTheFly(document.location.hash);
        }
      }
    }, 10);
  }

  function getAllFilterData($filterContainer) {
    var $selects = $filterContainer.find('select:visible');
    var filterData = {};
    $.each($selects, function(i, select) {
      var $select = $(select);
      var selectId = $select.attr('id');
      var selectValue = $select.val();
      selectId = selectId.replace('-select', '');
      if (selectValue) {
        filterData[selectId] = selectValue;
      }
    });
    return filterData;
  }

  function trimAll(array) {
    var i;
    for (i = 0; i < array.length; ++i) {
      array[i] = $.trim(array[i]);
    }
  }

  /**
   * The list of latest versions are stored in this array.
   */
  function populateVersions(paidVersions, versions, prefix, array) {
    var i, version;

    // Read the list of new versions from the page.
    trimAll(paidVersions);
    trimAll(versions);

    // Add the latest in-house .x version.
    if (document.location.href.indexOf('docs.cloudera.com') === -1) {
      var latestInParts = versions[0].split('.');
      if (latestInParts[0] !== '5') {
        latestInParts[latestInParts.length - 1] = 'x';
        var latestVersion = latestInParts.join('.');
        array.push({
          value: latestVersion,
          label: prefix + ' ' + latestVersion
        });
      }
    }

    for (i = 0; i < paidVersions.length; ++i) {
      version = paidVersions[i];
      if (version) {
        array.push({
          value: version,
          label: prefix + ' ' + version + ' (License Required)'
        });
      }
    }

    // Add all the versions in reverse order.
    for (i = 0; i < versions.length; ++i) {
      version = versions[i];
      if (version) {
        array.push({
          value: version,
          label: prefix + ' ' + version
        });
      }
    }
  }
  
  /**
   * JD 4.2.2020: Seperate populate function for CR clusters
   */
  function populateCrVersions(paidVersions, prefix, array) {
    var i, version;

    // Read the list of new versions from the page.
    trimAll(paidVersions);

    for (i = 0; i < paidVersions.length; ++i) {
      version = paidVersions[i];
      if (version) {
        array.push({
          value: version,
          label: prefix + ' ' + version + ' (License Required)'
        });
      }
    }
  }

  var osOptions = [{
    value: '',
    label: 'Choose...'
  }, {
    value: 'redhat 7',
    label: 'Redhat/CentOS 7'
  }, {
    value: 'redhat 6',
    label: 'Redhat/CentOS 6'
  }, {
    value: 'redhat 5',
    label: 'Redhat/CentOS 5'
  }, {
    value: 'sles 12',
    label: 'SLES 12'
  }, {
    value: 'sles 11',
    label: 'SLES 11'
  }, {
    value: 'debian 8 jessie',
    label: 'Debian 8 (jessie)'
  }, {
    value: 'debian 7 wheezy',
    label: 'Debian 7 (wheezy)'
  }, {
    value: 'debian 6 squeeze',
    label: 'Debian 6 (squeeze)'
  }, {
    value: 'ubuntu 1804 bionic',
    label: 'Ubuntu 18.04 (Bionic)'
  }, {
    value: 'ubuntu 1604 xenial',
    label: 'Ubuntu 16.04 (Xenial)'
  }, {
    value: 'ubuntu 1404 trusty',
    label: 'Ubuntu 14.04 (Trusty)'
  }, {
    value: 'ubuntu 1204 precise',
    label: 'Ubuntu 12.04 (Precise)'
  }, {
    value: 'ubuntu 1004 lucid',
    label: 'Ubuntu 10.04 (Lucid)'
  }];

  var dbOptions = [{
    value: '',
    label: 'Choose...'
  }, {
    value: 'mysql',
    label: 'MySQL'
  }, {
    value: 'postgresql',
    label: 'PostgreSQL'
  }, {
    value: 'oracle',
    label: 'Oracle'
  }, {
    value: 'embedded',
    label: 'Embedded PostgreSQL'
  }, {
    value: '',
    label: 'Mixed'
  }];

  /**
   * JD 4.2.2020: Replace CDH From and Dest options with broader 'Cluster' options
   */
  var clusterFromOptions = [{
    label: 'Choose...',
    value: ''
  }];

  var clusterDestOptions = [{
    label: 'Choose...',
    value: ''
  }];

  var cmOptions = [{
    label: 'Choose...',
    value: ''
  }];
  
  function clusterPrefix(versions) {
    var i, version, clusterPrefix;
    
    for (i = 0; i < versions.length; ++i) {
      version = versions[i];
      if (version < 7) {
        clusterPrefix = "CDH";
      }
      else {
        clusterPrefix = "CR"
      }
    }
    return clusterPrefix;
  }

  /**
   * JD 4.2.2020: Add calls to separate populate function for Cloudera Runtime releases 
   * and set options to 'Cluster' for both CR and CDH releases
   */
  populateCrVersions(getAllCrVersions(), 'CR', clusterFromOptions);
  populateCrVersions(getAllCrVersions(), 'CR', clusterDestOptions);
  populateVersions(getAllPaidCDHVersions(), getAllFreeCDHVersions(), 'CDH', clusterFromOptions);
  populateVersions(getAllPaidCDHVersions(), getAllFreeCDHVersions(), 'CDH', clusterDestOptions);
  populateVersions(getAllPaidCMVersions(), getAllFreeCMVersions(), 'Cloudera Manager', cmOptions);

  var productOptions = [{
    label: 'Choose...',
    value: ''
  }, {
    label: 'Yes',
    value: 'navigator'
  }, {
    label: 'No',
    value: 'none'
  }];

  var methodOptions = [ {
    label: 'Choose...',
    value: ''
  }, {
    label: 'Parcels',
    value: 'parcel'
  }, {
    label: 'Packages',
    value: 'package'
  }];

  var haOptions = [ {
    label: 'Choose...',
    value: ''
  }, {
    label: 'Enabled',
    value: 'yes'
  }, {
    label: 'Disabled',
    value: 'no'
  }];

  var booleanOptions = [ {
    label: 'Choose...',
    value: ''
  }, {
    label: 'Yes',
    value: 'yes'
  }, {
    label: 'No',
    value: 'no'
  }];

  var $filter = $('.cdoc-filter').addClass('form-horizontal well').empty();
  if ($filter.length > 0) {
    var $titleDiv = $('<div>').addClass('cdoc-environment');
    var $title = $('<span>').text('My Environment');
    var $link = $('<i>').addClass('cdoc-environment-link fa fa-link fa-rotate-90').attr('title', 'Generate an environment specific url and copy to clipboard');
    var $url = $('<span>').addClass('cdoc-hidden cdoc-environment-url');
    $titleDiv.append($title).append($link).append($url);
    $filter.append($titleDiv);
    $titleDiv.click(function() {
      var params = $.param(getAllFilterData($filter));
      var hash = getHashValue();
      var url = getPath();
      if (params) {
        url += '?' + params;
      }
      if (hash) {
        url += '#' + hash;
      }
      $url.text(url);
      copyToClipboard($url);
      sendAnalytics('filter', 'share', url);
    });

    var addOSFilter = function() {
      addFilter('Operating System', 'os', '', osOptions, $filter);
    };

    var addDbFilter = function() {
      addFilter('Database', 'db', '', dbOptions, $filter);
    };

    var addNavigatorFilter = function() {
      addFilter('Using Cloudera Navigator', 'product', '', productOptions, $filter);
    };

    var addCMFromFilter = function() {
      addFilter('Current Cloudera Manager Version', 'cm', 'from', cmOptions, $filter);
    };

    var addCMDestFilter = function() {
      addFilter('New Cloudera Manager Version', 'cm', 'dest', cmOptions, $filter);
    };

    /**
    * JD 4.2.2020: Replace CDH filters with broader 'Cluster' filters
    */
    var addClusterFromFilter = function() {
      addFilter('Current Cluster Version', 'cluster', 'from', clusterFromOptions, $filter);
    };

    var addClusterDestFilter = function() {
      addFilter('New Cluster Version', 'cluster', 'dest', clusterDestOptions, $filter);
    };

    var addCMFilter = function() {
      addFilter('Current Cloudera Manager Version', 'cm', '', cmOptions, $filter);
    };

    var $instruction1 = $('<p>').text('Fill in the following form to create a customized set of instructions for your environment.');
    $filter.append($instruction1);

    if (isPackageRepoPage() || isParcelRepoPage()) {
      addOSFilter();
    } else if (isCMUpgradePage()) {
      addOSFilter();
      addDbFilter();
      addNavigatorFilter();
      addCMFromFilter();
      addSeparator($filter);
      addCMDestFilter();
    } else if (isHueUpgradePage()) {
      addOSFilter();
      addFilter('Hue Database', 'db', '', dbOptions, $filter);
      /**
      * JD 4.2.2020: Call 'Cluster' filters
      */
      addClusterFromFilter();
      addSeparator($filter);
      addClusterDestFilter();
    } else if (isCDHUpgradePage()) {
      addCMFilter();
      addFilter('Install Method', 'method', '', methodOptions, $filter);
      //addFilter('Operating System', 'os', '', osOptions, $filter, 'cdoc-method-package cdoc-hidden-method');
      addFilter('Operating System', 'os', '', osOptions, $filter);
      addFilter('HDFS High Availability', 'ha', '', haOptions, $filter);
      /**
      * JD 4.2.2020: Call 'Cluster' filters
      */
      addClusterFromFilter();
      addSeparator($filter);
      addClusterDestFilter();
    } else if (isCMDowngradePage()) {
      addOSFilter();
      addDbFilter();
      addSeparator($filter);
      addFilter('Old Cloudera Manager Version', 'cm', 'dest', cmOptions, $filter);
    } else if (isHostUpgradeBeforePage()) {
      addCMFilter();
      addFilter('Host runs Cloudera Manager Server?', 'running_server', '', booleanOptions, $filter);
      addFilter('Host runs Database Server?', 'running_db', '', booleanOptions, $filter);
      addFilter('Database', 'db', '', dbOptions, $filter, 'cdoc-running_db-yes cdoc-hidden-running_db');
      addFilter('Current Operating System', 'os', '', osOptions, $filter);
      addSeparator($filter);
      addFilter('Major Operating System Upgrade?', 'major', '', booleanOptions, $filter);
    } else if (isHostUpgradeAfterPage()) {
      addCMFilter();
      addFilter('Host runs Cloudera Manager Server?', 'running_server', '', booleanOptions, $filter);
      addFilter('Host runs Database Server?', 'running_db', '', booleanOptions, $filter);
      addFilter('Database', 'db', '', dbOptions, $filter, 'cdoc-running_db-yes cdoc-hidden-running_db');
      addSeparator($filter);
      addFilter('Major Operating System Upgrade?', 'major', '', booleanOptions, $filter);
      addFilter('New Operating System', 'os', '', osOptions, $filter);
    } else if (isJDKUpgradePage()) {
      addFilter('Current Operating System', 'os', '', osOptions, $filter);
    }

    var $pushRight = $('<p>').css('text-align', 'right');
    var $refreshContent = $('<span>').addClass('cdoc-upgrade-refresh-content').html('<span class="fa fa-refresh fa-spin"></span> Refreshing Content').hide();
    var $emptyInstruction = $('<span>').addClass('cdoc-upgrade-empty-instruction').text('Fill out the form above before you proceed.');
    var $contentUpdated = $('<span>').addClass('cdoc-upgrade-content-updated').html('<span class="fa fa-check"></span> Content Updated').hide();
    $pushRight.append($refreshContent);
    $pushRight.append($emptyInstruction);
    $pushRight.append($contentUpdated);
    $filter.append($pushRight);
    var $instruction2 = $('<p>').html('To share this environment with others, click the <i class="fa fa-link fa-rotate-90"></i> icon next to My Environment to copy a link specific for this environment to the clipboard.');
    $filter.append($instruction2);

    var hasChoiceToFill = false;
    $filter.find('select').each(function(i, select) {
      if ($(select).val() === '') {
        hasChoiceToFill = true;
      }
    });
    if (!hasChoiceToFill) {
      $emptyInstruction.hide();
    }
  }

}(window.$));
