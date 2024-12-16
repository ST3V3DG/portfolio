// Theme Toggle
const themeToggles = document.querySelectorAll(".themeToggle");
const html = document.documentElement;

// Check for saved theme preference
themeToggles.forEach((themeToggle) => {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    html.classList.add("dark");
    themeToggle.firstElementChild.classList.remove("fa-moon");
    themeToggle.firstElementChild.classList.add("fa-sun", "text-white");
  } else {
    html.classList.remove("dark");
    themeToggle.firstElementChild.classList.add("fa-moon");
    themeToggle.firstElementChild.classList.remove("fa-sun", "text-white");
  }

  themeToggle.addEventListener("click", () => {
    html.classList.toggle("dark");
    localStorage.theme = html.classList.contains("dark") ? "dark" : "light";
    if (html.classList.contains("dark")) {
    themeToggle.firstElementChild.classList.remove("fa-moon");
    themeToggle.firstElementChild.classList.add("fa-sun", "text-white");
  } else {
      themeToggle.firstElementChild.classList.add("fa-moon");
      themeToggle.firstElementChild.classList.remove("fa-sun", "text-white");
    }
  });
})

// Scroll Animations
const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.remove("opacity-0", "translate-y-12");
    } else {
      entry.target.classList.add("opacity-0", "translate-y-12");
    }
  });
}, observerOptions);

document.querySelectorAll("[data-animate]").forEach((element) => {
  observer.observe(element);
});

// Mobile Menu Toggle
const menuButton = document.getElementById('menuButton');
const mobileMenu = document.getElementById('mobileMenu');

menuButton.addEventListener('click', () => {
    // Change l'icône du menu
    const icon = menuButton.querySelector('i');
    if (mobileMenu.classList.contains('hidden')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
    
    // Toggle le menu
    mobileMenu.classList.toggle('hidden');
});

// Ferme le menu mobile quand on clique sur un lien
const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        const icon = menuButton.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});