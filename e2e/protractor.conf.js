const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './src/**/*.e2e-spec.ts'
  ],
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      prefs: {
        'profile.managed_default_content_settings.notifications': 1
      }
    },
    shardTestFiles: true,
    maxInstances: 4
  },

  directConnect: true,
  baseUrl: 'https://www.freelancer.com',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },

  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.json')
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));

    browser.driver
      .manage()
      .window()
      .maximize();
  }
};
