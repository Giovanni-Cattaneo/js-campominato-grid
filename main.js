console.log("hello world");

const container = document.querySelector(".container");

const btn = document.getElementById("btn");

console.log(btn, container);

let cellNumber;

const markup = `<div class="box"></div>`; // serve a creare i div con classe box in html

const skull = `<i class="fa-solid fa-skull"></i>`

const heart = `<i class="fa-solid fa-heart"></i>`

const options = document.getElementById("select")

console.log(options);

const score = document.getElementById("score")

btn.addEventListener("click", play)

/**
 * Al click del bottone genera la griglia di gioco
 */
function play() {
    container.innerHTML = ""
    if (options.value === "standard") {
        generateGrid(100, container, markup, "1000px", "1000px")

        let myArray = []

        generateMyArray(myArray, 100)

        let skullArray = []

        generateSkullArray(skullArray, 100)

        console.log(myArray, skullArray);

        const box = document.getElementsByClassName("box")// ci permette di cerare un array di box accessibili alle funzioni, ora sono nodi della dom

        for (let index = 0; index < box.length; index++) {
            const element = box[index];
            element.addEventListener("click", function () {
                clickBox(skullArray, myArray, element, index, box, skull, heart);
            });
        }

    } else if (options.value === "complesso") {

        generateGrid(81, container, markup, "900px", "900px")

        let myArray = []

        generateMyArray(myArray, 81)


        let skullArray = []

        generateSkullArray(skullArray, 81)

        console.log(myArray, skullArray);

        const box = document.getElementsByClassName("box")// ci permette di cerare un array di box accessibili alle funzioni, ora sono nodi della dom


        for (let index = 0; index < box.length; index++) {
            const element = box[index];
            element.addEventListener("click", function () {
                clickBox(skullArray, myArray, element, index, box, skull, heart);
            });
        }

    } else if (options.value === "impossibile") {

        generateGrid(49, container, markup, "700px", "700px")

        let myArray = []

        generateMyArray(myArray, 49)

        let skullArray = []

        generateSkullArray(skullArray, 49)

        console.log(myArray, skullArray);

        const box = document.getElementsByClassName("box")// ci permette di cerare un array di box accessibili alle funzioni, ora sono nodi della dom

        for (let index = 0; index < box.length; index++) {
            const element = box[index];
            element.addEventListener("click", function () {
                clickBox(skullArray, myArray, element, index, box, skull, heart);
            });
        }

    }
}



// Zona funzioni
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateMyArray(myArray, cellNumber) {
    for (let index = 0; myArray.length < cellNumber; index++) {// serve a creare 100 numeri consecutivi
        const element = myArray[index];
        myArray.push(index);// pusha nell'array vuota ogni numero man mano che viene generato
    }
    return myArray
}

function generateSkullArray(skullArray , cellNumber) {
    for (let index = 0; skullArray.length < 16; index++) {
        const randomNumber = getRndInteger(1, cellNumber);
        if (!skullArray.includes(randomNumber)) { // Verifica se il numero casuale non è già presente nell'array
            skullArray.push(randomNumber);
        }
    }
    return skullArray
}

function generateGrid(cellNumber, container, markup, width, height) {
    cellNumber = cellNumber;
    container.style.width = width
    container.style.height = height
    for (let index = 0; index < cellNumber; index++) {
        container.insertAdjacentHTML("beforeend", markup)// inseriamo il markup
        container.style.backgroundColor = "blue" // diamo uno stile al bg solo al click dell'avvio del gioco
    }
}

function clickBox(skullArray, myArray, element, index, box, skull, heart) {
    index = myArray[index]
    box = box[index]
    const sharedNumbers = skullArray.indexOf(myArray[index]); // indexof() ci permette di paragonare gli indici degli array per verificare se combaciano in tutto o in parte, il risultato è o -1 se non combaciano oppure la posizione dell'elemento nell'array

    if (sharedNumbers !== -1) { // !== controlla se il avlore dell'elemento non corrisponde a -1, se non corrisponde allora l'elemento è condiviso senno non lo è ci aspettiamo 84 -1 in console
        const boxElement = box[index]; // costante creata per recuperare index di box dalla dom
        element.classList.add("red")
        element.innerHTML = skull;
        gameOver()
        // element.removeEventListener("click", clickBox); // dovrebbe rimuovere l'elemento click ma non lo fa indagare meglio dopo

    } else {
        element.innerHTML = heart
        element.classList.add("green")
    }
}

function gameOver() {
    const greenScore = document.getElementsByClassName("green").length

    score.innerHTML = `Hai trovato ${greenScore} cuori, game over`;

}