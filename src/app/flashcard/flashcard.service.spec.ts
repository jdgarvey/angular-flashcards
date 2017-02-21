/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FlashcardService } from './flashcard.service';

describe('FlashcardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlashcardService]
    });
  });

  it('should ...', inject([FlashcardService], (service: FlashcardService) => {
    expect(service).toBeTruthy();
  }));
});
