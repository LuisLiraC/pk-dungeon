class Game {
  constructor(gameConfig) {
    this.stage = gameConfig.stage
    this.character = gameConfig.character
    this.fps = gameConfig.fps
    this.message = gameConfig.message
    this.finished = false
  }

  start() {
    document.addEventListener('keydown', event => {
      this.characterMovement(event)
    })
    this.setMessage('Find the key')

    setInterval(() => {
      this.initialize()
      this.verifyPosition()
    }, 1000 / this.fps)

    setInterval(() => this.stage.toggleTraps(), 300)
  }

  initialize() {
    this.stage.resetCanvas()
    this.stage.drawStage()
    this.stage.drawCharacter(this.character)
  }

  characterMovement(event) {
    if (!this.finished) {
      switch (event.keyCode) {
        case 37:
          this.character.moveLeft(this.stage.map, this)
          break
        case 38:
          this.character.moveUp(this.stage.map, this)
          break
        case 39:
          this.character.moveRight(this.stage.map, this)
          break
        case 40:
          this.character.moveDown(this.stage.map, this)
          break
      }
    }
  }

  setMessage(text) {
    this.message.innerText = text
  }

  resetGame() {
    this.character.x = 1
    this.character.y = 1
    this.character.key = false
    this.stage.map[8][3] = 3
    this.finished = false
    this.setMessage('Find the key')
  }

  finish(message) {
    this.finished = true
    this.setMessage(message)
    setTimeout(() => {
      this.resetGame()
    }, 1500)
  }

  verifyPosition() {
    if (this.stage.map[this.character.y][this.character.x] == 4 && this.stage.activatedTraps) {
      this.finish('¡You lose!')
    }
  }
}

export default Game