//Section class
export default class Section {
    constructor({items, renderer}, containerSelector) {
        this._initialCards = items;
        this.renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    //Render cards from array
    addInitialCards (initialCards) {
        initialCards.reverse().forEach(element => {
            this.addItem(this.renderer(element));
        })
    }
    
    //add card to cards container
    addItem (element) {
        this._container.prepend(element);
    }
}