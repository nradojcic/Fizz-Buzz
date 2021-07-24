// get Fizz and Buzz values from the user, the defaults are 3 and 5
// Controller function
function getValues() {
  // get user values from the page
  let fizzValue = document.getElementById("fizzValue").value;
  let buzzValue = document.getElementById("buzzValue").value;

  // parse for numbers
  fizzValue = parseInt(fizzValue);
  buzzValue = parseInt(buzzValue);

  // check that the numbers are integers
  if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)) {
    // call fizzBuzz function to determine FizzBuzz values
    let fbArray = fizzBuzz(fizzValue, buzzValue);

    // call displayData to write the values to the webpage
    displayData(fbArray);
  } else {
    alert("You must enter integer numbers!");
  }
}

// do FizzBuzz calculations - version #1 If/Else
// Logic function
function fizzBuzz(fizzValue, buzzValue) {
  // initialize returnArray
  let returnArray = [];

  // loop from 1 to 100
  for (let i = 1; i <= 100; i++) {
    // check the current value in three steps
    // step 1 - check if divisible by both 3 and 5
    // if yes - push "FizzBuzz" into returnArray
    if (i % fizzValue == 0 && i % buzzValue == 0) {
      returnArray.push("FizzBuzz");
    }
    // step 2 - check if divisible by fizz value (3)
    // if yes - push "Fizz" into returnArray
    else if (i % fizzValue == 0) {
      returnArray.push("Fizz");
    }
    // step 3 - check if divisible by buzz value (5)
    // if yes - push "Buzz" into returnArray
    else if (i % buzzValue == 0) {
      returnArray.push("Buzz");
    }
    // otherwise - push the number into returnArray
    else {
      returnArray.push(i);
    }
  }

  // return the FizzBuzz values array
  return returnArray;
}

// fizzBuzz version #2 using Switch Statement
function fizzBuzz2(fizzValue, buzzValue) {
  let returnArray = [];
  let Fizz = false;
  let Buzz = false;

  for (let i = 1; i <= 100; i++) {
    Fizz = i % fizzValue == 0;
    Buzz = i % buzzValue == 0;

    switch (true) {
      case Fizz && Buzz: {
        returnArray.push("FizzBuzz");
        break;
      }
      case Fizz: {
        returnArray.push("Fizz");
        break;
      }
      case Buzz: {
        returnArray.push("Buzz");
        break;
      }
      default: {
        returnArray.push(i);
        break;
      }
    }
  }

  return returnArray;
}

// fizzbuzz version #3 using Ternary Operator
function fizzBuzz3(fizzValue, buzzValue) {
  let returnArray = [];

  for (let i = 1; i <= 100; i++) {
    let value =
      (i % fizzValue == 0 ? "Fizz" : "") + (i % buzzValue == 0 ? "Buzz" : "") ||
      i;
    returnArray.push(value);
  }

  return returnArray;
}

// loop over the FizzBuzz array and display 5 values per row
// View function
function displayData(fbArray) {
  // get the table body element from the page
  let tableBody = document.getElementById("results");

  // get the template row
  let templateRow = document.getElementById("fbTemplate");

  // clear the table first, just in case
  tableBody.innerHTML = "";

  for (let i = 0; i < fbArray.length; i += 5) {
    let tableRow = document.importNode(templateRow.content, true);

    // grab just the <td>'s and put them into an array
    let rowCols = tableRow.querySelectorAll("td");

    // add value to each column, and assign a class to style it
    rowCols[0].classList.add(fbArray[i]);
    rowCols[0].textContent = fbArray[i];

    rowCols[1].classList.add(fbArray[i + 1]);
    rowCols[1].textContent = fbArray[i + 1];

    rowCols[2].classList.add(fbArray[i + 2]);
    rowCols[2].textContent = fbArray[i + 2];

    rowCols[3].classList.add(fbArray[i + 3]);
    rowCols[3].textContent = fbArray[i + 3];

    rowCols[4].classList.add(fbArray[i + 4]);
    rowCols[4].textContent = fbArray[i + 4];

    // add the row to the table
    tableBody.appendChild(tableRow);
  }
}
