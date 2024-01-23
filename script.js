//your JS code here. If required.
var inputs = document.getElementsByClassName("code");

for (var i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("keyup", function(event) {
    if (event.keyCode === 8) {
      if (this.value.length === 0) {
        var previous = this.previousElementSibling;
        if (previous) {
          previous.focus();
        }
      }
    } else {
      if (this.value.length === this.maxLength) {
        var next = this.nextElementSibling;
        if (next) {
          next.focus();
        }
      }
    }
  });
}
