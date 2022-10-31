import sky from "./sky";
import { minimap } from "./minimap";

export default init = () => {
  console.log("init");

  const gradient = document.createElement("div");
  gradient.classList.add("gradient");
  document.body.appendChild(gradient);

  const _s = sky();
  const { el, rotate, Getrotation, sign, check } = _s;
  document.body.appendChild(el);
  document.addEventListener(
    "keydown",
    function (event) {
      switch (event.key) {
        case "a":
          rotate(-10);

          console.log("getrot", Getrotation());
          console.log("getrot-el", sign.ang);
          break;

        case "s":
          rotate(10);
          break;
      }
    },
    false
  );
  const win = () => {
    console.log("check");
    check();
  };

  const { map } = minimap();
  map.addEventListener("click", win);
  document.body.appendChild(map);
};
