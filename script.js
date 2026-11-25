const displayText = document.querySelector(".displayText");

const dialog = document.querySelector("dialog");
const showBtn = document.querySelector("#openDialogBtn");
const closeBtn = document.querySelector("#closeDialogBtn");

const formField = document.querySelector("#libraryForm")
const submitBtn = document.querySelector("#submitBtn");

let myLibraryArray = [];

function Book(title, author, pages, read) {
    //constructor
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.uniqueID = crypto.randomUUID();
    
    this.info = function() {
        if (this.read){
            return `${this.title} by ${this.author}. ${this.pages} pages, completed`
        }
        else {
            return `${this.title} by ${this.author}. ${this.pages} pages, on the list`
        }
    }
}


function addBookToLibrary(inpBook, inpAuthor, inpPages, inpRead) {
    //take params, create a book then store it in an array
    let newBook = new Book(inpBook, inpAuthor, inpPages, inpRead);
    myLibraryArray.push(newBook);
}

function displayBooks() {
    //LOOP THROUGH LIBRARY OF INTIAL BOOKS and DISPLAY THEM ON SCREEN
    //displayText.textContent = "";
    displayText.replaceChildren();
    for (const i in myLibraryArray){
        const newBookCard = document.createElement("div");
        newBookCard.classList.add("bookCard");
        console.log(i)
        const obj = myLibraryArray[i]
        console.log(obj);
        console.log(obj.info())
        newBookCard.textContent = obj.info();
        displayText.appendChild(newBookCard);
        // for (const [_key, values] of Object.entries(obj)){
        //     newBookCard.textContent 
        //     newBookCard.textContent += (_key) + ": " + (values) + "\n"
        //     displayText.appendChild(newBookCard);
        // }
    }
}

showBtn.addEventListener("click", () => {
    dialog.show();
})

closeBtn.addEventListener("click", () => {
    dialog.close();
})

formField.addEventListener("submit", (event) => {
    event.preventDefault();
    const bookTitle = event.currentTarget.bookName.value;
    const bookAuthor = event.currentTarget.bookAuthor.value;
    const bookPages = event.currentTarget.bookPages.value;
    const bookRead = event.currentTarget.bookRead.checked;
    addBookToLibrary(bookTitle,bookAuthor,bookPages,bookRead);
    displayBooks();
})


addBookToLibrary("The Hobbit", "J.R.R Tolkien", 310, true);
addBookToLibrary("Dune", "Frank Herbert", 412, false);
addBookToLibrary("1984", "George Orwell", 328, true);

displayBooks()


