class Bootloader extends Phaser.Scene {
    constructor() {
        super('Bootloader'); 
    }

    preload() {
        console.log('Bootloader :D');
        this.load.path = './assets/';

        //Escena de puntos por defecto de phaser
        this.registry.set('points', 0);
        this.puntos = 0;
    }

    create() {
        this.data.set('monedas',300);
        this.data.setValue('monedas',400);
        //this.data.remove('monedas');//borra la variable monedas de data
        console.log(this.data.get('monedas'));
        //this.data.getAll(); //devuelve un objeto con las variables contenidas

        //Crea un evento y lo coloca en escucha, puede ser accedido por otras escenas
        this.registry.events.on('cambio',(puntos)=>{
            //puede ir sin parametros
            console.log(`Evento cambio: ${puntos}`)
        });

        //Emite un evento, los emisores se tienen que crear despues de que se crea el evento, sino no lo encuentra
        this.registry.events.emit('cambio', 3500);

        this.registry.events.on('changedata',(parent, key, data)=>{
            if(key === 'points'){
                console.log(`Puntos desde evento default phaser: ${data}`);
            }
        });

        this.input.on('pointerdown', ()=>{
            this.puntos++;
            this.registry.set('points', this.puntos);

            //Llama el evento creado desde la escena UI y le pasa los puntos
            this.registry.events.emit('puntos', this.puntos);
            
            //Es una forma de llamar metodos de una escena
            //this.scene.get('UI').addPoints(this.puntos);

            if(this.puntos >= 10){
                this.scene.stop('UI');
                //Se envian datos al momento de cambiar la escena
                this.scene.start('Gameover', this.puntos);
            }
        });

        //Lanzar escena
        this.scene.launch('UI');
    }
}
export default Bootloader;