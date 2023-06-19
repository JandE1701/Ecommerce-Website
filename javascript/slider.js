/* En resumen, este código inicializa un slider utilizando la biblioteca Swiper, configurando opciones como el bucle, la paginación y las flechas de navegación. Es importante asegurarse de que la biblioteca Swiper esté correctamente incluida en el proyecto antes de utilizar este código. */

/* Este código se utiliza para inicializar un slider utilizando la biblioteca Swiper.*/

/* Se crea una instancia de Swiper mediante new Swiper(".swiper", {...}), donde ".swiper" es el selector del contenedor del slider. */
const swiper = new Swiper(".swiper", {
    /* loop: true indica que el slider debe reproducirse en un ciclo continuo. */
    loop: true,

    /* Si se necesita paginación, se configura la opción pagination con el selector del elemento de paginación (en este caso, ".swiper-pagination"). */
    pagination: {
        el: ".swiper-pagination",
    },

    /* Si se desea utilizar flechas de navegación, se configura la opción navigation con los selectores de los elementos para navegar al siguiente y al anterior (en este caso, ".swiper-button-next" y ".swiper-button-prev"). */
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
