window.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('nav');
    const navHeight = nav.offsetHeight || 60; // Use offsetHeight for more accurate nav height
    const offset = navHeight * 0.96;
    const sections = document.querySelectorAll('main > section');
    const navLinks = nav.querySelectorAll('a');
  
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
  
    navLinks.forEach(link => link.addEventListener('click', (event) => {
      event.preventDefault();
      scrollToSection(link.getAttribute('href'));
    }));
  
    scrollToSection(window.location.hash);
  
    window.addEventListener('hashchange', () => {
      scrollToSection(window.location.hash);
    });
  
    const changeLinkState = () => {
      const scrollPosition = window.scrollY;
      let activeIndex = -1;
  
      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const windowHeight = window.innerHeight;
  
        // Simplified active section check
        if (scrollPosition >= sectionTop - (windowHeight / 2) - navHeight && scrollPosition < sectionTop + sectionHeight) {
          activeIndex = index;
        }
      });
  
      navLinks.forEach((link, index) => {
        link.classList.toggle('active', index === activeIndex); // Use toggle for cleaner code
      });
    };
  
    const throttle = (func, limit) => {
      let lastFunc;
      let lastRan;
      return function() {
        const context = this;
        const args = arguments;
        if (!lastRan) {
          func.apply(context, args);
          lastRan = Date.now();
        } else {
          clearTimeout(lastFunc);
          lastFunc = setTimeout(function() {
            if ((Date.now() - lastRan) >= limit) {
              func.apply(context, args);
              lastRan = Date.now();
            }
          }, limit - (Date.now() - lastRan));
        }
      }
    };
  
    changeLinkState();
    window.addEventListener('scroll', throttle(changeLinkState, 100));
  });