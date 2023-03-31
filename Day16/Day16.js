const zoomScreen = document.querySelector(".container");
const zoom = 1;
const zoom speed = 0.1

// The wheel event fires when the user rotates a wheel button on a pointing device (typically a mouse).
// For more details refer https://developer.mozilla.org/en-US/docs/Web/API/Element/wheel_event
document.addEventListener("wheel", (e) => {
    if(e.deltaY > 0)
    if (e.deltaY > 0) {
        zoomScreen.style.transform = `scale(${(zoom += zoomSpeed)})`;   
    } else {
        zoomScreen.style.transform = `scale(${(zoom -= zoomSpeed)})`;
    }
})