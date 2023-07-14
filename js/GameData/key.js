const key = {
    A: 65,
    D: 68,
    E: 69,
    Q: 81,
    S: 83,
    W: 87,
    SPACE: 32,
    SHIFT: 16,
    CTRL: 17,
    ALT: 18,
    TAB: 9,
    ESC: 27,
    ENTER: 13,
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39,
  
    // Key States
    _pressed: {},
  
    // Key Actions
    isDown: function (keyCode) {
      return this._pressed[keyCode];
    },
  
    // Key Events
    onKeyDown: function (event) {
      this._pressed[event.keyCode] = true;
    },
  
    onKeyUp: function (event) {
      delete this._pressed[event.keyCode];
    },
  
    init: function () {
      document.addEventListener('keydown', this.onKeyDown.bind(this));
      document.addEventListener('keyup', this.onKeyUp.bind(this));
    },
  };
  
  key.init();
  
  export default key;
  