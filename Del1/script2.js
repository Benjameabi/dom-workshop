const button1 = document.createElement("button");
button1.textContent = "Click Here"
document.body.append(button1);
button1.addEventListener("click", () => {
    document.body.style.backgroundColor = "#e0f2fe";
});

const button2 = document.createElement("button");
button2.textContent = "Add paragraph"
document.body.append(button2);
 const p = document.createElement("p");
button2.addEventListener("click", () => { 
    p.textContent = "2 hours";
    document.body.append(p);
});

const button3 = document.createElement("button");
button3.textContent = "Remove last paragraph"
document.body.append(button3);
button3.addEventListener("click", () => {
   p.remove();
});

const button4 = document.createElement("button");
button4.textContent = "Group Members"
document.body.append(button4);
    const h2 = document.createElement("h2");
button4.addEventListener("click", () => { 
    h2.textContent = "Pontus ,Olivia ,Benjame";
    document.body.append(h2);
});