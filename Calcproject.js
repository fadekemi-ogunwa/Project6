 var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var seven = document.getElementById("seven");
var eight = document.getElementById("eight");
var nine = document.getElementById("nine");
var zero = document.getElementById("zero");
var display = document.getElementById("screen");
var numbers = document.getElementsByTagName("input");
var multiply = document.getElementById("multiply");
var plus = document.getElementById("plus");
var minus = document.getElementById("minus");
var divide = document.getElementById("divide");
var percent = document.getElementById("percentage");
var equals = document.getElementById("equal");
var plus = document.getElementById("plus");
var dot = document.getElementById("dot");
var clear = document.getElementById("c");
var off = document.getElementById("off");

one.onclick = function () {
  display.value += one.value;
}

two.onclick = function () {
  display.value+= two.value;
}

three.onclick = function () {
  display.value+= three.value;
}

four.onclick = function () {
  display.value+= four.value;
}

five.onclick = function () {
  display.value+= five.value;
}

six.onclick = function () {
  display.value+= six.value;
}

seven.onclick = function () {
  display.value+= seven.value;
}

eight.onclick = function () {
  display.value+= eight.value;
}

nine.onclick = function () {
  display.value+= nine.value;
}

zero.onclick = function () {
  display.value+= zero.value;
}
multiply.onclick = function () {
  display.value+= "*";
}

plus.onclick = function () {
  display.value+= "+";
}

divide.onclick = function () {
  display.value+= "/";
}

minus.onclick = function () {
  display.value+= "-";
}

percent.onclick = function () {
  display.value+= "%";
}
equals.onclick = function () {
  var answer = eval(display.value);
  display.value = answer;
}

clear.onclick = function () {
  var answer = eval(display.value);
  display.value = "";
}
dot.onclick = function () {
  display.value+= ".";
}
off.onclick = function () {
  display.value = "";
}
  
