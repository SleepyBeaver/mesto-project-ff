export const cardTemplate = document.querySelector('#card-template').content.querySelector('.places__item');

export function createCardElement(data, deleteCard, setLike, openPopupImage) {
  const card = cardTemplate.cloneNode(true);

  const cardTitle = card.querySelector('.card__title');
  const cardImage = card.querySelector('.card__image');
  const deleteButton = card.querySelector('.card__delete-button');
	const cardElementImage = card.querySelector('.card__image');
  const likeButton = card.querySelector('.card__like-button');

  cardTitle.textContent = data.name;
  cardImage.src = data.link;
  cardImage.alt = data.name;

  deleteButton.addEventListener('click', () => deleteCard(card));

  cardElementImage.addEventListener('click', () => {
		openPopupImage(cardImage.src, cardImage.alt);
	})

  likeButton.addEventListener('click', () => {
		setLike(likeButton);
	})

  return card;
}

export function removeCard(card) {
  card.remove();
}

export function setLike(likeButton) {
  likeButton.classList.toggle('card__like-button_is-active');
}