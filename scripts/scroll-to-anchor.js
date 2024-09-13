document.addEventListener("DOMContentLoaded", function () {
  // Set your desired offset value (in pixels)
  const offset = 80;

  // Select all anchor links with href starting with #
  const menuLinks = document.querySelectorAll('a[href^="#"]');

  // Loop through each link
  menuLinks.forEach(link => {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default anchor behavior

      // Get the target section
      const targetID = this.getAttribute("href");
      const targetElement = document.querySelector(targetID);

      // Calculate the position to scroll to, considering the offset
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;

      // Scroll to the adjusted position with smooth behavior
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });
    });
  });
});