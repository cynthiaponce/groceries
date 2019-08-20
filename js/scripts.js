$(document).ready(function() {
  $("form.form").submit(function(event) {
    var groceryList = ["input1", "input2", "input3", "input4", "input5"];

    groceryList.forEach(function(inputVal) {
    var userInput = $("input#" + inputVal).val();
    $("#" + inputVal + "Answer").text(userInput);
    });

    $("#summary").show();

    event.preventDefault();


    //alert(upperCaseList);

  //  var upperCaseList = groceryList.map(function(myList) {
  //    return myList.toUpperCase();

  });
});
