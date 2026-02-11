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
class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
  }

  toggleRead() {
    this.read = !this.read;
  }
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
                      <p>Read: <span class="status-text">${book.read ? "Yes" : "No"}</span></p>
                      <button class="toggle-read">Read Status</button>
                      <button class="remove-btn" data-id="${book.id}">Remove Book</button>`;

    libraryContainer.appendChild(card);

    card.querySelector(".remove-btn").addEventListener("click", () => {
      removeBook(book.id);
    })

    card.querySelector(".toggle-read").addEventListener("click", () => {
      book.toggleRead();
      renderLibrary();
    });
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
