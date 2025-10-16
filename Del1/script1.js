const h2 = document.createElement("h2");
h2.textContent = "Min rubrik för dagen";
h2.style.color = "#1e3a8a";

const p = document.createElement("p");
p.textContent = "Overcast";
p.style.color = "#fef3c7";

const div = document.createElement("div");
div.textContent = "This is a colored box";
div.style.backgroundColor = "#10b981";
document.body.append(h2, p, div);
p.textContent = "16-10-25";
