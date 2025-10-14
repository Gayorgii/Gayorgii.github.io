var but = 0 ;
document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('changeTextButton');
    button.addEventListener('click', function() {
        if (but ==0){
        document.querySelector('h1').textContent = 'Хрю';
            but = 1;
        }else{
            document.querySelector('h1').textContent = 'Жми на пятачок';
            but = 0;
        }
    });
});




