// JavaScript for the BloodSync Life website

// Toggle menu for mobile view
const menuBars = document.getElementById('menu-bars');
const navbar = document.querySelector('.navbar');
menuBars.onclick = () => {
  navbar.classList.toggle('active');
  menuBars.classList.toggle('fa-times'); // Change icon on click
};

// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('.navbar a');
navLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// Scroll to top functionality
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.className = 'scroll-to-top';
scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
document.body.appendChild(scrollToTopBtn);

scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
    scrollToTopBtn.style.display = 'block';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
});

// Emergency Blood Request Button Action
const emergencyBtn = document.querySelector('.btn a');
emergencyBtn.addEventListener('click', () => {
  alert('You are about to request emergency blood. Please proceed responsibly.');
});

// Gallery Interaction - Icon Hover Effects
const galleryIcons = document.querySelectorAll('.doc-icons i');
galleryIcons.forEach(icon => {
  icon.addEventListener('mouseover', () => {
    icon.style.color = '#f44336'; // Change icon color on hover
  });
  icon.addEventListener('mouseout', () => {
    icon.style.color = ''; // Reset icon color
  });
});

// "Read More" Button in About Section
const readMoreBtn = document.querySelector('.aboutbtn');
readMoreBtn.addEventListener('click', () => {
  alert('Learn more about how BloodSync can make a difference!');
});

// Additional JavaScript code can be added here for future interactivity needs.
