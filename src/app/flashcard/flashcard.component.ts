import { Component, OnInit } from '@angular/core';
import { flashcards } from "./flashcard.loader";

@Component({
  selector: 'app-flashcard',
  templateUrl: './flashcard.component.html',
  styleUrls: ['./flashcard.component.css']
})
export class FlashcardComponent implements OnInit {
  flashcards: [any];
  currentFlashcardIndex: number = 0;
  shouldShowAnswer: boolean = false;
  constructor() { }

  ngOnInit() {
    this.flashcards = flashcards.sort((a, b) => {
      if (a.rank < b.rank) return -1;
      if (a.rank > b.rank) return 1;
      return 0;
    });
  }

  disablePreviousButton() {
    return this.currentFlashcardIndex <= 0;
  }

  disableNextButton() {
    return this.currentFlashcardIndex >= this.flashcards.length - 1;
  }

  navigate(incrementor) {
    this.currentFlashcardIndex = this.currentFlashcardIndex + incrementor;
    this.shouldShowAnswer = false;
  }

  showAnswer() {
    this.shouldShowAnswer = true;
  }
}
