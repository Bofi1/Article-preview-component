let share1 = document.getElementById("share1");
let footer1 = document.getElementById("footer1");
let footer2 = document.getElementById("footer2");
let share2 = document.getElementsByClassName("share2");
let shareDesktop = document.getElementById("share-desktop");
let share2desktop = document.getElementsByClassName("share2desktop");

let shareDesktopButton = document.getElementById("share-desktop-button");

share1.addEventListener("click", () => {
  footer1.classList.add("hidden");
  footer2.classList.remove("hidden");
  footer2.classList.add("flex");
});

for (let i = 0; i < share2.length; i++) {
  share2[i].addEventListener("click", () => {
    footer1.classList.remove("hidden");
    footer2.classList.add("hidden");
    footer2.classList.remove("flex");
  });
}

for (let i = 0; i < share2desktop.length; i++) {
  share2desktop[i].addEventListener("click", () => {
    shareDesktop.classList.add("hidden");
    shareDesktop.classList.remove("flex");
  });
}

shareDesktopButton.addEventListener("click", () => {
  shareDesktop.classList.toggle("flex");
  shareDesktop.classList.toggle("hidden");
});
