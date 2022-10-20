
class Gameover extends Phaser.Scene {
    constructor() {
        super({key: 'Gameover'});
    }
    
    //Puede recibir datos cuando la escena es llamada
    init(data){
        this.data.set('puntos',data);
    }

    preload() {
        console.log('Scene: Gameover');
    }

    create() {
        this.add.text(120,120,'Game Over',{color:'#fff', fontSize:50});
        this.add.text(120,160,this.data.get('puntos'),{color:'#fff', fontSize:50});
        

        this.input.on('pointerdown', ()=>{
            this.scene.start('Bootloader')
        });
    }

    update() {

    }
}

export default Gameover;
