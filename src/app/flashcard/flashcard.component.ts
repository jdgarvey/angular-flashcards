import { Component, OnInit } from '@angular/core';
import { FlashcardService } from "./flashcard.service";

@Component({
  selector: 'app-flashcard',
  templateUrl: './flashcard.component.html',
  styleUrls: ['./flashcard.component.css']
})
export class FlashcardComponent implements OnInit {
  flashcards: [any];
  currentFlashcard: any;
  constructor(private flashcardService: FlashcardService) { }

  ngOnInit() {
    this.flashcards = this.flashcardService.getFlashcards();
    this.currentFlashcard = this.flashcards[0];
  }
}
