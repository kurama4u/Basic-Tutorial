/*var qty1 = 1;
var qty2 = 2;

qty1 = qty1 + qty2;
qty1++;
//document.write(qty1);
document.getElementById("demo").innerHTML=qty1;


qty1--;

document.getElementById("demo1").innerHTML=qty1;

/*function clickme() {
var string1 = "GG ";
var string2 = "W ";
var string3 = "P";
var string4 = string1.concat(string2, string3);
document.getElementById("demo2").innerHTML = string4;
}*/

// function cards(player, move) {
// if (move < 5 && move > 2 ) {
//     document.write(player + " Boom wins! ");}

// else if (move <= 14 ) {
//     document.write(player + " is defeat! ");}
// else  {
//     document.write("miss deal");}
// }
// cards("rama", 1);
// function trynew(a, b){
//      product = a * b;
//      return product;
//  }
//  var newtry = trynew(10,10);
//  document.write(newtry); 
// var name1 = "charles";

// function names(){
//     var name2 = "kurama";
//     document.write(name2);
// }
// names();
// document.write(name1);
// function basket(player, points) {
//      points += 10;
//     var team = player + " score " + points + " points " + "and that is his career high";
   
//     document.write(team);

// }
// var b = 75;
// basket("kurama", b); //pass by value

// var obj = {
//     car: "mazda",
//     model: 97,
//     color: "red",
//     key: function(){
//         document.write("broom broom");
//     }
// };

// if (obj.color == "black"){
//    obj.key();
// }
// else document.write("need to re paint");

// var car = "Hello World";

// gg = car.bold();

// document.write(gg);


//var quantity = Math.sqrt(81);

//document.write(quantity);

var timedate = new Date();
timedate.setFullYear(1997);

var stringdate = timedate.toDateString();


    function myfunction() {
    document.getElementById("demo").innerHTML = (stringdate);
}