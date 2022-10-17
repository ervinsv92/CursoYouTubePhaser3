import Bootloader from './Bootloader.js';

const config = {
    title: "fuentes",
    width: 600,
    height: 300,
    type: Phaser.AUTO,
    parent: "container",
    backgroundColor: "#4834d4",
    pixelArt: true,
    scene: [
        Bootloader
    ]
};

new Phaser.Game(config);