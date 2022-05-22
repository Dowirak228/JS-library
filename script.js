let myLibrary = [];

function Book(Title, Author, Page, Read) {
   this.Title = Title
   this.Author = Author
   this.Page = Page
   this.Read = Read
}

function addBookToLibrary(Title, Author, Page, Read) {
   const book = new Book(Title, Author, Page, Read);
   myLibrary.push(book)
   displayBookOnPage() 
}


function displayBookOnPage() {
   const books = document.querySelector('.books')

   // Remove all previously displayed cards
   const removeCards = document.querySelectorAll('.card');
   console.log("Show me", removeCards);
   for (let i = 0; i < removeCards.length; i++) {
      removeCards[i].remove()
   }
   
   myLibrary.forEach(myLibrary => {
      const card = document.createElement('div');
      card.classList.add('card');
      books.appendChild(card)

      for (let key in myLibrary) {
         //console.log(`${key}: ${myLibrary[key]}`);
         const pText = document.createElement('p');
         card.appendChild(pText)
         pText.textContent = `${key}: ${myLibrary[key]}`
         //console.log(pText);
      }
   })
}

// Unwrap input form
const addBookButton = document.querySelector('.add_book_button');
addBookButton.addEventListener('click', () => {
   document.getElementById('add_book_form').style.display = ""
})

// Add new storage to "myLibrary" array
const submitButton = document.querySelector('.submit_button')
submitButton.addEventListener('click', getFormData)

function getFormData() {
   let title = document.getElementById('Title').value;
   let author = document.getElementById('Author').value;
   let pages = document.getElementById('Pages').value;
   let read = document.getElementById('Read').value;

   if ((title == "") || (author == "") || (pages == "") || (read == "")) {
      return
   }

   addBookToLibrary(title, author, pages, read);

   // Reset the form after succesful submission
   clearForm()
}

// Clear form
const clearButtom = document.querySelector('.reset_button');
clearButtom.addEventListener('click', clearForm)

function clearForm() {
   document.getElementById('add_book').reset()
}


// addBookToLibrary("Harry Potter", "J.K.Rowling", "400", "Read");
// addBookToLibrary("Harry Potter 2", "J.K.Rowling", "500", "Read");
// addBookToLibrary("Harry Potter 3", "J.K.Rowling", "300", "Not Read yet");
// addBookToLibrary("Harry Potter 4", "J.K.Rowling", "700", "Not Read yet");
//console.log(myLibrary);
