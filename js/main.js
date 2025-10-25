// document.addEventListener("DOMContentLoaded", () => {
//   // Hero image slider
//   const hero = document.getElementById("hero");
//   const images = [
//     "https://images.unsplash.com/photo-1588075592446-266d88baf7a0?auto=format&fit=crop&w=1400&q=80",
//     "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1400&q=80",
//     "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1400&q=80",
//   ];
//   let current = 0;

//   setInterval(() => {
//     current = (current + 1) % images.length;
//     hero.style.backgroundImage = `url(${images[current]})`;
//   }, 5000);

//   // Fade-up animation
//   const elements = document.querySelectorAll(".fade-up");
//   const observer = new IntersectionObserver(
//     (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) entry.target.classList.add("animate-fadeUp");
//       });
//     },
//     { threshold: 0.1 }
//   );
//   elements.forEach((el) => observer.observe(el));

//   // Mobile menu toggle
//   const menuBtn = document.getElementById("menu-btn");
//   const menu = document.getElementById("menu");
//   menuBtn.addEventListener("click", () => menu.classList.toggle("hidden"));
// });
