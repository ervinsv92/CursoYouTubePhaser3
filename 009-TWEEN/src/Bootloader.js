/*
    Ejemplos tweens
    https://labs.phaser.io/index.html?dir=tweens%2F&q

    //ease
    https://drive.google.com/file/d/1_gH5u0iBHG_lDa7pWbEChvSkcDA0QpbE/view
*/

class Bootloader extends Phaser.Scene {
    constructor() {
        super('Bootloader');
    }

    preload() {
        console.log('Bootloader :D');
        this.load.path = './assets/';

        this.load.image('logo_gamma', 'logo_gamma.png');
    }

    create() {
        this.logo = this.add.image(40, this.sys.game.config.height / 2, 'logo_gamma').setScale(1.3);

        let tween = this.tweens.add({
            targets: this.logo,
            props: {
                x: {
                    value: 300,
                    duration: 2000
                },
                y: {
                    value: 200,
                    duration: 1000
                }
            },
            repeat: 2,
            yoyo: true,
            ease: 'Power1',
            // delay: 1000,
            // hold: 1000,
            // repeatDelay: 1000,
            // completeDelay: 1000,
            onStart: () => console.log('Incia'),
            onYoyo: () => console.log('YOyo'),
            onComplete: () => console.log('Final'),
            onRepeat: () => console.log('Repeat')
        });

        // setTimeout(() => {
        //     tween.pause();
        // }, 2500);

        // setTimeout(() => {
        //     tween.resume();
        // }, 4000);

    }
}
export default Bootloader;