const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: '../tests/ignore_test.js',
  output: '../output',
  helpers: {
    // WebDriver: {
    //   url: 'http://localhost',
    //   // host: 'selenoid',
    //   browser: 'chrome',
    //   // windowSize: '1100x600',
    // },
    Playwright: {
      url: 'http://localhost',
      show: true,
      // chromium/firefox/webkit(for macOS)
      browser: 'chromium',

    },
    ResembleHelper: {
      require: '../index',
      screenshotFolder: '../tests/output/',
      baseFolder: '../tests/screenshots/base/',
      diffFolder: '../tests/screenshots/diff/',
      skipFailure: false,
      /*
      prepareBaseImage = Optional. When true then the system replaces all of the baselines related to the test case(s) you ran.
      This is equivalent of setting the option prepareBaseImage: true in all verifications of the test file.
      */
    },
  },
  include: {
    I: '../steps_file.js',
  },
  bootstrap: null,
  mocha: {},
  name: 'codeceptjs-resemblehelper',
  plugins: {
    // wdio: {
    //   enabled: true,
    //   services: ['selenium-standalone'],
    // },
    pauseOnFail: {},
    tryTo: {
      enabled: true,
    },
    screenshotOnFail: {
      enabled: true,
    },
  },
};
