console.log("hello world");

const container = document.querySelector(".container");

const btn = document.getElementById("btn");

console.log(btn, container);

const cellNumber = 100;

const markup = `<div class="box"></div>`;

for (let index = 0; index < cellNumber; index++) {
    container.insertAdjacentHTML("beforeend", markup)
    
}