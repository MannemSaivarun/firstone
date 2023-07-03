listItems = document.getElementsByClassName("list-group-item");
listItems[2].style.backgroundColor = "green";
listItems[0].style.fontWeight = "bold";
listItems[1].style.fontWeight = "bold";
listItems[2].style.fontWeight = "bold";
listItems[3].style.fontWeight = "bold";


li = document.getElementsByTagName("li");
for(i=0; i<li.length; i++){
    li[i].style.backgroundColor = "#ccc";
}