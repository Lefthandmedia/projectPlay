import Star from "./Star";

class Sign extends Star {
  constructor(src) {
    super(src);
    this.r = window.innerWidth / 2;
    // this.star.style.transform = `rotate(${this.ang}rad)`;

    this.star.style.marginLeft = `-200px`;
    this.star.style.marginTop = `-200px`;
    this.star.classList.add("sign");
  }
  makeSign() {
    this.star.style.opacity = 1;
  }

  win(src) {
    this.star.src = src;
  }
}
export default Sign;
