const opciones = ['papel', 'tijera', 'piedra'];
let jugadas = [];
let puntaje = 0;
let resultado;

const numeroJugadas = parseInt(prompt('Cuantas veces deseas jugar?'));

for (let i = 0; i < numeroJugadas; i++){
    let tipoJugada = prompt('Por favor elige una judada - (Tijera | Papel | Piedra)').toLocaleLowerCase();
    if(!opciones.includes(tipoJugada)){
        alert('Jugada invalida');
        continue;
    }else{
        const indiceMaquina = Math.floor(Math.random() * opciones.length);
        const opcionMaquina = opciones[indiceMaquina];

        if(tipoJugada === opcionMaquina){
            jugadas.push(`Empate - jugador elige ${tipoJugada} y maquina elige ${opcionMaquina}`);
        }else if (
            (tipoJugada === 'piedra' && opcionMaquina === 'tijera') ||
            (tipoJugada === 'tijera' && opcionMaquina === 'papel') ||
            (tipoJugada === 'papel' && opcionMaquina === 'piedra')
        ){
            puntaje += 1;
            jugadas.push(`Ganaste - jugador elige ${tipoJugada} y maquina elige ${opcionMaquina}`);
        }else{
            puntaje -= 1;
            jugadas.push(`Perdiste - jugador elige ${tipoJugada} y maquina elige ${opcionMaquina}`);
        }
        }
    }

 if(puntaje == 0){
    resultado = 'Jugador y Maquina empataron';
 }else if (puntaje > 0){
    resultado = 'Jugador gano';
 }else {
    resultado = 'La máquina gano';
 }
    

let renderPoint = document.getElementById('renderData');
renderPoint.innerHTML = `<p>${resultado}</p>`;

jugadas.forEach(item => {
    renderPoint.innerHTML += `<p>${item+'\n'}</p>`;
})


