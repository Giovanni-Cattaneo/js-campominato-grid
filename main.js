console.log("hello world");

const container = document.querySelector(".container");

const btn = document.getElementById("btn");

console.log(btn, container);

const cellNumber = 100;

const markup = `<div class="box"></div>`; // serve a creare i div con classe box in html

btn.addEventListener("click", play)

/**
 * Al click del bottone genera la griglia di gioco
 */
function play (){
 for (let index = 0; index < cellNumber; index++) {
    container.insertAdjacentHTML("beforeend", markup)// inseriamo il markup
    container.style.backgroundColor = "red" // diamo uno stile al bg solo al click dell'avvio del gioco
}

let myArray = []

for (let index = 0; myArray.length < 100; index++) {// serve a creare 100 numeri consecutivi
    const element = myArray[index];
    myArray.push(index);// pusha nell'array vuota ogni numero man mano che viene generato
}

console.log(myArray);

const box = document.getElementsByClassName("box")// ci permette di cerare un array di box accessibili alle funzioni, ora sono nodi della dom
console.log(box);

for (let index = 0; index < box.length; index++) {
    const element = box[index];
 
    console.log(element);
    element.addEventListener("click", function(){
        element.classList.toggle("blue")
        console.log(myArray[index]);
    })
}   
}

