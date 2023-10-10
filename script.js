const crashSound = new Audio("/music/crash_sound.mp3");
const  lobbySound = new Audio("/music/lobby_sound.mp3");
const  gameOverSound= new Audio("/music/gameover.mp3");
const   carSound = new Audio("/music/car_sound.mp3");
let playerScore = document.getElementById("score");
let startGame = document.getElementById("start");
let gameTrack = document.getElementById("track");
let oppositeCar1 = document.getElementById("opposite-car1");
let oppositeCar2 = document.getElementById("opposite-car2");
let oppositeCar3 = document.getElementById("opposite-car3");
let oppositeCar4 = document.getElementById("opposite-car4");
let playerCar = document.getElementById("my-car");
let highScore = document.getElementById("highscore");
let score = 0;
let hScore = 0;

lobbySound.play();
startGame.addEventListener("click", function () {
    lobbySound.pause();
    carSound.play();
    scoretable.style.margin="8px 0 0 0";
    directions.style.margin="2rem 0 0 0";
    musicbtn.style.display="none";
    startGame.style.display = "none";
    gameTrack.style.animation = "trackanimation 25s linear infinite";

    setInterval(() => {
        randomSpot = Math.floor(Math.random() * (145 - 75 + 1) + 75)
        oppositeCar1.style.right = `${randomSpot}px`
        
    }, 4500)

    setInterval(() => {
        randomSpot = Math.floor(Math.random() * (70 - 5 + 1) + 5)
        oppositeCar2.style.right = `${randomSpot}px`
        
    }, 6000)

    setInterval(() => {
        randomSpot = Math.floor(Math.random() * (-5 + 70 + 1) - 70)
        oppositeCar3.style.right = `${randomSpot}px`
        
    }, 5000)

    setInterval(() => {
        randomSpot = Math.floor(Math.random() * (-75 + 145 + 1) - 145)
        oppositeCar4.style.right = `${randomSpot}px`
        
    }, 5500)

    oppositeCar1.style.animation = "ocar1 4.5s linear infinite"
    oppositeCar2.style.animation = "ocar2 6s linear infinite"
    oppositeCar3.style.animation = "ocar3 5s linear infinite"
    oppositeCar4.style.animation = "ocar4 5.5s linear infinite"

    let top = 80;
    let left = 0;
    window.addEventListener("keydown", x => {
        if (x.keyCode == 87)
            top = top - 5

        if (x.keyCode == 65)
            left = left - 1

        if (x.keyCode == 83)
            top = top + 5

        if (x.keyCode == 68)
            left = left + 1

        playerCar.style.top = `${top}vh`;
        playerCar.style.left = `${left}vw`;
    })

    window.addEventListener('keydown', e =>{
        moveSound.play();
        switch (e.key) {
            case "ArrowUp":
                console.log("ArrowUp");
                inputDir.x = 0;
                inputDir.y = -1;
                break;
    
            case "ArrowDown":
                console.log("ArrowDown");
                inputDir.x = 0;
                inputDir.y = 1;
                break;
    
            case "ArrowLeft":
                console.log("ArrowLeft");
                inputDir.x = -1;
                inputDir.y = 0;
                break;
    
            case "ArrowRight":
                console.log("ArrowRight");
                inputDir.x = 1;
                inputDir.y = 0;
                break;
            default:
                break;
        }
    
    });

    score = 0
    setInterval(() => {
        let oppositeCar1_left = Math.abs((oppositeCar1).getBoundingClientRect().left);
        let oppositeCar1_right = Math.abs((oppositeCar1).getBoundingClientRect().right);
        let oppositeCar1_top = Math.abs((oppositeCar1).getBoundingClientRect().top);
        let oppositeCar1_bottom = Math.abs((oppositeCar1).getBoundingClientRect().bottom);

        let oppositeCar2_left = Math.abs((oppositeCar2).getBoundingClientRect().left);
        let oppositeCar2_right = Math.abs((oppositeCar2).getBoundingClientRect().right);
        let oppositeCar2_top = Math.abs((oppositeCar2).getBoundingClientRect().top);
        let oppositeCar2_bottom = Math.abs((oppositeCar2).getBoundingClientRect().bottom);

        let oppositeCar3_left = Math.abs((oppositeCar3).getBoundingClientRect().left);
        let oppositeCar3_right = Math.abs((oppositeCar3).getBoundingClientRect().right);
        let oppositeCar3_top = Math.abs((oppositeCar3).getBoundingClientRect().top);
        let oppositeCar3_bottom = Math.abs((oppositeCar3).getBoundingClientRect().bottom);

        let oppositeCar4_left = Math.abs((oppositeCar4).getBoundingClientRect().left);
        let oppositeCar4_right = Math.abs((oppositeCar4).getBoundingClientRect().right);
        let oppositeCar4_top = Math.abs((oppositeCar4).getBoundingClientRect().top);
        let oppositeCar4_bottom = Math.abs((oppositeCar4).getBoundingClientRect().bottom);

        let playerCar_left = Math.abs(playerCar.getBoundingClientRect().left);
        let playerCar_right = Math.abs(playerCar.getBoundingClientRect().right);
        let playerCar_top = Math.abs(playerCar.getBoundingClientRect().top);
        let playerCar_bottom = Math.abs(playerCar.getBoundingClientRect().bottom);

        if (playerCar_left < 450 || playerCar_right > 1080 || playerCar_top < 30 || playerCar_bottom > 750) {
            gameOverSound.play()
            carSound.pause()
            setTimeout(() => {
                alert(`GAME OVER!`)
            })
            location.reload()
        }

        if (((oppositeCar1_left < playerCar_left && playerCar_left < oppositeCar1_right) || (oppositeCar1_left < playerCar_right && playerCar_right < oppositeCar1_right)) && ((oppositeCar1_top < playerCar_top && playerCar_top < oppositeCar1_bottom) || (oppositeCar1_top < playerCar_bottom && playerCar_bottom < oppositeCar1_bottom))) {
            crashSound.play()
            carSound.pause()
            setTimeout(() => {
                alert(`GAME OVER!`)
            })
            location.reload()
        }

        if (((oppositeCar2_left < playerCar_left && playerCar_left < oppositeCar2_right) || (oppositeCar2_left < playerCar_right && playerCar_right < oppositeCar2_right)) && ((oppositeCar2_top < playerCar_top && playerCar_top < oppositeCar2_bottom) || (oppositeCar2_top < playerCar_bottom && playerCar_bottom < oppositeCar2_bottom))) {
            crashSound.play()
            carSound.pause()
            setTimeout(() => {
                alert(`GAME OVER!`)
            })
            location.reload()
        }

        if (((oppositeCar3_left < playerCar_left && playerCar_left < oppositeCar3_right) || (oppositeCar3_left < playerCar_right && playerCar_right < oppositeCar3_right)) && ((oppositeCar3_top < playerCar_top && playerCar_top < oppositeCar3_bottom) || (oppositeCar3_top < playerCar_bottom && playerCar_bottom < oppositeCar3_bottom))) {
            crashSound.play()
            carSound.pause()
            setTimeout(() => {
                alert(`GAME OVER!`)
            })
            location.reload()
        }

        if (((oppositeCar4_left < playerCar_left && playerCar_left < oppositeCar4_right) || (oppositeCar4_left < playerCar_right && playerCar_right < oppositeCar4_right)) && ((oppositeCar4_top < playerCar_top && playerCar_top < oppositeCar4_bottom) || (oppositeCar4_top < playerCar_bottom && playerCar_bottom < oppositeCar4_bottom))) {
            crashSound.play()
            carSound.pause()
            setTimeout(() => {
                alert(`GAME OVER!`)
            })
            location.reload()
        }

        score = score + 1
        playerScore.innerHTML = `score: ${score}`
        if (score > hScore) {
            hScore = score
            localStorage.setItem("Highscore", JSON.stringify(hScore))
        }
    }, 100)
})

let hscoreval = localStorage.getItem("Highscore")
hScore = JSON.parse(hscoreval)
highScore.innerHTML = `High score: ${hScore}`

musicon.addEventListener('click',  function() {
    musicoff.style.display="block"
    musicon.style.display="none"
    lobbySound.pause()
})

musicoff.addEventListener('click', function(){
    musicon.style.display="block"
    musicoff.style.display="none"
    lobbySound.play()
})