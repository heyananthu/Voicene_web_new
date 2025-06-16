document.addEventListener('DOMContentLoaded', () => {
    const card = document.getElementById('animatedCard');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    };
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                card.classList.add('animate-fade-up');
            } else {
                card.classList.remove('animate-fade-up');
            }
        });
    }, observerOptions);
    observer.observe(card);
});


