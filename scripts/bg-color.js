window.onload = () => {
    // Add this script to your personal website to rotate through background colors

    // Define an array of colors for rotation
    const colors = ["#FFFFFF", "#D8BFD8", "#FFC0CB", "#B0E0E6", "#E6E6FA", "#ADD8E6"];
    
    // Set an interval for rotating colors
    const interval = 6000; // Change color every 3 seconds

    // Select the body element or any specific element you want to apply the background color
    const targetElements = [document.querySelector('header'), document.querySelector('nav')];

    let currentColorIndex = 0;

    // Apply initial styles for fade transition
    targetElements.forEach(element => {
        if (element) {
            element.style.transition = "background-color 6s ease-in-out";
        }
    });

    // Function to update the background color
    function rotateBackgroundColor() {
        targetElements.forEach(element => {
            if (element) {
                element.style.backgroundColor = colors[currentColorIndex];
            }
        });
        currentColorIndex = (currentColorIndex + 1) % colors.length; // Loop back to the first color
    }

    // Start the rotation
    setInterval(rotateBackgroundColor, interval);

    // Call the function once to set the initial color
    rotateBackgroundColor();
};