// I Shouldnt have done it this way, but i wanted to see the different ways i could do it.

function calcOne() {
  //*****   important!! *****/
  //
  //   but if you do it in that way, the second value is going to be transformed in a string 4², that's why before adding the document.query..., you add parseInt(), this parseInt is going to convert the data i have and introduce it into the parenthesis and transform it into numbers.

  // and you d it like so:
  // __
  //
  //
  var a = parseInt(document.querySelector("#val1").value);
  //

  //
  var b = parseInt(document.querySelector("#val2").value);
  //
  //
  //
  // First way
  document.querySelector("#valResult1").value = a + b;
  //
  //
}
// ----------------------------------------------
// minus
// ----------------------------------------------

//

function calcTwo() {
  //

  //
  var a = parseInt(document.querySelector("#val3").value);
  //
  var b = parseInt(document.querySelector("#val4").value);
  //
  //
  //
  // Second Way
  var calculate = a - b;
  //
  document.querySelector("#valResult2").value = calculate;
  //
  //

  //
  //
}
// ----------------------------------------------
// multiply
// ----------------------------------------------
function calcThird() {
  //
  //
  var a = parseInt(document.querySelector("#val5").value);
  //
  var b = parseInt(document.querySelector("#val6").value);
  //
  //
  document.querySelector("#valResult3").value = a * b;
}
// ----------------------------------------------
// divide
// ----------------------------------------------
function calcFourth() {
  var a = parseInt(document.querySelector("#val7").value);
  var b = parseInt(document.querySelector("#val8").value);
  //
  //
  document.querySelector("#valResult4").value = a / b;
}
