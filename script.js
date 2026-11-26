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
    displayText.replaceChildren();
    for (const obj of myLibraryArray){
        const newBookCard = document.createElement("div");
        newBookCard.classList.add("bookCard");
        newBookCard.dataset.id = obj.uniqueID;

        newBookCard.textContent = obj.info();
        addRemoveBookBtn(newBookCard);
        displayText.appendChild(newBookCard);
    }
}

function addRemoveBookBtn(card){
    const removeBookBtn = document.createElement("button");
    removeBookBtn.textContent = "X";
    removeBookBtn.classList.add("removeBtn");
    card.appendChild(removeBookBtn)
}

function selectBookCard() {
    document.querySelectorAll(".bookCard").forEach(card => {
        const currentID = card.dataset.id;
        const currentBtn = card.querySelector(".removeBtn");
        currentBtn.addEventListener("click", () => handleClick(currentID))  
    })
}

function handleClick(currentID) {
    for (let i = 0; i < myLibraryArray.length; i++){
        if (myLibraryArray[i].uniqueID === currentID){
            myLibraryArray.splice(i,1);
            break;
        }
    }
    displayBooks();
    selectBookCard();
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
    selectBookCard();
})


addBookToLibrary("The Hobbit", "J.R.R Tolkien", 310, true);
addBookToLibrary("Dune", "Frank Herbert", 412, false);
addBookToLibrary("1984", "George Orwell", 328, true);

displayBooks();
selectBookCard();


