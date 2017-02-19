import levels from './levels.js'

const windows = {
  menu: {
    open: false,
  },
  dialog: {
    open: false,
    content: '<p>Hello world.</p>'
  }
};

const pips = 0;
const currentLevelNum = 1;

const currentLevel = {
  title: 'Hello World',
  tileset: 'grass',
  entrance: {},
  pickups: [],
  enemies: [],
  faces: []
};

const player = {
  status: 'active',
  hp: 5,
  xp: 0,
  location: { 'face': 0, 'row': 2, 'col': 3 },
  direction: 'right',
  items: ['torch']
};

export default {
  levels,
  currentLevel,
  currentLevelNum,
  player,
  pips,
  windows
}

