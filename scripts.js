document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('changeTextButton');
    button.addEventListener('click', function() {
        document.querySelector('h1').textContent = 'Текст изменен!';
    });
});

