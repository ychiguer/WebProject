import React, { useEffect } from 'react';
import '../css/home.css';
import { setup3D } from '../threeJS/homeScript';

let setup = function () {
  let scrollHandler = function (e) {
    let up = this.oldScroll > this.scrollY;
    this.oldScroll = this.scrollY;

    if (window.scrollY >= window.innerHeight / 100 && window.scrollY < window.innerHeight && !up) {
      window.scroll({
        top: window.innerHeight,
        left: 0,
        behavior: 'smooth'
      })
    } else if (window.scrollY <= window.innerHeight * 0.99 && up) {
      window.scroll({
        top: -window.scrollY,
        left: 0,
        behavior: 'smooth'
      })
    }
  };

  window.onscroll = scrollHandler
}

function Home() {
  let mount = null;
  setup();
  useEffect(() => {
    setup3D(mount);
  }, []);
  return (
    <dev ref={ref => mount = ref}></dev>
  );
}

export default Home;
