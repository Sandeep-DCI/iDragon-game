let score = 0;
let cross = true;


// hier I can put backgraund music files
//audio = new Audio("music.mp3");
//audiogo = new Audio("gameover.mp3");
setTimeout(() => {
   // audio.play
}, 100);

document.onkeydown = (event) => {
    console.log("key code is: ", event.keyCode)
    if (event.keyCode === 38) {
        penguin = document.querySelector(".penguin");
        penguin.classList.add("animatePenguin");
        setTimeout(() => {
            penguin.classList.remove("animatePenguin")
        }, 700);
    }
    if (event.keyCode === 39) {
        penguin = document.querySelector(".penguin");
        penguinX = parseInt(window.getComputedStyle(penguin, null).getPropertyValue("left"));
        penguin.style.left = penguinX + 112 + "px";

    }
    if (event.keyCode === 37) {
        penguin = document.querySelector(".penguin");
        penguinX = parseInt(window.getComputedStyle(penguin, null).getPropertyValue("left"));
        penguin.style.left = (penguinX - 112) + "px";

    }
}


setInterval(() => {
    penguin = document.querySelector(".penguin");
    gameOver = document.querySelector(".gameOver");
    dino = document.querySelector(".dino");
    scoreCount = document.querySelector(".scoreCount");

    px = parseInt(window.getComputedStyle(penguin, null).getPropertyValue("left"));
    py = parseInt(window.getComputedStyle(penguin, null).getPropertyValue("top"));

    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"));
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue("top"));

    offsetX = Math.abs(px - dx)
    offsetY = Math.abs(py - dy)

    if (offsetX < 73 && offsetY < 52) {
        gameOver.innerHTML = "Game Over- Reload to play Again";
        dino.classList.remove("dinoAni")
        //audiogo.play();
        setTimeout(() => {
           // audiogo.pause();
           // audio.pause();
        }, 1000);
    } else if (offsetX < 145 && cross) {
        score += 1;
        //console.log("your score is : " + score);
        updateScore(score)
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);

        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(dino, null).getPropertyValue("animation-duration"));
            newDur = aniDur - 0.1;
            dino.style.animationDuration = newDur + "s";
        }, 500)

    }


}, 10);


function updateScore(score) {
    scoreCount.innerHTML = "Your Score: " + score
}