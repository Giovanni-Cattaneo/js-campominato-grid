console.log("hello world");

const container = document.querySelector(".container");

const btn = document.getElementById("btn");

console.log(btn, container);

let cellNumber;

const markup = `<div class="box"></div>`; // serve a creare i div con classe box in html

const skull = `<i class="fa-solid fa-skull"></i>`

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

        let skullArray = []



        for (let index = 0; myArray.length < cellNumber; index++) {// serve a creare 100 numeri consecutivi
            const element = myArray[index];
            myArray.push(index);// pusha nell'array vuota ogni numero man mano che viene generato
        }

        for (let index = 0; skullArray.length < 17; index++) {
            const randomNumber = getRndInteger(1, 100);
            if (!skullArray.includes(randomNumber)) { // Verifica se il numero casuale non è già presente nell'array
                skullArray.push(randomNumber);
            }
        }

        console.log(myArray, skullArray);

        const box = document.getElementsByClassName("box")// ci permette di cerare un array di box accessibili alle funzioni, ora sono nodi della dom

        for (let index = 0; index < box.length; index++) {
            const element = box[index];
            const sharedNumbers = skullArray.indexOf(myArray[index]); // indexof() ci permette di paragonare gli indici degli array per verificare se combaciano in tutto o in parte, il risultato è o -1 se non combaciano oppure la posizione dell'elemento nell'array
                
                    if (sharedNumbers !== -1) { // !== controlla se il avlore dell'elemento non corrisponde a -1, se non corrisponde allora l'elemento è condiviso senno non lo è ci aspettiamo 84 -1 in console
                        const boxElement = box[index]; // costante creata per recuperare index di box dalla dom
                        boxElement.innerHTML = skull;
                    } else {
                        element.innerHTML = myArray[index]
                    }

            element.addEventListener("click", function () {
                element.classList.toggle("blue")
                
                



                // if (element.innerHTML.includes(myArray[index], skullArray[index])) {
                //     element.innerHTML = "hello"
                // }

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


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
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

