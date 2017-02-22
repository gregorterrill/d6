import thevoid from './levels/void.js'
import tutoria from './levels/tutoria.js'
import daventry from './levels/daventry.js'
import hylia from './levels/hylia.js'
import balamb from './levels/balamb.js'
import aveh from './levels/aveh.js'
import lutgholein from './levels/lut-gholein.js'
/*
TUTORIAL
The Lost Land of Tutoria

GRASS LEVELS
The Hills of Daventry (King's Quest)
The Mountains of Nibelheim (Final Fantasy 7)
The Gardens of Balamb (Final Fantasy 8)
The Lake of Hylia (Legend of Zelda)
The Forest of Guardia (Chrono Trigger)
The Fields of Alefgard (Dragon Warrior)

DESERT LEVELS
The Oasis of Aveh (Xenogears)
The Dunes of Varant (Gothic 3)
The Sands of Figaro (Final Fantasy 6)
The Pits of Lut Gholein (Diablo 2)
The Desert of Calico (Stardew Valley)

SNOW LEVELS
The Cliffs of Lothric (Dark Souls)
The Outskirts of Bowerstone (Fable)
The Steppes of Tulga (Mount & Blade)
The Ruins of Lordaeron (Warcraft)
The Shores of Solstheim (Morrowind: Bloodmoon)
*/
const levels = [
  thevoid,
  tutoria,
  daventry,
  hylia,
  balamb,
  aveh,
  lutgholein
];

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
const currentLevelNum = 6;

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

