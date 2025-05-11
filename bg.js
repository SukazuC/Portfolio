/* bg.js – particules plein écran, sans polluer le global */
(() => {
  const cvs = document.getElementById('bg');
  if (!cvs) return;                 // page sans #bg → on sort

  const ctx = cvs.getContext('2d');
  let W, H, parts = [];

  const resize = () => { W = cvs.width = innerWidth; H = cvs.height = innerHeight; };
  addEventListener('resize', resize);
  resize();

  class P {
    constructor() { this.reset(); }
    reset() {
      this.x = Math.random() * W;
      this.y = Math.random() * H;
      this.vx = (Math.random() - .5) * .7;
      this.vy = (Math.random() - .5) * .7;
      this.s  = Math.random() * 2 + .5;
    }
    draw() {
      this.x += this.vx; this.y += this.vy;
      if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset();
      ctx.fillRect(this.x, this.y, this.s, this.s);
    }
  }

  parts = Array.from({ length: 250 }, () => new P());

  (function loop () {
    ctx.fillStyle = 'rgba(15,23,42,.35)';
    ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = '#0ea5e9';
    parts.forEach(p => p.draw());
    requestAnimationFrame(loop);
  })();
})();
