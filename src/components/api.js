const apiConfig = {
    Url: 'https://mesto.nomoreparties.co/v1/wff-cohort-29',
    headers: {
        authorization: 'a23cbe8d-60b9-4c5a-87b8-ddee7da54ae2',
        'Content-Type': 'application/json',
    },
};

const handleResponse = res => {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
};

export const fetchUserData = () => {
    return fetch(`${apiConfig.Url}/users/me`, {
        headers: apiConfig.headers,
    }).then(handleResponse);
};

export const fetchInitialCards = () => {
    return fetch(`${apiConfig.Url}/cards`, {
        headers: apiConfig.headers,
    }).then(handleResponse);
};

export const updateUserData = (name, about) => {
    return fetch(`${apiConfig.Url}/users/me`, {
        method: 'PATCH',
        headers: apiConfig.headers,
        body: JSON.stringify({
            name,
            about,
        }),
    }).then(handleResponse);
};

export const addNewCard = (name, link) => {
    return fetch(`${apiConfig.Url}/cards`, {
        method: 'POST',
        headers: apiConfig.headers,
        body: JSON.stringify({
            name,
            link,
        }),
    }).then(handleResponse);
};

export const setLikeApi = (cardId, isLiked) => {
    const method = isLiked ? 'DELETE' : 'PUT';
    return fetch(`${apiConfig.Url}/cards/likes/${cardId}`, {
        method,
        headers: apiConfig.headers,
    }).then(handleResponse);
};

export const deleteCardApi = cardId => {
    return fetch(`${apiConfig.Url}/cards/${cardId}`, {
        method: 'DELETE',
        headers: apiConfig.headers,
    }).then(handleResponse);
};

export const updateAvatar = avatar => {
    return fetch(`${apiConfig.Url}/users/me/avatar`, {
        method: 'PATCH',
        headers: apiConfig.headers,
        body: JSON.stringify({
            avatar,
        }),
    }).then(handleResponse);
};
