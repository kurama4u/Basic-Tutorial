var qty1 = 1;
var qty2 = 2;

qty1 = qty1 + qty2;
qty1++;
//document.write(qty1);
document.getElementById("demo").innerHTML=qty1;


qty1--;

document.getElementById("demo1").innerHTML=qty1;

function clickme() {
var string1 = "GG ";
var string2 = "W ";
var string3 = "P";
var string4 = string1.concat(string2, string3);
document.getElementById("demo2").innerHTML = string4;
}