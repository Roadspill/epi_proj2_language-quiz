// Gobal Variables
var quizCalc = function (number1, number2, number3, number4, number5) {
  return ((number1 + number2 + number3 + number4 + number5) % 5)
};


// Start of javascript
$(document).ready(function () {
  $("form#programmingLanguageQuiz").submit(function (event) {
    event.preventDefault();

    var yourName = $("#firstName").val();
    var yourAgeValue = $("#yourAge").val();
    var favoriteColorValue = parseInt($("#favoriteColor").val());
    var favoriteFoodValue = parseInt($("input:radio[name=favoriteFood]:checked").val());
    var favoriteGameValue = parseInt($("input:radio[name=favoriteGame]:checked").val());
    var favoriteCarValue = parseInt($("#favoriteCar").val());
    var coffeeDrinkerValue = parseInt($("input:radio[name=coffeeDrinker]:checked").val());



    // Error Testing
    // console.log("Name: " + yourName);
    // console.log("Age: " + yourAgeValue);
    // console.log("Color: " + favoriteColorValue);
    // console.log("Food: " + favoriteFoodValue);
    // console.log("Game: " + favoriteGameValue);
    // console.log("Car: " + favoriteCarValue);
    // console.log("Coffee: " + coffeeDrinkerValue);
  });
});