# 3. SoarInc_E2EMobileAutomation

E2E Mobile Auomation framework used is - **`WebDriverIO with Appium`** and E2E Mobile tests are present inside [tests folder](https://github.com/Aishwarya-U-R/SoarInc_E2EMobileAutomation/tree/main/tests)

**Mobile tests results:**

1. [App Navigation: Scroll, Interact, and Return Home](https://github.com/Aishwarya-U-R/SoarInc_E2EMobileAutomation/releases/download/v1.0/Test1-Scroll.mov)
2. [Verify Search Functionality and Navigate back to Home page](https://github.com/Aishwarya-U-R/SoarInc_E2EMobileAutomation/releases/download/v1.0/Test2-Search.mov)
3. [Disable all options from Settings menu](https://github.com/Aishwarya-U-R/SoarInc_E2EMobileAutomation/releases/download/v1.0/Test3-DisableOptions.mov)

**Other details for Local run:**

Start Appium -> `appium`
http://127.0.0.1:4723/status - {"value":{"ready":true,"message":"The server is ready to accept new connections","build":{"version":"2.13.1"}}}

Find list of devices -> `emulator -list-avds`

Start emulator -> `emulator -avd <your_avd_name>`

Start emulator without UI -> `emulator -avd Pixel_4_API_33 -no-window -gpu off`

Run tests -> `npx wdio run wdio.conf.ts`

Generate allure report -> `allure generate allure-results --clean -o allure-report`

Launch allure broswr -> `allure open allure-report`

Single file report using the -> `allure generate --single-file allure-results --clean`

Android version: adb shell getprop ro.build.version.release
Device name : adb devices
Package: adb shell pm list packages | grep wiki  
Launch app in emulator & run : adb shell dumpsys window | grep -E 'mCurrentFocus'

**Capabilities used in Appium Inspector:**

`{
  "platformName": "android",
  "appium:deviceName": "emulator-5554",
  "appium:platformVersion": "15",
  "appium:appPackage": "org.wikipedia.alpha",
  "appium:appActivity": "org.wikipedia.main.MainActivity",
  "appium:automationName": "UiAutomator2",
  "appium:app": "/xx/xx/SoarInc/WikipediaSample.apk"
}`
