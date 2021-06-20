//Change headline with JS
let headLine = document.querySelector("#headLine");

//First method
//document.querySelector("#headLine").innerHTML = "This is a Quiz";

//Second method with a function
let changeHeadLine = document.querySelector("#headLine");

changeHeadLine.innerHTML="This is a Test";

//Variable that colects all the list
//let listItemsTodo = document.querySelector("#listItems").getElementsByTagName("li");
let listItemsTodo = document.querySelectorAll("#listItems li");


//for loop to change all the items of the list for "Hello world"
//for(i=0; i<listItems.length; i++){
//    listItems[i].innerHTML = "Hello World";
//}


//Everytime you select an item from the list change the title (headline)
//1
let newItemCounter = 1;
let addButton = document.querySelector("#addButton");
let listItems = document.querySelector("#listItems");

//2
// for(i=0; i<listItems.length; i++){
//     listItems[i].addEventListener("click", activateItem);
// }

//3
function activateItem(){
 //   alert("click detected!")
 headLine.innerHTML = this.innerHTML;
 for(i=0; i<listItems.length; i++){
    //listItems[i]classList.remove("active");
}
 this.classList.add("active");
}

//3
addButton.addEventListener("click", createNewItem);
//4
function createNewItem(){
   // listItems.innerHTML += "something new";  <=Shows it is working
   listItems.innerHTML +="<li> something new " + newItemCounter + "</li>";
   newItemCounter++;
}

