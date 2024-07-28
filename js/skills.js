// skills.js
document.addEventListener('DOMContentLoaded', () => {
    const progressBars = document.querySelectorAll('.progress');

    progressBars.forEach(bar => {
        const value = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = value;
        }, 500);
    });
});
