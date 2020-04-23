function sendAnalytics(category, action, label, value) {
  try {
    if (window.ga) {
      window.ga('send', 'event', category, action, label, value);
    }
  }
  catch (ex) {}
}

function addExpandCollapse(cssClass, text) {
  var linkClass = cssClass + '-link';
  $('.' + cssClass).each(function(i, content) {
    var $content = $(content);
    var $span, $icon, $link;
    if ($content.hasClass('cdoc-visible')) {
      $span = $('<span>').text('Hide');
      $icon = $('<i>').addClass('fa fa-search-minus');
    } else {
      $span = $('<span>').text(text);
      $icon = $('<i>').addClass('fa fa-search-plus');
      $content.addClass('cdoc-hidden');
    }
    $link = $('<a>').attr('href', '#').addClass(linkClass);
    $link.append($icon).append(' ').append($span);
    var $space = $('<span>').text(' ');
    $content.before($link);
    $content.before($space);
  });

  $('body').on('click', '[class~="' + linkClass + '"]', function (e) {
    var $link = $(e.target).closest('a');
    var $content = $link.next().next();
    if ($content.hasClass('cdoc-hidden')) {
      $content.removeClass('cdoc-hidden');
    } else {
      $content.addClass('cdoc-hidden');
    }
    if ($link.text().indexOf(text) !== -1) {
      $link.find('span').text('Hide');
      $link.find('i').removeClass('fa-search-plus').addClass('fa-search-minus');
      sendAnalytics('expand-collapse', 'collapse');
    } else {
      $link.find('span').text(text);
      $link.find('i').removeClass('fa-search-minus').addClass('fa-search-plus');
      sendAnalytics('expand-collapse', 'expand');
    }

    return false;
  });
}

function showFeedback(text) {
  var $feedback = $('.cdoc-feedback');
  var $i = $('<i>').addClass('fa fa-check');
  var $span = $('<span>').text(text);
  $feedback.empty().append($i).append($span);
  $feedback.removeClass('cdoc-hidden');
  window.setTimeout(function() {
    $feedback.addClass('cdoc-hidden');
    $feedback.text('');
  }, 4000);
}

var firstTimeCopy = true;

function copyToClipboard(elem) {
  var scrollTop = $(document).scrollTop();

  // create hidden text element, if it doesn't already exist
  var target, targetId = '_hiddenCopyText_';
  var isInput = elem.tagName === 'INPUT' || elem.tagName === 'TEXTAREA';
  var origSelectionStart, origSelectionEnd;
  if (isInput) {
    // can just use the original source element for the selection and copy
    target = elem;
    origSelectionStart = elem.selectionStart;
    origSelectionEnd = elem.selectionEnd;
  } else {
    // must use a temporary form element for the selection and copy
    target = document.getElementById(targetId);
    if (!target) {
      target = document.createElement('textarea');
      target.style.position = 'absolute';
      target.style.left = '-9999px';
      target.style.top = '0';
      target.id = targetId;
      document.body.appendChild(target);
    }
    var $copy = $(elem).clone();
    $copy.find('[class*="cdoc-hidden"]').empty();
    target.textContent = $copy.text();
  }

  target.focus();
  target.setSelectionRange(0, target.value.length);

  // copy the selection
  var succeed;
  try {
    succeed = document.execCommand('copy');
  } catch(e) {
    succeed = false;
  }
  if (isInput) {
    // restore prior selection
    elem.setSelectionRange(origSelectionStart, origSelectionEnd);
  } else {
    // clear temporary content
    target.textContent = '';
  }

  // restore original focus

  if (navigator.userAgent.indexOf('Firefox') !== -1 && firstTimeCopy) {
    firstTimeCopy = false;
    window.setTimeout(function() {
      $(document).scrollTop(scrollTop);
    }, 0);
  } else {
    $(document).scrollTop(scrollTop);
  }
  showFeedback('Copied to the clipboard.');
  sendAnalytics('clipboard', 'copy', $copy.text());
  return succeed;
}

function addCopyListener(cssClass) {
  $('body').on('click', '[class~="' + cssClass + '"]', function (e) {
    var $btn = $(e.target);
    var $line = $btn.parent();
    if ($line && $line.length > 0) {
      copyToClipboard($line[0]);
    }
  });
}

function allowCopyClipboard() {
  try {
    document.execCommand('copy');
  } catch(e) {
    return false;
  }
  return true;
}

function createCopyButton() {
  return $('<button>').addClass('btn btn-default cdoc-copy-btn fa fa-clipboard').attr('title', 'Copy to clipboard');
}

function splitCdocLines(j, elem) {
  var i, $elem = $(elem);
  var lines = $elem.html().split('\n');
  var spans = [];
  for(i = 0; i < lines.length; i++) {
    spans.push('<span class="cdoc-line">' + $.trim(lines[i]) + '</span>');
  }
  $elem.empty();
  if (allowCopyClipboard()) {
    $elem.append(createCopyButton());
  }
  $elem.append(spans.join("\n"));
}

function cdocUtils($) {
  var blockTypes = [
    'mysql', 'mariadb', 'postgres', 'oracle', 'impala', 'beeline',
    'hbase', 'zk', 'kadmin', 'kadminlocal', 'bash', 'python', 'scala'
  ];
  var k, classes = [];
  for (k = 0; k < blockTypes.length; k++) {
    classes[k] = 'pre.codeblock.cdoc-input' + '-' + blockTypes[k];
  }
  classes.unshift('pre.codeblock.cdoc-input');

  for (k = 0; k < classes.length; k++) {
    $(classes[k]).each(splitCdocLines);
  }

  $('pre.codeblock.cdoc-input-file').each(function(j, elem) {
    var $elem = $(elem);
    var $content = $('<span>').html($elem.html());
    $elem.empty();
    if (allowCopyClipboard()) {
      $elem.append(createCopyButton());
    }
    $elem.append($content);
  });

  addExpandCollapse('cdoc-show-me-how', 'Show Me How');
  addExpandCollapse('cdoc-show-me-why', 'Show Me Why');
  addExpandCollapse('cdoc-show-me-it', 'Show');
  addCopyListener('cdoc-copy-btn');

  $('<div>').addClass('cdoc-feedback cdoc-hidden').appendTo('body');
}
