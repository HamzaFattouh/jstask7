var buttons = document.querySelectorAll(".this-btn");
buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    var pElement = this.previousElementSibling;
    var currentValue = parseInt(pElement.textContent);
    pElement.textContent = currentValue + 1;
  });
});

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("target-btn")) {
    var pElement = e.target.previousElementSibling;
    var currentValue = parseInt(pElement.textContent);
    pElement.textContent = currentValue + 1;
  }
});
