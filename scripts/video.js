window.onload = () => {
    document.addEventListener('DOMContentLoaded', () => {
        const video = document.querySelector('video'); // Select your video element
      
        if (video) {
          // Listen for the video to be loaded and ready to play
          video.addEventListener('loadeddata', () => {
            video.play().catch((error) => {
              console.error('Error playing video:', error);
            });
          });
      
          // Set video properties for autoplay
          video.autoplay = true;
          video.muted = true;
          video.loop = true;
      
          // Preload video to ensure it starts quickly
          video.preload = 'auto';
        } else {
          console.error('Video element not found on the page.');
        }
      });
      
    document.addEventListener('visibilitychange', () => {
        const video = document.querySelector('video');
        if (document.visibilityState === 'visible' && video) {
            video.load();
            video.play();
        }
    });
};