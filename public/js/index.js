(function(document, app, FastClick) {
  
  // Detect if this device has touch capabilites
  if (app.helpers.isTouchDevice()) {
    document.body.classList.add('has-touch');
  }
  else {
    document.body.classList.add('has-no-touch');
  }

  // Remove 300ms click delay on all touch devices
  FastClick.attach(document.body);

  // Instantiate all directives
  app.helpers.initDirectives();

})(document, app, FastClick);
