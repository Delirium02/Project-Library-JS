const Library = [];

function Book(title, author, pages, read) {
    if(!new.target) {
        throw Error("Book constructor must be called with 'new'");
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.info = function () {
    const hasRead = this.read ? "Already read" : "Has not yet read";
    return `${this.read}, by ${this.author}, ${this.pages} pages, ${this.read}`;
};