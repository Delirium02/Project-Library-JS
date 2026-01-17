const formContainer = document.getElementById("form-container");
const submitBtn = document.getElementById("submit-btn");
const cancelBtn = document.getElementById("cancel-btn");
const addBookBtn = document.getElementById("add-book-btn");

addBookBtn.addEventListener("click", () => {
  formContainer.style.display = "block";
})

cancelBtn.addEventListener("click", () => {
  formContainer.style.display = "none";
})

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

addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", 180, false);

submitBtn.addEventListener("click", () => {
  const title = document.getElementById("title-input").value;
  const author = document.getElementById("author-input").value;
  const pages = document.getElementById("pages-input").value;
  const read = document.getElementById("read-input").checked;

  if (title == "" || author == "" || pages == "") {
    alert("Please fill in all fields.");
    return;
  }

  addBookToLibrary(title, author, pages, read);

  document.getElementById("title-input").value = "";
  document.getElementById("author-input").value = "";
  document.getElementById("pages-input").value = "";
  document.getElementById("read-input").checked = false;

  renderLibrary();
});

const renderLibrary = () => {
  const libraryContainer = document.getElementById("library-container");

  libraryContainer.innerHTML = "";

  myLibrary.forEach((book) => {
    const card = document.createElement("div");
    card.className = "book-card"

    card.innerHTML = `<h2>${book.title}</h2>
                      <p>Author: ${book.author}</p>
                      <p>Pages: ${book.pages}</p>
                      <p>Read: ${book.read ? "Yes" : "No"}</p>
                      <button class="remove-btn" data-id="${book.id}">Remove Book</button>`;

    libraryContainer.appendChild(card);

    const removeBtn = card.querySelector(".remove-btn");
    removeBtn.addEventListener("click", () => {
      removeBook(book.id);
    })
  });
};

function removeBook(id) {
  const index = myLibrary.findIndex(book => book.id === id);
  if (index > -1) {
    myLibrary.splice(index, 1);
  }
  renderLibrary();
}

renderLibrary();





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
