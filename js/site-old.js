// get the values from the page
// Controller function
function getValues() {
  let fizzValue = document.getElementById("fizzValue").value;
  let buzzValue = document.getElementById("buzzValue").value;

  fizzValue = parseInt(fizzValue);
  buzzValue = parseInt(buzzValue);

  let fbResults = generateFizzBuzz(fizzValue, buzzValue);

  displayFizzBuzz(fbResults);
}

// generate Fizz Buzz template string
// Logic function
function generateFizzBuzz(fizzValue, buzzValue) {
  let output = [];

  for (let i = 1; i <= 100; i++) {
    if (i % fizzValue === 0 && i % buzzValue === 0) {
      output += "<tr><td>FizzBuzz</td></tr>";
    } else if (i % fizzValue === 0) {
      output += "<tr><td>Fizz</td></tr>";
    } else if (i % buzzValue === 0) {
      output += "<tr><td>Buzz</td></tr>";
    } else {
      output += `<tr><td>${i}</td></tr>`;
    }
  }
  return output;
}

// display the results string
// View function
function displayFizzBuzz(fbResults) {
  document.getElementById("results").innerHTML = fbResults;
}
