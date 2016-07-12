import BasePage from './BasePage';
export default class ListingPage extends BasePage {

  constructor(browser) {

    let selectors = {
      LANDING_TEXT: 'h4.title',
      NEXT: 'a[data-direction="next"]',
      PREVIOUS: 'a[data-direction="previous"]',
      SURAH_LIST: '.row .col-md-4 li'
    }

    super(browser, selectors)
    this.browser = browser;
    this.selectors = selectors
  }



  async getLandingText() {
    var landingText = await browser.getText(this.selectors.LANDING_TEXT);
    return landingText;
  }

  async getNumberOfSurahs() {

    var surahs = await browser.elements(this.selectors.SURAH_LIST);
    return surahs.value.length;

  }

}
