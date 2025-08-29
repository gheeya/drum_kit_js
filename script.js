const audios = document.querySelectorAll(".drum-audio");
const drumContainer = document.querySelector(".drum-container");
const drums = document.querySelectorAll(".drum");

function playSound(evt) {
  // const keyInRange = [...drums].some(
  //   (drum) => drum.dataset.key === evt.key.toUpperCase()
  // );
  // if (keyInRange) {
  //   const ele = [...drums].find(
  //     (drum) => drum.dataset.key === evt.key.toUpperCase()
  //   );
  //   const audioClass = ele
  //     .querySelector(".key-sound")
  //     .textContent.toLowerCase();
  //   const audio = document.querySelector(`.${audioClass}`);
  //   // console.log(audio);
  //   audio.currentTime = 0;
  //   audio.play();
  //   ele.classList.add("playing");
  // }
  const audio = document.querySelector(`audio[data-key="${evt.keyCode}"]`);
  const ele = document.querySelector(`div[data-key="${evt.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  ele.classList.add("playing");
}

function pauseSound(evt) {
  // const ele = [...drums].find(
  //   (drum) => drum.dataset.key === evt.key.toUpperCase()
  // );
  // const audioClass = ele.querySelector(".key-sound").textContent.toLowerCase();
  // const audio = document.querySelector(`.${audioClass}`);
  // ele?.classList.remove("playing");
  if (!(evt.propertyName === "transform" || evt.propertyName === "box-shadow"))
    return;
  this.classList.remove("playing");
}

window.addEventListener("keydown", playSound);

drums.forEach((drum) => drum.addEventListener("transitionend", pauseSound));
