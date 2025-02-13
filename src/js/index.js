const botaoZe = document.getElementById('ze-btn');
const imageContainer = document.getElementById('img-container');

botaoZe.addEventListener('click', function() {
    const realZe = document.getElementById('ze-img');
    const cloneZe = realZe.cloneNode(true);

    imageContainer.appendChild(cloneZe);
    cloneZe.style.zIndex = '-1';
    cloneZe.style.height = '30vh';
    cloneZe.style.width = '10vw';
})