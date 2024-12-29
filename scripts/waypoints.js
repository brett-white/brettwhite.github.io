window.addEventListener('load', function () {
    const sections = Array.from(document.querySelectorAll('main > section'));
    const navLinks = document.querySelectorAll('nav a');
    const nav = document.querySelector('nav');

    function changeLinkState() {
        const navHeight = nav.offsetHeight; // Height of the navigation bar
        const scrollPosition = window.scrollY; // Adjust scroll position to match bottom of nav
        
        let activeIndex = -1;

        // Find the active section based on adjusted scroll position
        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const windowHeight = window.innerHeight;

            // Check if the top of the section meets the bottom of the nav bar
            if (scrollPosition >= sectionTop - (windowHeight/2) - navHeight && scrollPosition < sectionTop + sectionHeight) {
                activeIndex = index;
            }
        });

        // Update nav link states
        navLinks.forEach((link, index) => {
            if (index === activeIndex) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    function throttle(func, limit) {
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
    }

    // Call on load and scroll with throttling
    changeLinkState();
    window.addEventListener('scroll', throttle(changeLinkState, 100));
});
