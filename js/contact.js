// contact.js
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('.contact-form');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = contactForm.name.value;
        const email = contactForm.email.value;
        const message = contactForm.message.value;

        alert(`Terima kasih, ${name}. Pesan Anda telah dikirim!`);
        contactForm.reset();
    });
});
