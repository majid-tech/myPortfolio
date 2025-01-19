// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
  hamburger.setAttribute('aria-expanded', !isExpanded);
});

// Typing effect for hero section
const typingElement = document.querySelector('.typing');
const textToType = 'Full-Stack Developer';
let index = 0;

function typeText() {
  if (index < textToType.length) {
    typingElement.innerHTML += textToType[index];
    index++;
    setTimeout(typeText, 150); // Delay between each character
  }
}

document.addEventListener('DOMContentLoaded', typeText);

// Smooth scroll for navigation links
const links = document.querySelectorAll('.nav-links a');

links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    window.scrollTo({
      top: targetElement.offsetTop - 80, // Adjust for fixed navbar
      behavior: 'smooth'
    });
  });
});


// Scroll animations
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.3 });

sections.forEach(section => {
  observer.observe(section);
});


// Modal for project details
const projectButtons = document.querySelectorAll('.project .btn');
const modal = document.createElement('div');
modal.classList.add('modal');
document.body.appendChild(modal);

projectButtons.forEach(button => {
  button.addEventListener('click', () => {
    modal.classList.add('active');
    modal.innerHTML = `
      <div class="modal-content">
        <span class="close-modal">&times;</span>
        <h2>Project Details</h2>
        <p>More details about the project will go here...</p>
      </div>
    `;
    document.querySelector('.close-modal').addEventListener('click', () => {
      modal.classList.remove('active');
    });
  });
});


// Contact form validation
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', (e) => {
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const message = document.querySelector('#message').value;

  if (!name || !email || !message) {
    alert('Please fill out all fields.');
    e.preventDefault();
  }
});


// Back to Top button functionality
const backToTopButton = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});


// Toggle mobile menu visibility
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});


// Fade-in effect for the header
window.addEventListener('load', () => {
    const header = document.querySelector('.hero');
    header.classList.add('fade-in');
  });
  