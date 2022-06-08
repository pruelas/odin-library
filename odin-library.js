function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function removeBook(book){
    delete myLibrary[(book.getAttribute('data-index'))];
    addBookToLibrary();
}

function addBookForm(){
    var newBookForm = document.getElementById("newBookForm");
    newBookForm.style.visibility = "visible";
}

function toggleHasRead(book){
    let currentReadStatus = myLibrary[book.getAttribute('data-index')].read;
    if(currentReadStatus === "true"){
        book.textContent = "No";
        book.className = "hasNotRead";
        myLibrary[book.getAttribute('data-index')].read = "false";

    }else{
        book.textContent = "Yes";
        book.className ="hasRead";
        myLibrary[book.getAttribute('data-index')].read = "true";
    }

}

let book1 = new Book(1, 1, 1, 1);
let book2 = new Book(2, 2, 2, 2);
let book3 = new Book(3, 3, 3, "true");

let myLibrary = [book1, book2, book3];

function addBookToLibrary(){
    var libraryDisplay = document.getElementById("libraryDisplay");
    libraryDisplay.innerHTML = "";
    var bookDiv;
    var bookTitle;
    var bookAuthor;
    var bookPages;
    var bookRead;
    var bookRemove;
    var hasReadButton;
    for(var i = 0; i< myLibrary.length; i++){
        if(typeof myLibrary[i] !== 'undefined' ){
            bookDiv = document.createElement("div");
            bookTitle = document.createElement("div");
            bookAuthor = document.createElement("div");
            bookPages = document.createElement("div");
            bookRead = document.createElement("div");
            hasReadButton = document.createElement("button");
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

            bookRead.textContent = "Has Read: "
            hasReadButton.setAttribute('data-index', i);
            hasReadButton.onclick = function(){ toggleHasRead(this);};

            if(myLibrary[i].read === "true"){
                hasReadButton.textContent = "Yes";
                hasReadButton.className = "hasRead";

            }else{
                hasReadButton.textContent = "No";
                hasReadButton.className ="hasNotRead";
            }

            bookRemove.textContent = "X";
            bookRemove.setAttribute('data-index', i);
            bookRemove.onclick = function() { removeBook(this); };

            bookDiv.append(bookRemove, bookTitle, bookAuthor, bookPages, bookRead, hasReadButton);

            libraryDisplay.appendChild(bookDiv);
        };
    };

}
addBookToLibrary();

document.body.addEventListener('click', function(e){
    var addBookForm = document.getElementById("newBookForm");
    if( (e.target.className !=="addBookForm" && e.target.className !=="hasRead" && e.target.className !=="addBook" && e.target instanceof HTMLDivElement) && addBookForm.style.visibility !=="hidden"){
        addBookForm.style.visibility = 'hidden';
    }
})

const addBook = document.getElementById("addBookForm");
addBook.addEventListener('submit', function(e){
    document.getElementById("newBookForm").style.visibility = "hidden";
    myLibrary.push(new Book(addBook.elements['title'].value, addBook.elements['author'].value, addBook.elements['pages'].value, addBook.elements['read'].value));
    addBookToLibrary();
    e.preventDefault();
    e.target.reset();
})