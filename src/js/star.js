import { degrees_to_radians } from "./utils/degrees_to_radians";

class Star {
  constructor(src, r = null, ang = null) {
    this.src = src;
    this.r = r;
    this.ang = ang;
    const s = document.createElement("img");
    s.src = this.src;
    s.classList.add("star");
    this.star = s;
  }

  position() {
    const probability = () => {
      let value = Math.random();
      if (1 - value > Math.random()) {
        probability();
      }
      return value;
    };

    if (this.r === null) this.r = probability() * window.innerWidth;
    if (this.ang === null) this.ang = Math.random() * 360;
    this.star.dataset.r = this.r;
    this.star.dataset.ang = this.ang;
    this.star.style.left = `${
      Math.cos(degrees_to_radians(this.ang)) * this.r
    }px`;
    this.star.style.top = `${
      Math.sin(degrees_to_radians(this.ang)) * this.r
    }px`;
    this.star.style.opacity = `${Math.random()}`;
    this.star.style.transform = `rotate(${this.ang + 90}deg)`;
  }

  makeSign() {
    // this.r = window.innerWidth / 2;
    // // this.star.style.transform = `rotate(${this.ang}rad)`;
    // this.star.style.opacity = 1;
    // this.star.style.marginLeft = `-200px`;
    // this.star.style.marginTop = `-200px`;
    // this.star.classList.add("sign");
  }

  shimmer() {
    console.log("shimmer");
  }
}
export default Star;
