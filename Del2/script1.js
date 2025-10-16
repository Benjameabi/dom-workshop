//Pontus,Olivia,Benjame

const buttons = document.querySelectorAll("button");
const p = document.querySelector("p");
const button1 = buttons[0];
const button2 = buttons[1];
const button3 = buttons[2];

button1.addEventListener("click", () => {
    p.style.backgroundColor = "#cdc1ff";
});

button2.addEventListener("click", () => {
    p.textContent += "Other text";
});

button3.addEventListener("click", () => {
    p.remove();
});
