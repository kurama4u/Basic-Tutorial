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

// var timedate = new Date();
// //timedate.setFullYear(2010);

// //var stringdate = timedate.toDateString();


//     function myfunction() {
//     document.getElementById("demo").innerHTML = (timedate);
// }

    //document.getElementById("demo").style.color = "green";
    //document.getElementById("demo").style.backgroundColor = "purple";
    //document.getElementById("demo").style.fontStyle = "italic";
    //document.getElementById("demo").style.paddingLeft = "50px";
//     document.getElementById("demo").style.border = "solid purple";
//     document.getElementById("demo").style.borderWidth = "thin";
// }
 //var para = document.getElementsByTagName("p");
//  para[0].style.fontStyle = "italic";
//  para[1].style.fontStyle = "italic";
//  para[2].style.fontStyle = "italic";
//  para[3].style.fontStyle = "italic";
// }
// console.log(para.length);
// for (var loop = 0; loop < para.length; loop++ ){
//     para[loop].style.fontStyle = "italic";
//     console.log (para[loop].innerText.length);
// }
//  }

//whew[0].innerHTML = "the lazy";
//whew[1].innerHTML = "black fox";
//whew[2].innerHTML = "jumps quick";
//whew[3].innerHTML = "over the dog";

// whew[4].innerHTML = whew[0].innerHTML + " " + whew[1].innerHTML + " " + whew[2].innerHTML + " " + whew[3].innerHTML;
//  whew[0].innerHTML = " ";
//  whew[1].innerHTML = " ";
//  whew[2].innerHTML = " ";
//  whew[3].innerHTML = " ";
// function myfunction() {
// var whew = document.getElementById("demo").style.backgroundColor = "blue";
// console.log(whew);
// }
// function malfunction(){
//     document.getElementById("demo").style.backgroundColor = "";
// // }
// function myfunction() {
// document.getElementById("demo").src="php.png";


// }
// function malfunction() {
// document.getElementById("demo").src="sample logo.png";
// }
// function myfunction() {
//     var H = document.createElement("h2");
//     var d = document.getElementById("d");
//     d.appendChild(H);
//     var textnode1 = document.createTextNode("blah3");
//     H.appendChild(textnode1);


// var para = document.createElement("p");
// d.appendChild(para);
// var textnode = document.createTextNode("sahdkjasjkfhajsfahsfjjah kajsfgasfkjagsfkj kjasgfkgasfjka kjhasfjga kjghasjfkg kjgasfk ");
// para.appendChild(textnode);
// var exattribute = document.createAttribute("id");
// exattribute.value = "demo";
// para.setAttributeNode(exattribute);
// }
// function remove(){
//     var H = document.getElementsByTagName("h2")[2];
//     var parent = H.parentNode;
//     parent.removeChild(H);
//     var P = document.getElementsByTagName("p")[2];
//     parent.removeChild(P);
// // }


// VALIDATION FORM

// function validateTextbox() {
//     var box = document.getElementById("name");
//     var box2 = document.getElementById("address");
//     var box3 = document.getElementById("phone");
//     var box4 = document.getElementById("email");

    
//     if (box.value.length < 5 ) {
//         alert("Please enter at least 5 characters on name");
//         box.focus();
//         box.style.border = "solid 3px red";
//     return false;
//     }else {
//         box.style.border = "none";
//     }
//     if (box2.value.length < 5 ) {
//         alert("Please enter at least 5 characters on Address");
//          box2.focus();
//          box2.style.border = "solid 3px red";
//     return false;
//     }else {
//         box2.style.border = "none";
//     }

//     if  (box3.value.length < 5 || isNaN(box3.value) ) {

//     if  (box3.value.length < 5 ) {
//         alert("Please enter at least 5 characters on phone");
//         box3.focus();
//         box3.style.border = "solid 3px red";
//     return false;
//     }
//     if (isNaN(box3.value)){
//         alert("please enter a number");
//         box3.focus();
//         box3.style.border = "solid 3px red";
//     return false;
//     }
//     }else {
//         box3.style.border = "none";
//     }
//     if (box4.value.length < 5 ) {
//         alert("Please enter at least 5 characters email");
//         box4.focus();
//         box4.style.border = "solid 3px red";
//     return false;

//     }else {
//         box4.style.border = "none";
//     }
//     }
// let teacher = function(a, b, lesson){
//     if (lesson === "subtraction"){
//         return a- b;
//     }else if (lesson === "multiply"){
//     return a* b;
//     }
//     else {
//        return a+ b;
//     }
// };
// console.log(teacher(10, 2, ""))

// let x = function(){
//     console.log("this is a call back")
// };
// let y = function(callback){
//     console.log("do something");
//     callback();
// }
// y(x);
// var materials = [
//   'Hydrogen',
//   'Helium',
//   'Lithium',
//   'Beryllium'
// ];

// // var materialsLength1 = materials.map(function(material) { 
// //   return material.length; 
// // }); // [8,6,7,9]
// // console.log(materialsLength1);
// // var materialsLength2 = materials.map((material) => {
// //   return material.length;
// // }); // [8,6,7,9]
// // console.log(materialsLength2);

// var materialsLength3 = materials.map(material => material.length); // [8,6,7,9]
// console.log(materialsLength3);

//this and bind method

// function talk(){
//     console.log(this.name)
// }
// let kurama = {
//     lastname: talk,
//     name: "kurama"
//    }
// let amaruk = talk.bind(kurama);
// kurama.lastname();
// var x = ['a', 'b', 'c', 'd', 'e'];
// var y = [1, 2, 3, 4, 5, 6, 7, 8, 9];



// console.log('x length is: ' + x.length)
// console.log( x.indexOf( 'a' ) );
// console.log( x.indexOf( 'b' ) );
// console.log( x.indexOf( 'c' ) );
// console.log( x.indexOf( 'd' ) );
// console.log( x.indexOf( 'e' ) );
// console.log( x.indexOf( 'f' ) );
// console.log( x.indexOf( 'q' ) );
// console.log( x.indexOf( 'w' ) );
// console.log( x.indexOf( 'r' ) );
// console.log( x.indexOf( 't' ) );

// console.log('x length is: ' + y.length)
// console.log( y.indexOf(0) );
// console.log( y.indexOf(1) );
// console.log( y.indexOf(2) );
// console.log( y.indexOf(3) );
// console.log( y.indexOf(4) );
// console.log( y.indexOf(5) );
// console.log( y.indexOf(6) );
// console.log( y.indexOf(7) );
// console.log( y.indexOf(8) );
// console.log( y.indexOf(9) );
// console.log( y.indexOf(10));
// console.log( y.indexOf(11));


    var z = [32, 33, 40, 34, 88];
    var c = [32, 16, 34, 33];


    let para1 = z.filter( b => c.indexOf(b) == -1);
    let para2 = c.filter( d => z.indexOf(d) == -1);



console.log(qwer);
console.log([...para1 , ...para2]);

