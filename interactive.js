function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}


// Hero Section Title Animation...
const titles = ["UI & UX Designer", "Web Developer", "Graphic Designer", "Frontend Developer"];
let index = 0;
const dynamicTitle = document.querySelector(".dynamic-title");

function typeTitle() {
    dynamicTitle.textContent = ""; // Clear previous title
    let charIndex = 0;
    const typingInterval = setInterval(() => {
        dynamicTitle.textContent += titles[index][charIndex];
        charIndex++;
        if (charIndex === titles[index].length) {
            clearInterval(typingInterval);
            setTimeout(() => deleteTitle(), 2000);
        }
    }, 100); 
}

function deleteTitle() {
    let charIndex = titles[index].length - 1;
    const deletingInterval = setInterval(() => {
        dynamicTitle.textContent = titles[index].substring(0, charIndex);
        charIndex--;
        if (charIndex < 0) {
            clearInterval(deletingInterval);
            index = (index + 1) % titles.length; // Move to the next title
            setTimeout(typeTitle, 500); // Wait before typing next title
        }
    }, 50); 
}

typeTitle(); // Start the typing effect

