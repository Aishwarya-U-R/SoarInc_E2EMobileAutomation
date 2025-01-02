# SoarInc_E2EMobileAutomation

Start Appium -> `appium`

Find list of devices -> `emulator -list-avds`

Start emulator -> `emulator -avd <your_avd_name>`

Start emulator without UI -> `emulator -avd Pixel_4_API_33 -no-window -gpu off`

Run tests -> `npx wdio run wdio.conf.ts`

Generate allure report -> `allure generate allure-results --clean -o allure-report`

Launch allure broswr -> `allure open allure-report`

Single file report using the -> `allure generate --single-file allure-results --clean`

Mobile tests results:
1. [App Navigation: Scroll, Interact, and Return Home](https://github.com/Aishwarya-U-R/SoarInc_E2EMobileAutomation/releases/download/v1.0/Test1-Scroll.mov)
2. [Verify Search Functionality and Navigate back to Home page](https://github.com/Aishwarya-U-R/SoarInc_E2EMobileAutomation/releases/download/v1.0/Test2-Search.mov)
3. [Disable all options from Settings menu](https://github.com/Aishwarya-U-R/SoarInc_E2EMobileAutomation/releases/download/v1.0/Test3-DisableOptions.mov)
