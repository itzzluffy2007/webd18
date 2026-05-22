const heading = document.getElementById('head');
const inputName = document.getElementById('inputbox');
const btn = document.getElementById('greet');

btn.addEventListener('click', () => {
    heading.innerText = "Hello, " + inputName.value;
});

const box1 = document.getElementById('box-1');
const color1 = box1.innerText;
box1.addEventListener("click", () => {
    box1.style.backgroundColor = color1;
})
const box2 = document.getElementById('box-2');
const color2 = box2.innerText;
box2.addEventListener("click", () => {
    box2.style.backgroundColor = color2;
})
const box3 = document.getElementById('box-3');
const color3 = box3.innerText;
box3.addEventListener("click", () => {
    box3.style.backgroundColor = color3;
})
const box4 = document.getElementById('box-4');
const color4 = box4.innerText;
box4.addEventListener("click", () => {
    box4.style.backgroundColor = color4;
})