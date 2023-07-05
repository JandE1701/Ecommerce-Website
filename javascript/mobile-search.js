/* Selecciona el botón de búsqueda */
const searchButton = document.querySelector(".t-search");

/* Selecciona el botón de cierre del campo de búsqueda */
const tClose = document.querySelector(".search-close");

/* Selecciona el contenedor del campo de búsqueda */
const showClass = document.querySelector(".site");

/* Agrega un evento de clic al botón de búsqueda */
searchButton.addEventListener("click", function () {
    /* Toggle: agrega o elimina la clase "showsearch" en el contenedor del campo de búsqueda */
    showClass.classList.toggle("showsearch");
});

/* Agrega un evento de clic al botón de cierre */
tClose.addEventListener("click", function () {
    /* Remueve la clase "showsearch" del contenedor del campo de búsqueda */
    showClass.classList.remove("showsearch");
});
