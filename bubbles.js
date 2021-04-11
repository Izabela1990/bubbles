var numberOfBubbles = 10
for (let i = 0; i < numberOfBubbles; i++)  newBubble() 
}
function newBubble(){
    let bubble = document.createElement("div")
    bubble.classList.add("bubble")
    let x = randomNumber(100)
    let delayn = randomNumber(3000)

  bubble.style.left = x + "vw"
  bubble.style.animationDelay = delay + "ms"
  bubble.style.borderColo = "rgb(red, green, blue)" 
    document.querySelector("body").appendChild(bubble)

}
function randomNumber(max){
    return Math.floor(Math.random() * max);
