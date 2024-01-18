var elForm = document.querySelector(".js-form");
var elFizzBuzzInput = elForm.querySelector(".jsFizzBuzz-input");
var elResult = document.querySelector(".js-result");

elResult.textContent = "Result: "

elForm.addEventListener("submit", function(evt){

    evt.preventDefault();

    var inputValue = elFizzBuzzInput.value;

    if(inputValue % 3 == 0 && inputValue % 5 == 0) {
        elResult.textContent = "FizzBuzz"
    } else if (inputValue % 5 == 0) {
        elResult.textContent = "Fizz"
    } else if (inputValue % 3 == 0) {
        elResult.textContent = "Buzz"
    } else {
        elResult.textContent = "Siz kiritgan raqam 3ga ham 5ga ham bo'linmaydi"
    }

})