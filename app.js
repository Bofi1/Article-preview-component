let share1 = document.getElementById("share1");
let footer1 = document.getElementById("footer1");
let footer2 = document.getElementById("footer2");
let share2 = document.getElementsByClassName("share2");

// everything commented is about copied animation
// let share3 = document.getElementById("share3");
// let copy = document.getElementById("copy");

share1.addEventListener("click", () => {
  footer1.classList.add("hidden");
  footer2.classList.remove("hidden");
  footer2.classList.add("flex");
});

// share3.addEventListener("click", () => {
//   footer1.classList.remove("hidden");
//   footer2.classList.add("hidden");
//   footer2.classList.remove("flex");
// });

for (let i = 0; i < share2.length; i++) {
  share2[i].addEventListener("click", () => {
    footer1.classList.remove("hidden");
    footer2.classList.add("hidden");
    footer2.classList.remove("flex");

    // copy.classList.remove("opacity-0");
    // copy.classList.add("opacity-1");
    // copy.classList.add("top-[49%]");

    // setTimeout(() => {
    //   copy.classList.add("opacity-0");
    //   copy.classList.remove("opacity-1");
    //   copy.classList.add("top-[47%]");
    // }, 800);

    // setTimeout(() => {
    //   copy.classList.remove("top-[49%]");
    //   copy.classList.remove("top-[47%]");
    // }, 900);
  });
}
