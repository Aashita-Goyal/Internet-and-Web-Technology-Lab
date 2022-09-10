const rectangle = document.querySelector('.rectangle');

rectangle.addEventListener('click', toggleActive);

function toggleActive() {
    rectangle.classList.toggle('active')
}

