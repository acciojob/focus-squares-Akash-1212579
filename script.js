//your JS code here. If required.
let current1 = document.getElementById("square1");
let current2 = document.getElementById("square2");
let current3 = document.getElementById("square3");

//for square 1
 // when mouse enters the element
    square1.addEventListener("mouseenter", () => {
     current2.classList.add("change-color");
		current3.classList.add("change-color");
    });

    // when mouse leaves the element
    square1.addEventListener("mouseleave", () => {
     current2.classList.remove("change-color");
		current3.classList.remove("change-color");
    });

//for square2

 // when mouse enters the element
    square2.addEventListener("mouseenter", () => {
     current1.classList.add("change-color");
		current3.classList.add("change-color");
    });

    // when mouse leaves the element
    square2.addEventListener("mouseleave", () => {
     current1.classList.remove("change-color");
		current3.classList.remove("change-color");
    });

//for square 3

 // when mouse enters the element
    square3.addEventListener("mouseenter", () => {
     current1.classList.add("change-color");
		current2.classList.add("change-color");
    });

    // when mouse leaves the element
    square3.addEventListener("mouseleave", () => {
     current1.classList.remove("change-color");
		current2.classList.remove("change-color");
    });