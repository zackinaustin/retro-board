import { RetroBoardFrontEndPage } from './app.po';

describe('retro-board-front-end App', () => {
  let page: RetroBoardFrontEndPage;

  beforeEach(() => {
    page = new RetroBoardFrontEndPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
