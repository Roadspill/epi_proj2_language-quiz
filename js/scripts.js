// Gobal Variables
var quizCalc = function (number1, number2, number3) {
  return ((number1 + number2 + number3) % 4)
};

// Start of javascript
$(document).ready(function () {
  $("form#characterQuiz").submit(function (event) {
    event.preventDefault();

  });
});