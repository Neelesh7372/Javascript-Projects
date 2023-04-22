console.log("Welcome to notes");
showNotes();

//If user adds the note add it to the local storage
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
    let addTitle = document.getElementById("addTitle");
    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let myObj = {
        title:addTitle.value,
        text:addTxt.value
    }
    notesObj.push(myObj);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTitle="";
    addTxt = "";
    //   console.log(noteObj);
    showNotes();
});

// let imp = document.getElementById("imp");
// imp.addEventListener("click", function (e) {
   
//     let notes = localStorage.getItem("notes");
//     if (notes == null) {
//         notesObj = [];
//     }
//     else {
//         notesObj = JSON.parse(notes);
//     }
//     let myObj = {
//         title:addTitle.value,
//         text:addTxt.value
//     }
//     notesObj.push(myObj);
//     localStorage.setItem("notes", JSON.stringify(notesObj));
//     addTitle="";
//     addTxt = "";
//     showNotes();
// });

//Function to show elements from local storage
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `<div class="noteCard my-2 mx-2 card" style="width: 18rem;">
          <div class="card-body">
              <h5 class="card-title">${element.title}</h5>
              <p class="card-text">${element.text}</p>
              <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
          </div>
      </div>`;
    });
    let notesElem = document.getElementById('notes');
    if(notesObj.length != 0)
    {
     notesElem.innerHTML = html;
    }
    else{
        notesElem.innerHTML = `Nothing to show! Use "Add a Note" section to add a note`;
    }
}

//function to delete a note
function deleteNote(index){
    // console.log('The note is being deleted', index);
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}

let search = document.getElementById('searchTxt');
search.addEventListener("input",function(){
    let inputVal = search.value.toLowerCase();
    // console.log("Input event fired" , inputVal);
    let noteCards =document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputVal))
        {
            element.style.display = "block";
        }
        else
        {
            element.style.display = "none";
        }
        // console.log(cardTxt);
    })
})

//Add Title
//Mark as important
//Separate notes by user
//Sync and host to a web server
