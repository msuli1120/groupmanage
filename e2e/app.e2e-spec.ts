import { ClubmanagerPage } from './app.po';

describe('clubmanager App', () => {
  let page: ClubmanagerPage;

  beforeEach(() => {
    page = new ClubmanagerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
