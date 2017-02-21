declare var require: any;
import { Injectable } from '@angular/core';
const marked = require('marked');
const highlightjs = require('highlight.js');
marked.setOptions({
  langPrefix: 'hljs ',
  highlight: function (code) {
    return highlightjs.highlightAuto(code).value;
  }
});

@Injectable()
export class FlashcardService {
  getFlashcards() {
    return flashcards;
  }
}

const flashcards: any = [
  { index: 0, name: 'what-is-angular-js', url: './what-is-angular-js.md' }
];

const context = require.context('raw-loader!../../assets/markdown', true, /\.md$/);
flashcards.forEach(card => {
  card.value = marked(context(card.url));
});
