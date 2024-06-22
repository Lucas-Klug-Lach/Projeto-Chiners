document.addEventListener('DOMContentLoaded', function() {
    alert('Bem-vindo ao site do Five Friends!');

    const themeToggle = document.getElementById('themeToggle');

    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    });
});