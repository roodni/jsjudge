const Mode = require('frontmatter-markdown-loader/mode');
const hljs = require('highlight.js/lib/core');
const hljs_javascript = require('highlight.js/lib/languages/javascript');
hljs.registerLanguage('javascript', hljs_javascript);

const md_utils = require('markdown-it/lib/common/utils');

module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.md$/,
          loader: 'frontmatter-markdown-loader',
          options: {
            mode: [Mode.VUE_COMPONENT],
            markdownIt: {
              html: true,
              langPrefix: 'language-',
              highlight: function (str, lang) {
                if (lang && hljs.getLanguage(lang)) {
                  try {
                    return '<pre class="hljs"><code>' +
                           hljs.highlight(lang, str, true).value +
                           '</code></pre>';
                  } catch (__) {
                    // do nothing
                  }
                }
                return '<pre class="hljs"><code>' + md_utils.escapeHtml(str) + '</code></pre>';
              }
            }
          }
        }
      ]
    }
  }
};