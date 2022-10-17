/* 
    Esta no es la version actual de phaser, las teclas se llaman diferente
*/
class Bootloader extends Phaser.Scene {
    constructor() {
        super('Bootloader'); 
    }

    preload() {
        console.log('Bootloader :D');
        this.load.path = './assets/';

        this.load.image('logo_gamma', 'logo_gamma.png');
        this.load.audio('prueba', 'sandwich.mp3');
    }

    create() {
        this.add.image(this.sys.game.config.width/2, this.sys.game.config.height/2, 'logo_gamma');
        
        let audio = this.sound.add('prueba',{loop:false});
        
        this.sound.pauseOnBlur = false;

        //En la version actual de phaser3, es keydown-RIGHT, igual para las demas teclas, es con guion medio en vez de guion bajo
        this.input.keyboard.on('keydown_RIGHT',()=>{
            audio.play();
        });

        this.input.keyboard.on('keydown_LEFT',()=>{
            audio.stop();
            //this.sound.stopAll();
            //this.sound.pauseAll();
            //this.sound.resumeAll();
        });

        this.input.keyboard.on('keydown_UP',()=>{
            audio.pause();
            //audio.rate += 0.1;
            //audio.detune += 100;
            //audio.mute= true;
            //audio.volume -= 0.1;
            //audio.seek = 3; salta al segundo 3

            //Tambien sirve
            // this.tweens.add({
            //     targets:audio,
            //     volume:0,
            //     ease:'Power1',
            //     duration:2000
            // });
        });

        this.input.keyboard.on('keydown_DOWN',()=>{
            audio.resume();
            //audio.rate = 1;
            //audio.detune += 1;
            //audio.mute= false;
            //audio.volume = 1;
        });
    }
}
export default Bootloader;