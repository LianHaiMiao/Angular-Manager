import { FormAngularPage } from './app.po';

describe('form-angular App', () => {
  let page: FormAngularPage;

  beforeEach(() => {
    page = new FormAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
