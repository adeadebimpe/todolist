var myList = document.getElementsByTagName("li");
var i;
 for (i = 0; i < myList.length; i++){
    var span = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myList[i].appendChild(span);
    
 }



 //on click close 
var close = document.getElementsByClassName("close");
var i;
for(i = 0; i < close.length; i++){
    close[i].onclick = function(){
        var closeBtn = this.parentElement;
        closeBtn.style.display = "none";
    }
}



function addToDo(){
var toDoValue = document.getElementById("myInput").value;

var li = document.createElement("li");
var text = document.createTextNode(toDoValue);
li.appendChild(text);


if(toDoValue = ''){
    alert("add a to do list item!");
}else{
    var listToDo = document.getElementById("mytoDo");
    listToDo.appendChild(li);
}
// add close button

var span = document.createElement("span");
var txt = document.createTextNode("\u00D7");
span.className = "close";
span.appendChild(txt);
li.appendChild(span);

//on click close 
var close = document.getElementsByClassName("close");
var i;
for(i = 0; i < close.length; i++){
    close[i].onclick = function(){
        var closeBtn = this.parentElement;
        closeBtn.style.display = "none";
    }
}
}












/* 


document.getElementById("myInput").value ="";
var span = document.createElement("span");
var txt = document.createTextNode("\u00D7");
span.className = "close";
span.appendChild(txt);
li.appendChild() 
 */