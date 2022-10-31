import Star from "./star";

export const minimap = () => {
  let debug = false;
  const map = document.createElement("div");
  map.classList.add("map");

  const addSign = () => {
    signSrc = debug ? "/img/sign-1-debug.png" : "/img/sign-1.png";
    const s = new Star(signSrc);
    map.appendChild(s.star);
  };

  addSign();

  return { map };
};
