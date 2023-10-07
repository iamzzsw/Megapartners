const but_lang = document.querySelector("#button_lang");
but_lang.addEventListener("click", (e) => {
    if(but_lang.innerText.toLowerCase() == "en") {
        but_lang.innerHTML = `<img src="img/Icon_Planet.svg">
            ru`
    } else if (but_lang.innerText.toLowerCase() === "ru") {
        but_lang.innerHTML = `<img src="img/Icon_Planet.svg">
            en`
    }
})

const but_menu = document.querySelector(".button_menu_adapt");
const menu = document.querySelector(".burger")
but_menu.addEventListener("click", () => {
    menu.classList.toggle("hide");
    if(!menu.classList.contains("hide")) {
        but_menu.innerHTML = `<img src="img/Close.svg">`
    } else {
        but_menu.innerHTML = `<img src="img/menu.svg">`
    }
})
