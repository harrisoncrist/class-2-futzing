function bigBox() {
    let box = document.getElementById("circle");
    let currentWidth = box.offsetWidth;
    let currentHeight = box.offsetHeight;
    box.style.width = (currentWidth + 20) + "px";
    box.style.height = (currentHeight + 20) + "px";
}

function normalBox() {
    let box = document.getElementById("circle");
    let currentWidth = box.offsetWidth;
    let currentHeight = box.offsetHeight;
    box.style.width = 150 + "px";
    box.style.height = 150 + "px";
}

function smallBox() {
    let box = document.getElementById("circle");
    let currentWidth = box.offsetWidth;
    let currentHeight = box.offsetHeight;
    box.style.width = (currentWidth - 20) + "px";
    box.style.height = (currentHeight - 20) + "px";
}

