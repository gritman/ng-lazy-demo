import { LazyDemoPage } from './app.po';

describe('lazy-demo App', () => {
  let page: LazyDemoPage;

  beforeEach(() => {
    page = new LazyDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
