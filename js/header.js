let menuBar = document.querySelector(".menuBar")
let menuContainer = document.querySelector(".menuContainer")
let closeContainer = document.querySelector(".closeContainer")
let searchContainer = document.querySelector(".searchContainer")
let searchBtn = document.querySelector(".searchBtn")
let searchBtnOpen = document.querySelector(".searchBtn .open")
let searchBtnClose = document.querySelector(".searchBtn .close")
let header = document.querySelector("header")

menuBar.addEventListener("click", function (params) {
    menuContainer.classList.add("activeMenuContainer")
})
closeContainer.addEventListener("click", function (params) {
    menuContainer.classList.remove("activeMenuContainer")
})
searchBtnOpen.addEventListener("click", function (params) {
    console.log("click");
    
    searchContainer.classList.add("openSearchContainer")
    searchBtn.classList.add("opensearchBtn")
    header.classList.add("blueHaeder")
})
searchBtnClose.addEventListener("click", function (params) {
    searchBtn.classList.remove("opensearchBtn")
    searchContainer.classList.remove("openSearchContainer")
    header.classList.remove("blueHaeder")
})


