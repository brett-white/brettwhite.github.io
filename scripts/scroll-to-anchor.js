function scrollToAnchor(anchorId) {
    var targetElement = document.getElementById(anchorId);
  
    if (targetElement) {
      // Calculate the target offset relative to the document
      var targetOffset = targetElement.offsetTop;
  
      // Scroll to the target offset
      window.scrollTo({
        top: targetOffset,
        behavior: 'smooth' // You can use 'auto' for instant scrolling
      });
    }
  }
  
  // Example usage:
  // Assuming you have an anchor with the id "myAnchor"
  scrollToAnchor('myAnchor');
  