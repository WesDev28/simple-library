const displayText = document.querySelector(".displayText")

const myLibraryObj = [

  { title: "The Hobbit", author: "J.R.R. Tolkien", pages: 310, read: true, uniqueId: crypto.randomUUID() },
  { title: "Dune", author: "Frank Herbert", pages: 412, read: false, uniqueId: crypto.randomUUID() },
  { title: "1984", author: "George Orwell", pages: 328, read: true, uniqueId: crypto.randomUUID()}

];

const myLibraryArray = [
    ["The Hobbit", "J.R.R. Tolkien", 310, false, crypto.randomUUID()],
    ["Dune", "Frank Herbert", 412, false, crypto.randomUUID()],
    ["1984", "George Orwell", 328, false, crypto.randomUUID()]
]

function Book() {
    //constructor
}

function addBookToLibrary() {
    //take params, create a book then store it in an array
}

let myObjStr = JSON.stringify(myLibraryObj[0,1,2].author );

for (const i in myLibraryObj){
    const obj = myLibraryObj[i]
    for (const [_key, values] of Object.entries(obj)){
        console.log(_key, values)
        displayText.textContent += (_key) + ": " + (values) + "\n"

    }
    displayText.textContent += "\n"

}

// displayText.textContent = myLibraryObj.read;
