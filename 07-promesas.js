

const obtenernumeros = new Promise((resolve, reject) =>{
    setTimeout(() => {
        const numeros = [1,2,3,4,5,6]

        if(numeros.legth == 5){
            resolve(numeros)
        }else{
            reject('El tamaño del arreglo no es igual a 5')
        }
    }, 2000);
})

obtenernumeros.then((respuesta) =>{
    console.log(respuesta)
}).catch((error)=>{
    console.log(error)
})