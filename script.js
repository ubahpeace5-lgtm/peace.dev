function showWelcome() {
    const welcomeMessage = document.getElementById('welcome-message');
    if (welcomeMessage) {
        welcomeMessage.textContent = 'Thanks for visiting my portfolio!';
    }
}

function showProject(projectName) {
    const formMessage = document.getElementById('form-message');
    if (formMessage) {
        formMessage.textContent = 'You clicked on ' + projectName + '.';
    }
}

function submitForm(event) {
    event.preventDefault();

    const form = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');
    const nameInput = document.getElementById('name');

    if (form && formMessage && nameInput) {
        const name = nameInput.value.trim();

        if (name) {
            formMessage.textContent = 'Thanks, ' + name + '! Your message has been sent.';
        } else {
            formMessage.textContent = 'Thanks! Your message has been sent.';
        }

        form.reset();
    }
}
