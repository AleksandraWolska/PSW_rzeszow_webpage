"use strict"

const firstname = document.getElementById("firstname")
const lastname = document.getElementById("lastname")


firstname.addEventListener("mouseover", () => {
    firstname.placeholder = "Mouse is here!"
});
firstname.addEventListener("mouseout", () => {
    firstname.placeholder = "Mouse is out!"

});

document.addEventListener("mousemove", () => {
    document.body.style.backgroundColor = "#cccccc"
});




document.addEventListener("mousedown", () => {
    const forms = document.forms
    for (let form of forms) {
        form.style.transform = "scale(1.3)"
        form.style.alignSelf = "center"
    }
});




const handleFocus = () => {
    hint = document.createElement("div")
    hint.id = "hint"
    hint.innerHTML = "Należy wpisać Twoje nazwisko"
    lastname.parentNode.appendChild(hint)
}


const handleBlur = () => {
    lastname.parentNode.removeChild(document.getElementById("hint"))

}

lastname.addEventListener("blur", handleBlur)

lastname.addEventListener("focus", handleFocus)





let cursor_log = document.querySelector('#cursor-log');
document.addEventListener('mousemove', logKey);

function logKey(e) {
  cursor_log.innerText = `
    Pozycja na ekranie X/Y: ${e.screenX}, ${e.screenY}
    Pozycja w oknie X/Y: ${e.clientX}, ${e.clientY}`;
}



const form = document.getElementsByTagName("form")
form[0].addEventListener('submit', () => alert("Wysłano dane"));
form[0].addEventListener('reset', () => alert("Zresretowano"));