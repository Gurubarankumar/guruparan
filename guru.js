// Optional: Smooth scroll enhancement
document.querySelectorAll('.page-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const skills = document.querySelectorAll('.fade-skill');
  const options = { threshold: 0.3 };
  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
        observer.unobserve(entry.target); // Optional: animate once
      }
    });
  }, options);

  skills.forEach(skill => {
    skill.style.animationPlayState = 'paused'; // Pause initially
    observer.observe(skill);
  });
});
