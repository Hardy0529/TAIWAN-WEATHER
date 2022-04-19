function init() {
  // header color change
  window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;
    const jsHeader = document.querySelector(".js-header");
    if (scrollTop > 55) {
      jsHeader.classList.add("class", "header--colored");
    } else {
      jsHeader.classList.remove("class", "header--colored");
    }
  });
}

init();
