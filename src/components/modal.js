export { closeModal, openModal };

const openModal = popup => {
	if (!popup.classList.contains('popup_is-opened')) {
		popup.classList.add('popup_is-opened');
		document.addEventListener('keydown', closeModalByEsc);
		popup.addEventListener('click', closeModalByOverlay);
	}
}

const closeModal = popup => {
	if (popup) {
		popup.classList.remove('popup_is-opened');
		document.removeEventListener('keydown', closeModalByEsc);
		popup.removeEventListener('click', closeModalByOverlay);
	}
}

const closeModalByEsc = evt => {
	if (evt.key === 'Escape') {
		const openedPopup = document.querySelector('.popup_is-opened');
		if (openedPopup) {
			closeModal(openedPopup);
		}
	}
}

const closeModalByOverlay = evt => {
	if (evt.target === evt.currentTarget) {
		closeModal(evt.currentTarget);
	}
}