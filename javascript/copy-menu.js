/* Este código se encarga de copiar el contenido de ciertos elementos en diferentes lugares del DOM para construir un menú en dispositivos móviles */

/* En resumen, este código se encarga de copiar el contenido de ciertos elementos en diferentes ubicaciones del DOM para construir un menú en dispositivos móviles. Asegúrate de que los selectores de los elementos sean correctos y de que los elementos existan en el momento de la ejecución. */

/* La función copyMenu() realiza las siguientes operaciones: */
function copyMenu() {
    /* Obtiene el contenido del elemento con clase .dpt-cat y lo copia en el elemento con clase .departments mediante la propiedad innerHTML. */
    const dptCategory = document.querySelector(".dpt-cat");
    const dptPlace = document.querySelector(".departments");
    dptPlace.innerHTML = dptCategory.innerHTML;

    /* Obtiene el contenido del elemento nav dentro de .header-nav y lo copia en el elemento nav dentro de .off-canvas. */
    const mainNav = document.querySelector(".header-nav nav");
    const navPlace = document.querySelector(".off-canvas nav");
    navPlace.innerHTML = mainNav.innerHTML;

    /* Obtiene el contenido del elemento con clase .header-top .wrapper y lo copia en el elemento con clase .off-canvas .thetop-nav. */
    const topNav = document.querySelector(".header-top .wrapper");
    const topPlace = document.querySelector(".off-canvas .thetop-nav");
    topPlace.innerHTML = topNav.innerHTML;
}

/* Después de definir la función copyMenu(), se invoca copyMenu() para ejecutar la copia del menú */
copyMenu();
