const libraryContainer = document.getElementById("library-container");

const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
}

Book.prototype.info = function () {
    const hasRead = this.read ? "Already read" : "Has not yet read";
    return `${this.title}, by ${this.author}, ${this.pages} pages, ${hasRead}`;
};

const addBookToLibrary = (book) => {
    myLibrary.push(book);
}

const theGreatGatsby = new Book("The Great Gatsby", "F. Scott Fitzgerald", 180, false);
addBookToLibrary(theGreatGatsby);


function displayLibrary() {
    myLibrary.forEach((book) => {
        console.log(book.info());
    });
}

displayLibrary();

console.log(myLibrary[0].info());