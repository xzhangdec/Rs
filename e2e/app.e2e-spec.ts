import { AppPage } from './app.po';
import { browser, element, by } from 'protractor';


describe('rs2 App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should 10 users shown when we load page', () => {
    let users = element.all(by.css('div .card'));
    expect(users.count()).toEqual(10);
  });

  it("Leanne graham should be the first user", () => {
    expect(page.getFirstUserName().getText()).toBe("Leanne Graham");
  });

  it("should go to 'choseUser(user detail page)' when clicked", () => {
    let range = element.all(by.css('.card')).first();
    range.click();

    let user = element.all(by.css('.user-detail'));
    let userName = element.all(by.css('.name')).first();
    expect(user.count()).toEqual(1);
    expect(userName.getText()).toBe('Leanne Graham');
  });

  it("(user detail) 'choseUser' page should back to userList page after click icon'<='", () => {
    let range = element.all(by.css('.card')).first();
    range.click();
    let backIcon = element.all(by.css('.arrow')).first();
    backIcon.click();
    let users = element.all(by.css('div .card'));
    expect(users.count()).toEqual(10);
  })


});
