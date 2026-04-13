var elements = document.getElementsByClassName("column");
var i;

function lastView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "auto";
  }
}
function gridView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "50%";
  }
}
