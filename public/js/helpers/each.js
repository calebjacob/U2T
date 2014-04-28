app.helpers.each = function each(array, callback) {
  var itemCount = array.length;

  for (var i = 0; i < itemCount; i++) {
    var item = array[i];
    callback(item, i);
  }
};
