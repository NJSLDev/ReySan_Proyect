// MENU MODAL BUTTON

let headerBarResponsive = document.getElementsByClassName("header_bar_responsive")[0];


var btnMenu = document.getElementById("btnMenu");

var modalMenu = document.getElementById("modal_menu");
var image = document.getElementById("modal_image");
var close = document.getElementsByClassName("close")[0];



// let image = document.getElementById("modal-image");
// let close = document.getElementsByClassName("close")[0];

btnMenu.addEventListener("click", function(event){
    headerBarResponsive.style.display = "none";
    // event.preventDefault();

    image.src = "https://picsum.photos/300/200";
    modalMenu.style.display = "block";
});

close.addEventListener("click",function(){
    headerBarResponsive.style.display = "block";
    modalMenu.style.display = "none";
})