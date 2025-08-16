// js/section-control.js
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.nav-btn');
  const sections = document.querySelectorAll('section');
  
  function showSection(id) {
    sections.forEach(section => {
      section.classList.toggle('active', section.id === id);
    });
    
    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
    });
  }

  // Handle nav link clicks
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = this.getAttribute('href').substring(1);
      showSection(target);
      history.pushState(null, null, `#${target}`);
    });
  });

  // Handle initial load and back/forward navigation
  function handleInitialLoad() {
    const hash = location.hash ? location.hash.substring(1) : 'home';
    showSection(hash);
  }
  
  handleInitialLoad();
  window.addEventListener('popstate', handleInitialLoad);
});