import Star from "./Star";
import Sign from "./Sign";
import gsap from "gsap";

const sky = () => {
  const el = document.createElement("div");
  let debug = false;
  el.style.transform = "rotate(0)";
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
    signSrc = debug ? "/img/sign-1-debug.png" : "/img/sign-1.png";
    sign = new Sign(signSrc, 500);
    sign.position();
    sign.makeSign();
    el.appendChild(sign.star);
  };

  const rotate = (gr) => {
    gsap.set(el, { transformOrigin: "50% 50%" });
    gsap.to(el, { rotation: `+=${gr}deg` });
  };

  const Getrotation = () => {
    var st = window.getComputedStyle(el, null);
    var tr =
      st.getPropertyValue("-webkit-transform") ||
      st.getPropertyValue("-moz-transform") ||
      st.getPropertyValue("-ms-transform") ||
      st.getPropertyValue("-o-transform") ||
      st.getPropertyValue("transform") ||
      "FAIL";

    var values = tr.split("(")[1].split(")")[0].split(",");
    var a = values[0];
    var b = values[1];
    var c = values[2];
    var d = values[3];
    var scale = Math.sqrt(a * a + b * b);
    // arc sin, convert from radians to degrees, round
    var sin = b / scale;
    // next line works for 30deg but not 130deg (returns 50);
    // var angle = Math.round(Math.asin(sin) * (180/Math.PI));
    var angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
    // console.log("Rotate: " + angle + "deg");
    return angle;
  };

  const checkWin = () => {
    // console.log("sky sign", Getrotation(), sign.star.dataset.ang);
    // console.log(
    //   "sky sign",
    //   absDegrees(Getrotation()),
    //   360 - sign.star.dataset.ang - 90
    // );
    // console.log("test", Getrotation());
    const anglesky = Math.abs(absDegrees(Getrotation()));
    const anglestar = Math.abs(360 - sign.star.dataset.ang - 90);
    // console.log(anglesky, anglestar);

    if (Math.abs(anglesky - anglestar) < 10) {
      console.log("WINNER");
      sign.win("/img/sign-1-over.png");
    } else {
      console.log("NO WINNER");
    }
  };
  const absDegrees = (deg) => {
    while (deg < 0) {
      deg += 360;
    }
    return deg;
  };

  build();

  return { el, sign, rotate, Getrotation, checkWin };
};

export default sky;
