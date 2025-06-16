document.addEventListener('DOMContentLoaded', () => {
    // Animate single card on scroll into view
    const card = document.getElementById('animatedCard');
    if (card) {
        const cardObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                card.classList.toggle('animate-fade-up', entry.isIntersecting);
            });
        }, { threshold: 0.2 });

        cardObserver.observe(card);
    }

    // Animate sections on scroll into view
    const sections = document.querySelectorAll('.flex-col, .md\\:flex-row');
    const sectionObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
                sectionObserver.unobserve(entry.target); // Animate once
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => sectionObserver.observe(section));
    
    // Filter logic for cards
    const industryFilter = document.getElementById('filterIndustries');
    const expertiseFilter = document.getElementById('filterExpertises');

    const filterCards = () => {
        const industry = industryFilter.value.trim().toLowerCase();
        const expertise = expertiseFilter.value.trim().toLowerCase();

        document.querySelectorAll('.card').forEach(card => {
            const cardIndustry = card.dataset.industry.toLowerCase();
            const cardExpertise = card.dataset.expertise.toLowerCase();

            const matchesIndustry = !industry || cardIndustry === industry;
            const matchesExpertise = !expertise || cardExpertise === expertise;

            card.classList.toggle('hidden', !(matchesIndustry && matchesExpertise));
        });
    };

    industryFilter.addEventListener('change', filterCards);
    expertiseFilter.addEventListener('change', filterCards);
});
