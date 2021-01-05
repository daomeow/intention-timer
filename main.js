

var category = document.querySelector('.')
var description = document.querySelector('.description').value //accomplish entry field
var minutes = document.querySelector('.minutes');
var seconds = document.querySelector()

var studyButton = document.querySelector('.study-button');
var meditateButton = document.querySelector('.meditate-button');
var exerciseButton = document.querySelector('.exercise-button');
var startActivityButton = document.querySelector('.start-activity');

// # id's for category buttons


studyButton.addEventListener('click', study);
meditateButton.addEventListener('click', meditate);
exerciseButton.addEventListener('click', exercise);
startActivityButton.addEventListener('click', startActivity);


function study () {
  category = "Study";
  study.classList.add('buttonChange'); //category button changes
};

function meditate() {
  category = "Meditate";
  meditate.classList.add('buttonChange');
};

function exercise() {
  category = "Exercise";
  exercise.classList.add('buttonChange');
};

function createActivity() {
  var userActivity = {};
  userActivity.category = category;
  userActivity.description = description.value;
  userActivity.minutes = minutes.value;
  userActivity.seconds = seconds.value;
};

function startActivity() {
  hideForm();
  createActivity();
  currentActivity = new Activity();
  clearForm();
};

function hideForm() {
  hide(studyButton);
  hide(meditateButton);
  hide(exerciseButton);
  hide(description);
  hide(minutes);
  hide(seconds);
  hide(startActivityButton);
};

function clearForm() {
  //category = "";
  description.innerText = "";
  minutes.innerText = "";
  seconds.innerText = "";
};
