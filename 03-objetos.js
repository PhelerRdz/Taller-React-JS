//diccionarios -mapas- objetos literales
const persona = {
    nombre: 'Jorge',
    edad: 20,
    correo: {
        correo1: '@hotmail.com',
        correo2: '@hotmail.com',
        correo3: '@hotmail.com',
        correo4: {
            dominio1: 'Hotmail',
            dominio2: 'Outlook'
        }
    }
}

persona["habitos"] = ["correr", "saltar"]
persona.habitos = ["correr", "saltar"]

// ... operador spread
const persona2 = {...persona}


persona2.algo = 'otra cosa'

console.log(persona)