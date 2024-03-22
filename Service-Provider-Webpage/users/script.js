$(document).ready(function () {
    $('.toggle-button').on('click', function () {
        var buttonText = $(this).text();
        $(this).text(buttonText === '+' ? '-' : '+').siblings('.answer-text').slideToggle();
    });
});
function checkLogin(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get values from the form
    var username = document.getElementsByName("username")[0].value;
    var password = document.getElementsByName("pass")[0].value;

    console.log("Username:", username); // Debugging line
    console.log("Password:", password); // Debugging line

    if (username === "admin" && password === "admin") {
        window.location.href = 'users/user.html';
    } else if (username === "user1" && password === "pass1") {
        window.location.href = 'users/user1.html';
    } else if (username === "user2" && password === "pass2") {
        window.location.href = 'users/user2.html';
    } else if (username === "user3" && password === "pass3") {
        window.location.href = 'users/user3.html';
    } else {
        alert("Invalid username or password. Please try again.");
    }
}
function rA() {
    window.location.href = "review-A.html";
  }
  function rB() {
    window.location.href = "review-B.html";
  }
  function rC() {
    window.location.href = "review-C.html";
  }
  function rD() {
    window.location.href = "review-D.html";
  }
