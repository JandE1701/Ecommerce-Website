/* En resumen, este código se encarga de mostrar y ocultar submenús en dispositivos móviles cuando se hace clic en los elementos con clase .icon-small. Asegúrate de que los selectores sean correctos y de que los elementos existan en el momento de la ejecución. */

/* Este código se encarga de mostrar y ocultar submenús en dispositivos móviles cuando se hace clic en los elementos con clase .icon-small, Se utiliza document.querySelectorAll para seleccionar todos los elementos que cumplen con el selector .has-child .icon-small y se almacenan en la constante submenus. */
const submenus = document.querySelectorAll(".has-child .icon-small");

/* Se define una función llamada toggleSubMenu para manejar el evento de clic en los submenús. El evento se pasa como parámetro e en la función. */
function toggleSubMenu(e) {
    /* Dentro de toggleSubMenu, se utiliza e.preventDefault() para evitar el comportamiento predeterminado del clic y evitar que se siga el enlace. */
    e.preventDefault();

    /* Se declara la constante parent utilizando this.closest(".has-child"), que busca el elemento padre más cercano con la clase .has-child. */
    const parent = this.closest(".has-child");

    /* También se declara la constante expandClass con el valor "expand", que representa la clase a alternar en el elemento padre. */
    const expandClass = "expand";

    /* Se utiliza un ciclo forEach para recorrer todos los submenús y se remueve la clase expand de los elementos que no son el padre del submenú actual. */
    submenus.forEach((submenu) => {
        const submenuParent = submenu.closest(".has-child");
        /* Se utiliza una comprobación submenuParent !== parent para asegurarse de que solo se remueva la clase expand de los elementos que no son el padre del submenú actual. */
        if (submenuParent !== parent) {
            submenuParent.classList.remove(expandClass);
        }
    });

    /* Finalmente, se utiliza parent.classList.toggle(expandClass) para alternar la clase expand en el elemento padre, lo que muestra u oculta el submenú. */
    parent.classList.toggle(expandClass);
}

/* Se agrega un evento de clic a cada submenú utilizando submenu.addEventListener("click", toggleSubMenu) para llamar a la función toggleSubMenu cuando se hace clic en un submenú. */
submenus.forEach((submenu) => {
    submenu.addEventListener("click", toggleSubMenu);
});
