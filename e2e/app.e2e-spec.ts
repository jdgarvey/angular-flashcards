import { AngularFlashcardsPage } from './app.po';

describe('angular-flashcards App', function() {
  let page: AngularFlashcardsPage;

  beforeEach(() => {
    page = new AngularFlashcardsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
