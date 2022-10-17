console.log("Cześć wszystkim, którzy tu zajrzą!");

let button = document.querySelector(".js-button");
let body = document.querySelector(".body");
let theme = document.querySelector(".js-theme");

button.addEventListener ("click", () => {
    body.classList.toggle("dark");


theme.innerText = body.classList.contains("dark")? "Jasny" : "Ciemny" ;
})
