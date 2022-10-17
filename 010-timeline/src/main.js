/*
    Timelines oficiales
    https://labs.phaser.io/index.html?dir=tweens/timelines/&q=
*/

import Bootloader from './Bootloader.js';

const config = {
    title: "timeline",
    width: 600,
    height: 400,
    type: Phaser.AUTO,
    parent: "container",
    backgroundColor: "#f9ca24",
    pixelArt: true,
    scene: [
        Bootloader
    ]
};

new Phaser.Game(config);