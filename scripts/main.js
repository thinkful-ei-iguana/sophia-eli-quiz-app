let questionNumber = 1;
let score = 0;
initStartScreen();

function initStartScreen() {
  // show after restart button
  $("#start-screen").show();
  $("#start-header").show();

  // hide headers
  $('#question-header').hide();
  $('#end-header').hide();

  // hide content, buttons
  $('#question-screen').hide();
  $('#end-screen').hide();
  $('#question-container').show();

  questionNumber = 1;
  score = 0;
  updateQuestionNumText(questionNumber);
  updateScoreNumText(score);
  
}

// start quiz
$("#start-button").click(function () {
  $('#question-header').show();
  $('#question-screen').show();
  $('#start-header').hide();
  $('#start-screen').hide();
  $('#next-button').hide();
  $('#submit-button').show();
  $('#validation-container').hide();
  $('#question-text').text(store.questions[questionNumber - 1].question);
  $('#answerOneLabel').text(store.questions[questionNumber - 1].options[0]);
  $('#answerTwoLabel').text(store.questions[questionNumber - 1].options[1]);
  $('#answerThreeLabel').text(store.questions[questionNumber - 1].options[2]);
  $('#answerFourLabel').text(store.questions[questionNumber - 1].options[3]);
  $('#answerFiveLabel').text(store.questions[questionNumber - 1].options[4]);
});

// submit button
$('#submit-button').click(function (e) {
  e.preventDefault();
  $('#submit-button').hide();
  $('#next-button').show();

  // hide questions and selections
  $('#question-container').hide();
  // score is inputted

  let selected = $('input[name="answer"]:checked + label').text();
  console.log(selected);
  let correctAnswer = store.questions[questionNumber - 1].answer;

  if (selected === correctAnswer) {
    $('#validation-container').show();
    $('#validation-text').text("Nice!");
    score++
  }
  else {
    $('#validation-container').show();
    $('#validation-text').text("Err Wrong!");
  }

  updateScoreNumText(score);
  console.log(updateScoreNumText());
  // text shows up based on your selection. Text says You got it! or Wrong

  // if statement to determine if user is on the last question -> transition to end-screen
  let questionsLength = store.questions.length;
  if (questionNumber === questionsLength) {
    $('#question-header').hide();
    $('#question-screen').hide();
    $('#start-header').hide();
    $('#start-screen').hide();
    $('#next-button').hide();
    $('#end-header').show();
    $('#end-screen').show();
    $('#stats-questions-correct').text(score);

    if( score <= 3 ){
      $('#end-screen-img').attr("src","sophia-eli-quiz-app/styles/img/sad-mario.png")
      $('#quizResult').text("Boo Hoo!");
      $('#quizResultSub').text("Maybe we'll keep the controller away from you...");
    }
    else {
      $('#end-screen-img').attr("src","sophia-eli-quiz-app/styles/img/happy-pikachu.png")
      $('#quizResult').text("You did it!");
      $('#quizResultSub').text("I guess you do know your video games after all");
    }
  }


});

// next button
$('#next-button').click(function (e) {
  e.preventDefault();
  $('#submit-button').show();
  $('#next-button').hide();
  $('#validation-container').hide();
  $('#question-container').show();
  // next question and selections shows up
  // question number is updated
  questionNumber++;
  updateQuestionNumText(questionNumber);
  $('#question-text').text(store.questions[questionNumber - 1].question);
  $('#answerOneLabel').text(store.questions[questionNumber - 1].options[0]);
  $('#answerTwoLabel').text(store.questions[questionNumber - 1].options[1]);
  $('#answerThreeLabel').text(store.questions[questionNumber - 1].options[2]);
  $('#answerFourLabel').text(store.questions[questionNumber - 1].options[3]);
  $('#answerFiveLabel').text(store.questions[questionNumber - 1].options[4]);
});

// restart quiz button
$('#restart-button').click(function () {
  initStartScreen();
})

// changes text for question number
function updateQuestionNumText(questionNumber) {
  $('#questionNumber').text(questionNumber);
}

function updateScoreNumText(score) {
  $('#totalScore').text(score);
}