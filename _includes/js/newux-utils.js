// These are currently only used for eslint formatting and checking.
// E.g., uncomment them before running eslint and recomment them after.
// import {$, jQuery} from 'jquery-3.4.1.min.js';

/**
 * Various static utility functions.
 *
 * @author James Dilworth <james@jamesdilworth.com>
 */
class Utils {
  static stripAndCollapse(value) {
    // Strip and collapse whitespace according to HTML spec
    // https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
    const tokens = value.match(/[^\x20\t\r\n\f]+/g) || [];
    return tokens.join(' ');
  }

  static store(namespace, data) {
    if (arguments.length > 1) {
      return localStorage.setItem(namespace, JSON.stringify(data));
    } else {
      const store = localStorage.getItem(namespace);
      return (store && JSON.parse(store)) || [];
    }
  }

  static slugify(str) {
    str = str.replace(/^\s+|\s+$/g, ''); // trim
    str = str.toLowerCase();

    // remove accents, swap ñ for n, etc
    const from = 'àáäâèéëêìíïîòóöôùúüûñç·/_,:;';
    const to = 'aaaaeeeeiiiioooouuuunc------';
    for (let i = 0, l = from.length; i < l; i++) {
      str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
        .replace(/\s+/g, '-') // collapse whitespace and replace by -
        .replace(/-+/g, '-'); // collapse dashes

    return str;
  }

  static flatten(arr, subkey) {
    // TODO! Flatten a nested array with subs, into a consecutive array....
    // we'll use this to make it easier to jump forwards and backwards.
    return arr;
  }

  static makeIdFromHref(href) {
    // Clever way to parse incomplete URLs - https://makandracards.com/makandra/29377-the-easiest-way-to-parse-urls-with-javascript
    const parser = document.createElement('a');
    parser.href = href; // set the URL you want to parse (resolving relative paths in the context of the current URL)
    const chunks = parser.pathname.split('/');

    let id = chunks[chunks.length - 1];
    id = id.substring(0, id.indexOf('.')); // dump anything after a period... .html / .php etc.

    if (chunks.length > 5) {
      id = `${chunks[chunks.length - 3]}-${id}`;
    }
    if (parser.hash) {
      id = `${id}-${parser.hash.substring(1)}`;
    }
    return id;
  }

  static isEmpty(obj) {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        return false;
      }
    }
    return true;
  }

  static formatCopyright(content) {
    /**
     * Formats a copyright string.
     * Assumes digit groups are 4-digit years.
     * Sorts years, removes duplicates, then formats for Cloudera, Inc.
     * @param {String} content - Copyright statement, possibly broken
     * @returns {String} Copyright string for Cloudera, Inc.
     */
    let out = '';
    if (!content || !content.match(/20\d\d/)) {
      content = `${new Date().getFullYear()}`;
    }
    content.split(/\D+/)
        .filter(v => {
          return v.length > 1;
        })
        .filter((v, i, s) => {
          return s.indexOf(v) === i;
        })
        .sort()
        .forEach((v, i, s) => {
          if (i > 0) {
            if (parseInt(v) === parseInt(s[i - 1]) + 1) {
              out = `${out}\u2013${v}`;
            } else {
              out = `${out}, ${v}`;
            }
          } else {
            out = v;
          }
        });
    out = out.replace(/(?:^(\d{4})\u2013(\d{4},))/, '$1, $2');
    out = out.replace(/(?:(\s\d{4})\u2013(\d{4},))/g, '$1, $2');
    out = out.replace(/(?:(\d{4})(?:\u2013\d{4})+(\u2013\d{4}))/g, '$1$2');
    return `© ${out} by Cloudera, Inc. All rights reserved.`;
  }
}
