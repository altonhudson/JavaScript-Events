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