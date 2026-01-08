const addBookBtn = document.getElementById("add-book-btn");
const deleteBookBtn = document.getElementById("delete-book-btn");

const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

const output = "";

addBookBtn.addEventListener("click", () => {
    const getTitle = document.getElementById("title-input").value;
    const getAuthor = document.getElementById("author-input").value;
    const getPages = document.getElementById("pages-input").value;
    const getRead = document.getElementById("read-input").checked;
    addBookToLibrary(getTitle, getAuthor, getPages, getRead);

    if (getTitle == "" || getAuthor == "" || getPages == "") {
        alert("Please fill in all fields.");
        return;
    } else {
        renderLibrary();
    }
});

const renderLibrary = () => {
    const libraryContainer = document.getElementById("library-container");

    libraryContainer.innerHTML = "";

    myLibrary.forEach((book) => {
        const card = document.createElement("div");

        card.innerHTML = `<h2>${book.title}</h2>
                          <p>Author: ${book.author}</p>
                          <p>Pages: ${book.pages}</p>
                          <p>Read: ${book.read ? "Yes" : "No"}</p>`;

        libraryContainer.appendChild(card);
    });
};

deleteBookBtn.addEventListener("click", () => {
    myLibrary.pop();
    renderLibrary();
});








/*
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
*/