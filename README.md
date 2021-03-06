# Passport-OpenID Connect

Forked from: [Passport](https://github.com/jaredhanson/passport) strategy for authenticating
with [OpenID Connect](http://openid.net/connect/). For purposes of adding and removing necessary pieces of logic pertaining to Accolade's use of this software.

Accolade OIC implementation will redirect to another url for user info. This version will redirect there.

After verifying changes/fixes, this package must be manully uploaded to Artifactory
* Bump Version in `package.json`
* Ensure Artifactory is locally configured
* `npm publish`

This module lets you authenticate using OpenID Connect in your Node.js
applications.  By plugging into Passport, OpenID Connect authentication can be
easily and unobtrusively integrated into any application or framework that
supports [Connect](http://www.senchalabs.org/connect/)-style middleware,
including [Express](http://expressjs.com/).

## Credits

  - [Jared Hanson](http://github.com/jaredhanson)

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2011-2013 Jared Hanson <[http://jaredhanson.net/](http://jaredhanson.net/)>
