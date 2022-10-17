const config = {
    width:320*2,
    height:180*2,
    parent:"container",
    type: Phaser.AUTO,
    scene:{
        preload:preload,
        create:create,
        update:update
    },
    physics:{
        default:"arcade",
        arcade:{
            gravity:{
                y:500
            }
        }
    }
}

var game = new Phaser.Game(config);

function preload(){
    //Se carga en memoria de manera global
    //nombre interno, ruta
    this.load.image("pajaro", "./assets/bird.png");
}

function create(){
    //x,y,nombre interno
    //this.pajaro = this.add.image(80,100,"pajaro");
    this.pajaro = this.physics.add.image(80,100,"pajaro");
    this.pajaro.setScale(2);
    //this.pajaro.flipX = true;
    //this.pajaro.setRotation(30);
    //this.pajaro.setAngle(30);
    //Va de 0 a 1, cambia el punto de inicio de la imagen, normalmente esta en el x = 0.5 and y = 0.5
    //x,y
    //this.pajaro.setOrigin(0,0.5);
    this.pajaro.setCollideWorldBounds(true);   
    //en 1 vuelve al mismo lugar de donde salio
    this.pajaro.setBounce(0.3);
    //Acelera en esa cantidad cada frame
    //this.pajaro.setAcceleration(10,0);
    //La velocidad es constante
    this.pajaro.setVelocity(50,0);
}

function update(time, delta){
    //Se ejecuta cada frame, a cada rato
    //this.pajaro.angle++;
    //this.pajaro.x++;
}