import React, { Component, PropTypes } from 'react';
import vudu from 'vudu';

const NUM_CONFETTI = 350;
const COLORS = [[255, 0, 0], [255, 255, 255], [0, 0, 255]];
const PI_2 = 2*Math.PI;
const range = (a, b) => (b - a) * Math.random() + a;
const xpos = 0.5;

const times = x => f => {
  if (x > 0) { f(); times (x - 1) (f); }
}

class Confetti {
  constructor(w, h, context) {
    this.context = context;
    this.style = COLORS[Math.floor(range(0, 3))];
    this.rgb = `rgba(${this.style[0]},${this.style[1]},${this.style[2]}`
    this.r = range(2,6);
    this.r2 = 2 * this.r;
    this.w = w;
    this.h = h;
    this.replace(this.w, this.h);
  }

  replace() {
    this.opacity = 0;
    this.dop = 0.03 * range(1,4);
    this.x = range(-this.r2, this.w - this.r2);
    this.y = range(-20, this.h - this.r2);
    this.xmax = this.w - this.r;
    this.ymax = this.h - this.r;
    this.vx = range(0,2) + 8* xpos -5;
    this.vy = 0.7 * this.r + range(-1,1);
  }

  draw() {
    this.x += this.vx;
    this.y += this.vy;
    this.opacity += this.dop;
    if (this.opacity > 1) {
      this.opacity = 1;
      this.dop *= -1;
    }

    if (this.opacity < 0 || this.y > this.ymax) {
      this.replace()
    }

    if (!(0 < this.x < this.xmax)) {
      this.x = (this.x + this.xmax) % this.xmax;
    }
    this.drawCircle(this.x, this.y, this.r, `${this.rgb}, ${this.opacity})`)
  }

  drawCircle(x, y, r, style) {
    this.context.beginPath();
    this.context.arc(x,y,r,0,PI_2,false);
    this.context.fillStyle = style;
    this.context.fill();
  }
}

export default class ConfettiLayer extends Component {
  componentDidMount() {
    this.canvas = this.refs['confetti-layer'];
    this.context = this.canvas.getContext("2d");
    this.w = 0;
    this.h = 0;
    this.allConfetti = [];

    window.addEventListener('resize', this.windowDidResize, false);
    this.windowDidResize();

    times(NUM_CONFETTI)(() => this.allConfetti.push(new Confetti(this.w, this.h, this.context)));
    this.drawConfettiLoop();
  }

  drawConfettiLoop = () => {
    this.requestFrame()(this.drawConfettiLoop);
    this.context.clearRect(0, 0, this.w, this.h);
    this.allConfetti.forEach(c => c.draw());
  }

  requestFrame() {
    const windowFallback = callback => window.setTimeout(callback, 1000 / 60);
    return (
      window.requestAnimationFrame       ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame    ||
      window.oRequestAnimationFrame      ||
      window.msRequestAnimationFrame     ||
      windowFallback
    );
  }

  windowDidResize = () => {
    this.w = this.canvas.width = window.innerWidth;
    this.h = this.canvas.height = window.innerHeight;
    this.allConfetti.forEach(c => {
      c.w = this.w;
      c.h = this.h;
    });
  }

  render() {
    const styles = vudu({
      canvas: {
        backgroundColor: 'transparent',
        zIndex: 9,
        position: 'fixed',
        pointerEvents: 'none',
        transition: '1s opacity',
        opacity: this.props.visible ? 1 : 0
      }
    });

    return <canvas className={styles.canvas} ref='confetti-layer'></canvas>;
  }
}
