// Gobal Variables
var quizCalc = function (number1, number2, number3, number4, number5) {
  return ((number1 + number2 + number3 + number4 + number5) % 5)
  // return (number1 + number2 + number3 + number4 + number5)
};


// Start of javascript
$(document).ready(function () {
  $("form#programmingLanguageQuiz").submit(function (event) {
    event.preventDefault();

    var yourName = $("#firstName").val();
    var yourAgeValue = parseInt($("#yourAge").val());
    var favoriteColorValue = parseInt($("#favoriteColor").val());
    var favoriteFoodValue = parseInt($("input:radio[name=favoriteFood]:checked").val());
    var favoriteGameValue = parseInt($("input:radio[name=favoriteGame]:checked").val());
    var favoriteCarValue = parseInt($("#favoriteCar").val());
    var coffeeDrinkerValue = parseInt($("input:radio[name=coffeeDrinker]:checked").val());

    var result = quizCalc(yourAgeValue, favoriteColorValue, favoriteFoodValue, favoriteGameValue, favoriteCarValue, coffeeDrinkerValue);

    if (result === 0) {
      // Javascript
      $("#chosenLanguage").text("Javascript");
      $("#aboutLanguage").text("Javascript is the best language out their, and because of your amazing talents we chose this as your first language.");
      $("footer a #languageURL").text("Learn Javascript")
      $("footer a").attr("href", "https://www.learn-js.org/")
    } else if (result === 1) {
      // Java
      $("#chosenLanguage").text("Java");
      $("#aboutLanguage").text("Java is well suited for you because you love complex puzzles, and problem solving.");
      $("footer a #languageURL").text("Learn Java")
      $("footer a").attr("href", "https://www.learnjavaonline.org/")
    } else if (result === 2) {
      // Javascript
      $("#chosenLanguage").text("Go");
      $("#aboutLanguage").text("Go is an extremely easy language to learn, so we thought you'd love to start here.");
      $("footer a #languageURL").text("Learn Go")
      $("footer a").attr("href", "https://www.learn-golang.org/")
    } else if (result === 3) {
      // Javascript
      $("#chosenLanguage").text("PHP");
      $("#aboutLanguage").text("PHP is our pick for you as we know you love a challenge.");
      $("footer a #languageURL").text("Learn PHP")
      $("footer a").attr("href", "https://www.learn-php.org/")
    } else if (result === 4) {
      // Javascript
      $("#chosenLanguage").text("Python");
      $("#aboutLanguage").text("We chose Python for you for your love of all things related to snakes.");
      $("footer a #languageURL").text("Learn Python")
      $("footer a").attr("href", "https://www.learnpython.org/")
    } else {

    }

    // Error Testing
    // console.log("Name: " + yourName);
    // console.log("Age: " + yourAgeValue);
    // console.log("Color: " + favoriteColorValue);
    // console.log("Food: " + favoriteFoodValue);
    // console.log("Game: " + favoriteGameValue);
    // console.log("Car: " + favoriteCarValue);
    // console.log("Coffee: " + coffeeDrinkerValue);
    // console.log(result);
  });
});