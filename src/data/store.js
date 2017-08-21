import thevoid from './levels/void.js'

//GRASS LEVELS
import tutoria from './levels/grass/tutoria.js'
import daventry from './levels/grass/daventry.js'
import hylia from './levels/grass/hylia.js'
import balamb from './levels/grass/balamb.js'
import alefgard from './levels/grass/alefgard.js'
import guardia from './levels/grass/guardia.js'
import nibelheim from './levels/grass/nibelheim.js'

//DESERT LEVELS
import aveh from './levels/desert/aveh.js'
import calico from './levels/desert/calico.js'
import figaro from './levels/desert/figaro.js'

//SNOW LEVELS
import solstheim from './levels/snow/solstheim.js'
import lothric from './levels/snow/lothric.js'
import lordaeron from './levels/snow/lordaeron.js'
import bowerstone from './levels/snow/bowerstone.js'

//LAVA LEVELS
import vvardenfell from './levels/lava/vvardenfell.js'
import tristram from './levels/lava/tristram.js'

const currentLevelNum = 1;

const levels = [
  thevoid,
  tutoria,
  daventry,
  alefgard,
  guardia,
  hylia,
  balamb,
  nibelheim,
  calico,
  aveh,
  figaro,
  lordaeron,
  bowerstone,
  solstheim,
  lothric,
  vvardenfell,
  tristram
];

const currentLevel = {
  title: 'Hello World',
  tileset: 'grass',
  entrance: {},
  pickups: [],
  enemies: [],
  faces: []
};

const windows = {
  title: {
    open: false, //DEBUG: set to true or title screen will be skipped
  },
  end: {
    open: false,
  },
  menu: {
    open: false,
  },
  dialog: {
    open: false,
    messages: []
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

