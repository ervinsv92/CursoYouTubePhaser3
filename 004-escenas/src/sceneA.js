class SceneA extends Phaser.Scene{
    constructor(){
        super({key:"SceneA"});
    }

    preload(){}
    create(){
        //alert("se ha cargado la escena A");
        let graphics = this.add.graphics();
        graphics.fillStyle(0xff3300, 1);
        graphics.fillRect(100,200,600,300);
        graphics.fillRect(100,100,100,100);
        this.add.text(120,110,"A",{font:"96px Courier", fill:"#000"})
        this.scene.add("SceneC", new SceneC);
        //this.scene.start("SceneC");
        this.scene.bringToTop("SceneA");
        /*
            this.scene.bringToTop(); //Encima de todo
            this.scene.sendToBack(); //Atras de todo
            this.scene.moveUp(); //Un paso arriba
            this.scene.moveDown(); //Un paso atras
            this.scene.moveAbove(); //Encima de una escena indicada
            this.scene.moveBelow(); //Abajo de una escena indicada
        */
    }

    update(time, delta){}
}