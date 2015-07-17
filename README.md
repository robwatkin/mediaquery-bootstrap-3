### Media Queries for Meteor

Media query template helpers and session variables with bootstrap 3 brakepoints.

# Use

    meteor add robsw:mediaquery-bootstrap-3

This package sets some Meteor Session variables to reflect the current screen size according to bootstrap 3 breakpoints as follows.

| extra small | small    | medium     | large   |
|-----------|--------|----------|-------|
|  xs  |  sm  |  md  | lg |
| <= 767 | 768 =< 991 | 992 =< 1199 | 1200 < |

  
The following global template helper functions are registered

| Helper | returns |
|--------|---------|
| screensize | 'xs', 'sm', 'md' or 'lg' |
| screensize_xs | true or false |
| screensize_sm | true or false |
| screensize_md | true or false |
| screensize_lg | true or false |
| orientation   | portrait or landscape |
| portrait      | true or false |
| landscape     | true or false |
| retina        | true or false |

These helpers may be used amongst other things to reactively load meteor templates like this

    <!-- layout.html -->

    {{#if portrait}}
      {{> wideMenuTemplate}}
    {{#else}}
      {{> narrowMenuTemplate}}
    {{/if}}

    <!-- or -->

    {{#if screensize_lg}}
      {{> extraRightColumnTemplate}}
    {{/if}}

or in template code like this

    // layout.js

    var screensize = Session.get('device-screensize');

    // or

    if(Session.get('device-screensize') === 'lg') {
      // do this only on large screens...
    }

    if(Session.get('device-retina')) {
      // do this on super high definition screens
    }

Possible values for **device-screensize** are:

  * xs
  * sm
  * md
  * lg

Possible values for **device-orientation** are:

  * portrait
  * landscape
  
Possible values for **device-retina** are:

  * true 
  * false

  
This package was based on the excellent [meteor-media-query package](https://github.com/funkyeah/bootstrap3-media-query) except that there is no coffeescript dependency.
