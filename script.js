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
let focusMessage = document.querySelector('.focus-message')

formButton.addEventListener("click", function(e) {
    e.preventDefault()
    alert("Your form has been successfully submitted.")
})

userName.addEventListener("focus", function(e) {
    focusMessage.innerHTML = "Input gained focus."
    userName.style.backgroundColor = "lightyellow"
})

userName.addEventListener("blur", function(e) {
    focusMessage.innerHTML = "Input lost focus."
    userName.style.backgroundColor = "white"

})

