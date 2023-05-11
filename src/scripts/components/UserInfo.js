//UserInfo class
export default class UserInfo {
    constructor({nameAuthorSelector, jobAuthorSelector}) {
        this._nameAuthor = document.querySelector(nameAuthorSelector);
        this._jobAuthor = document.querySelector(jobAuthorSelector);
    }

    //get current user info from page
    getUserInfo = () => {
        return {nameInput:  this._nameAuthor.textContent, jobInput: this._jobAuthor.textContent};
    }

    //set user info to page from inputs
    setUserInfo (userInfo) {
        this._nameAuthor.textContent = userInfo.nameInput;
        this._jobAuthor.textContent = userInfo.jobInput;
    }
}