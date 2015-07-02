app.directives.contactUs = (function() {
  var directive = {};
  directive.settings = {};
  directive.settings.querySelectorAll = '[directive-contact-us]';

  directive.init = function(element) {
    element.addEventListener('click', mailTo);
  };

  function mailTo() {
    var prefix = 'band';
    var at = '&#64;';
    var domain = 'undertwotables';
    var dotCom = '.com';

    var emailAddress = (prefix + at + domain + dotCom).replace(/&#64;/g, '@');

    window.location = 'mailto:' + emailAddress;
  }

  return directive;
}());
