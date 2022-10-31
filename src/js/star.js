class Star {

  constructor(src) {
    console.log('star', src);
    this.src =  src;
    const s = document.createElement('img');
    s.src = this.src;
    s.classList.add('star');
this.star = s;
  }

  position() {
    this.r = Math.random() * window.innerWidth;
    this.ang = Math.random() * Math.PI * 2;
    this.star.style.left = `${Math.sin(this.ang) * this.r}px`;
    this.star.style.top = `${Math.cos(this.ang) * this.r}px`;
    this.star.style.transform = `rotate(${this.ang*-1}rad)`;
  }
  
  shimmer() {
    console.log('shimmer');
  }
}
export default Star;