import Star from './star';

export const minimap = () => {
  
  const map = document.createElement('div');
  map.classList.add('map');

  const addSign = () => {
    signSrc =  '/img/sign-1.png';
    const s = new Star(signSrc);
    map.appendChild(s.star);
  }

  addSign();

  return {map}



}