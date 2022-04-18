import React from 'react';
import '../css/home.css';
import logo from '../logo.svg';

let setup = function () {
    let scrollHandler = function (e) {
        let up = this.oldScroll > this.scrollY;
        this.oldScroll = this.scrollY;
    
        if (window.scrollY >= window.innerHeight/100 && window.scrollY < window.innerHeight && !up) {
          window.scroll({
            top: window.innerHeight,
            left: 0,
            behavior: 'smooth'
          })
        } else if (window.scrollY <= window.innerHeight*0.99 && up) {
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
   setup();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Home;
