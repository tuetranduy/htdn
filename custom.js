// const URL = "http://localhost:3001";
const URL = "http:///api.hocthuedanang.tk"

// Modal
document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".modal");
  var instances = M.Modal.init(elems, 0.5);
});

// datetime picker
document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".datepicker");
  var instances = M.Datepicker.init(elems, false);
});

// drop-down
document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll("select");
  var instances = M.FormSelect.init(elems, {});
});

// Carousel
document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".carousel");
  var instance = M.Carousel.init(elems, {
    fullWidth: true,
    indicators: true
  });
});

// clear modal after closed
function clearModal() {
  $(document).ready(function () {
    $('#regis-modal').find('input:text, input:password, select, textarea').val('');
    $('#regis-modal').find('input:checkbox').prop('checked', false);
    $("#email").val("");
    document.getElementById("fn").innerHTML = "";
    document.getElementById("ln").innerHTML = "";
    document.getElementById("em").innerHTML = "";
    document.getElementById("pn").innerHTML = "";
    document.getElementById("un").innerHTML = "";
    document.getElementById("pw").innerHTML = "";
    document.getElementById("rpw").innerHTML = "";
    document.getElementById("bd").innerHTML = "";
    document.getElementById("sc").innerHTML = "";
  });

}

// validation
function validateForm() {
  var username = document.forms["login"]["txtUsername"].value;
  var password = document.forms["login"]["txtPassword"].value;
  if (username !== "" && password !== "") {
    // Login
    $.ajax({
      url: URL + "/authorize",
      type: "POST",
      dataType: "json",
      data: {
        "username": $("#txtUsername").val(),
        "password": $("#txtPassword").val()
      },
      contentType: "application/x-www-form-urlencoded",
      cache: false,
      timeout: 15000,

      success: function (data) {
        window.location.href = "./html/dashboard.html";
      },

      error: function () {
        document.getElementById("account-validate").innerHTML = "Username or password is wrong, please try again.";
      },
    });
  } else {
    if (username == "") {
      document.getElementById("username-validation").innerHTML = "Invalid username";
    }
    if (password == "") {
      document.getElementById("password-validation").innerHTML = "Invalid password";
    }
  }
}

// validation
function validateRegisterModal() {
  var fn = document.getElementById("first_name").value;
  var ln = document.getElementById("last_name").value;
  var em = document.getElementById("email").value;
  var pn = document.getElementById("phone_number").value;
  var un = document.getElementById("username").value;
  var pw = document.getElementById("password").value;
  var rpw = document.getElementById("re_password").value;
  var bd = document.getElementById("birthday").value;
  var sc = document.getElementById("school").value;

  if (fn !== "" && ln !== "" && em !== "" & pn !== "" & un !== "" & pw !== "" & rpw !== "" & bd !== "" & sc !== "") {
    // Register
    $.ajax({
      url: URL + "/createAccount",
      type: "POST",
      dataType: "json",
      data: {
        "username": $("#username").val(),
        "password": $("#password").val(),
        "firstname": $("#first_name").val(),
        "lastname": $("#last_name").val(),
        "email": $("#email").val(),
        "gender": document.querySelector('input[id="gender"]:checked').value,
        "phone_number": $("#phone_number").val(),
        "birthday": $("#birthday").val(),
        "universityId": $("#school").val(),
      },
      contentType: "application/x-www-form-urlencoded",
      cache: false,
      timeout: 5000,

      success: function () {
        M.toast({
          html: 'Register successfully'
        });
        // instance.close();
      },

      error: function () {
        console.log("register error");
      },
    });
  } else {
    if (fn == "") {
      document.getElementById("fn").innerHTML = "Plese enter first name";
    }
    if (ln == "") {
      document.getElementById("ln").innerHTML = "Plese enter last name";
    }
    if (em == "") {
      document.getElementById("em").innerHTML = "Please enter email";
    }
    if (pn == "") {
      document.getElementById("pn").innerHTML = "Plese enter phone number";
    }
    if (un == "") {
      document.getElementById("un").innerHTML = "Plese enter username";
    }
    if (pw == "") {
      document.getElementById("pw").innerHTML = "Plese enter password";
    }
    if (rpw == "") {
      document.getElementById("rpw").innerHTML = "Confirmation password not match";
    }
    if (bd == "") {
      document.getElementById("bd").innerHTML = "Plese enter your birthday";
    }
    if (sc == "") {
      document.getElementById("sc").innerHTML = "Plese enter your university";
    }
  }
}