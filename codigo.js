//EJ 1
const formatearNombre = (nombre) => {
    return nombre[0].toUpperCase() + nombre.slice(1);
};

const nombreFormateado = formatearNombre("matias");
console.log(nombreFormateado);

//EJ 2

const contarLetras = texto => {
    const textoN = texto.split("").filter(e => e !== " ");

    return textoN.length;
}

const textoA = contarLetras("Hola que");
console.log(textoA)

// EJ 3

const numeroMayor = (a,b,c) => {
    const arrayNumeros = [a,b,c];

    arrayNumeros.sort((a,b) => a - b);
    const numeroM = arrayNumeros[2];
    return numeroM

}

const numeros = numeroMayor(9,20,74);
console.log(numeros);

 //EJ 4

const validarPassword = passWord => {

    const arrayContra =[passWord];
    const hayNumero = arrayContra.filter(e => e == 1) 
    if (passWord.length >= 8 && hayNUmero ) 
        {
            return true;
        }
        else
        {
            return false;
        }
}
const validacion = validarPassword("holaquetal");
alert(validacion);


