class Pixel {
  constructor(x, y, options = {}) {
    this.x = x;
    this.y = y;

    // this.minHue = options.minHue || 0;
    // this.maxHue = options.maxHue || 360;
    this.minLightness = options.minLightness || 55;
    this.maxLightness = options.maxLightness || 100;
    this.speed = options.speed || 1;

    // const randomHue = Math.floor(
    //   Math.random() * (this.maxHue - this.minHue) + this.minHue
    // );
    const randomLightness = Math.floor(
      Math.random() * (this.maxLightness - this.minLightness) +
        this.minLightness
    );

    // this.hue = options.h || randomHue;
    // this.saturation = options.s || 100;
    // this.lightness = options.l || 50;

    this.hue = options.h || 55;
    this.saturation = options.s || 94;
    this.lightness = options.l || randomLightness;

    const direction = Math.random() > 0.5 ? -1 : 1;
    this.velocity = (Math.random() * this.speed + 5) * 0.01 * direction;
  }

  update() {
    // if (this.hue < this.minHue || this.hue > this.maxHue) {
    //   this.velocity *= -1;
    // }
    if (
      this.lightness < this.minLightness ||
      this.lightness > this.maxLightness
    ) {
      this.velocity *= -1;
    }

    // this.hue += this.velocity;
    this.lightness += this.velocity;
  }

  render(ctx) {
    // const hue = Math.round(this.hue);
    // const lightness = Math.round(this.lightness);

    // ctx.fillStyle = `hsl(${hue}, ${this.saturation}%, ${this.lightness}%)`;
    ctx.fillStyle = `hsl(${this.hue}, ${this.saturation}%, ${this.lightness}%)`;
    ctx.fillRect(this.x, this.y, 1, 1);
  }
}

export default Pixel;
