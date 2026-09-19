const playButton = document.querySelector(".play-btn");

playButton.addEventListener("click", startGame);

function startGame() {
    document.body.innerHTML = `
        <div id="game">
            <div id="top">
                <h2>🔥 BATTLE ARENA</h2>
                <div>
                    Score: <span id="score">0</span>
                    |
                    Time: <span id="time">30</span>
                </div>
            </div>

            <div id="arena">
                <div id="player">🧑‍🎤</div>
                <div id="enemy">👾</div>
            </div>

            <button id="shoot">🔫 SHOOT</button>
        </div>
    `;

    let score = 0;
    let time = 30;

    const enemy = document.getElementById("enemy");
    const scoreText = document.getElementById("score");
    const timeText = document.getElementById("time");
    const shoot = document.getElementById("shoot");

    function moveEnemy() {
        const arena = document.getElementById("arena");

        const maxX = arena.clientWidth - 70;
        const maxY = arena.clientHeight - 70;

        const x = Math.random() * maxX;
        const y = Math.random() * maxY;

        enemy.style.left = x + "px";
        enemy.style.top = y + "px";
    }

    shoot.addEventListener("click", function () {

        score += 10;

        scoreText.textContent = score;

        moveEnemy();
    });

    const enemyMove = setInterval(moveEnemy, 1000);

    const timer = setInterval(function () {

        time--;

        timeText.textContent = time;

        if (time <= 0) {

            clearInterval(timer);
            clearInterval(enemyMove);

            alert("Game Over! Your score: " + score);

            location.reload();
        }

    }, 1000);

    moveEnemy();
}