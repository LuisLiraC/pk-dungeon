import Character from '../character.mjs'
import Stage from '../stage.mjs'

import stageConfig from './stage.mjs'
import characterConfig from './character.mjs'

const character = new Character(characterConfig)
const stage = new Stage(stageConfig)
const fps = 24
const message = document.getElementById('message')

const gameConfig = {
  character,
  stage,
  fps,
  message
}

export default gameConfig