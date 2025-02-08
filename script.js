import "./css/style.css";

const $h3 = document.getElementById("author");

$h3.addEventListener("mouseover", function (e) {
  e.target.classList.add("redTitle");
});

$h3.addEventListener("mouseleft", function (e) {
  e.target.classList.remove("redTitle");
});
