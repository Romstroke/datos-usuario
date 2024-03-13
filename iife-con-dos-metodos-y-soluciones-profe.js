// https://randomuser.me/api/?results=5000
// la cual nos devuelve un arreglo con usuarios de forma aleatoria

//funcion iife Immediately Invoked Function Expression
let arreglo = [];

let iife = (function () {

    return {
        obtenerDatos:
            //aqui va el codigo de consumir la api
            async () => {
                try {
                    const respuesta = await fetch("https://randomuser.me/api/?results=10");
                    console.log(respuesta);
                    if (!respuesta.ok) {
                        throw 'Solicitud sin éxito';
                    }
                    const datos = await respuesta.json();
                    // console.log(datos.results)
                    arreglo = datos.results
                    return datos.results;
                }
                catch (error) {
                    console.error("Respuesta", error)
                }
            },
        //funcion que imprime los datos
        pintarDatos:
            (datos) => {
                console.log(datos)
                const userData = document.getElementById('user-data');

                datos.forEach((dato) => {
                    userData.innerHTML += `
                <div class="card">
                  <img src="${dato.picture.large}" alt="">
                  <p>${dato.name.title} ${dato.name.first} ${dato.name.last}</p>
                  <p>${dato.email}</p>
                  <p>${dato.phone}</p>
                </div>
                `
                });
            }
    };
})();

const datosRecibidos = iife.obtenerDatos()
console.log('valor retornado :', datosRecibidos);
iife.pintarDatos(datosRecibidos)


// iife.obtenerDatos().then((datos)=> iife.pintarDatos(datos)); //.then
// console.log(userInfo);
// iife.pintarDatos(userInfo);

// iife.obtenerDatos().then((user) => user)
//     .then((user) => iife.pintarDatos(user));

// encadenando promesas con async y await
// const datosApi = async () => {
//     const datos = await iife.obtenerDatos()
//     iife.pintarDatos(datos)
// }

// datosApi()


//el patron modulo tiene que (return) devolver un objeto, osea que puedo devolver un metodo al que luego puedo llamar








