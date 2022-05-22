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
}


function displayBookOnPage() {
   const books = document.querySelector('.books')
   
   myLibrary.forEach(myLibrary => {
      const card = document.createElement('div');
      card.classList.add('card');
      books.appendChild(card)

      for (let key in myLibrary) {
         //console.log(`${key}: ${myLibrary[key]}`);
         const pText = document.createElement('p');
         card.appendChild(pText)
         pText.textContent = `${key}: ${myLibrary[key]}`
         console.log(pText);
      }
   })
}



addBookToLibrary("Harry Potter", "J.K.Rowling", "400", "Read");
addBookToLibrary("Harry Potter 2", "J.K.Rowling", "500", "Read");
addBookToLibrary("Harry Potter 3", "J.K.Rowling", "300", "Not Read yet");
addBookToLibrary("Harry Potter 4", "J.K.Rowling", "700", "Not Read yet");
//console.log(myLibrary);
displayBookOnPage()