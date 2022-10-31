import Star from "./Star";
import gsap from "gsap";

const sky = () => {
  const el = document.createElement("div");
  let sign;
  const srcs = [
    "/img/star-0.png",
    "/img/star-1.png",
    "/img/star-2.png",
    "/img/star-3.png",
    "/img/star-4.png",
    "/img/star-5.png",
    "/img/star-6.png",
    "/img/star-7.png",
    "/img/star-8.png",
  ];
  el.classList.add("sky");

  const center = document.createElement("div");
  center.classList.add("center");
  el.appendChild(center);

  const build = () => {
    for (let index = 0; index < 500; index++) {
      const id = Math.floor(Math.random() * srcs.length);
      const s = new Star(srcs[id]);
      s.position();
      el.appendChild(s.star);
    }
    addSign();
  };

  const addSign = () => {
    signSrc = "/img/sign-1.png";
    sign = new Star(signSrc, 500);
    sign.position();
    sign.makeSign();
    el.appendChild(sign.star);
  };

  const rotate = (gr) => {
    gsap.set(el, { transformOrigin: "50% 50%" });
    gsap.to(el, { rotation: `+=${gr}deg` });
  };

  const Getrotation = () => {
    var r = el.style.transform.match(/rotate\((.+)\)/)[1];
    return r;
  };

  const check = () => {
    console.log("sky sign", sign, Getrotation(), sign.star.dataset.ang - 90);
    if (Math.abs(Getrotation() - sign.star.dataset.ang) < 10) {
      console.log("WINNER");
    }
  };

  build();

  return { el, rotate, Getrotation, sign, check };
};

export default sky;
