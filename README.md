### Set up
1. Make sure you run `node >= 4.3.0` and have ran `npm install`
2. Fill in browserstack credentials in `test.conf.js`
3. Run `npm test`.


### Error
Will happen ~50% of times.

```
UnknownError: Session ID is null. Using WebDriver after calling quit()?

Build info: version: '2.45.0', revision: '5017cb8', time: '2015-02-26 23:59:50'
System info: host: 'mac-5-255-93-94.browserstack.com', ip: '5.255.93.94', os.name: 'Mac OS X', os.arch: 'x86_64', os.version: '10.11', java.version: '1.8.0_65'
Driver info: driver.version: RemoteWebDriver
```