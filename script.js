document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('toggleButton');
    const message = document.getElementById('message');
    
    button.addEventListener('click', () => {
        if (message.classList.contains('hidden')) {
            message.classList.remove('hidden');
        } else {
            message.classList.add('hidden');
        }
    });
});
