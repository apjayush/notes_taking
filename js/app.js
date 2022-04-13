console.log('Welcome to notes app')


showNotes();

let addBtn = document.getElementById('addBtn')

addBtn.addEventListener('click', function(){
  
  let addTxt = document.getElementById('addTxt')
  let addTitle= document.getElementById('addTitle')
  
  let notes = localStorage.getItem('notes')
  if(notes==null){
    notesObj = [];
  }
  else{
    notesObj = JSON.parse(notes);

  }

  let myObj = {
    title: addTitle.value,
    details: addTxt.value
  }
  notesObj.push(myObj)
  
  localStorage.setItem('notes', JSON.stringify(notesObj))
  addTxt.value = ''; 
  addTitle.value = '';

  showNotes();
  
})

function showNotes(){
  
   let notes = localStorage.getItem('notes');
    if (notes == null) {
      notesObj = [];
    
    } else {
      notesObj = JSON.parse(notes);
    }
    let html ="";
   
      notesObj.forEach(function(element,index){
        
        html =
        html +
        `<div id=${index} class="noteCard my-2 mx-2 card " style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">${element.title}</h5>
      
    <p class="card-text">${element.details}</p>
    <button id ="${index}" onClick="deleteNote(this.id)" class="btn btn-primary">Delete</button>
  </div>
</div>`;

    })
  let notesElm = document.getElementById('notes')
  if(notesObj.length != 0){
    notesElm.innerHTML = html
  }
  else{
    notesElm.innerHTML = `Click to add notes`
  }
}

function deleteNote(index){

   let notes = localStorage.getItem("notes");
   if (notes == null) {
     notesObj = [];
   } else {
     notesObj = JSON.parse(notes);
   }

   notesObj.splice(index,1)
   localStorage.setItem('notes', JSON.stringify(notesObj));
   showNotes();

}


let search = document.getElementById('searchText');

search.addEventListener('input', function(){

  let inputval = search.value

  console.log('input event fired', inputval)

  let noteCard = document.getElementsByClassName('noteCard')

  Array.from(noteCard).forEach(function(element){
   let para = element.getElementsByTagName('p')[0].innerText
  //  console.log(para.innerHTML)
  if(para.includes(inputval)){
    element.style.display = 'block'
  }
  else{
    element.style.display = 'none'
  }
  })
})


 