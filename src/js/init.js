import sky from "./sky";
import { minimap } from "./minimap";

export default init = () => {
  console.log("init");

  const gradient = document.createElement("div");
  gradient.classList.add("gradient");
  document.body.appendChild(gradient);

  const _s = sky();
  const { el, rotate } = _s;
  document.body.appendChild(el);
  document.addEventListener(
    "keydown",
    function (event) {
      console.log("key", event.key);
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

  const { map } = minimap();
  document.body.appendChild(map);
};
