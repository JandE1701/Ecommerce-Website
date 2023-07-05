/* Selecciona el botón de desencadenar el evento */
const dptButton = document.querySelector(".dpt-cat .dpt-trigger");

/* Selecciona el elemento contenedor */
const siteElement = document.querySelector(".site");

/* Agrega un manejador de eventos al botón de clic */
dptButton.addEventListener("click", toggleDptClass);

/* Función de devolución de llamada para alternar la clase */
function toggleDptClass() {
    siteElement.classList.toggle("showdpt");
}
