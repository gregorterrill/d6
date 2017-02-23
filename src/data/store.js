import thevoid from './levels/void.js'
import tutoria from './levels/tutoria.js'
import daventry from './levels/daventry.js'
import hylia from './levels/hylia.js'
import balamb from './levels/balamb.js'
import aveh from './levels/aveh.js'
import lutgholein from './levels/lut-gholein.js'

const levels = [
  thevoid,
  tutoria,
  daventry,
  hylia,
  balamb,
  aveh,
  lutgholein
];

const currentLevelNum = 6;

const currentLevel = {
  title: 'Hello World',
  tileset: 'grass',
  entrance: {},
  pickups: [],
  enemies: [],
  faces: []
};

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

const player = {
  status: 'active',
  hp: 5,
  xp: 0,
  location: { 'face': 0, 'row': 0, 'col': 0 },
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

