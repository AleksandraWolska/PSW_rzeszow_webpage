console.log("script work")
const chosen_number = document.getElementById("numbers-choice");
const output2 = document.getElementById("game2-output");
const button2 = document.getElementById("game2-button")

//chosen_month.addEventListener("click", () => chosen_month.value = "")



let counter2 = 1
let drawed2 = -1;

let gameHandler2 = () => {
    console.log("clicked")
    output2.innerHTML = ""
    let chosen2 = chosen_number.value
    console.log(chosen2)
    if (counter2 === 1) {
        drawed2 = Math.floor((Math.random() * 100))
        console.log(drawed2)

    } else if (counter2 === 3) {
        output2.innerHTML = chosen2 == drawed2
            ? `Sukces!`
            : `Niepowodzenie, chodziło o ${drawed2}`
        counter2 = 1
        return
    }


    let result = chosen2 == drawed2

    if (result) counter2 = 0
    output2.innerHTML = result
        ? `Sukces!`
        : `Niepowodzenie, szukana liczba jest ${chosen2 > drawed2 ? "mniejsza" : "większa"}`
    counter2++
}


button2.addEventListener("click", gameHandler2)