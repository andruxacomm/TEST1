export default function () {
    var imageClick = document.querySelector('.Hero__image');

    imageClick.addEventListener('click', function () {
        imageClick.classList.toggle('big-picture');
    });
}

