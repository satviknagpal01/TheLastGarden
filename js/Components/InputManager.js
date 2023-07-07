export default class InputManager {
    constructor(key) {
        this.key = key;
        this.init();
    }

    init() {
        window.addEventListener('keydown', this.onkeydown.bind(this));
        window.addEventListener('keyup', this.onkeyup.bind(this));
    }

    onkeydown(event) {
        this.key.onkeydown(event);
    }

    onkeyup(event) {
        this.key.onkeyup(event);
    }

    update() {
        if (this.key.isDown(this.key.W)) {
            console.log('W');
        }
        if (this.key.isDown(this.key.A)) {
            console.log('A');
        }
        if (this.key.isDown(this.key.S)) {
            console.log('S');
        }
        if (this.key.isDown(this.key.D)) {
            console.log('D');
        }

        if (this.key.isDown(this.key.UP)) {
            console.log('UP');
        }
        if (this.key.isDown(this.key.LEFT)) {
            console.log('LEFT');
        }
        if (this.key.isDown(this.key.DOWN)) {
            console.log('DOWN');
        }
        if (this.key.isDown(this.key.RIGHT)) {
            console.log('RIGHT');
        }

        if (this.key.isDown(this.key.SPACE)) {
            console.log('SPACE');
        }
        if (this.key.isDown(this.key.SHIFT)) {
            console.log('SHIFT');
        }
        if (this.key.isDown(this.key.CTRL)) {
            console.log('CTRL');
        }
        if (this.key.isDown(this.key.ALT)) {
            console.log('ALT');
        }
        if (this.key.isDown(this.key.TAB)) {
            console.log('TAB');
        }
        if (this.key.isDown(this.key.ESC)) {
            console.log('ESC');
        }
        if (this.key.isDown(this.key.ENTER)) {
            console.log('ENTER');
        }

        if (this.key.isDown(this.key.Q)) {
            console.log('Q');
        }
        if (this.key.isDown(this.key.E)) {
            console.log('E');
        }
    }
}
