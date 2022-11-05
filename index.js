

//funkcja anonimowa wyświetlająca alert
window.addEventListener("DOMContentLoaded", () => window.alert("Ta strona nie wykorzystuje cookies!"))

//funkcja anonimowa umieszczająca tekst na stronie wprowadzony przez użytkownika
const button_prompt = document.getElementById("button-prompt")
button_prompt.addEventListener("click", () => {
    const text = prompt("Co chcesz umieścić na stronie?")
    document.getElementById("output-prompt").innerHTML = text

})

const number_prompt = document.getElementById("number-prompt")
number_prompt.addEventListener("click", () => handleNumberPrompt())
const output_number_prompt = document.getElementById("output-number-prompt")

//funkcja pobierająca liczbę, analizuje ją w zależności od tego czy jest całkowita i wyświtela tyle divów ile wynosi jej wartość
const handleNumberPrompt = () => {

    output_number_prompt.innerHTML = ""
    let num_string;
    let output_string = ""

    do {
        num_string = prompt("Wpisz numer, określający ilość nwoych divów")
    } while (isNaN(num_string))

    float_num = parseFloat(num_string)
    int_num = parseInt(num_string)

    if (float_num == int_num) {
        output_string += "Podana została liczba całkowita"
    } else {
        output_string += "Podana została liczba niecałkowita"
    }

    let i = 0

    while (i < int_num) {
        let number_div = document.createElement("div")
        number_div.innerHTML = output_string
        output_number_prompt.appendChild(number_div)
        i++
    }
}


const divs_prompt = document.getElementById("alert-prompt")
divs_prompt.addEventListener("click", () => handleColouredDivs())
const output_divs_prompt = document.getElementById("output-alert-prompt")

const handleColouredDivs = () => {
    output_divs_prompt.innerHTML = ""
    let num_string;

    do {
        num_string = prompt("Wpisz numer, określający ilość nwoych divów")
    } while (isNaN(num_string) || Number(num_string) < 0)
    num = Number(num_string)

    const input_color = prompt("Wpisz kolor (niebieski, zielony, czerwony")
    input_color.toLowerCase()
    let color

    switch (input_color) {
        case "niebieski":
            color = "#87CEFA"
            break
        case "zielony":
            color = "#98FB98"
            break
        case "czerwony":
            color = "#F08080"
            break
        default:
            color = "#cccccc"
    }

    for (let i = 0; i < Math.floor(num); i++) {

        let number_div = document.createElement("div")
        number_div.innerHTML = `div nr ${i + 1}`
        number_div.style.backgroundColor = color
        output_divs_prompt.appendChild(number_div)
    }
}

//funkcja generująca losową liczbę i nadpisująca stronę
const random_num = document.getElementById("random-num")
random_num.addEventListener("click", () => document.writeln(`Randomowa liczba: ${Math.floor(Math.random() * 100)}`))















