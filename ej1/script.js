var Jugador = {
    nombre :"Nombre",
    apellidos :"Apellidos",
    nivel : 1,
    puntuacion : 1,
    ultimaSubidaNivel : 1,
    //ultimaSubidaNivel es una propiedad que nos permite guardar la última puntuación 
    //con la que se subió o bajo de nivel, para compararla con la puntuación actual y saber si el 
    //jugador subirá o bajará de nivel
    
    resetearPuntuacion(){
        this.puntuacion = 1;
        this.nivel = 1;
        this.ultimaSubidaNivel = 1;
        window.alert("El jugador ha sido reseteado") ;
    },
    sumarPuntuacion(){
        this.puntuacion += 1;
        if(this.puntuacion.toString().endsWith("1") && this.puntuacion > this.ultimaSubidaNivel){
            //Si la puntuación termina en 1, significa que va a subir o bajar de nivel
            this.nivel += 1;
            this.ultimaSubidaNivel = this.puntuacion;
        }
    },
    restarPuntuacion(){
        this.puntuacion -= 1;
        if(this.puntuacion.toString().endsWith("1") && this.puntuacion < this.ultimaSubidaNivel){
            this.nivel -= 1;
            this.ultimaSubidaNivel = this.puntuacion;
        }
        if(this.puntuacion == 0){
            this.resetearPuntuacion();
        }
    },
    
}
// Con el siguiente código se puede comprobar que el cambio de nivel sucede
/*
console.log(Jugador);
Jugador.sumarPuntuacion();
console.log(Jugador.puntuacion);
Jugador.puntuacion=10;
Jugador.sumarPuntuacion();
console.log(Jugador.puntuacion);
console.log(Jugador.nivel);
Jugador.puntuacion=2;
Jugador.restarPuntuacion();
console.log(Jugador.puntuacion);
console.log(Jugador.nivel);
*/

var Jugador1 = Object.create(Jugador);
Jugador1.nombre="Lorena";
Jugador1.apellidos="Palma";
var Jugador2 = Object.create(Jugador);
Jugador2.nombre="Simón";
Jugador2.apellidos="Domínguez";
var jugadores = [Jugador1, Jugador2];
console.log(jugadores)
