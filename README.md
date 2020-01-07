# Test Automation
T
- Test Framework: Mocha
- Expectations Language: Chai
- Selenium Framework: Webdriver.io

The purpose of this project is to create a tool that will run automatic smoke tests against Chrome for all Menuboardmanager servers.
 
This tool is going to be useful to test the integrity of the servers after any code update or disruption event.

# Webdriver IO configuration tool
`./node_modules/.bin/wdio config`

Selected default options except for: 
- Framework: Mocha 
- WebdriverIO in synchronous mode
- Reporter: spec
- Service: chromedriver

# Configuration file
The configuration tool created the following configuration file:
`wdio.conf.js`

- lines 165 to 169 set the Should Expectation from Chai

    `before: function (capabilities, specs) {
        var chai = require('chai');
        global.expect = chai.expect;
        chai.Should();
    },`

# How to run the tests
To run tests:
$`./node_modules/.bin/wdio`