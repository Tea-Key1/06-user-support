let lerp = { current: 100, target: 100, ease: 0.05 };

const container = document.getElementById('container');
let touchStartY = null;

container.addEventListener('touchstart', (e) => {
    touchStartY = e.touches[0].clientY;
});

container.addEventListener('touchmove', (e) => {
    const touchY = e.touches[0].clientY;
    const deltaY = touchY - touchStartY;

    if (deltaY > 0) {
        lerp.target += 0.01;
    } else {
        lerp.target -= 0.01;
        if (lerp.target < 0) {
            lerp.target = 100;
        }
    }

    touchStartY = touchY;
});

const tick = () => {
    lerp.current = gsap.utils.interpolate(
        lerp.current,
        lerp.target,
        lerp.ease
    );
    window.requestAnimationFrame(tick);
};

tick();