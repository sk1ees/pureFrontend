const imgDiv = document.querySelector(".imgDiv");
const formLeft = document.querySelector(".formLeft");
const navLeftV2Items = document.querySelector(".navLeftV2");
const title = document.querySelector(".title");
const footer = document.querySelector(".footer");

async function scaleImage() {
  await fadeElement();
  navLeftV2Items.classList.toggle("leftFadeIN");
  title.classList.toggle("fadeLeft");
  footer.classList.toggle("fadeDown");
  imgDiv.classList.toggle("scale");
}
function fadeElement() {
  return new Promise((resolve) => {
    const formLeft = document.querySelector(".formLeft");
    formLeft.classList.toggle("leftFadeIN");
    formLeft.addEventListener("transitionend", resolve, { once: true });
  });
}
