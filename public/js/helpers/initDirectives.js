app.helpers.initDirectives = function initDirectives() {
  for (var directiveName in app.directives) {
    if (app.directives.hasOwnProperty(directiveName) && app.directives[directiveName].init) {
      var directive = app.directives[directiveName];
      var elements = [];

      if (directive.settings.querySelector) {
        var singleElement = document.querySelector(directive.settings.querySelector);

        if (singleElement) {
          elements.push(singleElement);
        }
      }

      else if (directive.settings.querySelectorAll) {
        elements = document.querySelectorAll(directive.settings.querySelectorAll);
      }

      app.helpers.each(elements, function(element) {
        if (!element[directiveName + 'Initialized']) {
          directive.init(element);
          element[directiveName + 'Initialized'] = true;
          console.log('directive "' + directiveName + '" initializing for an element:', element);
        }
      });
    }
  }
};
