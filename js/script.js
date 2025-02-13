console.log("ESTA ACTIVO JS");



const habitaciones = [
    {
        imagen: "img/twin-4.jpg",
        tipo: "Single",
        servicios: [" Tv de pantalla plana", "Wi-Fi gratis", "Aire acondicionado", "Calefacción", "Desayuno bufet"],
        clasificacion: 9,
        precio: 100000,
        disponibilidad: 10
    },
    {
        imagen: "img/doble-twing-06.jpg",
        tipo: "Doble twin",
        servicios: [" Tv de pantalla plana", "Wi-Fi gratis", "Aire acondicionado", "Calefacción", "Desayuno bufet"],
        clasificacion: 9,
        precio: 200000,
        disponibilidad: 9
    },
    {
        imagen: "img/doble-matrim03.jpg",
        tipo: "Doble matrimonial",
        servicios: [" Tv de pantalla plana", "Wi-Fi gratis", "Aire acondicionado", "Calefacción", "Desayuno bufet"],
        clasificacion: 9,
        precio: 250000,
        disponibilidad: 5
    }

]

/* 
{
    imagen: "img/cuadruple-05.jpg",
    tipo: "Triple Twin",
    servicios: [" Tv de pantalla plana","Wi-Fi gratis", "Aire acondicionado", "Calefacción", "Desayuno bufet"],
    clasificacion: 8,
    precio: 280000,
    disponibilidad: 8
},
{
    imagen: "img/triple-03-1.jpg",
    tipo: "Triple Mat + 1",
    servicios: [" Tv de pantalla plana","Wi-Fi gratis", "Aire acondicionado", "Calefacción", "Desayuno bufet"],
    clasificacion: 9,
    precio: 320000,
    disponibilidad: 2
},
{
    imagen: "img/cuadruple-04.jpg",
    tipo: "Cuadruple",
    servicios: [" Tv de pantalla plana","Wi-Fi gratis", "Aire acondicionado", "Calefacción", "Desayuno bufet"],
    clasificacion: 9,
    precio: 400000,
    disponibilidad: 1
}
*/


/* {
    imagen: "img/cuadruple-04.jpg",
    tipo: "Quinta",
    servicios: ["Tv de panta plana", "algo mas 2", "Algo mas 3"],
    clasificacion: 7,
    precio: 500000,
    disponibilidad: 0
} */


//Creamos una variable cadena (habitacionesHtml)

//armamos la cadena que vamos a asignar a esa variable con los acentos franceses o invertido (`)

let habitacionesHtml = "";
let cantDisponibles = 0;
console.log(cantDisponibles)
for (let i = 0; i < habitaciones.length; i++) {

    if (habitaciones[i].disponibilidad != 0) {
        cantDisponibles += 1;
        habitacionesHtml += `
        <div class="target-habitacion">
            <div class="target-hab-img">
                <img src=${habitaciones[i].imagen} alt="No carga">
            </div>
            <div class="target-hab-info">  
                <div class="target-hab-info1">
                    <p class="h-tipo">${habitaciones[i].tipo}</p>                    
                    <p class="h-servicios">${habitaciones[i].servicios[0]}</p>
                    <p class="h-servicios">${habitaciones[i].servicios[1]}</p>
                    <p class="h-servicios">${habitaciones[i].servicios[2]}</p>
                    <p class="h-servicios">${habitaciones[i].servicios[3]}</p>
                    <p class="h-servicios">${habitaciones[i].servicios[4]}</p>
                </div>
                <div class="target-hab-info2">
                    <p class="h-valoracion">${habitaciones[i].clasificacion} </p>
                    <p class="h-valoracion"> ☆ ☆ ☆ ☆ ☆ </p>                      
                    <p class="h-desde">DESDE $</p>
                    <p class="h-precio">${habitaciones[i].precio}</p>
                    <p class="h-disponibles">Cant. ${habitaciones[i].disponibilidad}</p>
                    <div class="div-enlace-res">
                        <a href="reservas-ha.html">RESERVAR</a>       
                    </div>

                </div>
            </div>
        </div>
    `
    };


}

if (cantDisponibles == 0) {
    const textoSegunDisponibilidad = document.getElementById("texto_segun_disponibilidad");
    textoSegunDisponibilidad.innerHTML = `<p class="titulo-red">No hay disponibles</p>`;
    console.log(cantDisponibles);
}
else {
    const textoSegunDisponibilidad = document.getElementById("texto_segun_disponibilidad");
    textoSegunDisponibilidad.innerHTML = `<p class="titulo-red"> Disponibles</p>`;

}




/* tomamos el elemento div id habitaciones */
const contenedorDeHabitaciones = document.getElementById("contenedor_habitaciones");
/* A su contenido lo editamos agregandole lo que armamos */
contenedorDeHabitaciones.innerHTML = habitacionesHtml;


/* Agregamos un listener a los botones reservar de las habitaciones */
/* Guardamos en variables los elementos que vamos a trabajar */
/* Botones reservar de cada habitacion */
const botonesReservar = document.querySelectorAll(".btn-enlace-res");
console.log(botonesReservar);

/* La lista donde vamos a colocar las habitaciones a reservar */
const listaParaReservar = document.querySelector("#agregando_reserva ul");
console.log(listaParaReservar);

/* texto para el total a reservar */
const totalReservas = document.querySelector("#agregando_reserva p");
console.log(totalReservas);


let valorHabitacionesAReservar = 0;


/* let habitacionesAReservar = "";

`
<p class="h-tipo">Habitaciones ${habitaciones[i].tipo}</p>
`; */


/* pendiente */
/* tomo el elemento div id habit a reservar */
/* const contenedorHabitacionesAReservar = document.getElementById("contenedor_habitaciones_a_reservar");
contenedorHabitacionesAReservar.innerHTML = habitacionesAReservar; */



/* agregamos el lidtener a los botones ahora si */
for (let i = 0; i < botonesReservar.length; i++) {
    function agregarHabitacionPorTipo() {
        console.log("hice clic en el boton de indice: " + i);


        const elementoLi = document.createElement("li");
        elementoLi.innerText = `Habitaciones ${habitaciones[i].tipo}`;
        /* elementoLi.innerText = ` $  ${habitaciones[i].precio}`; */
        console.log(elementoLi);

        /*         listaParaReservar.appendChild(elementoLi) */

    }

    botonesReservar[i].addEventListener("click", agregarHabitacionPorTipo);

}

console.log();