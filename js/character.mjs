class Character {
  constructor(config) {
    this.x = config.coordinates.x
    this.y = config.coordinates.y
    this.image = config.image
    this.key = false
  }

  moveLeft(map, game) {
    if (this.canMove(this.x - 1, this.y, map)) {
      this.x--
      this.isOverKey(map, game)
      this.isOverDoor(map, game)
    }
  }

  moveRight(map, game) {
    if (this.canMove(this.x + 1, this.y, map)) {
      this.x++
      this.isOverKey(map, game)
      this.isOverDoor(map, game)
    }
  }

  moveUp(map, game) {
    if (this.canMove(this.x, this.y - 1, map)) {
      this.y--
      this.isOverKey(map, game)
      this.isOverDoor(map, game)
    }
  }

  moveDown(map, game) {
    if (this.canMove(this.x, this.y + 1, map)) {
      this.y++
      this.isOverKey(map, game)
      this.isOverDoor(map, game)
    }
  }

  canMove(x, y, map) {
    return map[y][x] != 0
  }

  isOverKey(map, game) {
    if (map[this.y][this.x] == 3) {
      this.key = true
      map[this.y][this.x] = 2
      game.setMessage('Go to the door')
    }
  }

  isOverDoor(map, game) {
    if (map[this.y][this.x] == 1) {
      this.key == true
        ? game.finish()
        : game.setMessage('You need to find the key')
    }
  }
}

export default Character