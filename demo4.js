var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');


// Form submit event
form.addEventListener('submit', (e)=>{
    e.preventDefault();
  
    // Get input value
    var newItem = document.getElementById('item').value;
    var newItem1 = document.getElementById('item1').value;

    localStorage.setItem('newItem','newItem1');
  
    // Create new li element
    var li = document.createElement('li');
    // Add class
    li.className = 'list-group-item';
    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    li.appendChild(document.createTextNode(newItem1));
  
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
itemList.addEventListener('click', (e)=>{
    if(e.target.classList.contains('delete')){
      if(confirm('Are You Sure?')){
        var li = e.target.parentElement;
        itemList.removeChild(li);
      }
    }
  });





filter.addEventListener('keyup' ,(e) => {
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    // Get lis
    var items = itemList.getElementsByTagName('li');
    // Convert to an array
    Array.from(items).forEach((item) => {
      var itemName = item.firstChild.textContent;
      var itemName2 = item.childNodes[1].textContent;
      
      
      if(itemName.toLowerCase().indexOf(text) != -1 || itemName2.toLowerCase().indexOf(text) != -1){
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  } )
