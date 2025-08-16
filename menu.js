// Add to menu.js (new file)  
document.querySelectorAll('.menu-filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const category = btn.dataset.category;
    document.querySelectorAll('.menu-category').forEach(section => {
      section.style.display = section.classList.contains(category) ? 'block' : 'none';
    });
  });
});