let mouseEvents = document.querySelector('.mouse-events')

mouseEvents.addEventListener("mouseover", function(e) {
    mouseEvents.innerHTML = "HOVERED!!!!"
})
mouseEvents.addEventListener("mouseout", function(e) {
    mouseEvents.innerHTML = "Mouse Events"
})

let keyboardEvents = document.querySelector('.keyboard-events')
let keyPressed = document.querySelector(".key-pressed")

keyboardEvents.addEventListener('keydown', function(e) {
    keyPressed.innerHTML = e.key;
}) 

let formButton = document.querySelector('.form-button')
let userName = document.querySelector('.user-name')
let password = document.querySelector('.password')

formButton.addEventListener("click", function(e) {
    e.preventDefault()
    alert("Your form has been successfully submitted.")
})