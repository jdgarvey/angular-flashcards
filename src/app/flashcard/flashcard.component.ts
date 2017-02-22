import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, NavigationEnd } from "@angular/router";

@Component({
  selector: 'app-flashcard',
  templateUrl: './flashcard.component.html',
  styleUrls: ['./flashcard.component.css']
})
export class FlashcardComponent implements OnInit {
  @Input() flashcards: [any];
  @Output() sidenavToggle: EventEmitter<any> = new EventEmitter();
  currentFlashcardIndex: number = 0;
  shouldShowAnswer: boolean = false;
  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe(event => {
        const currentFlashCard = this.flashcards.find(card => {
          return event.url.includes(card.url);
        });
        this.currentFlashcardIndex = currentFlashCard ? this.flashcards.indexOf(currentFlashCard) : 0;
      })

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

  toggleAnswer() {
    this.shouldShowAnswer = !this.shouldShowAnswer;
  }

  toggleSideNav() {
    this.sidenavToggle.emit();
  }
}
