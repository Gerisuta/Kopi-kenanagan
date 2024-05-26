// togle class active

const input = document.querySelector(".input123");

//ketika menu diklik

document.querySelector("#login").onclick = () => {
  input.classList.toggle("active");
};

// klik di luar sidebar utk menghilangkan navnya

const loginButton = document.querySelector("#login");

document.addEventListener("click", function (e) {
  if (!input.contains(e.target) && !loginButton.contains(e.target)) {
    input.classList.remove("active");
  }
});
