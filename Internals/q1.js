const targetDiv = document.getElementById("third");
const hideBtn = document.getElementById("hide_button");
const displayBtn = document.getElementById("display_button");

hideBtn.onclick = function () {
  if (targetDiv.style.display !== "none") {
    targetDiv.style.display = "none";
  } 
};

displayBtn.onclick = function () { 
if(targetDiv.style.display == "none"){
    targetDiv.style.display = "block";
  }
};