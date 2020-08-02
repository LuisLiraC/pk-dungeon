const map = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 2, 2, 0, 0, 0, 2, 2, 2, 2, 0, 0, 2, 0, 0],
  [0, 0, 2, 2, 2, 2, 2, 0, 0, 2, 0, 0, 2, 0, 0],
  [0, 0, 2, 0, 0, 0, 0, 2, 0, 2, 2, 2, 2, 0, 0],
  [0, 0, 2, 2, 2, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0],
  [0, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0],
  [0, 2, 2, 0, 0, 0, 2, 2, 2, 0, 0, 1, 2, 2, 0],
  [0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 2, 0],
  [0, 2, 2, 3, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]

const canvas = document.getElementById('canvas')

const wallImage = new Image()
wallImage.src = '../assets/wall.png'

const doorImage = new Image()
doorImage.src = '../assets/door.png'

const grassImage = new Image()
grassImage.src = '../assets/grass.png'

const keyImage = new Image()
keyImage.src = '../assets/key.png'

export const stageConfig = {
  map,
  canvas,
  images: {
    wall: wallImage,
    door: doorImage,
    grass: grassImage,
    key: keyImage,
  },
  tile: {
    width: 50,
    height: 50
  }
}

export default stageConfig