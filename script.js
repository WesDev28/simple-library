const displayText = document.querySelector(".displayText");

const dialog = document.querySelector("dialog");
const showBtn = document.querySelector("#openDialogBtn");
const closeBtn = document.querySelector("#closeDialogBtn");

const formField = document.querySelector("#libraryEntry")
const submitBtn = document.querySelector("#submitBtn");

let myLibraryArray = [

  { title: "The Hobbit", author: "J.R.R. Tolkien", pages: 310, read: true, uniqueID: crypto.randomUUID() },
  { title: "Dune", author: "Frank Herbert", pages: 412, read: false, uniqueID: crypto.randomUUID() },
  { title: "1984", author: "George Orwell", pages: 328, read: true, uniqueID: crypto.randomUUID()}

];

function Book(title, author, pages, read) {
    //constructor
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.uniqueID = crypto.randomUUID();
    
    this.info = function() {
        return `${this.title} by ${this.author}. ${this.pages}, ${this.read} read`
    }
}


function addBookToLibrary(inpBook, inpAuthor, inpPages, inpRead) {
    //take params, create a book then store it in an array
    let newBook = new Book(inpBook, inpAuthor, inpPages, inpRead);
    myLibraryArray.push(newBook);
}

function displayBooks() {
    //LOOP THROUGH LIBRARY OF INTIAL BOOKS and DISPLAY THEM ON SCREEN
    displayText.textContent = "";
    for (const i in myLibraryArray){
        const obj = myLibraryArray[i]
        for (const [_key, values] of Object.entries(obj)){
            // console.log(_key, values)
            displayText.textContent += (_key) + ": " + (values) + "\n"

        }
        displayText.textContent += "\n"
    }
}

showBtn.addEventListener("click", () => {
    dialog.show();
})

closeBtn.addEventListener("click", () => {
    dialog.close();
})

formField.addEventListener("submit", () => {
    event.preventDefault();
    const bookTitle = event.currentTarget.bookName.value;
    const bookAuthor = event.currentTarget.bookAuthor.value;
    const bookPages = event.currentTarget.bookPages.value;
    const bookRead = event.currentTarget.bookRead.checked;
    addBookToLibrary(bookTitle,bookAuthor,bookPages,bookRead);
    displayBooks();
})

addBookToLibrary("The Illiad", "Homer", 610, true);
displayBooks()


