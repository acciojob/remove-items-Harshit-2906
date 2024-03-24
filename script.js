//your JS code here. If required.

let dropdown = document.getElementById("colorSelect");

document.querySelector("input[type='button']").addEventListener("click", function() {
  let index = dropdown.selectedIndex;
  dropdown.remove(index);
});
