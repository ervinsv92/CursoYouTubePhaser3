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
        this.logo = this.add.image(60, 60, 'logo_gamma').setScale(2);
        this.logo_2 = this.add.image(60, 220, 'logo_gamma').setScale(2);
        let timeline = this.tweens.timeline({
            targets: [this.logo, this.logo_2],
            ease: 'Power1',
            duration: 2000,
            loop: -1,
            yoyo: -1,
            tweens: [
                {x: 400}
            ]
        });
    }
}
export default Bootloader;