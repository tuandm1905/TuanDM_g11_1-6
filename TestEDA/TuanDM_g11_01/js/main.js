function redirectPage(page) {
  const pageUrls = {
    home: "../TuanDM_g11_01/index.html",
    introduction: "../TuanDM_g11_02/index.html",
    about: "../TuanDM_g11_03/index.html",
    note: "../TuanDM_g11_05/index.html",
    preserve: "../TuanDM_g11_06/index.html",
  };
  if (pageUrls.hasOwnProperty(page)) {
    window.location.href = pageUrls[page];
  } else {
    alert("Page not found!!!");
  }
}
function handleButtonClick(event) {
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach((button) => {
    button.classList.remove("active");
    button.classList.add("inactive");
  });
  const clickedButton = event.currentTarget;
  clickedButton.classList.remove("inactive");
  clickedButton.classList.add("active");
}
const buttons = document.querySelectorAll(".btn");
buttons.forEach((button) => {
  button.addEventListener("click", handleButtonClick);
});
