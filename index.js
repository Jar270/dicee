// p1 dice
let randomNum1 = Math.ceil(Math.random() * 6);
console.log(randomNum1);
let randomImg1 = "images/dice" + randomNum1 + ".png";
document.querySelector("img.img1").setAttribute("src", randomImg1);

//p2 dice
let randomNum2 = Math.ceil(Math.random() * 6);
console.log(randomNum2);
let randomImg2 = "images/dice" + randomNum2 + ".png";
document.querySelector("img.img2").setAttribute("src", randomImg2);

//winner
if(randomNum1 > randomNum2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
else if (randomNum1 == randomNum2) {
    document.querySelector("h1").innerHTML = "Tie!";
}
else {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}