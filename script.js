document.querySelectorAll('.work-experience__card').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });
});