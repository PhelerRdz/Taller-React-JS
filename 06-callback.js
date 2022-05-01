//es una funcion que se va a ejecutar cuando algo termine

const enviarInformacion = (informacion, callback) => {
    setTimeout(() => {
       console.log('info valida', informacion)
       
       callback({
           ok:true,
           error: null,
           mensaje: 'La informacion se ha enviado con exito'
       })
    }, 2000);
}
enviarInformacion({usuario: 'Jorge'},(respuesta) =>{
    console.log(respuesta)
})