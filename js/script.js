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

// go to section div
function goToSection(id) {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: 'smooth' });
}

// download resume
function downloadResume() {
    const link = document.createElement('a');
    link.href = '../assets/resume.pdf';
    link.download = 'JeremiahKollodge_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }