menu= [
"Veg Margherita Pizza",
"Chicken Tandoori Pizza",
"Veg Supreme Pizza",
"Paneer Tikka Pizza",
"Deluxe Veggie Pizza",
"Veg Extravaganza Pizza",];

function getmenu(){
var htmldata;
menu.sort();
for(i=0;i<6;i++){
var htmldata=htmldata+"<li>"+menu[i]+"</li>";
document.getElementById("display_menu").innerHTML=htmldata;
}
}

function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
menu.sort();
htmldata="<section class='cards'"
for(var i=0;i<6;i++) {

    htmldata=htmldata+'<div class="card">'
    +'<img src="images/pizzaImg.png"/>'
    +menu[i]+'</div>'
}
htmldata=htmldata+"</section>"
document.getElementById("display_addedmenu").innerHTML=htmldata;
}

function add_top(){
    var item=document.getElementById("add_item").value;
    menu.push(item);
    add_item();
}