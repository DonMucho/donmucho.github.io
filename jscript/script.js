function favTutorial() {
  var mylist = document.getElementById("myList");
  document.getElementById("favourite").value = mylist.options[mylist.selectedIndex].text;
  if (mylist=="w3schools") {
    document.getElementById("demo").innerHTML="GO";
  }
}

function add()
{
var a=document.cal.num1.value;
var b=document.cal.num2.value;
var c=parseInt(a)+parseInt(b);
document.cal.res.value=c;
}

















/*
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruits.length;

let text = "<ul>";
for (let i = 0; i < fLen; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";

document.getElementById("demo").innerHTML = text;


const friends = ["Jhomar", "Gian", "Patrick", "Randle", "Pher"];
let fLen = friends.length;

let text = "";
for (let i = 0; i < fLen; i++ ){
  text += friends[i] + "<br>"
}
document.getElementById("demo").innerHTML = text;

function myFunction() {
    var name = document.getElementById("name").value;
    document.getElementById("printedname").innerHTML = "Name: " + name;
    var age = document.getElementById("age").value;
    document.getElementById("printedage").innerHTML = "Age: " + age;
  }
  
function addition() {
    var num1, num2, added;
    
    num1 = Number(document.getElementById("num1").value);
    num2 = Number(document.getElementById("num2").value);
    added = num1 + num2;
    document.getElementById("add").innerHTML =  "Added: " + added;
}
    
var firstname = "Jamaica";
var lastName = "Sambrano";
var age = 19;
const friends = ["Jhomar", "Gian", "Patrick"];
friends[0] = "Pher Paolo";
friends.push("Randle");
alert("Name: " + firstname + " " + lastName);
document.getElementById("name").innerHTML = "Name: " + firstname + " " + lastName;
document.getElementById("age").innerHTML = "Age: " + age;
document.getElementById("array").innerHTML = "First Friends: " + friends[3]; 

*/
