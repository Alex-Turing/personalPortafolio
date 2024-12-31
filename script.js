const projectCards = document.querySelectorAll('.projects__book-card');
const workExperienceCards = document.querySelectorAll('.work-experience__card');

workExperienceCards.forEach(card => {
    card.addEventListener('click', toggleFlip);
    card.addEventListener('touchstart', toggleFlip);
});

projectCards.forEach(card => {
    card.addEventListener('click', toggleFlip);
    card.addEventListener('touchstart', toggleFlip);
});


function toggleFlip(event) {
    event.preventDefault(); 
    this.classList.toggle('flipped');
}
