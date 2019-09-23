// Gobal Variables
var quizCalc = function (number1, number2, number3, number4, number5) {
  return ((number1 + number2 + number3 + number4 + number5) % 5)
  // return (number1 + number2 + number3 + number4 + number5)
};

var scrollDown = function () {
  $('html, body').animate({
    scrollTop: $(document).height()
  }, 'fast');
};

var firstName = function (name) {
  $("#yourName").text(name);
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
      firstName(yourName);
      $("#chosenLanguage").text("Javascript");
      $("#aboutLanguage").text("Javascript is the best language out their, and because of your amazing talents we chose this as your first language.");
      $("#languageURL").text("Learn Javascript")
      $("#languageURL").attr("href", "https://www.learn-js.org/")
      $("footer").fadeIn(1000);
      scrollDown();
    } else if (result === 1) {
      // Java
      firstName(yourName);
      $("#chosenLanguage").text("Java");
      $("#aboutLanguage").text("Java is well suited for you because you love complex puzzles, and problem solving.");
      $("#languageURL").text("Learn Java")
      $("#languageURL").attr("href", "https://www.learnjavaonline.org/")
      $("footer").fadeIn(1000);
      scrollDown();
    } else if (result === 2) {
      // Go
      firstName(yourName);
      $("#chosenLanguage").text("Go");
      $("#aboutLanguage").text("Go is an extremely easy language to learn, so we thought you'd love to start here.");
      $("#languageURL").text("Learn Go")
      $("#languageURL").attr("href", "https://www.learn-golang.org/")
      $("footer").fadeIn(1000);
      scrollDown();
    } else if (result === 3) {
      // PHP
      firstName(yourName);
      $("#chosenLanguage").text("PHP");
      $("#aboutLanguage").text("PHP is our pick for you as we know you love a challenge.");
      $("#languageURL").text("Learn PHP")
      $("#languageURL").attr("href", "https://www.learn-php.org/")
      $("footer").fadeIn(1000);
      scrollDown();
    } else if (result === 4) {
      // Python
      firstName(yourName);
      $("#chosenLanguage").text("Python");
      $("#aboutLanguage").text("We chose Python for you for your love of all things related to snakes.");
      $("#languageURL").text("Learn Python")
      $("#languageURL").attr("href", "https://www.learnpython.org/")
      $("footer").fadeIn(1000);
      scrollDown();
    } else {
      $("h3.error").fadeIn(1000);
      scrollDown();
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