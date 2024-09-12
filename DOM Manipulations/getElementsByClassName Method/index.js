const fruits_list = document.getElementsByClassName("fruit");
const body_tag = document.getElementsByTagName("body");

body_tag[0].style.fontWeight = "bold";  

for (let i = 0; i < fruits_list.length; i++) {
  fruits_list[i].style.fontWeight = "bold";  
}

fruits_list[2].style.backgroundColor = "yellow";  