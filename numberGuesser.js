let randomNum = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

// Get new number
function refreshNumber(){
  randomNum = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  document.getElementById("guessField").value = "";
  outputMessage("statusArea", "Guess the New Number! :)");
}

// Check number
function submitted(){  
  let guess = Number(document.getElementById("guessField").value);
    if (guess === randomNum) {
      outputMessage("statusArea", `You got it! You took <b>${attempts} attempts</b>! <br>Click on <b>\"Get New Number\"</b> to play again.`);
      document.getElementById("guessField").value = "You GOT IT! Play again?";
      attempts = 0;
    }
    else if (guess > randomNum) {
      attempts++;
      outputMessage("statusArea",`Too High! <br> Attempt # ${attempts} `);
    }
    else if (guess < randomNum) {
      attempts++;
      outputMessage("statusArea",`Too Low! <br> Attempt # ${attempts} `);
    }
    else if (isNaN(guess)) {
      attempts++;
      outputMessage("statusArea","Not a number! Try again!");
    }
    else {
      attempts++;
      outputMessage("statusArea","Not a number! Try again!")
    };
}

// Output message
function outputMessage(elementID, message) {
  let elemToUpdate = document.getElementById(elementID);
  elemToUpdate.innerHTML = message;
}


// Functions for CSS
$(function() {
  $('input').on('change', function() {
    let input = $(this);
    if (input.val().length) {
      input.addClass('populated');
    }
    else {
      input.removeClass('populated');
    }
  });

  setTimeout(function() {
    $('#guessField').trigger('focus');
  }, 500);
});

