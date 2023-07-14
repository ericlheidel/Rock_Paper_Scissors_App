let hands = ["rock", "paper", "scissors"]

let showHandElOne = document.getElementById("get-hand-pone-el")
let showHandElTwo = document.getElementById("get-hand-ptwo-el")

function getHand() {
  let randomIndexOne = Math.floor( Math.random() * 3 )
  let randomIndexTwo = Math.floor( Math.random() * 3 )
  showHandElOne.textContent = hands[randomIndexOne]
  showHandElTwo.textContent = hands[randomIndexTwo]
}