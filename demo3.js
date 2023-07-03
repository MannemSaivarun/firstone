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
secondItem = document.querySelector(".list-group-item:nth-child(2)");
secondItem.style.backgroundColor = "green";

thirdItem = document.querySelector(".list-group-item:nth-child(3)");
thirdItem.style.display = "none";

//querySelectorALL
liItem = document.querySelectorAll(".list-group-item");
liItem[1].style.color = "green";
li = document.querySelectorAll(".list-group-item:nth-child(odd)");
for(i=0; i<li.length; i++){
    li[i].style.backgroundColor = "green"
}
