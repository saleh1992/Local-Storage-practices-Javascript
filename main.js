let fontFamily = document.querySelector("#list-fontfamily");
let fontColor = document.querySelector("#list-color");
let fontSize = document.querySelector("#list-fontsize");
let arrayContainer = [];

setDataInPage();

document.addEventListener("input", () => {
  result.style.fontFamily = fontFamily.value;
  result.style.color = fontColor.value;
  result.style.fontSize = fontSize.value + "px";
  pushDatainArray();
  setDataInStorge(arrayContainer);
});

function pushDatainArray() {
  const dataValues = {
    fontFamily: fontFamily.value,
    color: fontColor.value,
    fontSize: fontSize.value,
  };
  arrayContainer = dataValues;
}
function setDataInStorge(arr) {
  localStorage.setItem("pagePr", JSON.stringify(arr));
}
function setDataInPage() {
  if (localStorage.getItem("pagePr")) {
    getAll = JSON.parse(localStorage.getItem("pagePr"));
    fontFamily.value = getAll.fontFamily;
    fontColor.value = getAll.color;
    fontSize.value = getAll.fontSize;
    result.style.fontFamily = getAll.fontFamily;
    result.style.color = getAll.color;
    result.style.fontSize = getAll.fontSize + "px";
  }
}
