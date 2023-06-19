/* En resumen, este código permite mostrar y ocultar un menú en dispositivos móviles al hacer clic en un botón específico. */

/* El código selecciona los elementos del DOM con las clases .trigger, .t-close y .site utilizando document.querySelector(). */

/* menuButton representa el botón que activa la visualización del menú en dispositivos móviles. */
const menuButton = document.querySelector(".trigger");

/* closeButton representa el botón que cierra el menú en dispositivos móviles. */
const closeButton = document.querySelector(".t-close");

/* site representa el elemento contenedor del menú. */
const site = document.querySelector(".site");

/* Se agrega un evento de escucha (click) al botón menuButton. Cuando se hace clic en él, se llama a una función que utiliza classList.toggle() para alternar la clase showmenu en el elemento site. Esto permite mostrar u ocultar el menú en función del estado actual de la clase. */
menuButton.addEventListener("click", function () {
    site.classList.toggle("showmenu");
});

/* Se agrega un evento de escucha (click) al botón closeButton. Cuando se hace clic en él, se llama a una función que utiliza classList.remove() para quitar la clase showmenu del elemento site, lo que oculta el menú. */
closeButton.addEventListener("click", function () {
    site.classList.remove("showmenu");
});
