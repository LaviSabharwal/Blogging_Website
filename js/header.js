var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("signUpBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
    if (event.target == modal1) {
    modal1.style.display = "none";
  }
    
}

//document.getElementById("signInBtn").addEventListener("click",function(){
   var modal1 = document.getElementById('myModal1');

// Get the button that opens the modal
var btn1 = document.getElementById("signInBtn");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close")[1];

// When the user clicks the button, open the modal 
btn1.onclick = function() {
  modal1.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  modal1.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
/*window.click = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
} */
//});
function showSignUpModal(){
    console.log("hiii");
    document.getElementById('myModal').style.display="block";
    document.getElementById('myModal1').style.display="none";
}