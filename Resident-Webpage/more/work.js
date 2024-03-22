document.getElementById('checkbox').addEventListener('change', function() {
    if (this.checked) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
});

function toggleDarkMode() {
    var checkbox = document.getElementById('checkbox');
    var logoImage = document.getElementById('logoImage');

    if (checkbox.checked) {
      document.body.classList.add('dark-mode');
      logoImage.src = "images/icon/dark-logo - Copy.png";
    } else {
      document.body.classList.remove('dark-mode');
      logoImage.src = "images/icon/logo.png";
    }
  }


  document.getElementById('checkbox').addEventListener('change', toggleDarkMode);
  toggleDarkMode(); 

  document.getElementById('checkbox').addEventListener('change', function() {
    var logo = document.getElementById('logo1');
    if (this.checked) {
        document.body.classList.add('dark-mode');
        logo.src = "../images/icon/dark-logo - Copy.png";
    } else {
        document.body.classList.remove('dark-mode');
        logo.src = "../images/icon/logo.png";
    }
});
function prof() {
    window.location.href = "form-prof.html";
  }


  function form() {
    window.location.href = "form.html";
  }
  function form1() {
    window.location.href = "form1.html";
  }
  function form2() {
    window.location.href = "form2.html";
  }
  function form3() {
    window.location.href = "form3.html";
  }
