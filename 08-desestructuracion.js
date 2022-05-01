const persona = {
    name: 'Jorge',
    edad: '20'
}

const{edad, name: nombre} = persona

console.log(nombre, edad)

const palabras = ['hola', 'como','estan']
const [...p3]  = palabras
console.log(p3)