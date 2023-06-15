/* Copy menu for mobile */

function copyMenu() {
    // Copiar el contenido de .dpt-cat a .departments
    const dptCategory = document.querySelector(".dpt-cat");
    const dptPlace = document.querySelector(".departments");
    dptPlace.innerHTML = dptCategory.innerHTML;

    // Copiar el contenido de .header-nav nav a .off-canvas nav
    const mainNav = document.querySelector(".header-nav nav");
    const navPlace = document.querySelector(".off-canvas nav");
    navPlace.innerHTML = mainNav.innerHTML;

    // Clonar .header-top .wrapper y añadirlo a .thetop-nav en .off-canvas
    const topNav = document.querySelector(".header-top .wrapper");
	const topPlace = document.querySelector(".off-canvas .thetop-nav");
	topPlace.innerHTML = topNav.innerHTML;
}

copyMenu();

/* Mostramos el menu en vistas mobile */
const menuButton = document.querySelector(".trigger");
const closeButton = document.querySelector(".t-close");
const site = document.querySelector(".site");

menuButton.addEventListener("click", function () {
    site.classList.toggle("showmenu");
});

closeButton.addEventListener("click", function () {
    site.classList.remove("showmenu");
});


/* Mostramos el sub menu en vistas mobile */

/* Se utiliza el nombre plural submenus para representar la colección de elementos. */
const submenus = document.querySelectorAll(".has-child .icon-small");

/* Se utiliza una función separada toggleSubMenu para manejar el evento de clic y alternar la clase expand en el elemento padre */
function toggleSubMenu(e) {
    e.preventDefault();

    /* Se utiliza const en lugar de let para declarar las constantes 'parent' y 'expandClass' ya que no se reasignan. */
    const parent = this.closest(".has-child");
    const expandClass = "expand";

    /* Se utiliza un ciclo forEach para recorrer todos los submenús y se remueve la clase expand de los elementos que no son el padre del submenú actual. */
    submenus.forEach((submenu) => {
        const submenuParent = submenu.closest(".has-child");
        /* Se utiliza una comprobación submenuParent !== parent para asegurarse de que solo se remueva la clase expand de los elementos que no son el padre del submenú actual. */
        if (submenuParent !== parent) {
            submenuParent.classList.remove(expandClass);
        }
    });

    /* Se utiliza parent.classList.toggle(expandClass) para alternar la clase expand en el elemento padre. */
    parent.classList.toggle(expandClass);
}

submenus.forEach((submenu) => {
    submenu.addEventListener("click", toggleSubMenu);
});


/* SLIDER */

/* Inicializar Swiper */
/* Finalmente, necesitamos inicializar Swiper en JS: */

// Aquí puedes agregar tu código de inicialización de Swiper
const swiper = new Swiper('.swiper', {
    // Opciones opcionales
    loop: true,

    // Si necesitas paginación
    pagination: {
        el: '.swiper-pagination',
    },

    // Flechas de navegación
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});