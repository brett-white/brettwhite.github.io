window.onload = () => {
  const supportsSmoothScroll = 'scrollBehavior' in document.documentElement.style;

  // Select all anchor links with href starting with #
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault(); // Prevent default anchor behavior
      
      const navElement = document.querySelector('nav'); // Adjust selector if your nav element has a different tag or class
      const offset = navElement.offsetHeight;

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