// listItems = document.getElementsByClassName("list-group-item");
// listItems[2].style.backgroundColor = "green";
// listItems[0].style.fontWeight = "bold";
// listItems[1].style.fontWeight = "bold";
// listItems[2].style.fontWeight = "bold";
// listItems[3].style.fontWeight = "bold";


// li = document.getElementsByTagName("li");
// for(i=0; i<li.length; i++){
//     li[i].style.backgroundColor = "#ccc";
// }
//querySelector
// secondItem = document.querySelector(".list-group-item:nth-child(2)");
// secondItem.style.backgroundColor = "green";

// thirdItem = document.querySelector(".list-group-item:nth-child(3)");
// thirdItem.style.display = "none";

// //querySelectorALL
// liItem = document.querySelectorAll(".list-group-item");
// liItem[1].style.color = "green";
// li = document.querySelectorAll(".list-group-item:nth-child(odd)");
// for(i=0; i<li.length; i++){
//     li[i].style.backgroundColor = "green"
// }


ItemList = document.querySelector("#items");
//parentElement
// console.log(ItemList.parentElement)
// ItemList.parentElement.style.backgroundColor = "grey";

//lastelementchild
console.log(ItemList.lastElementChild);
ItemList.lastElementChild.style.backgroundColor = "blue";

//lastchild
console.log(ItemList.lastChild);
//ItemList.lastChild.style.backgroundColor = "blue";

//firstelementchild
main = document.querySelector("#main");
console.log(main.firstElementChild)
ItemList.firstElementChild.textContent = "hello"

//firstChild
console.log(ItemList.firstChild);

//nextsibling
console.log(ItemList.nextSibling);

//nextelementsibling
console.log(ItemList.nextElementSibling);
//previoussibling
console.log(ItemList.previousSibling);

//previouselementsibling
console.log(ItemList.previousElementSibling);
ItemList.previousElementSibling.style.backgroundColor="brown";
//createelement
newId = document.createElement("id");
console.log(newId);

//setAttribute
newId.setAttribute("name", "newid" );
//createtesxtnode
newIdTxt = document.createTextNode("hi this is new id");
//appendchild
newId.appendChild(newIdTxt);

