//spread vs rest
const persona = {
    nombre: 'Jorge',
    edad: 20
}

const numeros = [1,2,3,4,5]
console.log(...numeros)

//rest
function imprimirnumero(numeros){
    console.log(numeros)
}
function imprimirnumero(numeros, numeros2){
    console.log(numeros, numeros2)
}
function imprimirnumero(...numeros){
    console.log(numeros)
}
imprimirnumero(1,2,3,4,5)