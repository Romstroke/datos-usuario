// https://randomuser.me/api/?results=5000
// la cual nos devuelve un arreglo con usuarios de forma aleatoria

//funcion iife Immediately Invoked Function Expression
// let arreglo = [];

let iife = (function () {

    return {
        obtenerDatos:
            //aqui va el codigo de consumir la api
            async () => {
                try {
                    const respuesta = await fetch("https://randomuser.me/api/?results=10");
                    if (!respuesta.ok) {
                        throw 'Solicitud sin éxito';
                    }
                    const datos = await respuesta.json();
                    arreglo = datos.results;
                    return arreglo;
                }
                catch (error) {
                    console.error("Respuesta", error)
                }
            },
        //funcion que imprime los datos
        pintarDatos:
            (datos) => {
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


iife.obtenerDatos().then((datos)=> iife.pintarDatos(datos)); 

// iife.obtenerDatos().then((user) => user)
//     .then((user) => iife.pintarDatos(user));

// encadenando promesas con async y await
// const datosApi = async () => {
//     const datos = await iife.obtenerDatos()
//     iife.pintarDatos(datos)
// }

// datosApi()

//el patron modulo tiene que (return) devolver un objeto, osea que puedo devolver un metodo al que luego puedo llamar








