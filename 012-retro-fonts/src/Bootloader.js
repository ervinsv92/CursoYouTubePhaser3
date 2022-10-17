class Bootloader extends Phaser.Scene {
    constructor() {
        super('Bootloader'); 
    }

    preload() {
        console.log('Bootloader :D');
        this.load.path = './assets/';
        this.load.image('gamma', 'font.png');
        this.load.json('gamma_json', 'gamma.json');
    }

    create() {
        this.valor = 0;
        let config = this.cache.json.get('gamma_json');
        this.cache.bitmapFont.add('gamma', Phaser.GameObjects.RetroFont.Parse(this, config));
        this.texto = this.add.bitmapText(10, 10, 'gamma', 'VALOR 0').setTint(0xffff00);
    }
    update() {
        this.texto.text = 'VALOR '+this.valor++;
    }
}
export default Bootloader;