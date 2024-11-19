window.onload = () => {
  const offset = 80; // Adjust this value as per your design requirements
  const supportsSmoothScroll = 'scrollBehavior' in document.documentElement.style;

  // Select all anchor links with href starting with #
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
      }
    });
  });
};