window.onload = () => {
  const navHeight = document.querySelector('nav').getBoundingClientRect().height || 60;
  const offset = navHeight * 0.96;

  const scrollToSection = (hash) => {
    if (!hash) return;

    const target = document.querySelector(hash);
    if (target) {
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Add event listeners to all anchor links
  document.querySelectorAll('a[href^="#"]')
    .forEach(link => link.addEventListener('click', (event) => {
      event.preventDefault();
      scrollToSection(link.getAttribute('href'));
    }));

  // Handle initial URL hash
  scrollToSection(window.location.hash);

  // Handle hash changes (back/forward navigation)
  window.addEventListener('hashchange', () => {
    scrollToSection(window.location.hash);
  });
};
