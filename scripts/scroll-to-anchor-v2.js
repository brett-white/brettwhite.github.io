window.onload = function() {
// document.addEventListener("DOMContentLoaded", function () {
  const offset = 80; // Your desired offset value

  // Detect if smooth scroll behavior is supported
  const supportsSmoothScroll = 'scrollBehavior' in document.documentElement.style;

  // Select all anchor links with href starting with #
  const menuLinks = document.querySelectorAll('a[href^="#"]');

  menuLinks.forEach(link => {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default anchor behavior

      // Get the target section
      const targetID = this.getAttribute("href");
      const targetElement = document.querySelector(targetID);

      // Calculate the position to scroll to, considering the offset
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;

      // Scroll with smooth behavior if supported, else instant scroll
      if (supportsSmoothScroll) {
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth"
        });
      } else {
        window.scrollTo(0, targetPosition); // Fallback for older mobile browsers
      }
    });
  });
// });
};