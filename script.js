function changeColor(clickedButton) {
    var buttons = document.getElementsByClassName('rate-Btn');

    for (var i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove('clicked');
    }

    clickedButton.classList.toggle('clicked');
}

function contentChange() {
  var selectedRatingElement = document.getElementById('selectedRating');
  // var selectedRating = document.querySelector('.rate-Btn.clicked').innerText;

  var clickedButton = document.querySelector('.rate-Btn.clicked');

  // Get the text content (rating) of the clicked button
  var selectedRating = clickedButton.innerText;
  selectedRatingElement.innerText = 'You selected' +" "+ selectedRating+ " " + 'out of 5';

  document.getElementById('rating-state').style.display = 'none';
  document.getElementById('thankyou-state').style.display = 'flex';
}