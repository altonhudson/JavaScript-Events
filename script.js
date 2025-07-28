let mouseEvents = document.querySelector('.mouse-events')

mouseEvents.addEventListener("mouseover", function(e) {
    mouseEvents.innerHTML = "HOVERED!!!!"
})
mouseEvents.addEventListener("mouseout", function(e) {
    mouseEvents.innerHTML = "Mouse Events"
})