const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  const comments = document.querySelector('#comments');

  // Clear previous results
  results.innerHTML = '';
  comments.innerHTML = '';

  // Validate height and weight inputs
  if (isNaN(height) || height <= 0) {
    results.innerHTML = `Please enter a valid height.`;
  } else if (isNaN(weight) || weight <= 0) {
    results.innerHTML = `Please enter a valid weight.`;
  } else {
    // Calculate BMI
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    // Show the calculated BMI
    results.innerHTML = `<span>Your BMI is: ${bmi}</span>`;

    // Determine the BMI category
    const under = "You are underweight. Eat more!";
    const normal = "Chill, you are in the normal weight range.";
    const over = "Hit the gym, buddy.";

    if (bmi < 18.6) {
      comments.innerHTML = `<span>${under}</span>`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      comments.innerHTML = `<span>${normal}</span>`;
    } else if (bmi > 24.9) {
      comments.innerHTML = `<span>${over}</span>`;
    }
  }
});
