// Experience card toggle functionality
export function initExperience() {
  const experienceCards = document.querySelectorAll(".experience-card");

  experienceCards.forEach((card) => {
    card.addEventListener("click", () => toggleExperience(card));
  });
}

export function toggleExperience(card) {
  const activeCard = document.querySelector(".experience-card.active");

  if (activeCard && activeCard !== card) {
    activeCard.classList.remove("active");
    activeCard.classList.remove("bg-accent-purple");
    activeCard.classList.add("bg-dark-card");
  }

  card.classList.toggle("active");

  if (card.classList.contains("active")) {
    card.classList.remove("bg-dark-card");
    card.classList.add("bg-accent-purple");
  } else {
    card.classList.remove("bg-accent-purple");
    card.classList.add("bg-dark-card");
  }
}

// Initialize on DOM load
document.addEventListener("DOMContentLoaded", () => {
  initExperience();
});
