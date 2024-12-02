window.onload = () => {
  const navElement = document.querySelector('nav');
  const offset = navElement ? navElement.getBoundingClientRect().height : 60;
  const supportsSmoothScroll = 'scrollBehavior' in document.documentElement.style;

  // Function to handle scrolling to a target element
  const navigateToSection = (hash) => {
      if (!hash) return;

      const targetElement = document.querySelector(hash);
      if (targetElement) {
          const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - offset;

          window.scrollTo({
              top: targetPosition,
              behavior: supportsSmoothScroll ? "smooth" : "auto"
          });
      }
  };

  // Add click event listeners to all anchor links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener("click", event => {
          event.preventDefault();
          navigateToSection(link.getAttribute("href"));
      });
  });

  // Handle initial hash in the URL
  if (window.location.hash) {
      navigateToSection(window.location.hash);
  }

  // Handle changes to the hash (e.g., back/forward navigation)
  window.addEventListener("hashchange", () => {
      navigateToSection(window.location.hash);
  });
};