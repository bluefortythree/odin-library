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

// let button = document.querySelector('#add');
// button.addEventListener('click', () => {
//   const books = document.getElementById('books');
//   const newBook = document.createElement('div');
//   newBook.innerText = 'book';
//   books.appendChild(newBook);
//   })

// for (let i = 0; i < myLibrary.length; i++) {
//   const div = document.createElement('div');
//   document.body.appendChild(div)
//   div.innerText = 'hello world'  
// }

let button = document.querySelector('#add');
button.addEventListener('click', () => {
  const form = document.getElementById('pop-up');
  form.style.display = 'block';
})

let cancel = document.querySelector('#cancel');
cancel.addEventListener('click', () => {
  const clear = document.getElementById('form');
  clear.reset();
  const form = document.getElementById('pop-up');
  form.style.display = "none";
})

let submit = document.querySelector('#confirm');
submit.addEventListener('click', () => {
  const books = document.getElementById('books');
  const newBook = document.createElement('div');
  newBook.innerText = 'book';
  books.appendChild(newBook);
  const clear = document.getElementById('form');
  clear.reset();
  const form = document.getElementById('pop-up');
  form.style.display = 'none';
})

function addBookToLibrary() {
  // do stuff here
}