declare var require: any;
import { flashcards } from './flashcards';

const highlightJS = require('highlight.js');
const marked = require('marked');
marked.setOptions({
  langPrefix: 'hljs ',
  highlight: function (code) {
    return highlightJS.highlightAuto(code).value;
  }
});

const context = require.context('raw-loader!../../assets/markdown', true, /\.md$/);
flashcards.forEach(card => {
  card.value = marked(context(card.url));
});

export { flashcards };
