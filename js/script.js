// Toggle class active
const navbarNav = document.querySelector(".navBarNav");

// when hamburger is clicked
document.querySelector("#hamburgerMenu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik di luar sidebar untuk menghilangkan navbar
const hamburger = document.querySelector("#hamburgerMenu");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// fungsi untuk memunculkan message ketika tombol submit ditekan pada form

function message() {
  var name = document.getElementById("name-input");
  var email = document.getElementById("email-input");
  var phone = document.getElementById("phone-input");
  var message = document.getElementById("msg-input");

  const success = document.getElementById("success");
  const error = document.getElementById("error");

  if (
    name.value == "" ||
    email.value == "" ||
    phone.value == "" ||
    message.value == ""
  ) {
    error.style.display = "block";
  } else {
    setTimeout(() => {
      name.value = "";
      email.value = "";
      phone.value = "";
      message.value = "";
    }, 2000);

    success.style.display = "block";
  }

  setTimeout(() => {
    error.style.display = "none";
    success.style.display = "none";
  }, 3000);
}

// document.getElementsByClassName("submit-button").onclick = message();
