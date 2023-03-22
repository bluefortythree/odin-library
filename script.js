let myLibrary = [];

function Book(author, title, pages, read) {
  this.author = author
  this.title = title
  this.pages = pages
  this.read = read
  myLibrary.push(this)
}

new Book('Me', 'How I learned to Code', '150', 'no')
new Book('You', 'Captain Underpants', '200', 'no')
new Book('J.K. Rowling', 'Harry Potter and the Sorcerer\'s Stone', '900', 'yes')

let button = document.querySelector('#add');
button.addEventListener('click', () => {
  const books = document.getElementById('books');
  const newBook = document.createElement('div');
  newBook.innerText = 'book';
  books.appendChild(newBook);
  })

// for (let i = 0; i < myLibrary.length; i++) {
//   const div = document.createElement('div');
//   document.body.appendChild(div)
//   div.innerText = 'hello world'  
// }

function addBookToLibrary() {
  // do stuff here
}