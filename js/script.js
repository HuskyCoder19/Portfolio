// about me typing animation
document.addEventListener("DOMContentLoaded", function () {
    const bio = `I am a professional Software Engineer with a B.S degree in Computer Science from Michigan Technological University. I am driven, hard-working, and a team player dedicated to mission success.
        As a full stack developer, I have strong experience and expertise in software architecture, object oriented programming, conncurrency, algorithms, and UI/UX design.
        I take pride in the work I do, and efficiently produce high-quality software that meets user demands and requirements.`;
    const typingSpeed = 10;
    let index = 0;
    const paragraph = document.getElementById("about-me");

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