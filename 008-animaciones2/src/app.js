//Herramienta https://gammafp.com/tools/
const config = {
    width:300,
    height:200,
    parent:'container',
    scene:{preload, create}
};

new Phaser.Game(config);

function preload(){
    this.load.path = './assets/';
}

function create(){
    
}