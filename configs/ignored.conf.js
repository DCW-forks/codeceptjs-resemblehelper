const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: '../tests/ignore_test.js',
  output: '../output',
  helpers: {
    WebDriver: {
      url: 'http://localhost',
      browser: 'chrome',
      // windowSize: '1100x600',
      windowSize: '1100x800',
    },
    ResembleHelper: {
      require: '../index',
      screenshotFolder: '../tests/output/',
      baseFolder: '../tests/screenshots/base/',
      diffFolder: '../tests/screenshots/diff/',
      skipFailure: true,
      alwaysSaveDiff: true,

      /*
      prepareBaseImage = Optional. When true then the system replaces all of the baselines related to the test case(s) you ran.
      This is equivalent of setting the option prepareBaseImage: true in all verifications of the test file.
      */
    },
    AssertWrapper: {
      require: 'codeceptjs-assert',
    },
  },
  include: {
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
