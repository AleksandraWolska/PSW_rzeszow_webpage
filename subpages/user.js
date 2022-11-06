"use strict"

const background_choice = document.getElementById("background-choice")
const text_color_choice = document.getElementById("text-color-choice")
const font_choice = document.getElementById("font-choice")

background_choice.addEventListener("input", (event) => document.body.style.backgroundColor = event.target.value)
text_color_choice.addEventListener("input", (event) => document.body.style.color = event.target.value)
font_choice.addEventListener("input", (event) => document.body.style.fontFamily = event.target.value)


const named_collection = document.getElementsByTagName("p");
const named_element = named_collection.namedItem("named-p");
named_element.style.fontSize = "1.4em"


const item = document.getElementsByTagName("p").item(0);
item.style.fontSize = "0.8em"
