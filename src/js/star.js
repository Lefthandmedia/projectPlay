class Star {

  

  constructor() {
    console.log('star');
    this.src =  '/img/star.png';
    const s = document.createElement('img');
    s.src = this.src;
    s.classList.add('star');
    s.style.left = `${Math.random() * 2 * window.innerWidth}px`;
    s.style.top = `${Math.random() * 2 * window.innerWidth}px`;
    this.star = s;
   
  }
  
  shimmer() {
    console.log('shimmer');
  }
}
export default Star;