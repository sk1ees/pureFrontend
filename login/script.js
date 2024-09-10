const imgDiv = document.querySelector(".imgDiv");
const formLeft = document.querySelector(".formLeft");
const navLeftV2Items = document.querySelector(".navLeftV2");
const title = document.querySelector(".title");
const footer = document.querySelector(".footer");
const icon = document.querySelector(".icon");

async function bigImage() {
  await triggerAllAnimations();
  window.location.href = "/register/index.html"; // Redirect after all animations finish
}

function triggerAllAnimations() {
  return new Promise((resolve) => {
    // Toggle all classes to start the animations
    navLeftV2Items.classList.toggle("leftFadeIN");
    title.classList.toggle("fadeLeft");
    footer.classList.toggle("fadeDown");
    imgDiv.classList.toggle("scale");
    icon.classList.toggle("titleMove");
    formLeft.classList.toggle("leftFadeIN");

    // Ensure transitions are applied to these elements in CSS
    const transitionElements = [
      navLeftV2Items,
      title,
      footer,
      imgDiv,
      icon,
      formLeft,
    ];

    let remaining = transitionElements.length;

    // Handle when all transitionend events are fired
    transitionElements.forEach((element) => {
      // Add event listener for 'transitionend' on each element
      element.addEventListener(
        "transitionend",
        () => {
          remaining -= 1;
          if (remaining === 0) {
            resolve(); // Resolve when all animations are complete
          }
        },
        { once: true }
      );
    });

    // Fallback: In case no transition happens or the event doesn't fire
    setTimeout(() => {
      resolve(); // Resolve the promise after a fallback duration
    }, 2000); // Adjust this duration to the length of your animations
  });
}
