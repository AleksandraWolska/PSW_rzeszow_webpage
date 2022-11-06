"use strict"

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



//list 2

const attractions_section = document.getElementById("attractions-section")

const button_more_attractions = document.getElementById("more-attractions")



const button_less_attractions = document.createElement("button")
button_less_attractions.id = "less_attractions"
button_less_attractions.innerHTML = "Zobacz mniej"


const handleMoreAttractions = () => {
    //     <div>
    //     <a href="https://www.muzeumdobranocek.pl/"><img src="./images/muzeum-dobranocek.jpg" height="120"
    //             width="180" alt="Muzeum Dobranocek w Rzeszowie" /></a>

    //     <p>Muzeum Dobranocek</p>
    // </div>

    attraction_img = document.createElement('img');
    attraction_img.src = "./images/studnia.jpg"
    attraction_img.height = "120"
    attraction_img.width = "180"
    attraction_img.alt = "Studnia na Rynku"


    const text_node = document.createTextNode("Studnia na rynku")
    const attraction_p = document.createElement("p")
    attraction_p.appendChild(text_node)

    attraction_div = document.createElement("div")
    attraction_div.id = "new-attraction-div"
    attraction_div.appendChild(attraction_img)
    attraction_div.appendChild(attraction_p)

    button_more_attractions.parentNode.insertBefore(attraction_div, button_more_attractions)
    attractions_section.replaceChild(button_less_attractions, button_more_attractions)
    button_less_attractions.addEventListener("click", handleLessAttractions)
}

const handleLessAttractions = () => {

    attractions_section.removeChild(attraction_div)
    attractions_section.replaceChild(button_more_attractions, button_less_attractions)
}


button_more_attractions.addEventListener("click", handleMoreAttractions)




//wstawia element do listy po kliknieciu na gdzie zjeść > słodkie
const insert_list = document.getElementById("insert-elem")
insert_list.parentNode.addEventListener("click", () => {
    new_elem = document.createElement("li")
    new_elem.innerHTML = "dodatkowy element"
    insert_list.parentNode.appendChild(new_elem)
})



//demonstracja działania kolekcji images




const handleKeyDown = (event) => {

    console.log("clicked")
    console.log(event.altKey)
    if (event.altKey) {
        const webpage_images = document.images
        for (const image of webpage_images) {
            image.classList.toggle("images-collection")
        }
    }

    if (event.ctrlKey) {
        console.log(document.links.length)
        for (const link of document.links) {
            link.style.color == "red" ?link.style.color = "" : link.style.color = "red"
            
}

    }
    if (event.shiftKey) {
        document.getElementById("food-section").classList.toggle("shift-class")
    }
    if (event.keyCode == 48) { //zero
        document.getElementById("history-section").classList.toggle("key-code-class")
    }


}
