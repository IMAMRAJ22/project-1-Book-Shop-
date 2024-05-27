//select poppup box poppup overlay button
var popupoverlay = document.querySelector(".poppup-overlay")
var popupbox = document.querySelector(".poppup-box")
var addpopupbutton = document.getElementById("add-poppup")

addpopupbutton.addEventListener("click", function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})

var cancel=document.getElementById("cancel-poppup")
cancel.addEventListener("click", function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

//select container
var container=document.querySelector(".container")
var addbook=document.getElementById("add-book")
var booktitle=document.getElementById("book-title")
var bookauthor=document.getElementById("book-author")
var description=document.getElementById("book-des")

addbook.addEventListener("click", function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class", "books")
    div.innerHTML=`<h2>${booktitle.value}</h2>
    <h5>${bookauthor.value}</h5>
    <p>${description.value}</p>
    <button onclick="deletebook(event)">Delete</button>`   //(`)left corner
    container.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

function deletebook(event){
    event.target.parentElement.remove()
}