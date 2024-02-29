console.log("hello world");

const container = document.querySelector(".container");

const btn = document.getElementById("btn");

console.log(btn, container);

let cellNumber;

const markup = `<div class="box"></div>`; // serve a creare i div con classe box in html

const options = document.getElementById("select")

console.log(options);

btn.addEventListener("click", play)

/**
 * Al click del bottone genera la griglia di gioco
 */
function play() {
    container.innerHTML = ""
    if (options.value === "standard") {
        cellNumber = 100;
        container.style.width = "1000px"
        container.style.height = "1000px"
        for (let index = 0; index < cellNumber; index++) {
            container.insertAdjacentHTML("beforeend", markup)// inseriamo il markup
            container.style.backgroundColor = "red" // diamo uno stile al bg solo al click dell'avvio del gioco
        }

        let myArray = []

        for (let index = 1; myArray.length < cellNumber; index++) {// serve a creare 100 numeri consecutivi
            const element = myArray[index];
            myArray.push(index);// pusha nell'array vuota ogni numero man mano che viene generato
        }

        console.log(myArray);

        const box = document.getElementsByClassName("box")// ci permette di cerare un array di box accessibili alle funzioni, ora sono nodi della dom
        console.log(box);

        for (let index = 0; index < box.length; index++) {
            const element = box[index];

            console.log(element);
            element.addEventListener("click", function () {
                element.classList.toggle("blue")
                console.log(myArray[index]);
                element.innerHTML = myArray[index]

            })
        }

    } else if (options.value === "complesso") {
        cellNumber = 82;
        container.style.width = "900px"
        container.style.height = "900px"
        for (let index = 1; index < cellNumber; index++) {
            container.insertAdjacentHTML("beforeend", markup)// inseriamo il markup
            container.style.backgroundColor = "red" // diamo uno stile al bg solo al click dell'avvio del gioco

        }

        let myArray = []

        for (let index = 1; myArray.length < cellNumber; index++) {// serve a creare 100 numeri consecutivi
            const element = myArray[index];
            myArray.push(index);// pusha nell'array vuota ogni numero man mano che viene generato
        }

        console.log(myArray);

        const box = document.getElementsByClassName("box")// ci permette di cerare un array di box accessibili alle funzioni, ora sono nodi della dom
        console.log(box);

        for (let index = 0; index < box.length; index++) {
            const element = box[index];

            console.log(element);
            element.addEventListener("click", function () {
                element.classList.toggle("blue")
                console.log(myArray[index]);
                element.innerHTML = myArray[index]
            })
        }
    } else if (options.value === "impossibile") {
        cellNumber = 50;
        container.style.width = "700px"
        container.style.height = "700px"
        for (let index = 1; index < cellNumber; index++) {
            container.insertAdjacentHTML("beforeend", markup)// inseriamo il markup
            container.style.backgroundColor = "red" // diamo uno stile al bg solo al click dell'avvio del gioco
        }

        let myArray = []

        for (let index = 1; myArray.length < cellNumber; index++) {// serve a creare 100 numeri consecutivi
            const element = myArray[index];
            myArray.push(index);// pusha nell'array vuota ogni numero man mano che viene generato
        }

        console.log(myArray);

        const box = document.getElementsByClassName("box")// ci permette di cerare un array di box accessibili alle funzioni, ora sono nodi della dom
        console.log(box);

        for (let index = 0; index < box.length; index++) {
            const element = box[index];

            console.log(element);
            element.addEventListener("click", function () {
                element.classList.toggle("blue")
                console.log(myArray[index]);
                element.innerHTML = myArray[index]
            })
        }

    }

}



//  function clickBox() {
//     element = box[index]
//     element.classList.toggle("blue")
//     console.log(myArray[index]);
//     element.innerHTML = myArray[index]
//  }

/* 
function generateGrid(cellNumber){

}

*/