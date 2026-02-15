const num = document.querySelector("#num");
const add = document.querySelector("#addition");
const sub = document.querySelector("#sub");
let count = 0;

const increment = () => {
    count++;
    num.innerHTML = count;
}

const decrement = () => {
    count--;
    num.innerHTML = count;
}

add.addEventListener("click", increment)
sub.addEventListener("click", decrement)