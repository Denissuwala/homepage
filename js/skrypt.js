{
    const welcome = () => {
    console.log("Cześć wszystkim, którzy tu zajrzą!");
}

const onChangeBackgroundColor = () => {
    const body = document.querySelector(".body");
    const theme = document.querySelector(".js-theme");

    body.classList.toggle("dark");
    theme.innerText = body.classList.contains("dark")? "Jasny" : "Ciemny" ;
};

welcome();
    
 const init = () => {
    const button = document.querySelector(".js-button");
    button.addEventListener ("click", onChangeBackgroundColor);
};

init();
};
