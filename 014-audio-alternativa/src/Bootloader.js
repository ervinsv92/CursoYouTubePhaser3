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
        this.load.audioSprite('sfx', 'spriteAudioGamma.json',['spriteAudioGamma.ogg']);
    }

    create() {
        this.add.image(this.sys.game.config.width/2, this.sys.game.config.height/2, 'logo_gamma');
        
        
        
        this.sound.pauseOnBlur = false;

        //En la version actual de phaser3, es keydown-RIGHT, igual para las demas teclas, es con guion medio en vez de guion bajo
        this.input.keyboard.on('keydown-RIGHT',()=>{
           this.sound.playAudioSprite('sfx', 'sandwich_1');
        });

        this.input.keyboard.on('keydown-LEFT',()=>{
            this.sound.playAudioSprite('sfx', 'sandwich_3');
        });

        this.input.keyboard.on('keydown-UP',()=>{
            this.sound.playAudioSprite('sfx', 'sandwich_4');
        });

        this.input.keyboard.on('keydown-DOWN',()=>{
            this.sound.playAudioSprite('sfx', 'sandwich_2');
        });
    }
}
export default Bootloader;