class Tail {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
  }

  draw(ctx, cellSize, gridPadding) {
    ctx.fillStyle = this.color;
    ctx.shadowColor = this.color;
    ctx.shadowBlur = 2.5;
    ctx.fillRect(
      this.x * cellSize + gridPadding,
      this.y * cellSize + gridPadding,
      cellSize,
      cellSize
    );
  }
}

export default Tail;
