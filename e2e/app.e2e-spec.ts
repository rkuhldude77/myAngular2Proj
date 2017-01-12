import { MyAngular2ProjPage } from './app.po';

describe('my-angular2-proj App', function() {
  let page: MyAngular2ProjPage;

  beforeEach(() => {
    page = new MyAngular2ProjPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
