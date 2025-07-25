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
/********************************************FLIP CARD*****************************************************/
function flipAndShowModal(productId) {
    const card = event.currentTarget;

// Проверка на наличие элемента с классом 'absent'
    if (card.querySelector('.absent')) {
        return; // Не выполнять дальше
    }

// 2. Ищем исходный элемент с классом 'discount' (не клонированный)
    const originalDiscount = Array.from(card.querySelectorAll('.discount'))
        // исключаем клонированные по атрибуту 'data-clone'
        .find(d => !d.hasAttribute('data-clone'));

    if (originalDiscount) {
        const modal = document.getElementById('myModal');
        const mainImgModal = modal.querySelector('.main_img_modal');

        if (mainImgModal) {
            const img = mainImgModal.querySelector('img');

            if (img) {
                const imgStyle = window.getComputedStyle(img);
                const imgZIndex = parseInt(imgStyle.zIndex, 10);
                const newZIndex = isNaN(imgZIndex) ? 10 : imgZIndex + 10;

                // Клонируем исходный '.discount'
                const clone = originalDiscount.cloneNode(true);
                clone.setAttribute('data-clone', 'true'); // пометка, чтобы не учитывать в будущем
                clone.classList.add('discount_modal'); // добавляем класс для стилизации
                clone.style.zIndex = newZIndex;

                // Вставляем в main_img_modal
                mainImgModal.appendChild(clone);
            }
        }
    }

    card.classList.add('flipped');

    // Заполняем модальное окно данными
    // document.getElementById('modalTitle').textContent = products[productId].title;
    // document.getElementById('modalDescription').textContent = products[productId].description;

    setTimeout(() => {
        document.getElementById('myModal').style.display = 'flex';
    }, 300);
}

function closeModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
    // Находим все клонированные элементы и удаляем их
    const clones = modal.querySelectorAll('.discount_modal');
    clones.forEach(c => c.remove());

    // Возвращаем все карточки в исходное положение
    setTimeout(() => {
        document.querySelectorAll('.flip-card').forEach(card => {
            card.classList.remove('flipped');
        });
    }, 50);
}

// Закрытие при клике вне модального окна
window.onclick = function (event) {
    const modal = document.getElementById('myModal');
    if (event.target === modal) {
        closeModal();
    }
}