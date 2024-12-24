//La validación del formulário con javascript es considerada un desafío extra, no es obligatório realizar esta validación para realizar su entrega
document.querySelectorAll('.glass.watch-demo').forEach((demoContainer) => {
    const video = demoContainer.querySelector('.demo-video');
    demoContainer.addEventListener('click', () => {
        if (!demoContainer.classList.contains('playing')) {
            demoContainer.classList.add('playing');
            video.play();
        } else {
            demoContainer.classList.remove('playing');
            video.pause();
            video.currentTime = 0; // Reset the video
        }
    });
});