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

function removeBook(book){
    console.log(`removed ${book.getAttribute('data-index')}`);
    console.log(book.getAttribute('data-index'), book.getAttribute('data-index')+1)
    delete myLibrary[(book.getAttribute('data-index'))];
    console.log(myLibrary);
    addBookToLibrary();
}

function addBookForm(){
    console.log("addBook");
    var newBookForm = document.getElementById("newBookForm");
    newBookForm.style.visibility = "visible";
}

let book1 = new Book(1, 1, 1, 1);
let book2 = new Book(2, 2, 2, 2);
let book3 = new Book(3, 3, 3, 3);

let myLibrary = [book1, book2, book3];

function addBookToLibrary(){
    console.log("ran");
    var libraryDisplay = document.getElementById("libraryDisplay");
    libraryDisplay.innerHTML = "";
    var bookDiv;
    var bookTitle;
    var bookAuthor;
    var bookPages;
    var bookRead;
    var bookRemove;
    for(var i = 0; i< myLibrary.length; i++){
        if(typeof myLibrary[i] !== 'undefined' ){
            bookDiv = document.createElement("div");
            bookTitle = document.createElement("div");
            bookAuthor = document.createElement("div");
            bookPages = document.createElement("div");
            bookRead = document.createElement("div");
            bookRemove = document.createElement("button");

            bookDiv.className = "book";
            bookTitle.className = "title";
            bookAuthor.className = "author";
            bookPages.className = "pages";
            bookRead.className = "read";
            bookRemove.className = "bookRemove"

            bookTitle.textContent = myLibrary[i].title;
            bookAuthor.textContent = myLibrary[i].author;
            bookPages.textContent = myLibrary[i].pages;
            bookRead.textContent = myLibrary[i].read;
            bookRemove.textContent = "X";
            bookRemove.setAttribute('data-index', i);
            console.log(bookRemove.getAttribute('data-index'));
            bookRemove.onclick = function() { removeBook(this); };

            bookDiv.append(bookRemove, bookTitle, bookAuthor, bookPages, bookRead);

            libraryDisplay.appendChild(bookDiv);
        };
    };

}

console.log("we running?" + myLibrary.length);
addBookToLibrary();

document.body.addEventListener('click', function(e){
    var addBookForm = document.getElementById("newBookForm");
    console.log(addBookForm.style.visibility + "eventListener" + e.target.className + e.target);
    if( (e.target.className !=="addBookForm" && e.target.className !=="hasRead" && e.target.className !=="addBook" && e.target instanceof HTMLDivElement) && addBookForm.style.visibility !=="hidden"){
        addBookForm.style.visibility = 'hidden';
    }
})

const addBook = document.getElementById("addBookForm");
addBook.addEventListener('submit', function(e){
    console.log(addBook.elements['title'].value, addBook.elements['read'].value, addBook.elements[3].value);
    document.getElementById("newBookForm").style.visibility = "hidden";
    myLibrary.push(new Book(addBook.elements['title'].value, addBook.elements['author'].value, addBook.elements['pages'].value, addBook.elements['read'].value));
    addBookToLibrary();
    e.preventDefault();
    e.target.reset();
})