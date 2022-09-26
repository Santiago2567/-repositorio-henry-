function ideas(array) {
    // La funcion llamada 'ideas' recibe un array 'array' de strings como parametro
    // entre estas ideas hay algunas buenas y otras no, si no encontramos una 'buena' retornamos 'Fail!'
    // si encontramos por lo menos una 'buena' retornamos 'Activa!'
    // y si encontramos al menos 3 'buena' retornamos 'Jackpot!'
    // Por ej:
    // ideas(['hola', 'palabra']) debe devolver 'Fail!'
    // ideas(['hola', 'buena', 'hi']) debe devolver 'Activa!'
    // Tu código aca:
    //var ve = {
    //buena: true
    //};
    //for (prop in ideas) {
    //if (ideas[prop] == ve.buena)
    //return activa
    //else {
    //return fail
    //}
    //}
}
var buena = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] === buena) {
        buena++;
    }
    if (buena == 0) {
        return 'Fail!';
    } else if (buena >= 1 && buena < 3) {
        return 'Activa!';
    } else if (buena >= 3) {
        return 'Jackpot!';
    }
}
console.log(ideas(['hola', 'buena', 'hi']));

function puntosDelEquipo(array) {
    // la funcion recibe un array con los resultados de los partidos del campeonato de futbol de un equipo
    // en este formato ["3:1", "2:2", "0:1", ...]
    //la funcion debe calcular y retornar cuantos puntos consiguio el equipo teniendo en cuenta:
    //que su resultado es el primero en cada string
    // un partido ganado suma 3 puntos, empate suma 1 punto, y perder 0!
    // Tu código aca:
    //var array =([][0] += 1);{
    //console.info(puntuacionTotal);
    //}
    //console, log("3:1", "2:2", "0:1")
};
let puntos = 0
for (let score of array) {
    let arreglo = score.split(":")
    let golesNuestroEquipo = +arreglo[0]
    let golesEquipoEnemigo = +arreglo[1]
    if (golesNuestroEquipo > golesEquipoEnemigo) {
        puntos += 3
    } else if (golesNuestroEquipo == golesEquipoEnemigo) {
        puntos += 1
    } else if (golesNuestroEquipo < golesEquipoEnemigo) {
        puntos += 0
    }
}
return puntos