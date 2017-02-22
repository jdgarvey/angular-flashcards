import { Component } from '@angular/core';
import { flashcards } from './shared/flashcard.loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  flashcards: [any];
  ngOnInit() {
    this.flashcards = flashcards.sort((a, b) => {
      if (a.rank < b.rank) return -1;
      if (a.rank > b.rank) return 1;
      return 0;
    });
  }

  goToUrl(url) {
    location.hash = url;
  }
}
