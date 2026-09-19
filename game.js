function startGame() {
    alert("🔥 Welcome to Battle Arena! Get ready for battle!");
}

window.addEventListener("scroll", function () {

    const nav = document.querySelector("nav");

    if (window.scrollY > 50) {
        nav.style.background = "#050505";
    } else {
        nav.style.background = "#111";
    }

});