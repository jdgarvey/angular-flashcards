import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MaterialModule } from "@angular/material";

import { FlashcardComponent } from './flashcard/flashcard.component';
import { FlashcardService } from './flashcard/flashcard.service';

@NgModule({
  declarations: [
    AppComponent,
    FlashcardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule
  ],
  providers: [ FlashcardService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
