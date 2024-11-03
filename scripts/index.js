// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content.querySelector('.places__item');

// @todo: DOM узлы
const cardList = document.querySelector('.places__list');

// @todo: Функция создания карточки
function createCardElement(data, deleteCard) {
    const card = cardTemplate.cloneNode(true);
    const deleteButton = card.querySelector('.card__delete-button');
    const cardTitle = card.querySelector('.card__title');
    const cardImage = card.querySelector('.card__image');

    cardTitle.textContent = data.name;
    cardImage.src = data.link;
    cardImage.alt = data.name;

    deleteButton.addEventListener('click', () => deleteCard(card));

    return card;
}

// @todo: Функция удаления карточки
function removeCard(card) {
    card.remove();
}

// @todo: Вывести карточки на страницу
initialCards.forEach(element => {
    cardList.append(createCardElement(element, removeCard));
});
