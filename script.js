
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.2 });

  sections.forEach(section => observer.observe(section));
});

document.addEventListener("DOMContentLoaded", () => {
const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');

hamburger.addEventListener('click', () => {
  sidebar.classList.toggle('show');
});
});


const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});



document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, { threshold: 0.2 });
  
    document.querySelectorAll("section").forEach(sec => observer.observe(sec));
  });