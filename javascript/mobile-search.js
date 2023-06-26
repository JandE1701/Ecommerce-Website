const searchButton = document.querySelector(".t-search"),
    tClose = document.querySelector(".search-close"),
    showClass = document.querySelector(".site");

searchButton.addEventListener("click", function () {
    showClass.classList.toggle("showsearch");
});

tClose.addEventListener("click", function () {
    showClass.classList.remove("showsearch");
});
