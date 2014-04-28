app.helpers.isTouchDevice = function isTouchDevice() {
  return !!('ontouchstart' in window);
};
