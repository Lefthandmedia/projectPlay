import Star from "./Star";

const sky = () => {
  const el = document.createElement('div');
  el.classList.add('sky');

  const build = () => {
    for (let index = 0; index < 100; index++) {
      const s = new Star();
      el.appendChild(s.star);
    }
  }
  const rotate = (){
    
  }

  build();

  return el;
}

export default sky;