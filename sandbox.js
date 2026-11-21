function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    
    this.info = function() {
        return `The ${this.title} by ${this.author}. ${this.pages}, ${this.read} read`
    }
}

let theHobbit = new Book("The Hobbit", "J.R.R Tolkien", "295", "not");
console.log(theHobbit);
console.log(theHobbit.info())