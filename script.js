$(document).ready(function () {
  const magic8Ball = {};

  magic8Ball.answerList = [
    "Absolutely",
    "Maybe",
    "Without a doubt",
    "Meh",
    "No way, Jose",
    "Yes, definitely",
    "Uncertain",
    "There is a good chance",
    "In your dreams",
    "Furgedaboutit",
    "Dream on",
    "When pigs fly",
  ];

  // define the method
  magic8Ball.askQuestion = function (question) {
    //create a random number
    let randomNumber = Math.random();
    console.log(randomNumber);

    // make the random number between 0 and the number of items in your array
    const randomAnswerArray = randomNumber * this.answerList.length;
    console.log(randomAnswerArray);
    // round down the number to be a whole number
    const randomIndex = Math.floor(randomAnswerArray);
    // use that number to index a random number from the answers array
    const answer = this.answerList[randomIndex];
    $("#8ball").effect("shake");
    $("#answer").text(answer);
    $("#answer").fadeIn(3000);
    $("#8ball").attr(
      "src",
      "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png"
    );
    console.log(question);
    console.log(answer);
  };

  /*magic8Ball.askQuestion("Will today be a great day?");*/
  $("#answer").hide();

  const onClick = function () {
    $("#answer").hide();
    $("#8ball").attr(
      "src",
      "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png"
    );
    setTimeout(function () {
      var question = prompt("Type a yes or no question");
      magic8Ball.askQuestion(question);
    }, 500);
  };
  $("#questionButton").click(onClick);
});
