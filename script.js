let myLibrary = [];
const libraryHolder = document.getElementById("Library");
const newPageButton = document.getElementById("newPageButton");
const newBookContainer = document.getElementById("newBookContainer");
const addButton = document.getElementById("addButton")

const inputTitle = document.getElementById("title_input");
const inputAuthor = document.getElementById("author");
const inputPages = document.getElementById("pages");
const inputRead = document.getElementById("read");



function book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

//function that makes the new book entry come up

newPageButton.addEventListener("click", function() {

    if (newBookContainer.style.display == "block") {
        newBookContainer.style.display = "none"
    } else  {
        newBookContainer.style.display = "block"
        newPageButton.style.display = "none"
    }

})

//this function takes the objects in the myLibrary array
// and renders them as new html elements.
function render() {
    myLibrary.forEach(element => {

        //creates a unique id for each book
        var idOf = "card" + myLibrary.indexOf(element);


        //parent book container card
        var newDiv = document.createElement("div");
        newDiv.setAttribute("id", idOf);
        newDiv.classList.add("card");

        //title child element
        var newTitleHolder = document.createElement("h1");
        var newTitle = document.createTextNode(element.title);
        newTitleHolder.appendChild(newTitle);
        newDiv.appendChild(newTitleHolder);

        //AUthor child element
        var newAuthorHolder = document.createElement("p");
        newAuthorHolder.classList.add("title");
        var newAuthor = document.createTextNode(element.author);
        newAuthorHolder.appendChild(newAuthor);
        newDiv.appendChild(newAuthorHolder);

        //Pages child element
        var newPagesHolder = document.createElement("p");
        newPagesHolder.classList.add("title");
        var newPages = document.createTextNode(element.pages + " pages");
        newPagesHolder.appendChild(newPages);
        newDiv.appendChild(newPagesHolder);

        //Button child element
        var newButtonHolder = document.createElement("p");
        var newButton = document.createElement("button");
        var newButtonText = document.createTextNode(element.read)

        newButton.appendChild(newButtonText);
        newButtonHolder.appendChild(newButton);
        newDiv.appendChild(newButtonHolder);

        //finally adding the div with children to library container

        libraryHolder.appendChild(newDiv);

    });
}


addButton.addEventListener("click", function() {


})


var test = new book("The hobbit", "Tolkien", "254", true)
myLibrary.push(test);

render();