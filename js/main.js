// Main JavaScript file
import { initExperience, toggleExperience } from "./experience.js";
import { initSmoothScroll, initScrollIndicator } from "./scroll.js";
import { initModal } from "./modal.js";

// Make toggleExperience globally available for inline onclick
window.toggleExperience = toggleExperience;

// Initialize all modules
document.addEventListener("DOMContentLoaded", () => {
  console.log("Portfolio website initialized");

  // Initialize all features
  initExperience();
  initSmoothScroll();
  initScrollIndicator();
  initModal();

  // Add any additional initialization code here
});

// Contact form handling (optional enhancement)
export function handleContactForm() {
  const contactForm = document.querySelector("#contact form");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      // Get form data
      const formData = new FormData(contactForm);
      const data = Object.fromEntries(formData);

      // Here you would typically send the data to a server
      console.log("Form submitted:", data);

      // Show success message (you can enhance this)
      alert("메시지가 전송되었습니다!");
      contactForm.reset();
    });
  }
}

// Initialize contact form handler
document.addEventListener("DOMContentLoaded", () => {
  handleContactForm();
});
