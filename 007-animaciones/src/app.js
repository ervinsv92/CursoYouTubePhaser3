const config = {
    width:300,
    height:200,
    parent:"container",
    pixelArt:true,
    scene:{
        preload,
        create
    }
}

new Phaser.Game(config);

function preload(){
    //this.load.spritesheet('evil_tomato', './assets/evil_tomato.png', {frameWidth:16, frameHeight:25});
    this.load.atlas('tomato_atlas', './assets/evil_tomato.png', './assets/evil_tomato.json');
    this.load.json('evil_tomato_anim', './assets/evil_tomato_anim.json');
}

function create(){
    //x,y,name,position in sprite
    this.tomato = this.add.sprite(100,100,'tomato_atlas', 0).setScale(2);
    this.dataAnim = this.cache.json.get('evil_tomato_anim');
    //Forma 1 a pie
    // this.anims.create({
    //     key:'tomato_walk',
    //     frames: this.anims.generateFrameNumbers('evil_tomato',{
    //         //frames:[1,2,3,4,5,6,7,8]
    //         start:1,
    //         end:8
    //     }),
    //     repeat:-1,
    //     frameRate:10
    // });

    //Forma 2 atlas
    // this.anims.create({
    //     key:'tomato_walk',
    //     frames: this.anims.generateFrameNames('evil_tomato',{
    //         prefix:'evil_tomato_',
    //         suffix:'.png',
    //         //frames:[1,2,3,4,5,6,7,8]
    //         start:1,
    //         end:8
    //     }),
    //     repeat:-1,
    //     frameRate:10
    // });

    //Forma 3 json
    this.anims.fromJSON(this.dataAnim);


    this.tomato.anims.play('tomato_atlas_walk');
    //this.tomato.anims.pause();
    //this.tomato.anims.resume();
    //this.tomato.anims.stop();
}