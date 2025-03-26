window.addEventListener('load', () => {
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

    const sections = Array.from(document.querySelectorAll('main > section'));
    const navLinks = document.querySelectorAll('nav a');
    const nav = document.querySelector('nav');

    const changeLinkState = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const navHeight = nav.offsetHeight;
      let activeIndex = -1;

      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop - (windowHeight / 2) - navHeight && scrollPosition < sectionTop + sectionHeight) {
          activeIndex = index;
        }
      });

      sections.forEach((section, index) => {
        section.classList.toggle('active', index === activeIndex);
      });

      navLinks.forEach((link, index) => {
        link.classList.toggle('active', index === activeIndex);
      });
    };

    const throttle = (func, limit) => {
      let lastFunc;
      let lastRan;
      return function () {
        const context = this;
        const args = arguments;
        if (!lastRan) {
          func.apply(context, args);
          lastRan = Date.now();
        } else {
          clearTimeout(lastFunc);
          lastFunc = setTimeout(() => {
            if ((Date.now() - lastRan) >= limit) {
              func.apply(context, args);
              lastRan = Date.now();
            }
          }, limit - (Date.now() - lastRan));
        }
      };
    };

    changeLinkState();
    window.addEventListener('scroll', throttle(changeLinkState, 100));
});