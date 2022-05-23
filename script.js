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
      //console.log(removeCards[i]);
   }
   
   let index = 0

   myLibrary.forEach(myLibraries => {
      const card = document.createElement('div');
      card.classList.add('card');
      books.appendChild(card)

      // Create remove book button
      const removeBookButton = document.createElement('button');
      removeBookButton.classList.add('remove_book_button');
      removeBookButton.textContent = "Remove from Library"
      console.log('show me current array object inside for eaach', myLibrary);

      removeBookButton.dataset.linkedArray = index;
      index++;
      console.log("SHow me the dataset", removeBookButton.dataset.linkedArray);
      card.appendChild(removeBookButton);

      // Remove array item
      removeBookButton.addEventListener('click', removeBookFromLibrary)

      function removeBookFromLibrary() {
         let removeBook = removeBookButton.dataset.linkedArray;
         myLibrary.splice(parseInt(removeBook), 1);
         card.remove();
         displayBookOnPage();
      }

      // Display each card
      for (let key in myLibraries) {
         //console.log(`${key}: ${myLibrary[key]}`);
         const pText = document.createElement('p');
         pText.textContent = (`${key}: ${myLibraries[key]}`)
         card.appendChild(pText)
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
