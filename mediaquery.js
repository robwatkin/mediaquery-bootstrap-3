if (Meteor.isClient) {
  Meteor.startup(function() {
    var retina;
    if (window.matchMedia("only screen and (min-width: 1px) and (max-width: 767px)").matches) {
      Session.set("device-screensize", "xs");
    }
    window.matchMedia("only screen and (min-width: 1px) and (max-width: 767px)").addListener(function(screensize) {
      if (screensize.matches) {
        Session.set("device-screensize", "xs");
      }
    });
    if (window.matchMedia("only screen and (min-width: 768px) and (max-width: 991)").matches) {
      Session.set("device-screensize", "sm");
    }
    window.matchMedia("only screen and (min-width: 768px) and (max-width: 991px)").addListener(function(screensize) {
      if (screensize.matches) {
        Session.set("device-screensize", "sm");
      }
    });
    if (window.matchMedia("only screen and (min-width: 992px) and (max-width: 1199px)").matches) {
      Session.set("device-screensize", "md");
    }
    window.matchMedia("only screen and (min-width: 992px) and (max-width: 1199px)").addListener(function(screensize) {
      if (screensize.matches) {
        Session.set("device-screensize", "md");
      }
    });
    if (window.matchMedia("only screen and (min-width: 1200px)").matches) {
      Session.set("device-screensize", "lg");
    }
    window.matchMedia("only screen and (min-width: 1200px)").addListener(function(screensize) {
      if (screensize.matches) {
        Session.set("device-screensize", "lg");
      }
    });
    if (window.matchMedia("only screen and (orientation: portrait)").matches) {
      Session.set("device-orientation", "portrait");
    } else {
      Session.set("device-orientation", "landscape");
    }
    window.matchMedia("only screen and (orientation: portrait)").addListener(function(orientation) {
      if (orientation.matches) {
        Session.set("device-orientation", "portrait");
      } else {
        Session.set("device-orientation", "landscape");
      }
    });
    retina = "only screen and (-webkit-min-device-pixel-ratio: 2)," + "only screen and (min--moz-device-pixel-ratio: 2)," + "only screen and (-o-min-device-pixel-ratio: 2/1)," + "only screen and (min-device-pixel-ratio: 2)," + "only screen and (min-resolution: 192dpi)," + "only screen and (min-resolution: 2dppx)";
    if (window.matchMedia(retina).matches) {
      Session.set("device-retina", true);
    } else {
      Session.set("device-retina", false);
    }
    Template.registerHelper("screensize", function() {
      return Session.get("device-screensize");
    });
    Template.registerHelper("screensize_xs", function() {
      return (Session.get("device-screensize")) === "xs";
    });
    Template.registerHelper("screensize_sm", function() {
      return (Session.get("device-screensize")) === "sm";
    });
    Template.registerHelper("screensize_md", function() {
      return (Session.get("device-screensize")) === "md";
    });
    Template.registerHelper("screensize_lg", function() {
      return (Session.get("device-screensize")) === "lg";
    });
    Template.registerHelper("orientation", function() {
      return Session.get("device-orientation");
    });
    Template.registerHelper("portrait", function() {
      return (Session.get("device-orientation")) === "portrait";
    });
    return Template.registerHelper("landscape", function() {
      return (Session.get("device-orientation")) === "landscape";
    });
    Template.registerHelper("retina", function() {
      return Session.get("device-retina");
    });
  });
  return;
}