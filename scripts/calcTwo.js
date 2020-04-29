//
// Grab the values inside the form then ,calculate them, then put them in the website.
//
//
// __1 create a function
function calc() {
  //
  // __2  .value, use the value property to grab the input value.
  //
  //   var a = document.querySelector("#value1").value;
  //
  //
  //*****   important!! *****/
  //
  // 3  but if you do it in that way, the second value is going to be transformed in a string 4², that's why before adding the document.query..., you add parseInt(), this parseInt is going to convert the data i have and introduce it into the parenthesis and transform it into numbers.

  // and you d it like so
  // __4
  //
  //
  var a = parseInt(document.querySelector("#value1").value);
  //
  // __5
  //
  var b = parseInt(document.querySelector("#value2").value);
  //
  // __6
  //
  var operatorr = document.querySelector("#operator").value;
  //
  //
  // __7
  var calculate;
  //
  //
  // __8
  //
  //CREATE AN IF STATEMENT
  //   if certain condition has been meet, DO something.

  if (operatorr == "add") {
    calculate = a + b;
  } else if (operatorr == "min") {
    calculate = a - b;
  } else if (operatorr == "div") {
    calculate = a / b;
  } else if (operatorr == "mul") {
    calculate = a * b;
  }
  //
  //
  // __9
  //   Once you console.log and check the browser, you will see that nothing happened, and that is because you need an EVENT
  //
  //
  //   console.log(calculate);
  //
  //
  // __12
  //   __HERE you add the .innerHtml, what the innerHtnl does is that it inserts a value in between a pair of html tags
  //
  document.querySelector("#result").innerHTML = calculate;
  //
  //
  // __10
  //
  //   Go to the HTML and create a div with an ID  called result,DON'T write anything inside of it and the DIV should be outside the form.
  //
  //
  //
  // __11
  //
  //
  //
}
