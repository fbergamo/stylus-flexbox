import { StylusFlexboxPage } from './app.po';

describe('stylus-flexbox App', function() {
  let page: StylusFlexboxPage;

  beforeEach(() => {
    page = new StylusFlexboxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
