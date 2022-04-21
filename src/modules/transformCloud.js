if (screen.width > 768) {
  document.addEventListener("mousemove", function (e) {
    // 滑鼠位置
    let x = e.clientX;
    let y = e.clientY;

    // 頁面與元件高
    let jumbotron = document.querySelector("#js-jumbotron");
    let jumbotronTop = jumbotron.getBoundingClientRect().top;
    let jumbotronHeight = jumbotron.getBoundingClientRect().height;
    let jumbotronBottom = jumbotron.getBoundingClientRect().bottom;
    let jumbotronWidth = jumbotron.getBoundingClientRect().width;
    // 滑鼠效果
    let myMouse = document.querySelector("#mouse");
    if (y < jumbotronTop || y > jumbotronBottom) {
      myMouse.style.opacity = "0";
    } else {
      myMouse.style.opacity = "1";
    }
    myMouse.style.top = y + "px";
    myMouse.style.left = x + "px";

    // 文字效果
    let cloud01 = document.querySelector(".jumbotron__cloud01");
    cloud01.style.transform = "translateX(" + y / 10 + "px)";

    let cloud02 = document.querySelector(".jumbotron__cloud02");
    cloud02.style.transform = "translateX(" + x / -15 + "px)";

    let cloud03 = document.querySelector(".jumbotron__cloud03");
    cloud03.style.transform = "translateX(" + y / -15 + "px)";

    // 標題效果
    let jumbotronScreen = jumbotronWidth / 2;
    let jumbotronHeading = document.querySelector(".jumbotron__heading");
    if (x < jumbotronScreen) {
      jumbotronHeading.style.transform = "translateX(" + y / -20 + "px)";
    } else {
      jumbotronHeading.style.transform = "translateX(" + y / 20 + "px)";
    }
  });
}
