import React, { useEffect } from 'react';
import '../css/home.css';
import { setup3D } from '../threeJS/homeScript';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import NavigationPublic from './navigationPublic';
import NavigationLogIn from './navigationLogIn';
import Intro from './intro';

let setup = function () {
  let scrollHandler = function (e) {
    let up = this.oldScroll > this.scrollY;
    this.oldScroll = this.scrollY;

    if (window.scrollY >= window.innerHeight / 100 && window.scrollY < window.innerHeight && !up) {
      scroll_down()
    } else if (window.scrollY <= window.innerHeight * 0.99 && up) {
      scroll_up()
    }
  };

  window.onscroll = scrollHandler
}

let scroll_down = function () {
  window.scroll({
    top: window.innerHeight,
    left: 0,
    behavior: 'smooth'
  })
}

let scroll_up = function () {
  window.scroll({
    top: -window.scrollY,
    left: 0,
    behavior: 'smooth'
  })
}

function Home() {
  let mount = null;
  setup();
  useEffect(() => {
    setup3D(mount);
  }, []);
  return (
    <div>
      <div className="webgl" ref={ref => mount = ref}>
        <h1 className="noselect brand">myRide</h1>
        <h1 id="welcome">Hey buckle up this is</h1>
        <ExpandMoreIcon id='arrow' className="clickable" onClick={scroll_down} />
      </div>
      <div className="intro">
      <NavigationPublic/>
      <Intro/>
      </div>
    </div>
  );
}

export default Home;
