app.directives.example = (function() {
  var directive = {};
  directive.settings = {};
  directive.settings.querySelector = '[directive-my-example]';

  directive.init = function initMyExample(element) {
    console.log('my example directive ran');
  };

  return directive;
}());
