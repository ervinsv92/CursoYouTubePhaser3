import Bootloader from './Bootloader.js';
                
const config = {
    title: "tween",
    width: 400,
    height: 300,
    parent: "container",
    backgroundColor: "#ffffff",
    pixelArt: true,
    scene: [
        Bootloader
    ]
};

new Phaser.Game(config);