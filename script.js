const audios = document.querySelectorAll(".drum-audio");
const drumContainer = document.querySelector(".drum-container");
const drums = document.querySelectorAll(".drum");

window.addEventListener("keydown", function (evt) {
  const keyInRange = [...drums].some(
    (drum) => drum.dataset.key === evt.key.toUpperCase()
  );
  if (keyInRange) {
    const ele = [...drums].find(
      (drum) => drum.dataset.key === evt.key.toUpperCase()
    );
    const audioClass = ele
      .querySelector(".key-sound")
      .textContent.toLowerCase();
    const audio = document.querySelector(`.${audioClass}`);
    console.log(audio);
    audio.play();
    ele.classList.add("playing");
  }
});
window.addEventListener("keyup", function (evt) {
  const ele = [...drums].find(
    (drum) => drum.dataset.key === evt.key.toUpperCase()
  );
  const audioClass = ele.querySelector(".key-sound").textContent.toLowerCase();
  const audio = document.querySelector(`.${audioClass}`);
  audio.pause();
  ele.classList.remove("playing");
});
