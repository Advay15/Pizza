menu_list_array = ["Veg Margherita Pizza","Pepperoni Pizza","Non-veg Supereme","Chicken Supereme","New York Cheese Pizza","BBQ Chicken Pizza","Hawaiian Pizza","Veg Supereme","Deluxe Veg Pizza","Deluxe Non-veg Pizza"];

function getmenu(){
var htmldata;
var htmldata="<ol class='menulist'>"
menu_list_array.sort();
for(var i=0;i<menu_list_array.length;i++){
htmldata=htmldata+"<li>"+ menu_list_array[i]+"</li>";
}
htmldata=htmldata+"</ol>";
document.getElementById("display_menu").innerHTML=htmldata;
}

function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
menu_list_array.sort();
htmldata="<section class='card'>"
for(var i=0;i<menu_list_array.length;i++){
    htmldata=htmldata+'<div class="card">'
    +'<img src="https://media.istockphoto.com/vectors/whole-pan-pepperoni-pizza-with-slice-vector-id1172122846?k=6&m=1172122846&s=612x612&w=0&h=HXqBb04K38s-wr3C43bdiHuhLlYhr3vmZprTCkhuedA=">'
    +menu_list_array[i] +"</div>";
}
htmldata=htmldata+"</section>";
document.getElementById("display_addedmenu").innerHTML=htmldata;
}

function addtop(){
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item)
    add_item();
}