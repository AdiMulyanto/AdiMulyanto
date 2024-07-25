document.addEventListener('DOMContentLoaded', function () {
    // Smooth scroll to sections
    const links = document.querySelectorAll('nav ul li a');
    for (const link of links) {
        link.addEventListener('click', smoothScroll);
    }

    function smoothScroll(event) {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    }

    // Example of adding form submission handling
    const form = document.querySelector('form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        
        const nama = document.getElementById('nama').value;
        const pesan = document.getElementById('pesan').value;
        const whatsappNumber = '6281234567890'; // Ganti dengan nomor WhatsApp Anda

        const whatsappURL = `https://wa.me/${whatsappNumber}?text=Nama:%20${encodeURIComponent(nama)}%0APesan:%20${encodeURIComponent(pesan)}`;
        
        window.open(whatsappURL, '_blank');
    });

    // Animate skill bars
    const skillLevels = document.querySelectorAll('.skill-level');
    window.addEventListener('scroll', function () {
        for (const skill of skillLevels) {
            const skillTop = skill.getBoundingClientRect().top;
            if (skillTop < window.innerHeight) {
                skill.style.width = skill.dataset.level;
            }
        }
    });

    // Typing effect for header text
    const typingText = document.getElementById('typing-text');
    const textArray = ['Web Developer', 'UI/UX Designer', 'Freelancer'];
    let textIndex = 0;
    let charIndex = 0;

    function typeText() {
        typingText.textContent = '';
        let currentText = textArray[textIndex];
        let interval = setInterval(() => {
            if (charIndex < currentText.length) {
                typingText.textContent += currentText.charAt(charIndex);
                charIndex++;
            } else {
                clearInterval(interval);
                setTimeout(() => {
                    eraseText();
                }, 2000);
            }
        }, 100);
    }

    function eraseText() {
        let interval = setInterval(() => {
            let currentText = textArray[textIndex];
            if (charIndex > 0) {
                typingText.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
            } else {
                clearInterval(interval);
                textIndex = (textIndex + 1) % textArray.length;
                setTimeout(() => {
                    typeText();
                }, 500);
            }
        }, 50);
    }

    setTimeout(typeText, 1000);
});
