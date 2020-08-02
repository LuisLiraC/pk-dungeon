class Stage {
  constructor(config) {
    this.map = config.map
    this.images = config.images
    this.canvas = config.canvas
    this.tileWidth = config.tile.width
    this.tileHeight = config.tile.height
    this.traps = config.traps
    this.activatedTraps = false
  }

  setContext() {
    this.ctx = this.canvas.getContext('2d')
  }

  drawStage() {
    this.setContext()
    let imageToDraw
    for (let i = 0; i < this.map.length; i++) {
      for (let j = 0; j < this.map[0].length; j++) {

        switch (this.map[i][j]) {
          case 0:
            imageToDraw = this.images.wall
            break
          case 1:
            imageToDraw = this.images.door
            break
          case 2:
            imageToDraw = this.images.grass
            break
          case 3:
            imageToDraw = this.images.key
            break
          case 4:
            imageToDraw = this.images.trap
        }

        this.ctx.drawImage(
          imageToDraw,
          j * this.tileWidth,
          i * this.tileHeight,
          this.tileWidth,
          this.tileHeight
        )
      }
    }
  }

  drawCharacter(character) {
    this.ctx.drawImage(
      character.image,
      character.x * this.tileWidth,
      character.y * this.tileHeight,
      this.tileWidth,
      this.tileHeight
    )
  }

  resetCanvas() {
    this.canvas.width = this.canvas.width
    this.canvas.height = this.canvas.height
  }

  toggleTraps() {
    if (this.activatedTraps) {
      this.activatedTraps = false
      this.traps.forEach(coord => this.map[coord.x][coord.y] = 2)
    } else {
      this.activatedTraps = true
      this.traps.forEach(coord => this.map[coord.x][coord.y] = 4)
    }
  }
}

export default Stage