document.addEventListener("DOMContentLoaded", () => {
    const lazyImages = document.querySelectorAll('[data-src]');
    const config = {
      rootMargin: "0px 0px 50px 0px", // Start loading slightly before the user scrolls to the image
      threshold: 0.01 // Trigger when at least 1% of the image is visible
    };
  
    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver((entries, self) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.add("loaded");
            self.unobserve(img); // Stop observing once the image is loaded
          }
        });
      }, config);
  
      lazyImages.forEach(img => observer.observe(img));
    } else {
      // Fallback for older browsers
      lazyImages.forEach(img => (img.src = img.dataset.src));
    }
  });