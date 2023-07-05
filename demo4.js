var form = document.getElementById('addForm');
var itemList = document.getElementById('items');


// Form submit event
form.addEventListener('submit', (e)=>{
    e.preventDefault();
  
    // Get input value
    var newItem = document.getElementById('item').value;
  
    // Create new li element
    var li = document.createElement('li');
    // Add class
    li.className = 'list-group-item';
    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));
  
    // Create del button element
    var deleteBtn = document.createElement('button');
    var Editbtn = document.createElement('button');
    Editbtn.className = 'btn float-right btn-sm btn-primary';
    Editbtn.appendChild(document.createTextNode('Edit'));
    
    
  
    // Add classes to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  
    // Append text node
    deleteBtn.appendChild(document.createTextNode('X'));
  
    // Append button to li
    li.appendChild(deleteBtn);
    li.appendChild(Editbtn);
  
    // Append li to list
    itemList.appendChild(li);
  });
// Delete event
itemList.addEventListener('click', removeItem);




// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}
