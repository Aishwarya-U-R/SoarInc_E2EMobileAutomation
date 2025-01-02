describe("Launch App and Click OK", () => {
  it("Launch the app and click the OK button", async () => {
    // Locate the OK button
    const okButton = $("id=android:id/button1");

    // Wait for the OK button to be visible
    await okButton.waitForDisplayed({ timeout: 5000 });

    // Click the OK button
    await okButton.click();
    await browser.saveScreenshot("./screenshots/app-launch.png");

    console.log("OK button clicked successfully!");
  });
});
