//Class API
export default class Api {
    constructor(options) {
        this._baseUrl = options.baseUrl;
        this._headers = options.headers;
        this._authorization = options.headers.authorization;
    }

    //get info about user
    getUserInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: {
                authorization: this._authorization
            }
                })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                else {
                    return Promise.reject(`Ошибка: ${res.status}`);
                }
            })
    }

    //get array cards
    getCards() {
        return fetch(`${this._baseUrl}/cards`, {
            headers: {
                authorization: this._authorization
            }
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                else {
                    return Promise.reject(`Ошибка: ${res.status}`);
                }
            })
    }

    //update info about user
    setOwnerInfo(ownerInfo) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: ownerInfo.nameInput,
                about: ownerInfo.jobInput
            })
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                else {
                    return Promise.reject(`Ошибка: ${res.status}`);
                }
            })
    }

    //update user avatar
    setOwnerAvatar(ownerAvatar) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: ownerAvatar.linkAvatar
            })
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                else {
                    return Promise.reject(`Ошибка: ${res.status}`);
                }
            })
    }

    //create new card
    addNewCard (cardInfo) {
        return fetch(`${this._baseUrl}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: cardInfo.cardName,
                link: cardInfo.link
            })
        })
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            else {
                return Promise.reject(`Ошибка: ${res.status}`);
            }
        })
    }

    //put like on card
    addLike(cardId) { 
        return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
        method: 'PUT',
        headers: this._headers
    })
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            else {
                return Promise.reject(`Ошибка: ${res.status}`);
            }
        })
    }

    //delete like on card
    deleteLike(cardId) { 
        return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
        method: 'DELETE',
        headers: this._headers
    })
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            else {
                return Promise.reject(`Ошибка: ${res.status}`);
            }
        })
    }
   
    //delete card created by user
    deleteCard(cardId) { 
        return fetch(`${this._baseUrl}/cards/${cardId}`, {
        method: 'DELETE',
        headers: this._headers
    })
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            else {
                return Promise.reject(`Ошибка: ${res.status}`);
            }
        })
    } 
}