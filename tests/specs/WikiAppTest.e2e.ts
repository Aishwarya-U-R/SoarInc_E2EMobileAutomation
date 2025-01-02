import { WikiAppPage } from "../pageobjects/WikiAppPage";

describe("WikiApp tests", () => {
  let wiki = new WikiAppPage();
  it("1. App Navigation: Scroll, Interact, and Return Home", async () => {
    await wiki.clickAppOlderVersionAlertOk();
    await wiki.homePageInNews.waitForDisplayed();
    // await browser.saveScreenshot("./screenshots/app-launch.png");//trail
    await wiki.scrollUntilCertainDateDisplayed(); //Scroll to end
    await wiki.clickIcon(wiki.myListsIcon);
    await wiki.clickIcon(wiki.historyIcon);
    await wiki.clickIcon(wiki.nearByIcon);
    await wiki.clickIcon(wiki.exploreHomeIcon);
    await wiki.scrollHomePageToTop(); // Scroll back up
    await wiki.waitForSearchWiki();
  });

  it("2. Verify Search Functionality and Navigate back to Home page", async () => {
    await wiki.clickAppOlderVersionAlertOk();
    await wiki.homePageInNews.waitForDisplayed();
    await wiki.feedHeader.waitForDisplayed();
    await wiki.feedHeader.click();
    await wiki.searchForTerm("New York");
    await wiki.searchResults.waitForDisplayed();
    await wiki.searchList.waitForDisplayed();
    await wiki.clearSearchFieldAndVerifyNoResults();
    await wiki.closeSearch();
    await wiki.homePageInNews.waitForDisplayed();
  });

  it("3. Disable all options from Settings menu", async () => {
    await wiki.clickAppOlderVersionAlertOk();
    await wiki.homePageInNews.waitForDisplayed();
    await wiki.openSettings();
    const toggles = ["Show images", "Show link previews", "Send usage reports", "Send crash reports"];
    await wiki.toggleOFFSettingsOptions(toggles);
    await wiki.clickBackToHome();
    await wiki.waitForSearchWiki();
  });
});
