let car = document.getElementById("car");

let position = 175;

document.addEventListener("keydown", function(event) {

    if (event.key === "ArrowLeft" && position > 0) {
        position -= 20;
    }

    if (event.key === "ArrowRight" && position < 350) {
        position += 20;
    }

    car.style.left = position + "px";
});