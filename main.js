console.log("hello world");

const container = document.querySelector(".container");

const btn = document.getElementById("btn");

console.log(btn, container);

const cellNumber = 100;

const markup = `<div class="box"></div>`;

for (let index = 0; index < cellNumber; index++) {
    container.insertAdjacentHTML("beforeend", markup)
    
}

let myArray = []

for (let index = 0; myArray.length < 100; index++) {
    const element = myArray[index];
    myArray.push(index);
}

console.log(myArray);

const box = document.getElementsByClassName("box")
console.log(box);

for (let index = 0; index < box.length; index++) {
    const element = box[index];
 
    console.log(element);
    element.addEventListener("click", function(){
        element.classList.toggle("blue")
        console.log(myArray[index]);
    })
}