// Client Images Slideshow
document.addEventListener('DOMContentLoaded', function() {
  const clientImages = document.querySelector('.client-images');
  const prevArrow = document.querySelector('.prev-arrow');
  const nextArrow = document.querySelector('.next-arrow');
  const imageWidth = 120; // Should match your CSS width + gap
  const scrollAmount = imageWidth + 15; // Width + gap
  
  // Scroll to the left
  prevArrow.addEventListener('click', function() {
    clientImages.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth'
    });
  });
  
  // Scroll to the right
  nextArrow.addEventListener('click', function() {
    clientImages.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  });
  
  // Auto-scroll every 3 seconds (optional)
  setInterval(() => {
    if (clientImages.scrollLeft + clientImages.clientWidth >= clientImages.scrollWidth - 10) {
      clientImages.scrollTo({
        left: 0,
        behavior: 'smooth'
      });
    } else {
      clientImages.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  }, 3000);
});

document.addEventListener('DOMContentLoaded', function() {
  const testimonials = [
    {
      text: "The best braai in the township! Always fresh and delicious.",
      author: "Thando M."
    },
    {
      text: "The atmosphere here is electric, and the food is out of this world. Highly recommend!",
      author: "Zola N."
    },
    {
      text: "My family and I love coming here for our weekend meals. Great portions and friendly staff.",
      author: "Lerato P."
    }
  ];

  const testimonialSlide = document.querySelector('.testimonials-slide');
  let currentIndex = 0;

  function rotateTestimonials() {
    currentIndex = (currentIndex + 1) % testimonials.length;
    const testimonial = testimonials[currentIndex];
    
    testimonialSlide.innerHTML = `"${testimonial.text}" <strong>- ${testimonial.author}</strong>`;
    testimonialSlide.style.animation = 'none';
    void testimonialSlide.offsetWidth; // Trigger reflow
    testimonialSlide.style.animation = 'fadeIn 1s ease';
  }

  // Rotate every 5 seconds
  setInterval(rotateTestimonials, 5000);
}); 

// Add pause on hover
testimonialSlide.addEventListener('mouseenter', () => clearInterval(rotationInterval));
testimonialSlide.addEventListener('mouseleave', () => {
  rotationInterval = setInterval(rotateTestimonials, 5000);
});