
/*

TUTORIAL
The Lost Land of Tutoria

GRASS LEVELS
The Hills of Daventry (King's Quest)
The Mountains of Nibelheim (Final Fantasy 7)
The Gardens of Balamb (Final Fantasy 8)
The Lake of Hylia (Legend of Zelda)
The Forest of Guardia (Chrono Trigger)

DESERT LEVELS
The Oasis of Aveh (Xenogears)
The Dunes of Varant (Gothic 3)
The Sands of Figaro (Final Fantasy 6)
The Wastes of Lut Gholein (Diablo 2)
The Desert of Calico (Stardew Valley)

SNOW LEVELS
The Cliffs of Lothric (Dark Souls)
The Outskirts of Bowerstone (Fable)
The Steppes of Tulga (Mount & Blade)
The Ruins of Lordaeron (Warcraft)
The Shores of Solstheim (Morrowind: Bloodmoon)

MAYBES
The _____ of Alefgard (Dragon Warrior)
The _____ of Tristram (Diablo)
The _____ of Khorinis (Gothic 2)

 */


// LEGEND
// ● unlit pip
// ○ lit pip
// ▪ unlit pip in water
// □ lit pip in water
// A mountain
// T trees
// X water
// - horizontal bridge
// | vertical bridge
// W town

const levels = [{
  title: 'Blankland',
  tileset: 'snow',
  entrance: { 'face': 0, 'row': 2, 'col': 3 },
  pickups: [{
    type: 'boat',
    location: { 'face': 0, 'row': 1, 'col': 3 },
  },{
    type: 'boat',
    location: { 'face': 0, 'row': 2, 'col': 6 },
  }],
  enemies: [{
    type: 'serpent',
    location: { 'face': 0, 'row': 3, 'col': 3 },
    behavior: 'sentry',
    direction: 'right'
  },{
    type: 'serpent',
    location: { 'face': 0, 'row': 4, 'col': 3 },
    behavior: 'sentry',
    direction: 'right'
  },{
    type: 'serpent',
    location: { 'face': 0, 'row': 5, 'col': 3 },
    behavior: 'sentry',
    direction: 'right'
  },{
    type: 'serpent',
    location: { 'face': 0, 'row': 6, 'col': 3 },
    behavior: 'sentry',
    direction: 'right'
  }],
  faces: [
    [
      ['X','X','X','X','X','X','X'],
      ['X','X','X','X','X','X','X'], // ONE
      ['X','X','X',' ','X','X','X'], // ↑ right edge of 5
      ['X','X','X','X','X','X',' '], // → top edge of 3
      ['X','X','X','X','X','X',' '], // ↓ right edge of 2
      ['X','X','X','X','X','X',' '], // ← bottom edge of 4
      ['X','X','X','X','X','X',' ']
    ],
    [
      [' ',' ',' ',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ','●',' '], // TWO
      [' ',' ',' ',' ',' ',' ',' '], // ↑ left edge of 4
      [' ',' ',' ',' ',' ',' ',' '], // → bottom edge of 1
      [' ',' ',' ',' ',' ',' ',' '], // ↓ left edge of 3
      [' ','●',' ',' ',' ',' ',' '], // ← top edge of 6
      [' ',' ',' ',' ',' ',' ',' ']
    ],
    [
      [' ',' ',' ',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ','●',' '], // THREE
      [' ',' ',' ',' ',' ',' ',' '], // ↑ right edge of 1
      [' ',' ',' ','●',' ',' ',' '], // → top edge of 5
      [' ',' ',' ',' ',' ',' ',' '], // ↓ right edge of 6
      [' ','●',' ',' ',' ',' ',' '], // ← bottom edge of 2
      [' ',' ',' ',' ',' ',' ',' ']
    ],
    [
      [' ',' ',' ',' ',' ',' ',' '],
      [' ','●',' ',' ',' ','●',' '], // FOUR
      [' ',' ',' ',' ',' ',' ',' '], // ↑ left edge of 6
      [' ',' ',' ',' ',' ',' ',' '], // → bottom edge of 5
      [' ',' ',' ',' ',' ',' ',' '], // ↓ left edge of 1
      [' ','●',' ',' ',' ','●',' '], // ← top edge of 2
      [' ',' ',' ',' ',' ',' ',' ']
    ],
    [
      [' ',' ',' ',' ',' ',' ',' '],
      [' ','●',' ',' ',' ','●',' '], // FIVE
      [' ',' ',' ',' ',' ',' ',' '], // ↑ right edge of 3
      [' ',' ',' ','●',' ',' ',' '], // → top edge of 1
      [' ',' ',' ',' ',' ',' ',' '], // ↓ right edge of 4
      [' ','●',' ',' ',' ','●',' '], // ← bottom edge of 6
      [' ',' ',' ',' ',' ',' ',' ']
    ],
    [
      [' ',' ',' ',' ',' ',' ',' '],
      [' ','●',' ',' ',' ','●',' '], // SIX
      [' ',' ',' ',' ',' ',' ',' '], // ↑ left edge of 2
      [' ','●',' ',' ',' ','●',' '], // → bottom edge of 3
      [' ',' ',' ',' ',' ',' ',' '], // ↓ left edge of 5
      [' ','●',' ',' ',' ','●',' '], // ← top edge of 4
      [' ',' ',' ',' ',' ',' ',' ']
    ]
  ]
},{
  title: 'The Lost Land of Tutoria',
  tileset: 'grass',
  entrance: { 'face': 0, 'row': 2, 'col': 3 },
  pickups: [{
    type: 'message',
    location: { 'face': 0, 'row': 1, 'col': 3 },
    content: '<p>VILLAGE ELDER: The DARKNESS has brought EVIL to our world. You must light all the PIPS with your MAGIC TORCH to save us!</p>'
  },{
    type: 'message',
    location: { 'face': 1, 'row': 1, 'col': 3 },
    content: '<p>TOWN GUARD: Don\'t be fooled by their adorable appearance! SLIMES are dangerous and will ATTACK you if you get in their way!</p>'
  },{
    type: 'message',
    location: { 'face': 2, 'row': 3, 'col': 1 },
    content: '<p>BARKEEP: You ever notice that BLUE and PURPLE SLIMES never seem to move the same way? Kinda unsettlin\'.</p>'
  },{
    type: 'message',
    location: { 'face': 4, 'row': 3, 'col': 4 },
    content: '<p>HARBORMASTER: You can\'t just go around stealing BOATS. You probably don\'t even know how to land safely on OPEN SHORE. Why, I bet you\'ve never even lit a SEA PIP with the ocean breeze blowing in your hair!</p>'
  },{
    type: 'boat',
    location: { 'face': 4, 'row': 4, 'col': 4 },
  },{
    type: 'message',
    location: { 'face': 3, 'row': 5, 'col': 3 },
    content: '<p>BLACKSMITH: I bet you could make short work of those SLIMES if you had a SWORD. Take mine! Just remember: you need be on the ATTACK. An ENEMY barrelling into you will always knock you down, armed or not.</p>'
  },{
    type: 'sword',
    location: { 'face': 3, 'row': 5, 'col': 3 },
    status: 'hidden'
  },{
    type: 'message',
    location: { 'face': 5, 'row': 3, 'col': 3 },
    content: '<p>LOCAL MYSTIC: The LIGHT is returning to our land at long last! You must be the HERO the PROPHECY foretold!</p>'
  }],
  enemies: [{
    type: 'purple-slime',
    location: { 'face': 1, 'row': 5 , 'col': 1 },
    direction: 'right'
  },{
    type: 'purple-slime',
    location: { 'face': 2, 'row': 5 , 'col': 3 },
    direction: 'right'
  },{
    type: 'blue-slime',
    location: { 'face': 2, 'row': 1 , 'col': 4 },
    direction: 'down'
  },{
    type: 'purple-slime',
    location: { 'face': 3, 'row': 2 , 'col': 4 },
    direction: 'right'
  }],
  faces: [
    [
      ['A','A','A','A','A','A','A'],
      ['A','Y',' ','W','A','A','A'],
      ['A','Y','A',' ','A','A','A'],
      ['A','Y','A','●','A','A','A'],
      ['A','Y','Y','Y','Y','Y','A'],
      ['A',' ',' ','Y',' ','Y','A'],
      ['A','A','A',' ','A','A','A']
    ],
    [
      ['A','A','A','A','A','A','A'],
      ['A','A',' ','W','Y','●','A'],
      ['A','Y',' ','A',' ','Y','A'],
      ['A',' ','Y','A','A',' ',' '],
      ['A','Y',' ','A','A','A','A'],
      ['A','●',' ',' ',' ',' ','A'],
      ['A','A','A',' ','A','A','A']
    ],
    [
      ['A','A','A','A','A','A','A'],
      ['A','Y',' ',' ',' ','●','A'],
      ['A',' ',' ','A',' ','Y','A'],
      [' ','W','Y','●','Y',' ',' '],
      ['A','A',' ','A','A','A','A'],
      ['A','●','Y','Y','Y',' ','A'],
      ['A','A','A','A','A','A','A']
    ],
    [
      ['A','A','A','A',' ','A','A'],
      ['A','▪','A','A','Y','●','X'],
      ['A','X','X','A',' ','A','X'],
      ['A',' ','X','X','|','X','X'],
      ['A',' ','Y','A',' ','Y','X'],
      ['A','●',' ','W',' ','●','X'],
      ['A','A','A','A','A','A','A']
    ],
    [
      ['A','A','A',' ','A','A','A'],
      ['A','●','A',' ',' ','●','A'],
      ['A',' ','X',' ','Y',' ','A'],
      ['A','Y','X','●','W','Y','A'],
      ['A','X','X','X','X',' ','A'],
      ['A','▪','X','X','X','●','A'],
      ['A','X','X','X','X','X','A']
    ],
    [
      ['A','A','A','A','A','A','A'],
      ['A','●',' ',' ','Y','●','A'],
      ['A',' ','Y',' ',' ','Y','A'],
      ['A','●','A','W','A','●','A'],
      ['Y',' ',' ',' ','Y',' ','A'],
      ['A','●','Y','Y',' ','●','A'],
      ['A','A','A','A','A','A','A']
    ]
  ]
}, {
  title: 'The Hills of Daventry',
  tileset: 'grass',
  entrance: { 'face': 0, 'row': 2, 'col': 3 },
  pickups: [{
    type: 'sword',
    location: { 'face': 5, 'row': 5, 'col': 2 },
  },{
    type: 'boat',
    location: { 'face': 4, 'row': 3, 'col': 5 },
  },{
    type: 'message',
    location: { 'face': 0, 'row': 2, 'col': 4 },
    content: '<p>VILLAGER: Have you come from TUTORIA? Save us too, while you\'re at it! The whole COUNTRYSIDE is overrun with SLIMES!</p>'
  },{
    type: 'message',
    location: { 'face': 4, 'row': 2, 'col': 2 },
    content: '<p>ADVENTURER: Never let a SLIME trap you in the MOUNTAINS! They\'re deadly when you have nowhere to run!</p>'
  }],
  enemies: [{
    type: 'blue-slime',
    location: { 'face': 0, 'row': 2 , 'col': 2 },
    direction: 'down'
  },{
    type: 'purple-slime',
    location: { 'face': 0, 'row': 5 , 'col': 1 },
    direction: 'right'
  },{
    type: 'blue-slime',
    location: { 'face': 0, 'row': 1 , 'col': 6 },
    direction: 'down'
  },{
    type: 'purple-slime',
    location: { 'face': 2, 'row': 3 , 'col': 5 },
    direction: 'down'
  },{
    type: 'purple-slime',
    location: { 'face': 4, 'row': 4 , 'col': 3 },
    direction: 'right'
  },{
    type: 'blue-slime',
    location: { 'face': 5, 'row': 0 , 'col': 5 },
    direction: 'right'
  }],
  faces: [
    [
      ['A','X','X','X','X','X','A'],
      ['Y','Y',' ','Y','X','X','Y'],
      ['A','A','Y',' ','W','X','Y'],
      [' ','Y',' ','●','Y','X',' '],
      ['A','Y','Y','Y','Y','X','Y'],
      ['A','Y','Y','Y',' ','-',' '],
      ['A','Y','A','A','A','X','A']
    ],
    [
      [' ','Y','A','X','X','A','A'],
      ['Y','Y','Y','X','A','●','Y'],
      ['X','X',' ','X','A','A','A'],
      ['Y','X','|','X','X',' ',' '],
      ['Y',' ','Y','X','X','X','Y'],
      [' ','●',' ','X','X','X','X'],
      ['A','A','A','A','A','X','X']
    ],
    [
      ['A',' ','A',' ','A','A','A'],
      ['A','Y','A','Y','A','●','Y'],
      ['A','Y','A','A','A','A','A'],
      ['A',' ','A','●','Y',' ','A'],
      [' ',' ','A','A','A','Y','A'],
      [' ','●','A','A','A',' ','Y'],
      [' ','Y','Y','Y','A','A','A']
    ],
    [
      ['Y','Y','A','X','Y','Y','Y'],
      ['Y','●','A','X','X','●',' '],
      ['A','A','X','X','X','X','Y'],
      ['X','X','X','A','Y','X',' '],
      ['X','A','A','A','A','Y','A'],
      ['A','●','Y','A','A','●','A'],
      ['A','A',' ',' ','A','Y','A']
    ],
    [
      ['A',' ',' ','A','A',' ','X'],
      ['A','●',' ','A','A','●','X'],
      [' ',' ','W','A','Y','X','X'],
      ['A','A',' ','●','Y','X','X'],
      ['A',' ','Y',' ','Y','Y','X'],
      ['A','●',' ','A','Y','▪','X'],
      ['A','A','A','A','A','A','A']
    ],
    [
      [' ','Y','X','Y','A',' ','A'],
      ['Y','▪','X','A','Y','●','A'],
      ['X','X','X','Y','Y','A','Y'],
      ['X','●',' ','A','A','●','Y'],
      ['Y','A','A','A','Y','A','Y'],
      ['Y','●',' ','A','A','●',' '],
      [' ','Y','Y','A',' ',' ',' ']
    ]
  ]
},{
  title: 'The Lake of Hylia',
  tileset: 'grass',
  entrance: { 'face': 0, 'row': 2, 'col': 3 },
  pickups: [{
    type: 'boat',
    location: { 'face': 0, 'row': 5, 'col': 2 },
  }],
  enemies: [{
    type: 'serpent',
    location: { 'face': 0, 'row': 5, 'col': 5 },
    direction: 'left',
    behavior: 'sentry'
  }],
  faces: [
    [
      ['V','V','X','|','X','X','X'],
      ['X','X','X','|','X','X','X'],
      ['X','X',' ',' ','Y','X','X'],
      ['X','X',' ','●','Y','X','X'],
      ['V','V',' ','Y','Y','X','X'],
      ['X','X','X','X','X','X','X'],
      ['X','X','X','X','X','V','X']
    ],
    [
      ['A','A','X','X','A','A','X'],
      ['A','Y','X','X','Y','●','A'],
      ['X','X','X','X',' ','A','A'],
      ['X','X','V','X','X','X','X'],
      ['V','V','V','V','X','X','X'],
      ['X','▪','V','X','X','X','X'],
      ['X','V','X','X','V','X','X']
    ],
    [
      ['X','X','X','X','X','X','X'],
      ['V','V','X','X','X','●','Y'],
      ['V','X','X','X','Y','Y',' '],
      ['X','A','X','▪','X','A','A'],
      ['Y','A','X','X','X','A','X'],
      ['Y','●','X','V','X','X','X'],
      [' ','A','A','X','X','X','X']
    ],
    [
      ['A','A','A','A','Y','A','Y'],
      ['A','▪','X','X','Y','●','A'],
      ['X','V','V','X','X','A','A'],
      ['X','X','V','X','X','V','X'],
      ['X','V','V','X','A',' ','X'],
      ['V','▪','V','X','Y','●','X'],
      ['X','X','V','X','V','V','V']
    ],
    [
      ['X','X','X','A',' ',' ','X'],
      ['X','●',' ','A',' ','●','X'],
      ['X','Y','A','Y',' ','X','X'],
      ['V','A','Y','●',' ','-','-'],
      ['X','Y',' ','Y','X','X','X'],
      ['X','●',' ','X','X','▪','V'],
      ['A','A','A','X','X','X','V']
    ],
    [
      [' ','A','Y','X','X','X','A'],
      ['Y','●','Y','X','X','▪',' '],
      ['Y',' ','Y','X','V','A','A'],
      ['Y','●','Y','X',' ','●','Y'],
      ['Y','Y','Y','X','V','Y','A'],
      ['Y','●','X','X','V','▪','A'],
      [' ','X','X','V','V','X','X']
    ]
  ]
},{
  title: 'The Gardens of Balamb',
  tileset: 'grass',
  entrance: { 'face': 0, 'row': 2, 'col': 3 },
  pickups: [{
    type: 'boat',
    location: { 'face': 2, 'row': 4, 'col': 2 },
  }],
  enemies: [{
    type: 'serpent',
    location: { 'face': 0, 'row': 1, 'col': 1 },
    direction: 'right',
    behavior: 'sentry'
  },{
    type: 'serpent',
    location: { 'face': 0, 'row': 5, 'col': 1 },
    direction: 'right',
    behavior: 'sentry'
  },{
    type: 'blue-slime',
    location: { 'face': 0, 'row': 1, 'col': 6 },
    direction: 'right',
  }],
  faces: [
    [
      ['Y','Y','Y','X','Y','Y','Y'],
      ['Y','X','X','X','X','X',' '], // ONE
      ['Y','X','Y','Y','Y','X','Y'], // ↑ right edge of 5
      ['X','X','Y','●','Y','X','X'], // → top edge of 3
      ['Y','X','Y','Y','Y','X','Y'], // ↓ right edge of 2
      ['Y','X','X','|','X','X','Y'], // ← bottom edge of 4
      ['Y','Y','Y',' ','Y','Y','Y']
    ],
    [
      ['X','X','X','X','X','X','X'],
      ['X','Y','Y','-','Y','●','X'], // TWO
      ['X','Y','A','X','Y','Y','X'], // ↑ left edge of 4
      ['X','Y','Y','X','A','Y','-'], // → bottom edge of 1
      ['X','A','Y','-',' ','A','X'], // ↓ left edge of 3
      ['X','▪','X','X','Y','Y','X'], // ← top edge of 6
      ['X','X','X','X','X','|','X']
    ],
    [
      ['X','V','V','X','Y','A','A'],
      ['-',' ','V','X','Y','●',' '], // THREE
      ['X','Y','X','X','X','Y',' '], // ↑ right edge of 1
      ['X','Y','X','▪','X','Y',' '], // → top edge of 5
      ['X','Y','X','X','X','Y',' '], // ↓ right edge of 6
      ['X','●','A','Y','Y','Y',' '], // ← bottom edge of 2
      ['X','A','A',' ',' ',' ',' ']
    ],
    [
      [' ',' ',' ',' ',' ',' ','X'],
      [' ','●',' ',' ',' ','●','X'], // FOUR
      [' ',' ',' ',' ',' ',' ','X'], // ↑ left edge of 6
      [' ',' ',' ',' ',' ',' ','X'], // → bottom edge of 5
      [' ',' ',' ','X',' ',' ','X'], // ↓ left edge of 1
      [' ','●',' ','X',' ','●','X'], // ← top edge of 2
      [' ',' ',' ','X','Y','A','A']
    ],
    [
      [' ',' ',' ',' ',' ',' ','A'],
      [' ','●',' ',' ',' ','●','A'], // FIVE
      [' ',' ',' ',' ',' ',' ','A'], // ↑ right edge of 3
      [' ',' ',' ','●',' ','X','X'], // → top edge of 1
      [' ',' ',' ',' ',' ',' ',' '], // ↓ right edge of 4
      [' ','●',' ',' ',' ','●','A'], // ← bottom edge of 6
      ['X','X','X','X','X','X','A']
    ],
    [
      [' ',' ',' ',' ',' ',' ',' '],
      [' ','●',' ',' ',' ','●',' '], // SIX
      [' ',' ',' ',' ',' ',' ',' '], // ↑ left edge of 2
      [' ','●',' ',' ',' ','●',' '], // → bottom edge of 3
      [' ',' ',' ',' ',' ',' ',' '], // ↓ left edge of 5
      [' ','●',' ',' ',' ','●',' '], // ← top edge of 4
      [' ',' ',' ',' ',' ',' ',' ']
    ]
  ]
},{
  title: 'The Oasis of Aveh',
  tileset: 'desert',
  entrance: { 'face': 0, 'row': 2, 'col': 3 },
  pickups: [{
    type: 'boat',
    location: { 'face': 5, 'row': 1, 'col': 2 },
  }],
  enemies: [],
  faces: [
    [
      ['A',' ',' ',' ',' ',' ',' '],
      ['A','Y',' ',' ','Y',' ',' '],
      ['A',' ',' ',' ',' ','W',' '],
      ['A','A',' ','●',' ','X','Y'],
      ['A','A','A',' ',' ','Y',' '],
      ['A','A',' ',' ','Y',' ',' '],
      ['A','A','Y',' ',' ',' ',' ']
    ],
    [
      ['A','A','A','A','A','A','A'],
      ['A','A','A',' ',' ','●','A'],
      ['A','A',' ',' ','Y',' ',' '],
      ['A',' ','Y',' ',' ',' ',' '],
      ['A',' ',' ',' ',' ',' ',' '],
      ['A','●',' ','A',' ','Y',' '],
      [' ',' ',' ','A','A',' ',' ']
    ],
    [
      [' ',' ',' ',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ','●',' '],
      [' ','Y','A',' ','Y',' ',' '],
      ['A','A','A','●',' ',' ',' '],
      ['A',' ',' ',' ',' ',' ',' '],
      [' ','●','Y',' ',' ','Y','A'],
      [' ',' ',' ',' ',' ','A','A']
    ],
    [
      ['A','A','A','A','A','A','A'],
      ['A','●',' ','W','Y','●','A'],
      ['A','A','Y',' ',' ',' ','A'],
      ['A','V','V','X','X','X','X'],
      ['A','A',' ',' ','Y',' ','A'],
      ['A','●','Y',' ',' ','●','A'],
      ['A','A','A','A','A','A','A']
    ],
    [
      ['A','A','A',' ',' ',' ',' '],
      [' ','●','A',' ',' ','●',' '],
      ['X','X','A','A','A','Y',' '],
      [' ','X','A','●','A',' ',' '],
      [' ','X','X','X','A',' ','Y'],
      ['A','●',' ','X','A','●',' '],
      ['A','A','A','X','A','A','A']
    ],
    [
      [' ','Y',' ','A','A','A',' '],
      [' ','●','X','X','A','●',' '],
      ['Y','A','V','X','X',' ',' '],
      [' ','●','A','A','X','●',' '],
      [' ',' ','A',' ','-',' ',' '],
      [' ','●',' ',' ','X','●',' '],
      ['Y',' ','Y',' ','X',' ','A']
    ]
  ]
},{
  title: 'Blankland',
  tileset: 'desert',
  entrance: { 'face': 0, 'row': 2, 'col': 3 },
  pickups: [],
  enemies: [],
  faces: [
    [
      [' ',' ',' ',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ',' ',' '], // ONE
      [' ',' ',' ',' ',' ',' ',' '], // ↑ right edge of 5
      [' ',' ',' ','●',' ',' ',' '], // → top edge of 3
      [' ',' ',' ',' ',' ',' ',' '], // ↓ right edge of 2
      [' ',' ',' ',' ',' ',' ',' '], // ← bottom edge of 4
      [' ',' ',' ',' ',' ',' ',' ']
    ],
    [
      [' ',' ',' ',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ','●',' '], // TWO
      [' ',' ',' ',' ',' ',' ',' '], // ↑ left edge of 4
      [' ',' ',' ',' ',' ',' ',' '], // → bottom edge of 1
      [' ',' ',' ',' ',' ',' ',' '], // ↓ left edge of 3
      [' ','●',' ',' ',' ',' ',' '], // ← top edge of 6
      [' ',' ',' ',' ',' ',' ',' ']
    ],
    [
      [' ',' ',' ',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ','●',' '], // THREE
      [' ',' ',' ',' ',' ',' ',' '], // ↑ right edge of 1
      [' ',' ',' ','●',' ',' ',' '], // → top edge of 5
      [' ',' ',' ',' ',' ',' ',' '], // ↓ right edge of 6
      [' ','●',' ',' ',' ',' ',' '], // ← bottom edge of 2
      [' ',' ',' ',' ',' ',' ',' ']
    ],
    [
      [' ',' ',' ',' ',' ',' ',' '],
      [' ','●',' ',' ',' ','●',' '], // FOUR
      [' ',' ',' ',' ',' ',' ',' '], // ↑ left edge of 6
      [' ',' ',' ',' ',' ',' ',' '], // → bottom edge of 5
      [' ',' ',' ',' ',' ',' ',' '], // ↓ left edge of 1
      [' ','●',' ',' ',' ','●',' '], // ← top edge of 2
      [' ',' ',' ',' ',' ',' ',' ']
    ],
    [
      [' ',' ',' ',' ',' ',' ',' '],
      [' ','●',' ',' ',' ','●',' '], // FIVE
      [' ',' ',' ',' ',' ',' ',' '], // ↑ right edge of 3
      [' ',' ',' ','●',' ',' ',' '], // → top edge of 1
      [' ',' ',' ',' ',' ',' ',' '], // ↓ right edge of 4
      [' ','●',' ',' ',' ','●',' '], // ← bottom edge of 6
      [' ',' ',' ',' ',' ',' ',' ']
    ],
    [
      [' ',' ',' ',' ',' ',' ',' '],
      [' ','●',' ',' ',' ','●',' '], // SIX
      [' ',' ',' ',' ',' ',' ',' '], // ↑ left edge of 2
      [' ','●',' ',' ',' ','●',' '], // → bottom edge of 3
      [' ',' ',' ',' ',' ',' ',' '], // ↓ left edge of 5
      [' ','●',' ',' ',' ','●',' '], // ← top edge of 4
      [' ',' ',' ',' ',' ',' ',' ']
    ]
  ]
}];

export default levels