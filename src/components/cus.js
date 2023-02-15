if ($(".custom-cursor").length) {
  var cursor = document.querySelector(".custom-cursor__cursor");
  var cursorinner = document.querySelector(".custom-cursor__cursor-two");
  var a = document.querySelectorAll("a");

  document.addEventListener("mousemove", function (e) {
    var x = e.clientX;
    var y = e.clientY;
    cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
  });

  document.addEventListener("mousemove", function (e) {
    var x = e.clientX;
    var y = e.clientY;
    cursorinner.style.left = x + "px";
    cursorinner.style.top = y + "px";
  });

  document.addEventListener("mousedown", function () {
    cursor.classList.add("click");
    cursorinner.classList.add("custom-cursor__innerhover");
  });

  document.addEventListener("mouseup", function () {
    cursor.classList.remove("click");
    cursorinner.classList.remove("custom-cursor__innerhover");
  });

  a.forEach((item) => {
    item.addEventListener("mouseover", () => {
      cursor.classList.add("custom-cursor__hover");
    });
    item.addEventListener("mouseleave", () => {
      cursor.classList.remove("custom-cursor__hover");
    });
  });
}
