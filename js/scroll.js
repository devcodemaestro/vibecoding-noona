// Scroll to top functionality
export function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// Smooth scroll for navigation links
export function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));

      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}

// Scroll indicator animation
export function initScrollIndicator() {
  window.addEventListener("scroll", () => {
    const scrollIndicator = document.querySelector("header .animate-bounce");

    if (scrollIndicator) {
      if (window.scrollY > 100) {
        scrollIndicator.style.opacity = "0";
      } else {
        scrollIndicator.style.opacity = "1";
      }
    }
  });
}

// Make scrollToTop globally available for inline onclick
window.scrollToTop = scrollToTop;

// Initialize on DOM load
document.addEventListener("DOMContentLoaded", () => {
  initSmoothScroll();
  initScrollIndicator();
});
