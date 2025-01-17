console.log('This is notes website')

showNotes();

let addBtn= document.getElementById('addBtn')

addBtn.addEventListener('click', function(e){
    let addTxt = document.getElementById('addTxt');
    let notes = localStorage.getItem('notes');
    if(notes==null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem('notes', JSON.stringify(notesObj))
    addTxt.value = ''
    console.log(notesObj)
    showNotes()
})

function showNotes(){
    let notes = localStorage.getItem("notes");
     if (notes == null) {
       notesObj = [];
     } else {
       notesObj = JSON.parse(notes);
     }
     let html  = ''
     Array.from(notesObj).forEach(function(element, index){
         html += `<div class="noteCard my-2 mx-2 card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Note-${index}</h5>
    <p class="card-text">${element}</p>
    <button id="${index}" onClick="deleteNote(this.id)" class="btn btn-primary">Delete</button>
  </div>
</div>
`;
     })

     let notesElm = document.getElementById('notes');
     if(notesObj.length!=0){
       notesElm.innerHTML = html;
     }
     else{
       notesElm.innerHTML = 'Add a note to display here'
     }

}

function deleteNote(index){
    console.log('I am deleting', index)
     let notes = localStorage.getItem("notes");
     if (notes == null) {
       notesObj = [];
     } else {
       notesObj = JSON.parse(notes);
     }
     notesObj.splice(index,1);
     localStorage.setItem('notes',JSON.stringify(notesObj))
     showNotes()
    
}


let search = document.getElementById('searchTxt')
search.addEventListener('input', function(){

  let inputVal= search.value;
  console.log('input event fired', inputVal);
  let noteCards =  document.getElementsByClassName('noteCard')
  console.log(noteCards)
  Array.from(noteCards).forEach(function(element){
    let cardTxt = element.getElementsByTagName('p')[0].innerHTML;
    if(cardTxt.includes(inputVal)){
      element.style.display = "block"
    }
    else{
      element.style.display = 'none'
    }
  })
})

