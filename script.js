let clockElement = document.querySelector('.clock');
let tickTockSound = document.getElementById('tick-tock-sound');

function updateClock() {
    let now = new Date();
    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');
    let currentTime = `${hours}:${minutes}:${seconds}`;
    
    clockElement.innerHTML = currentTime;
    clockElement.setAttribute('data-time', currentTime);

    // Play tick-tock sound
    tickTockSound.currentTime = 0;
    tickTockSound.play();

    // GSAP animation
    gsap.fromTo(clockElement, 
        { rotateX: 10, rotateY: 10, opacity: 0.5 }, 
        { rotateX: 0, rotateY: 0, opacity: 1, duration: 1, ease: "power2.out" }
    );
}

setInterval(updateClock, 1000);
updateClock();
