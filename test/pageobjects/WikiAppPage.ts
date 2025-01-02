export class WikiAppPage {
  // Locators for various elements
  private get okButton() {
    return $("id=android:id/button1");
  }

  get homePageInNews() {
    return $('xpath://android.widget.TextView[@resource-id="org.wikipedia.alpha:id/view_card_header_title" and @text="In the news"]');
  }

  private get certainDate() {
    return $("xpath://android.widget.TextView[@resource-id='org.wikipedia.alpha:id/view_card_header_subtitle' and @text='Dec 29, 2024']");
  }

  get myListsIcon() {
    return driver.$("accessibility id:My lists");
  }

  get historyIcon() {
    return $("xpath://android.widget.FrameLayout[@content-desc='History']");
  }

  get nearByIcon() {
    return $("accessibility id:Nearby");
  }

  get exploreHomeIcon() {
    return $("accessibility id:Explore");
  }

  get searchWiki() {
    return $('xpath://android.widget.TextView[@text="Search Wikipedia"]');
  }

  get feedHeader() {
    return $("id:org.wikipedia.alpha:id/fragment_feed_header");
  }

  get searchTextbox() {
    return $("id:org.wikipedia.alpha:id/search_src_text");
  }

  get searchResults() {
    return $("id:org.wikipedia.alpha:id/fragment_search_results");
  }

  get searchList() {
    return $("id:org.wikipedia.alpha:id/search_results_list");
  }

  get clearSearchBtn() {
    return $("accessibility id:Clear query");
  }

  get overflowBtn() {
    return $("id:org.wikipedia.alpha:id/menu_overflow_button");
  }

  get settingMenu() {
    return $("id:org.wikipedia.alpha:id/explore_overflow_settings");
  }

  get backToHomeFromSettings() {
    return $("accessibility id:Navigate up");
  }

  clickAppOlderVersionAlertOk = async () => {
    await this.okButton.waitForDisplayed({ timeout: 5000 });
    await this.okButton.click();
  };

  // Method for scrolling down until the certain date is displayed
  async scrollUntilCertainDateDisplayed() {
    await driver.pause(2000); // Wait for 2 seconds after page loaded
    let iscertainDateDisplayed = await this.certainDate.isDisplayed();
    while (!iscertainDateDisplayed) {
      // Scrolling down until certain element is displayed
      await driver.action("pointer").move({ duration: 0, x: 586, y: 2150 }).down({ button: 0 }).move({ duration: 500, x: 565, y: 352 }).up({ button: 0 }).perform();
      await driver.pause(500);
      iscertainDateDisplayed = await this.certainDate.isDisplayed();
    }
  }

  async scrollHomePageToTop() {
    let iscertainDateDisplayed = await this.homePageInNews.isDisplayed();

    while (!iscertainDateDisplayed) {
      //Scrolling up until top of the page reached
      await driver.action("pointer").move({ duration: 0, x: 647, y: 311 }).down({ button: 0 }).move({ duration: 500, x: 647, y: 1741 }).up({ button: 0 }).perform();
      await driver.pause(500);
      iscertainDateDisplayed = await this.homePageInNews.isDisplayed();
    }
  }

  // Method for clicking on the icons
  async clickIcon(icon: ChainablePromiseElement) {
    await icon.click();
    await driver.pause(3000); // Wait for 3 seconds
  }

  // Method to wait for Search Wiki element to be displayed
  async waitForSearchWiki() {
    await this.searchWiki.waitForDisplayed();
    expect(await this.searchWiki.isDisplayed()).toBeTruthy();
  }

  // Method to search for a term in the search bar
  async searchForTerm(term: string) {
    await this.searchTextbox.addValue(term);
    await driver.pause(3000);
  }

  async closeSearch() {
    await this.clearSearchBtn.click();
    await driver.pause(2000);
  }

  // Method to clear the search bar
  async clearSearchFieldAndVerifyNoResults() {
    await this.closeSearch();
    const searchTextValue = await this.searchTextbox.getText();
    expect(searchTextValue).toBe("Search…");
  }

  // Method to click back to home
  async clickBackToHome() {
    await this.backToHomeFromSettings.click();
  }

  // Method for clicking the overflow button and navigating to settings
  async openSettings() {
    await this.overflowBtn.click();
    await this.settingMenu.click();
  }

  // Method to toggle the settings options off
  async toggleOFFSettingsOptions(toggles: string[]) {
    for (let toggle of toggles) {
      const toggleElement = driver.$(`//android.widget.TextView[@text='${toggle}']/../following-sibling::android.widget.LinearLayout/android.widget.Switch[@text='ON']`);
      await toggleElement.click();
      await driver.pause(200);
    }
  }
}
