class Bootloader extends Phaser.Scene {
    constructor() {
        super('Bootloader');
    }

    preload() {
        console.log('Bootloader :D');
        this.load.path = './assets/';
    }

    create() {
        this.add.text(10, 10, 'Soy texto uno', {fontFamily: 'pruebas_dos', fontSize: 40});
        const configText = {
            x: 50,
            y: 100,
            text: 'Hola\nmundo como estas bien',
            style: {
                fontFamily: 'pruebas',
                backgroundColor: '#00ff00',
                fontSize: 40,
                align: 'center'
            }
        }
        const texto = this.make.text(configText);
        texto.setBackgroundColor('#ff0000');
    }
}
export default Bootloader;