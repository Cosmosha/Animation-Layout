gsap.registerPlugin(Flip);

const links = document.querySelectorAll('.nav-item a');
const activeNav = document.querySelector('.active-nav');

links.forEach(link => {
    link.addEventListener('click', () => {
        gsap.to(links, { color: '#252525' });
        if (document.activeElement === link) {
            gsap.to(link, { color: '#385ae0' });
        }

        //Animate active link
        const state = Flip.getState(activeNav);
        link.appendChild(activeNav);
        Flip.from(state, {
            duration: 1.5,
            absoulte: true,
            ease: 'elastic.out(1,0.5)'
        });
    });
});

//Cards
const cards = document.querySelectorAll('.card');

cards.forEach((card, index) => {
    card.addEventListener('click', () => {
        //Get state
        const state = Flip.getState(cards);

        //Add active class to the clicked event & inacitve event to unclicked elements
        const isCardActive = card.classList.contains('active');
        cards.forEach((otherCards, otherIndex) => {
            otherCards.classList.remove('active');
            otherCards.classList.remove('is-inacitve');
            if (!isCardActive && index !== otherIndex) {
                otherCards.classList.add('is-inactive');
            } else {
                otherCards.classList.remove('is-inactive');
            }
        });
        if (!isCardActive) card.classList.add('active');

        Flip.from(state, {
            duration: 1,
            ease: 'expo.out',
            absoulte: true,
        });
    });
});