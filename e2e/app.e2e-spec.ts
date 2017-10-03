import { VecFrontPage } from './app.po';

describe('vec-front App', () => {
  let page: VecFrontPage;

  beforeEach(() => {
    page = new VecFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
