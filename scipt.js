document.addEventListener('DOMContentLoaded', () => {
    const lovePin = document.getElementById('love-pin');
    const flowerBtn = document.getElementById('flower-btn');

    if (lovePin) {
        lovePin.addEventListener('click', () => {
            lovePin.classList.remove('pop');
            void lovePin.offsetWidth;
            lovePin.classList.add('pop');
        });
    }

    if (flowerBtn) {
        flowerBtn.addEventListener('click', () => {
            flowerBtn.style.transform = 'translateY(-2px) scale(0.98)';
            setTimeout(() => {
                flowerBtn.style.transform = '';
            }, 160);
        });
    }
});
