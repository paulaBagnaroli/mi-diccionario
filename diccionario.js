//-------------------------------------CALLBACKS---------------------------------------------
//Los callbacks son funciones que se pasan dentro de otra función, generalmente como parámetro pero no siempre. Por ejemplo, el addEventListener donde uno de los parámetros es una función flecha. 
//Infierno de los callbacks: por eso ya casi no se usan demasiado y se ha cambiado a las promesas (promises)

//1. Ejemplo de un callback
 
//A la función verificarEdad se le pasa el nombre de usuario como primer parámetro, y una función callback "funcionSaludo" como segundo parámetro.
let verificarEdad=(nombreUsuario,funcionSaludo)=>{
    let edad=prompt(`ingresa tu edad`);
    let resultadoEdad;
    if (edad>=18){
        resultadoEdad="mayor de edad"
    }
    else {"menor de edad"}
    funcionSaludo(nombreUsuario,resultadoEdad)    
}
const funcionSaludo = (nombreUsuario, resultadoEdad)=>{
    alert(`Hola ${nombreUsuario} eres ${resultadoEdad}`)
}

verificarEdad("Paula",funcionSaludo)

