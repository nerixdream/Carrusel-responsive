const container = document.querySelector('.slider__container');
const buttons = document.querySelectorAll('.slider__button');

buttons.forEach((button, i) => {
    button.addEventListener('click', () => {
        let operation = i * -50;
        container.style.transform = `translateX(${operation}%)`;

        buttons.forEach(button => button.classList.remove('active'));
        buttons[i].classList.add('active');
    });
});
