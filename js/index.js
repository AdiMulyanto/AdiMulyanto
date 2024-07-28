// index.js
document.addEventListener('DOMContentLoaded', () => {
    const phrases = [
        'I am Beginners Web Developer',
        'Learning to Programming',
        'Welcome To My Website',
        'Contact Me for More Information'
    ];
    let currentPhraseIndex = 0;
    const typingTextElement = document.getElementById('typing-text');

    function typePhrase() {
        typingTextElement.textContent = '';
        const phrase = phrases[currentPhraseIndex];
        let currentCharacterIndex = 0;

        function typeCharacter() {
            if (currentCharacterIndex < phrase.length) {
                typingTextElement.textContent += phrase.charAt(currentCharacterIndex);
                currentCharacterIndex++;
                setTimeout(typeCharacter, 100); // Adjust typing speed here
            } else {
                setTimeout(() => {
                    currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
                    typePhrase();
                }, 2000); // Adjust delay before starting next phrase here
            }
        }

        typeCharacter();
    }

    typePhrase();
});
