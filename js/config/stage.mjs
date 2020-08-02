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

const traps = [
  { x: 4, y: 10 },
  { x: 2, y: 3 },
  { x: 7, y: 1 },
  { x: 7, y: 6 }
]

const canvas = document.getElementById('canvas')

const wall = new Image()
wall.src = '../assets/wall.png'

const door = new Image()
door.src = '../assets/door.png'

const grass = new Image()
grass.src = '../assets/grass.png'

const key = new Image()
key.src = '../assets/key.png'

const trap = new Image()
trap.src = '../assets/trap.png'

const size = 50

export const stageConfig = {
  map,
  canvas,
  traps,
  images: {
    wall,
    door,
    grass,
    key,
    trap
  },
  tile: {
    width: size,
    height: size
  }
}

export default stageConfig