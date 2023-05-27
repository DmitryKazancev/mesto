//UserInfo class
export default class UserInfo {
    constructor({nameAuthorSelector, jobAuthorSelector, avatarSelector}) {
        this._nameAuthor = document.querySelector(nameAuthorSelector);
        this._jobAuthor = document.querySelector(jobAuthorSelector);
        this._userAvatar = document.querySelector('.profile__avatar');
    }

    //get current user info from page
    getUserInfo = () => {
        return {nameInput:  this._nameAuthor.textContent, jobInput: this._jobAuthor.textContent};
    }

    //set user info to page from inputs
    setUserInfo (userInfo) {
        this._nameAuthor.textContent = userInfo.name;
        this._jobAuthor.textContent = userInfo.about;
        this._userAvatar.src = userInfo.avatar;
    }
}