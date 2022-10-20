
class UI extends Phaser.Scene {
    constructor() {
        super({key: 'UI'});
    }
    
    preload() {
        console.log('Scene: UI');
    }

    create() {
        this.add.text(20,20,'Puntos',{color:'#fff', fontSize:50});
        this.puntos = this.add.text(240,20,'0',{color:'#fff', fontSize:50});

        this.registry.events.on('puntos',(puntos)=>{
            this.puntos.setText(puntos);
        });
    }

    addPoints(puntos){
        this.puntos.setText(puntos);
    }

    update() {

    }
}

export default UI;
