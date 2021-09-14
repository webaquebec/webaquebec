class Pixel {
  constructor(x, y, options = {}) {
    this.x = x;
    this.y = y;

    this.minHue = options.minHue || 0;
    this.maxHue = options.maxHue || 360;
    this.speed = options.speed || 1;

    const randomHue = Math.floor(
      Math.random() * (this.maxHue - this.minHue) + this.minHue
    );

    this.hue = options.h || randomHue;
    this.saturation = options.s || 100;
    this.lightness = options.l || 50;

    const direction = Math.random() > 0.5 ? -1 : 1;
    this.velocity = (Math.random() * this.speed + 10) * 0.01 * direction;
  }

  update() {
    if (this.hue < this.minHue || this.hue > this.maxHue) {
      this.velocity *= -1;
    }

    this.hue += this.velocity;
  }

  render(ctx) {
    const hue = Math.round(this.hue);

    ctx.fillStyle = `hsl(${hue}, ${this.saturation}%, ${this.lightness}%)`;
    ctx.fillRect(this.x, this.y, 1, 1);
  }
}

export default Pixel;
