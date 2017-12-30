import { SearchPipePage } from './app.po';

describe('search-pipe App', () => {
  let page: SearchPipePage;

  beforeEach(() => {
    page = new SearchPipePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
