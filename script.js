let myLibrary = [];

function Book() {
  let author = document.getElementById('author').value;
  let title = document.getElementById('title').value;
  let pages = document.getElementById('pages').value;
  let read = document.getElementById('read').checked;
  let number = myLibrary.length;

  let book = {
    author: author,
    title: title,
    pages: pages,
    read: read,
    number: number,
  }

  myLibrary.push(book);

  const books = document.getElementById('books');
  const newBook = document.createElement('div');
  newBook.setAttribute('id', number);
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
  if(read) {
    readButton.innerText = 'Read'
  } else {
    readButton.innerText = 'Not Read'
  };
  readButton.addEventListener('click', () => {
    let bookNumber = document.getElementById(number);
    if(bookNumber.style.backgroundColor === "rgb(244, 199, 195)") {
      bookNumber.style.backgroundColor = "rgb(183, 225, 205)";
      readButton.innerText = 'Read';
      myLibrary[number].read = true;
    } else {
      bookNumber.style.backgroundColor = "rgb(244, 199, 195)";
      readButton.innerText = 'Not Read';
      myLibrary[number].read = false;
    }
  });
  const remove = document.createElement('button');
  remove.classList.add('remove-button');
  remove.innerText = 'Remove';
  remove.addEventListener('click', () => {
    let bookNumber = document.getElementById(number);
    bookNumber.remove();
    myLibrary.splice(number, 1);
  })
  buttons.appendChild(readButton);
  buttons.appendChild(remove);

  console.log(myLibrary);

}


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