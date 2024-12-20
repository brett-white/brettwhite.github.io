window.onload = () => {
    // Add this script to your personal website to create a continuous gradient transition effect

    // Define an array of trending gradients for rotation
    const gradients = [
        "linear-gradient(45deg, #ff9a9e, #fad0c4)",
        "linear-gradient(45deg, #a1c4fd, #c2e9fb)",
        "linear-gradient(45deg, #ffecd2, #fcb69f)",
        "linear-gradient(45deg, #fbc2eb, #a6c1ee)",
        "linear-gradient(45deg, #fda085, #f6d365)"
    ];

    // Set an interval for rotating gradients
    const interval = 3000; // Change gradient every 3 seconds

    // Select the header and nav elements
    const targetElements = [document.querySelector('header'), document.querySelector('nav')];

    let currentGradientIndex = 0;

    // Apply initial styles for fade transition
    targetElements.forEach(element => {
        if (element) {
            element.style.transition = "background 3s ease-in-out"; // Smooth transition for gradients
        }
    });

    // Function to update the background gradient
    function rotateBackgroundGradient() {
        targetElements.forEach(element => {
            if (element) {
                element.style.background = gradients[currentGradientIndex];
            }
        });
        currentGradientIndex = (currentGradientIndex + 1) % gradients.length; // Loop back to the first gradient
    }

    // Start the rotation
    setInterval(rotateBackgroundGradient, interval);

    // Call the function once to set the initial gradient
    rotateBackgroundGradient();

};