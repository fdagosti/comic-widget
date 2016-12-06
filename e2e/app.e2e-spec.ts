import { ComicWidgetPage } from './app.po';

describe('comic-widget App', function() {
  let page: ComicWidgetPage;

  beforeEach(() => {
    page = new ComicWidgetPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
