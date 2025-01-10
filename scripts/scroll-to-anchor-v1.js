window.onload = () => {
  const navElement = document.querySelector('nav');
  const offset = navElement ? navElement.getBoundingClientRect().height : 60;
  const supportsSmoothScroll = 'scrollBehavior' in document.documentElement.style;

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();

      const targetElement = document.querySelector(link.getAttribute("href"));
      if (targetElement) {
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo({
          top: targetPosition,
          behavior: supportsSmoothScroll ? "smooth" : "auto"
        });
      }
    });
  });

  if (window.location.hash) {
    const targetElement = document.querySelector(window.location.hash);
    if (targetElement) {
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top: targetPosition,
        behavior: supportsSmoothScroll ? "smooth" : "auto"
      });
    }
  }
};
