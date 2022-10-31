import sky from "./sky";
import { minimap } from "./minimap";

export default init = () => {
  console.log("init");
  let debug = false;

  const gradient = document.createElement("div");
  gradient.classList.add("gradient");
  document.body.appendChild(gradient);

  const _s = sky();
  const { el, rotate, sign, checkWin } = _s;
  document.body.appendChild(el);
  document.addEventListener(
    "keydown",
    function (event) {
      switch (event.key) {
        case "a":
          rotate(-10);
          break;

        case "s":
          rotate(10);
          break;
      }
    },
    false
  );

  const win = () => {
    console.log("Did i win?");
    checkWin();
  };

  const { map } = minimap();
  map.addEventListener("click", win);
  document.body.appendChild(map);
};
