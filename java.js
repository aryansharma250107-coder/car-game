const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const box = 20;

let snake = [
    { x: 200, y: 200 },
    { x: 180, y: 200 },
    { x: 160, y: 200 }
];

let direction = "RIGHT";

let food = {
    x: Math.floor(Math.random() * 20) * box,
    y: Math.floor(Math.random() * 20) * box
};

let score = 0;

document.addEventListener("keydown", changeDirection);

function changeDirection(event) {
    if (event.key === "ArrowUp" && direction !== "DOWN")
        direction = "UP";

    if (event.key === "ArrowDown" && direction !== "UP")
        direction = "DOWN";

    if (event.key === "ArrowLeft" && direction !== "RIGHT")
        direction = "LEFT";

    if (event.key === "ArrowRight" && direction !== "LEFT")
        direction = "RIGHT";
}

function drawGame() {

    // Clear screen
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw snake
    snake.forEach((part, index) => {

        if (index === 0) {
            // Snake head
            ctx.fillStyle = "lime";
        } else {
            // Snake body
            ctx.fillStyle = "green";
        }

        ctx.fillRect(part.x, part.y, box - 2, box - 2);
    });

    // Draw food
    ctx.fillStyle = "red";
    ctx.fillRect(food.x, food.y, box - 2, box - 2);

    // New head position
    let headX = snake[0].x;
    let headY = snake[0].y;

    if (direction === "UP") headY -= box;
    if (direction === "DOWN") headY += box;
    if (direction === "LEFT") headX -= box;
    if (direction === "RIGHT") headX += box;

    let newHead = {
        x: headX,
        y: headY
    };

    // Game over
    if (
        headX < 0 ||
        headY < 0 ||
        headX >= canvas.width ||
        headY >= canvas.height ||
        collision(newHead, snake)
    ) {
        clearInterval(game);
        alert("Game Over! Score: " + score);
        location.reload();
        return;
    }

    snake.unshift(newHead);

    // Eat food
    if (headX === food.x && headY === food.y) {

        score++;

        document.getElementById("score").textContent = score;

        food = {
            x: Math.floor(Math.random() * 20) * box,
            y: Math.floor(Math.random() * 20) * box
        };

    } else {
        snake.pop();
    }
}

function collision(head, body) {

    for (let i = 0; i < body.length; i++) {

        if (
            head.x === body[i].x &&
            head.y === body[i].y
        ) {
            return true;
        }
    }

    return false;
}

let game = setInterval(drawGame, 120);