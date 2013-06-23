# Front End Shop – Example Site

This is an example website for my [jQuery Jumble](http://speakerdeck.com/dougneiner/jquery-jumble) presentation at the [Front End Design Conference](http://frontenddesignconference.com).

## Running this repo

To make the demo easy, I used PHP for this example. However, if you aren't used to running PHP sites, it might take you a bit to set up. The "root" of the site is the `www` folder.

## Task

In our hypothetical website, our task was simple. There were existing product listings, with links to a product detail page. We were to enhance these links to show a popover with item details without taking them to that page. The links should continue to work if the user were to right click and choose "Open in new tab", etc.

Instead of just keeping the template and JavaScript code as part of the site that loads immediately, we lazy load in the code and template when needed. 

## Techiniques Covered

The primary purpose of this repository was to show a few techniques:

**1. Using stragic CSS classes, applied with jQuery, to control visual state. The jQuery says what (applies/removes the class) and the CSS controls how elements are actually affected (The how).**

This shows up in the code in both `www/js/site.js` and `www/js/quick-view.js` with the addition and removal of `show-quick-view` and `quick-view-loading` classes applied to the body.

**2. Use event delegation instead of traditional event binding.**

All the events bound in this project use event delegation.

**3. Use Deferreds – Both the new AJAX syntax as well as creating custom Deferreds**

All the AJAX calls leverage deferreds, and both `www/js/site.js` and `www/js/quick-view.js` use custom deferreds.

**4. Learn a pattern of caching a deferred so you don't make the same request twice.**

`www/js/site.js` and `www/js/quick-view.js` use two slightly different methods of caching the deferred in a variable.

**5. See how to detect an AJAX event on the server by checking for the `X-Requested-With` header on the request. You can read more [in this article](http://www.learningjquery.com/2010/03/detecting-ajax-events-on-the-server).**

**6. Use the returned JSON and an Underscore template to render the content**

This code is in `www/js/quick-view.js`

## iOS Joke

Part of my presentation included a joke where I convert the layout from something that matches my presentation, to parody on the iOS 7 Home Screen. Feel free to change the `$ios` setting in `app.php` to see the alternate layout. The popover screen will only render in the iOS setting.

## Links

* [Contextual jQuery Video (jQuery UK)](http://vimeo.com/40873228)
* [Machina.js Video](http://vimeo.com/67473899)
* [jQuery Build Tool](http://projects.jga.me/jquery-builder)
* [Postman for Chrome](http://www.getpostman.com/)
* [Detecting AJAX Events on the server](http://www.learningjquery.com/2010/03/detecting-ajax-events-on-the-server)

## License

All contents of this repo, with the exception of the shirt graphics, are released under an MIT license. See LICENSE.md.