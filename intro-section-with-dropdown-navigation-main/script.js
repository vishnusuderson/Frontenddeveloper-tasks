let drop1 = document.querySelector("#features ol");
let img1 = document.querySelector("#features span");
let drop2 = document.querySelector("#company ol");
let img2 = document.querySelector("#company span");
function see() {
  img1.style.visibility = "visible";
}
function ins() {
  img1.style.visibility = "hidden";
}
function func() {
  if (drop1.style.transform == "scaleY(0)") {
    drop1.style.transform = "scale(1)";
    document.querySelector("#features").style.height = "auto";
    img1.style.content = "url('./images/icon-arrow-up.svg')";
  } else {
    drop1.style.transform = "scaleY(0)";
    document.querySelector("#features").style.height = "10%";
    img1.style.content = "url('./images/icon-arrow-down.svg')";
  }
}
function see1() {
  img2.style.visibility = "visible";
}
function ins1() {
  img2.style.visibility = "hidden";
}
function func1() {
  if (drop2.style.transform == "scaleY(0)") {
    drop2.style.transform = "scale(1)";
    document.querySelector("#company").style.height = "auto";
    img2.style.content = "url('./images/icon-arrow-up.svg')";
  } else {
    drop2.style.transform = "scaleY(0)";
    document.querySelector("#company").style.height = "10%";
    img2.style.content = "url('./images/icon-arrow-down.svg')";
  }
}
document.querySelector(".close").addEventListener("click", function () {
  document.querySelector(".nav-item").style.height = "0px";
  document.querySelector(".close").style.display = "None";
  document.querySelector(".open").style.display = "block";
});
document.querySelector(".open").addEventListener("click", function () {
  document.querySelector(".nav-item").style.height = "100%";
  document.querySelector(".open").style.display = "None";
  document.querySelector(".close").style.display = "block";
});
