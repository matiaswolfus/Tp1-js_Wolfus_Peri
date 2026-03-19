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

const validarPassword = password => {

    if (password.length < 8) {
        return false;
    }

    let tieneNumero = false;

    for (let i = 0; i < password.length; i++) {
        if (!isNaN(password[i])) {
            tieneNumero = true;
        }
    }
    return tieneNumero;
};
const validacion = validarPassword("holaquetal4");
const validacion2 = validarPassword("holaquetal");
console.log(validacion, validacion2);

//PARTE 2

//EJ 5

const sumarArray = arrayASumar => {
    let numeroSumado = 0; 

    for (let i = 0; i < arrayASumar.length; i++) 
    {
        numeroSumado += arrayASumar[i]; 
    }

    return numeroSumado;
}

const mostrar = sumarArray([1,2,3,4]);
console.log(mostrar); 

//EJ 6

//mismo que el 3

// EJ 7


const pares = arrayNumeros =>
{
    return arrayNumeros.filter(numero => numero % 2 === 0);
};
const resultadoPares = pares([1,2,4,5,6,8,10])
console.log(resultadoPares);


//EJ 8

const usuario = {
 nombre: "Ana",
 edad: 20,
 activo: false
}

const descUsuario = usuario => {
const msj = `${usuario.nombre} tiene ${usuario.edad} años`;
return msj;
}

const h = descUsuario(usuario);
console.log(h)

//EJ 9

const activarUsuario = usuario => {
    return usuario.activo = true;
}

const i = activarUsuario(usuario)
console.log(i + ". fue activado con exito");

// EJ 10


const productos = [


{nombre:"Mouse", precio:10},


{nombre:"Teclado", precio:25},


{nombre:"Monitor", precio:200}


]


const calcularTotal = productos => {


        let totalProductos = 0;
           
        productos.forEach(e => {
        totalProductos += e.precio
   
        });
        return totalProductos;
}
const resultadoSuma = calcularTotal(productos)
//console.log(totalProductos)

//EJ 11

const usuarios = [

{nombre:"Ana", edad:17},

{nombre:"Juan", edad:25},

{nombre:"Pedro", edad:30}

]

let arrayNombres = usuarios.map(u => u.nombre);
console.log(arrayNombres);

//EJ12

let edadF = usuarios.filter(e => e.edad >= 18)
console.log(edadF)

//13
let totalEdades = usuarios.reduce((total, usuario) => total + usuario.edad, 0);

//14

const producto = {

nombre:"Notebook",

precio:1000

}
const { nombre, precio } = producto;
console.log(nombre);
console.log(precio);

//15

const nuevoProducto = {
    ...producto,   // me deja copiar el producto con todos sus items
    stock: 5
};

console.log(nuevoProducto);

//16
const productosO = [
    {nombre: "Cargador USB", precio: 18},
    {nombre: "Smart TV", precio: 550},
    {nombre: "Mouse Gamer", precio: 75},
    {nombre: "Teclado Mecánico", precio: 130},
    {nombre: "Ventilador", precio: 40},
    {nombre: "Aire Acondicionado", precio: 800},
    {nombre: "Celular", precio: 999},
    {nombre: "Funda", precio: 12},
]

const buscarProducto = (productos, nombre) =>
{

const producto = productos.find(e => e.nombre === nombre);
return producto;

}

const a = buscarProducto (productosO, "Celular");
console.log(a)

//EJ 17

const  obtenerProductosMayorA50 = productosO => {
return productosO.filter(producto => producto.precio > 50);
};
console.log(obtenerProductosMayorA50(productosO));



//ULTIMA PARTE

//EJ 1
const arrayR = [1,2,3,4,5,6,7,8,9,10]

const promedioP = numeros => {
    const suma = numeros.reduce((total, numero) => total + numero, 0);
    const promedio = suma / numeros.length;
    return promedio;
}
const resultadoPromedio = promedioP(arrayR);
console.log(resultadoPromedio)


//EJ 2

const usuarios1 = [

{id:1, nombre:"Ana", edad:20},

{id:2, nombre:"Juan", edad:15},

{id:3, nombre:"Pedro", edad:30}

]

const obtenerUsuarios = usuarios1 => {
    return usuarios1;
}

const resultadoUsuarios = obtenerUsuarios(usuarios1);
console.log(resultadoUsuarios)

const obtenerUsuarioPorId = (usuarios1, id) => {
    const usuario = usuarios1.find(u => u.id === id);
    return usuario;
}

//EJ 3
const obtenerMayorDeEdad = usuarios1 => {
    return usuarios1.filter(u => u.edad >= 18);
}

//EJ 4

const crearUsuario = (usuarios1, nuevoUsuario) => {

    const idNuevo = usuarios1[usuarios1.length - 1].id + 1;
    const usuarioCreado = { id: idNuevo, ...nuevoUsuario };
    usuarios1.push(usuarioCreado); //push me agrega el nuevo usuario al array de usuarios
    return usuarioCreado;
}


const nuevoUsuario = { nombre: "Lucia", edad: 22 };
const usuarioCreado = crearUsuario(usuarios1, nuevoUsuario);
console.log(usuarioCreado);

