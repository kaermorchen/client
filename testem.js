/* eslint-env node */
var FailureDotReporter = require('testem-failure-dot-reporter');
var reporter = new FailureDotReporter();
module.exports = {
  test_page: 'tests/index.html?hidepassed',
  reporter: reporter,
  disable_watching: true,
  "launchers": {
    "bs_ie": {
      command: "node_modules/.bin/browserstack-launch --os Windows --osv 10 --b ie --bv 11.0 -t 600 -u <url>",
      "protocol": "browser"
    },
    "bs_edge": {
      command: "node_modules/.bin/browserstack-launch --os Windows --osv 10 --b edge --bv 16.0 -t 600 --u <url>",
      "protocol": "browser"
    },
    "bs_chrome": {
      command: 'node_modules/.bin/browserstack-launch --os Windows --osv 10 --b chrome --bv 58.0 -t 600 --u "<url>"', // Always quotes around url
      "protocol": "browser"
    }
  },
  "launch_in_dev": [
    "bs_chrome",
  ],
  "launch_in_ci": [
    "bs_chrome"
  ]
};
