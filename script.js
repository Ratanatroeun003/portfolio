const phrases = ["I'M A WEB DEVELOPER"];
const typedEl = document.getElementById("typed");
const typingSpeed = 70;
let charIndex = 0;

function typeLoop() {
  if (charIndex < phrases[0].length) {
    typedEl.textContent += phrases[0].charAt(charIndex);
    charIndex++;
    setTimeout(typeLoop, typingSpeed);
  }
}
document.addEventListener("DOMContentLoaded", typeLoop);

AOS.init({
  duration: 1200, // animation duration in ms
  offset: 100, // trigger after scrolling 100px
  easing: "ease-in-out",
  once: false, // <-- this makes animation repeat when scrolling
  mirror: true, // <-- animations also trigger when scrolling back up
});
