/*
    Herramienta
    https://ttf2png.ga/
*/
import Bootloader from './Bootloader.js';

const config = {
    title: "retro",
    width: 500,
    height: 300,
    type: Phaser.AUTO,
    parent: "container",
    backgroundColor: "#22a6b3",
    pixelArt: true,
    scene: [
        Bootloader
    ]
};

new Phaser.Game(config);