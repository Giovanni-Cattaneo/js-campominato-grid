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
            container.style.backgroundColor = "blue" // diamo uno stile al bg solo al click dell'avvio del gioco
        }

        let myArray = []

        generateMyArray(myArray, cellNumber)


        let skullArray = []
        
        generateSkullArray(skullArray)

        console.log(myArray, skullArray);

        const box = document.getElementsByClassName("box")// ci permette di cerare un array di box accessibili alle funzioni, ora sono nodi della dom

        for (let index = 0; index < box.length; index++) {
            const element = box[index];

            element.addEventListener("click", function clickBox() {
                
                const sharedNumbers = skullArray.indexOf(myArray[index]); // indexof() ci permette di paragonare gli indici degli array per verificare se combaciano in tutto o in parte, il risultato è o -1 se non combaciano oppure la posizione dell'elemento nell'array
                
                    if (sharedNumbers !== -1) { // !== controlla se il avlore dell'elemento non corrisponde a -1, se non corrisponde allora l'elemento è condiviso senno non lo è ci aspettiamo 84 -1 in console
                        const boxElement = box[index]; // costante creata per recuperare index di box dalla dom
                        element.classList.add("red")
                        boxElement.innerHTML = skull;
                        console.log("You lose");
                        element.removeEventListener("click", clickBox); // dovrebbe rimuovere l'elemento click ma non lo fa indagare meglio dopo
                        
                    } else {
                        element.innerHTML = heart
                        element.classList.add("green")
                    }
            })
        }

    } else if (options.value === "complesso") {
        cellNumber = 81;
        container.style.width = "900px"
        container.style.height = "900px"
        for (let index = 0; index < cellNumber; index++) {
            container.insertAdjacentHTML("beforeend", markup)// inseriamo il markup
            container.style.backgroundColor = "blue" // diamo uno stile al bg solo al click dell'avvio del gioco
        }

        let myArray = []

        generateMyArray(myArray, cellNumber)


        let skullArray = []
        
        generateSkullArray(skullArray)

        console.log(myArray, skullArray);

        const box = document.getElementsByClassName("box")// ci permette di cerare un array di box accessibili alle funzioni, ora sono nodi della dom

        for (let index = 0; index < box.length; index++) {
            const element = box[index];

            element.addEventListener("click", function clickBox() {
                
                const sharedNumbers = skullArray.indexOf(myArray[index]); // indexof() ci permette di paragonare gli indici degli array per verificare se combaciano in tutto o in parte, il risultato è o -1 se non combaciano oppure la posizione dell'elemento nell'array
                
                    if (sharedNumbers !== -1) { // !== controlla se il avlore dell'elemento non corrisponde a -1, se non corrisponde allora l'elemento è condiviso senno non lo è ci aspettiamo 84 -1 in console
                        const boxElement = box[index]; // costante creata per recuperare index di box dalla dom
                        element.classList.add("red")
                        boxElement.innerHTML = skull;
                        console.log("You lose");
                        element.removeEventListener("click", clickBox); // dovrebbe rimuovere l'elemento click ma non lo fa indagare meglio dopo
                        
                    } else {
                        element.innerHTML = heart
                        element.classList.add("green")
                    }
            })
        }
    } else if (options.value === "impossibile") {
        cellNumber = 49;
        container.style.width = "700px"
        container.style.height = "700px"
        for (let index = 0; index < cellNumber; index++) {
            container.insertAdjacentHTML("beforeend", markup)// inseriamo il markup
            container.style.backgroundColor = "blue" // diamo uno stile al bg solo al click dell'avvio del gioco
        }

        let myArray = []

        generateMyArray(myArray, cellNumber)


        let skullArray = []
        
        generateSkullArray(skullArray)

        console.log(myArray, skullArray);

        const box = document.getElementsByClassName("box")// ci permette di cerare un array di box accessibili alle funzioni, ora sono nodi della dom

        for (let index = 0; index < box.length; index++) {
            const element = box[index];

            element.addEventListener("click", function clickBox() {
                
                const sharedNumbers = skullArray.indexOf(myArray[index]); // indexof() ci permette di paragonare gli indici degli array per verificare se combaciano in tutto o in parte, il risultato è o -1 se non combaciano oppure la posizione dell'elemento nell'array
                
                    if (sharedNumbers !== -1) { // !== controlla se il avlore dell'elemento non corrisponde a -1, se non corrisponde allora l'elemento è condiviso senno non lo è ci aspettiamo 84 -1 in console
                        const boxElement = box[index]; // costante creata per recuperare index di box dalla dom
                        element.classList.add("red")
                        boxElement.innerHTML = skull;
                        console.log("You lose");
                        element.removeEventListener("click", clickBox); // dovrebbe rimuovere l'elemento click ma non lo fa indagare meglio dopo
                        
                    } else {
                        element.innerHTML = heart
                        element.classList.add("green")
                    }
            })
        }

}
}


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

function generateSkullArray(skullArray){
    for (let index = 0; skullArray.length < 17; index++) {
        const randomNumber = getRndInteger(1, 100);
        if (!skullArray.includes(randomNumber)) { // Verifica se il numero casuale non è già presente nell'array
             skullArray.push(randomNumber);
        }
    }
    return skullArray
}