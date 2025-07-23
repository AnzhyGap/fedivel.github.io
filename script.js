fetch('header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header').innerHTML = data;
    });

fetch('footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer').innerHTML = data;
    });

/**
 * Всплывающий при скролле header
 */
//TODO FLYING HEADER
window.addEventListener('scroll', () => {
    const header = document.querySelector('.container_flying_header');

    if (window.scrollY < 76) {
        header.classList.add('scroll_visible');
    } else {
        header.classList.remove('scroll_visible');
    }
});

/***********************************************************************************************************/
