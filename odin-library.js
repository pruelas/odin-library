function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        if(read){
            return (title + " by " + author + ", " + pages + " pages, " + "has read already");
        }else{
            return (title + " by " + author + ", " + pages + " pages, " + "not ready yet");
        }
    }
}

let book1 = new Book(1, 1, 1, 1);
let book2 = new Book(2, 2, 2, 2);
let book3 = new Book(3, 3, 3, 3);

let myLibrary = [book1, book2, book3];

function addBookToLibrary(){
    var libraryDisplay = document.getElementById("libraryDisplay");
    var bookDiv;
    var bookTitle;
    var bookAuthor;
    var bookPages;
    var bookRead;
    for(var i = 0; i< myLibrary.length; i++){

        bookDiv = document.createElement("div");
        bookTitle = document.createElement("div");
        bookAuthor = document.createElement("div");
        bookPages = document.createElement("div");
        bookRead = document.createElement("div");

        bookDiv.className = "book";
        bookTitle.className = "title";
        bookAuthor.className = "author";
        bookPages.className = "pages";
        bookRead.className = "read";

        bookTitle.textContent = myLibrary[i].title;
        bookAuthor.textContent = myLibrary[i].author;
        bookPages.textContent = myLibrary[i].pages;
        bookRead.textContent = myLibrary[i].read;

        bookDiv.append(bookTitle, bookAuthor, bookPages, bookRead);

        libraryDisplay.appendChild(bookDiv);
    }

}

console.log("we running?");
addBookToLibrary();