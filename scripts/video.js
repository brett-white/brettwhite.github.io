window.onload = () => {
    document.addEventListener('visibilitychange', () => {
        const video = document.querySelector('video');
        if (document.visibilityState === 'visible' && video) {
        video.load();
        video.play();
        }
    });
};