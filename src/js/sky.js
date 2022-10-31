import Star from "./Star";
import gsap from "gsap";

const sky = () => {
  const el = document.createElement('div');
  const src = '/img/star.png'
  el.classList.add('sky');

  const center = document.createElement('div');
  center.classList.add('center');
  el.appendChild(center)

  const build = () => {
    for (let index = 0; index < 100; index++) {
      const s = new Star(src);
      s.position();
      el.appendChild(s.star);
    }
  }

  const addSign = () => {
    signSrc =  '/img/sign-1.png';
    const s = new Star(signSrc);
    el.appendChild(s.star);
  }

  const rotate = (gr) => {
    gsap.set(el, {transformOrigin: "50% 50%"})
    gsap.to(el, { rotation: `+=${gr}deg` });
    console.log(el.style.transform);
  }

  build();
  addSign();

  return {el, rotate};
}

export default sky;