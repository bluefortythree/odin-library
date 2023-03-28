let myLibrary = [];

function Book() {
  let author = document.getElementById('author').value;
  let title = document.getElementById('title').value;
  let pages = document.getElementById('pages').value;
  let read = document.getElementById('read').checked;

  let book = {
    author: author,
    title: title,
    pages: pages,
    read: read,
  }

  
  const books = document.getElementById('books');
  const newBook = document.createElement('div');
  const newAuthor = document.createElement('div');
  const newTitle = document.createElement('div');
  const newPages = document.createElement('div');
  const content = document.createElement('div');
  content.classList.add('content');
  newBook.appendChild(content);
  content.appendChild(newAuthor);
  newAuthor.innerText = author;
  content.appendChild(newTitle);
  newTitle.innerText = title;
  content.appendChild(newPages);
  newPages.innerText = pages;
  books.appendChild(newBook);
  if (read) {
        newBook.style.backgroundColor = "rgb(183, 225, 205)"
      } else {
        newBook.style.backgroundColor = "rgb(244, 199, 195)"
      };
  const clear = document.getElementById('form');
  clear.reset();
  const form = document.getElementById('pop-up');
  form.style.display = 'none';
  
  const buttons = document.createElement('div');
  buttons.classList.add('options');
  newBook.appendChild(buttons);
  const readButton = document.createElement('button');
  readButton.classList.add('read-button');
  readButton.innerText = 'Read';
  const remove = document.createElement('button');
  remove.classList.add('remove-button');
  remove.innerText = 'Remove';
  buttons.appendChild(readButton);
  buttons.appendChild(remove);

  myLibrary.push(book);
  console.log(myLibrary.length-1);
  let numberOfBooks = myLibrary.length-1;
  newBook.dataset.bookNumber = numberOfBooks;
  remove.dataset.bookNumber = numberOfBooks;
}

function removeBook() {
  let bookNumber = remove.dataset.bookNumber;
  let remove = document.getElementsByTagName('div').querySelector('[data-book-number = bookNumber]');

}

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


let form = document.getElementById('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  new Book();
});