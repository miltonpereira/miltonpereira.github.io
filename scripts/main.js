var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}

