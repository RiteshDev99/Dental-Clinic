

// const scroll = new LocomotiveScroll({
//     el: document.querySelector('.main'),
//     smooth: true
// });


// var a = document.querySelector("#elem1")
// var image = a.getAttribute("data-image")
// cone)sole.log(imag

var elemc = document.querySelector(".elem-contanier")
var fixed = document.querySelector(".fixed-image")
elemc.addEventListener("mouseenter", function () {
    fixed.style.display = "block"
})
elemc.addEventListener("mouseleave", function () {
    fixed.style.display = "none"
})

var elems = document.querySelectorAll(".elem")
elems.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
        var image = e.getAttribute("data-image")
        fixed.style.backgroundImage = `url(${image})`
    })
})







// var menu = document.querySelector(".ri-menu-3-line");
// var full = document.querySelector(".fullscr");
// menu.addEventListener("click", function () {
//     full.style.top = 0


// });











function threeline() {
    var menu = document.querySelector("#threeline");
    var full = document.querySelector(".fullscr");
    var logo = document.querySelector("#logo");
    menu.addEventListener("click", function () {
      full.style.top = 0;
      logo.style.opacity = 0;
      menu.style.opacity = 0;
    });

    document.querySelector("#close_btn").addEventListener("click", function () {
      full.style.top = "-100%";
      logo.style.opacity = 1;
      menu.style.opacity = 1;
    });
}


function click() {
   var threeLine = document.getElementById("home");
   threeLine.addEventListener("click", function () {
     window.location.href = "./index.html";
   }); 
}
click();
threeline();