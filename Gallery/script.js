const dots = document.querySelectorAll(".dot-container button");
const images = document.querySelectorAll(".image-container img");
// Current slide
let i = 0;
// Total slides
let j = 4;

// Next function
function next() {
    document.getElementById("content" + (i+1)).classList.remove("active");
    i = ( j + i + 1) % j;
    document.getElementById("content" + (i+1)).classList.add("active");
    indicator( i+ 1 );
}

// Previous function
function prev() {
    document.getElementById("content" + (i+1)).classList.remove("active");
    i = (j + i - 1) % j;
    document.getElementById("content" + (i+1)).classList.add("active");
    indicator(i+1);
}

// Indicator function
function indicator(num) {
    dots.forEach(function(dot) {
        dot.style.backgroundColor = "transparent";
    });
    document.querySelector(".dot-container button:nth-child(" + num + ")").style.backgroundColor = "#5d9fe2";
}

// Dot function
function dot(index) {
    images.forEach(function(image) {
        image.classList.remove("active");
    });
    document.getElementById("content" + index).classList.add("active");
    i = index - 1;
    indicator(index);
}