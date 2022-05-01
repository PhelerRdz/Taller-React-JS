// funciones normales vs funciones de flecha

//funcion normal
function saludar(){
    console.log('hola mundo')
}
saludar()

// funcion anonima -- parte de la funcion de flecha
const saludar = () => {
    console.log('hola mundo')
}

(() => {
    console.log('hola mundo')
})()

//funcion de flecha