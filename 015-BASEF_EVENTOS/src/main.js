import UI from './scenes/UI.js';
import Gameover from './scenes/Gameover.js';
import Bootloader from './Bootloader.js';

const config = {
    title: "basef",
    width: 640,
    height: 360,
    type: Phaser.AUTO,
    parent: "container",
    backgroundColor: "#f9ca24",
    pixelArt: true,
    physics: {
        default: "arcade",
        "arcade": {
            gravity: {
                y: 500
            }
        }
    },
    scene: [Bootloader, UI, Gameover]
};

new Phaser.Game(config);