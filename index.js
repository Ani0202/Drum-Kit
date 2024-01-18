var randomNumber1 = Math.floor((Math.random() * 6) + 1)
console.log(randomNumber1)
document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png")

var randomNumber2 = Math.floor((Math.random() * 6) + 1)
console.log(randomNumber2)
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png")

var text = "Draw!"
if (randomNumber1 > randomNumber2) {
    text = '🚩 Player1 wins'
} else if (randomNumber2 > randomNumber1){
    text = "Player2 wins 🚩"
}

document.querySelector("h1").textContent = text