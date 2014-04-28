app.helpers.fetchPartial = function fetchPartial(partial, callback) {
  var ajax = new XMLHttpRequest();

  ajax.onload = function() {
    var html = this.response;

    var node = document.createElement('div');
    node.innerHTML = html;

    var partial = node.firstChild;

    callback(partial);
  };
  
  ajax.open('get', '/partials/' + partial);
  ajax.send();
};
