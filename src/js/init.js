import sky from './sky';

export default init = () => {
  console.log('init');
  const _sky = sky();
  console.log('sky',_sky);

  document.body.appendChild(_sky);
}