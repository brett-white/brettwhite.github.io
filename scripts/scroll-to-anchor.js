window.onload = () => {
  const navElement = document.querySelector('nav');
  const offset = navElement ? navElement.offsetHeight : 60; // Dynamic height with fallback
  const supportsSmoothScroll = 'scrollBehavior' in document.documentElement.style;

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault(); // Prevent default anchor behavior

      const targetElement = document.querySelector(link.getAttribute("href"));
      if (targetElement) {
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;

        window.scrollTo({
          top: targetPosition,
          behavior: supportsSmoothScroll ? "smooth" : "auto"
        });
      } else {
        console.warn(`Element not found for anchor: ${link.getAttribute("href")}`);
      }
    });
  });
};
