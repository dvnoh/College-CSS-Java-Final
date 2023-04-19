console.log("JavaScript Portion of the Test");

// Step 1: Write a multi-line comment detailing your name and student number

/*
    Davyn Oxby
    200489002
*/

const myImmutableArray = ["Jared", "Francis", "Amrit", "Sarah", "Gurleen", "Johanna", "Ury"];

// Step 2: Add the 3 people's names to the array

myImmutableArray.push("Davyn");
myImmutableArray.push("Marco");
myImmutableArray.push("Ron");

// Step 4: Remove the first array item from the array

myImmutableArray.shift();

// Step 5 Remove the second array item from the array

myImmutableArray.splice(1, 1);

// Step 6: Using array filter, iterate over the array items and remove all items beginning with the letter "J". Store the result in a new, block scoped, mutable variable

const items = ["James", "John", "Joe", "Sarah", "Jane"];

const filteredItems = items.filter(item => !item.startsWith("J"));

console.log(filteredItems);


// Step 7: Create an event listener that fires a callback function when the call to action button in the header is clicked. It should alert "Call me now at 555-555-55555";

/*
const callNowButton = document.getElementById('call-now');
callNowButton.addEventListener('click', function() {
  alert('Call me now at 555-555-5555');
});
*/

// Bonus Challenge Modal:

// Get the modal
var modal = document.getElementById("call-modal");

// Get the button that opens the modal
var btn = document.getElementById("call-now");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
  setTimeout(function() {
    modal.style.opacity = "1";
  }, 10); // Add a small delay to let the DOM update before applying the opacity transition
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.opacity = "0"; // Set opacity to 0 to trigger the fade out transition
  setTimeout(function() {
    modal.style.display = "none";
  }, 300); // Wait for the transition to complete before hiding the modal
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.opacity = "0"; // Set opacity to 0 to trigger the fade out transition
    setTimeout(function() {
      modal.style.display = "none";
    }, 300); // Wait for the transition to complete before hiding the modal
  }
}



