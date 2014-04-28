app.helpers.onTransitionEnd = function onTransitionEnd(node, callback) {
  var end = function() {
    callback();
    node.removeEventListener('transitionend', end);
  };

  node.addEventListener('transitionend', end);
};
