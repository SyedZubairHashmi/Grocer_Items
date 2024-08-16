const rollDice1 = document.querySelector(".rollDice1");
const rollDice2 = document.querySelector("#rollDice2");

// Images
const img1 = document.querySelector(".one");
const img2 = document.querySelector(".two");
const img3 = document.querySelector(".three");
const img4 = document.querySelector(".four");
const img5 = document.querySelector(".five");
const img6 = document.querySelector(".six");

// Left score
const leftTotalScore = document.querySelector(".tScore");
const leftCurrentScore = document.querySelector(".cScore");

// Right score
const rightTotalScore = document.querySelector("#tScore");
const rightCurrentScore = document.querySelector("#cScore");

function firsPlayer(){
    img1.style.display = "none";
    img2.style.display = "none";
    img3.style.display = "none";
    img4.style.display = "none";
    img5.style.display = "none";
    img6.style.display = "none";
    
    // Generate a random number between 1 and 6
    const randomNumber = Math.floor(Math.random() * 6) + 1;

    // Display the corresponding image and update the current score
    if (randomNumber == 1) {
        img1.style.display = "block";
        leftCurrentScore.innerHTML = 0;
        leftTotalScore.innerHTML = 0;
        rollDice2.removeEventListener("click",firsPlayer)
        secondPlayer();
    } else if (randomNumber == 2) {
        img2.style.display = "block";
        leftCurrentScore.innerHTML = 2;
    } else if (randomNumber == 3) {
        img3.style.display = "block";
        leftCurrentScore.innerHTML = 3;
    } else if (randomNumber == 4) {
        img4.style.display = "block";
        leftCurrentScore.innerHTML = 4;
    } else if (randomNumber == 5) {
        img5.style.display = "block";
        leftCurrentScore.innerHTML = 5;
    } else if (randomNumber == 6) {
        img6.style.display = "block";
        leftCurrentScore.innerHTML = 6;
    }

    const leftcurrentScore = parseInt(leftCurrentScore.innerHTML);
    const lefttotalScore = parseInt(leftTotalScore.innerHTML);
    leftTotalScore.innerHTML = lefttotalScore + leftcurrentScore;

}

function secondPlayer(){
    img1.style.display = "none";
    img2.style.display = "none";
    img3.style.display = "none";
    img4.style.display = "none";
    img5.style.display = "none";
    img6.style.display = "none";

    // Generate a random number between 1 and 6
    const randomNumber = Math.floor(Math.random() * 6) + 1;

    // Display the corresponding image and update the current score
    if (randomNumber == 1) {
        img1.style.display = "block";
        rightCurrentScore.innerHTML = 0;
        rightTotalScore.innerHTML = parseInt(rightTotalScore.innerHTML) + parseInt(rightCurrentScore.innerHTML);
        rollDice2.removeEventListener("click",secondPlayer)
        firstPlayer();
    } else if (randomNumber == 2) {
        img2.style.display = "block";
        rightCurrentScore.innerHTML = 2;
    } else if (randomNumber == 3) {
        img3.style.display = "block";
        rightCurrentScore.innerHTML = 3;
    } else if (randomNumber == 4) {
        img4.style.display = "block";
        rightCurrentScore.innerHTML = 4;
    } else if (randomNumber == 5) {
        img5.style.display = "block";
        rightCurrentScore.innerHTML = 5;
    } else if (randomNumber == 6) {
        img6.style.display = "block";
        rightCurrentScore.innerHTML = 6;
    }

    // Convert the scores to integers and add the current score to the total score
    const rightcurrentScore = parseInt(rightCurrentScore.innerHTML);
    const righttotalScore = parseInt(rightTotalScore.innerHTML) || 0;
    rightTotalScore.innerHTML = righttotalScore + rightcurrentScore;
}

rollDice1.addEventListener("click",firsPlayer)


rollDice2.addEventListener("click",secondPlayer)
