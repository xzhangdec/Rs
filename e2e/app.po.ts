import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/user');
  }

  getFirstUserName() {
    return element.all(by.css('div .header')).first();
  }

}
