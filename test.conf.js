'use strict';

exports.config = {
    framework: 'jasmine2',

    seleniumAddress: 'http://hub.browserstack.com/wd/hub',

    capabilities: {
        os: 'OS X',
        os_version: 'El Capitan',
        resolution: '1920x1080',
        browserName: 'chrome',
        'browserstack.user': '',
        'browserstack.key': ''
    },

    specs: ['test.spec.js'],

    onPrepare: function () {
        jasmine.getEnv().topSuite().afterEach({
            fn: function () {
                browser.manage().logs().get('browser').then(function (browserLog) {
                    console.log(JSON.stringify(browserLog));
                });
            }
        });
    }
};