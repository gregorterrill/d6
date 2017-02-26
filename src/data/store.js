import thevoid from './levels/void.js'
//GRASS LEVELS
import tutoria from './levels/grass/tutoria.js'
import daventry from './levels/grass/daventry.js'
import hylia from './levels/grass/hylia.js'
import balamb from './levels/grass/balamb.js'
import alefgard from './levels/grass/alefgard.js'
import guardia from './levels/grass/guardia.js'
import nibelheim from './levels/grass/nibelheim.js'
//SNOW LEVELS
import tulga from './levels/snow/tulga.js'
import solstheim from './levels/snow/solstheim.js'
import lothric from './levels/snow/lothric.js'
import lordaeron from './levels/snow/lordaeron.js'
import bowerstone from './levels/snow/bowerstone.js'
//DESERT LEVELS
import aveh from './levels/desert/aveh.js'
import varant from './levels/desert/varant.js'
import calico from './levels/desert/calico.js'
import figaro from './levels/desert/figaro.js'
import lutgholein from './levels/desert/lut-gholein.js'
//LAVA LEVELS
import vvardenfell from './levels/lava/vvardenfell.js'
import norfair from './levels/lava/norfair.js'
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
  tulga,
  bowerstone,
  lordaeron,
  solstheim,
  lothric,
  calico,
  aveh,
  figaro,
  varant,
  lutgholein,
  vvardenfell,
  norfair,
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

