import * as THREE from 'three';

import Player from "./Components/Player.js";
import InputManager from './Components/InputManager.js';

import playerStats from "./GameData/playerStats.js";
import key from './GameData/key.js';

export default class Game {
    constructor(canvas) {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, canvas.innerWidth / canvas.innerHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer({ canvas });
        this.renderer.setSize(canvas.clientWidth, canvas.clientHeight);
        this.renderer.domElement.setAttribute('id', 'gameCanvas');
        this.renderer.domElement = canvas;
        this.canvas = this.renderer.domElement;

        this.player = new Player(this.scene, this.camera, this.renderer, playerStats);
        this.inputManager = new InputManager(key);

        window.addEventListener('resize', this.onWindowResize.bind(this));
    }

    start() {
        this.gameLoop();
    }

    update() {
        this.player.update();
        this.inputManager.update();
    }

    render() {
        this.renderer.render(this.scene, this.camera);
    }

    gameLoop() {
        requestAnimationFrame(this.gameLoop.bind(this));
        this.update();
        this.render();
    }

    onWindowResize() {
        this.camera.aspect = this.canvas.clientWidth / this.canvas.clientHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
    }
}
