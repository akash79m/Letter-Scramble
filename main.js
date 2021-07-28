var parent = document.getElementById("search-area");

var objects = parent.getElementsByClassName("object");

function play() {
  backToZero();
  randomizeOrder();
  var interval = window.setInterval(randomizeOrder, 1000);

  var targetObj = objects[Math.floor(Math.random() * 23 + 1)];
  targetObj.classList.add("targetObject");

  document.getElementById("look-for").innerHTML =
    "Find: " + targetObj.innerHTML;

  document.addEventListener("click", function (e) {
    document.getElementById("play-btn").disabled = true;

    var clickedTarget = e.target;
    var id = clickedTarget.id || clickedTarget.innerText;

    if (clickedTarget == targetObj) {
      document.getElementById("look-for").innerHTML = "You Win!";

      document.getElementById("play-btn").disabled = false;

      clearInterval(myTimer);
      clearInterval(interval);
      targetObj.classList.remove("targetObject");
    }
  });
}

function randomizeOrder() {
  for (var i = 0; i < objects.length; i++) {
    objects[i].style.order = Math.floor(Math.random() * 23);

    objects[i].style.transform = "scale(" + (Math.random() * 1 + 1) + ")";
  }
}

var c = 0;

function backToZero() {
  c = 0;
}

function myCounter() {
  document.getElementById("Time").innerHTML = ++c;
}
