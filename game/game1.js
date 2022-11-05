console.log("script work")
const chosen_month = document.getElementById("months-choice");
const output = document.getElementById("game1-output");
const button = document.getElementById("game1-button")
const possible_values = ["styczeń", "luty", "marzec", "kwiecień", "maj", "czerwiec", "lipiec", "sierpień", "wrzesień", "październik", "listopad", "grudzień"]
chosen_month.addEventListener("click", () => chosen_month.value = "")



let counter = 1
let drawed = "";

let gameHandler1 = () => {
    output.innerHTML = ""
    let chosen = chosen_month.value.toLowerCase()

    if (counter === 1) {
        drawed = possible_values[Math.floor((Math.random() * possible_values.length))].toLowerCase()
    } else if (counter === 3) {
        output.innerHTML = chosen === drawed
            ? `Sukces!`
            : `Niepowodzenie, chodziło o ${drawed}`
        counter = 1
        return
    }

    output.innerHTML = chosen === drawed
        ? `Sukces!`
        : `Niepowodzenie, pozostało szans ${3 - counter}`
    counter++
}


button.addEventListener("click", gameHandler1)