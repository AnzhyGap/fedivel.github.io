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
