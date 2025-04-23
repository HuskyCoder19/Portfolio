// header typing animation
document.addEventListener("DOMContentLoaded", function () {
    const bio = `Jeremiah Kollodge`;
    const typingSpeed = 50;
    let index = 0;
    const paragraph = document.getElementById("name-header");

    function typeText() {
        if (index < bio.length) {
            paragraph.innerHTML += bio.charAt(index);
            index++;
            setTimeout(typeText, typingSpeed);
        } else {
            paragraph.style.borderRight = "none";
        }
    }

    typeText();
});