addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelectorAll('.burger');  // он должен существовать в HTML
    const menu = document.getElementById('sideMenu');

    if (burger && menu) {
        burger.addEventListener('click', function () {
            menu.classList.toggle('open');
        });
    } else {
        console.error("Burger или menu не найден!");
    }








})