
// LEGEND
// ● unlit pip
// ○ lit pip
// A mountain
// T trees
// X water
// - horizontal bridge
// | vertical bridge
// W town

const levels = [{
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
    content: '<p>HARBORMASTER: You can\'t just go around stealing BOATS. You probably don\'t even know how to land safely on OPEN SHORE.</p>'
  },{
    type: 'boat',
    location: { 'face': 4, 'row': 4, 'col': 4 },
  },{
    type: 'message',
    location: { 'face': 3, 'row': 5, 'col': 3 },
    content: '<p>BLACKSMITH: I bet you could make short work of those SLIMES if you had a SWORD...</p>'
  },{
    type: 'sword',
    location: { 'face': 3, 'row': 5, 'col': 4 },
  },{
    type: 'message',
    location: { 'face': 5, 'row': 3, 'col': 3 },
    content: '<p>VILLAGER: The LIGHT is returning to our land at long last! You must be the HERO the PROPHECY foretold!</p>'
  }],
  enemies: [{
    type: 'purpleslime',
    location: { 'face': 1, 'row': 5 , 'col': 1 },
    direction: 'right'
  },{
    type: 'purpleslime',
    location: { 'face': 2, 'row': 5 , 'col': 3 },
    direction: 'right'
  },{
    type: 'blueslime',
    location: { 'face': 2, 'row': 1 , 'col': 4 },
    direction: 'down'
  },{
    type: 'purpleslime',
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
      ['A','●','A','A','Y','●','X'],
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
      ['A',' ','X','X','X',' ','A'],
      ['A','●','X','X','X','●','A'],
      ['A','Y','X','X','X','X','A']
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
  title: 'A Peaceful Day',
  tileset: 'grass',
  entrance: { 'face': 0, 'row': 2, 'col': 3 },
  pickups: [{
    type: 'sword',
    location: { 'face': 5, 'row': 4, 'col': 4 },
  },{
    type: 'boat',
    location: { 'face': 1, 'row': 4, 'col': 5 },
  }, {
    type: 'message',
    location: { 'face': 0, 'row': 2, 'col': 1 },
    content: '<p>VILLAGER: Oh geez dude. You gotta light up them pips with your magic torch to save us all.</p>'
  }],
  enemies: [{
    type: 'blueslime',
    location: { 'face': 0, 'row': 2 , 'col': 2 },
    direction: 'down'
  },{
    type: 'purpleslime',
    location: { 'face': 0, 'row': 5 , 'col': 1 },
    direction: 'right'
  }],
  faces: [
    [
      [' ',' ',' ','X','X',' ',' '],
      ['A','A',' ',' ','X','X','Y'],
      ['A','W',' ',' ',' ','X',' '],
      [' ','Y',' ','●','Y','X',' '],
      ['Y','Y','Y','Y','Y','X',' '],
      ['Y','Y','Y','Y',' ','-',' '],
      ['Y','Y',' ',' ',' ','X',' ']
    ],
    [
      [' ','Y','A','A','X','X',' '],
      ['Y','Y','Y','Y','X','●','Y'],
      ['X','X',' ',' ','X',' ',' '],
      ['Y','X','|','X','X',' ',' '],
      ['Y',' ','Y','X','X','X','Y'],
      [' ','●',' ','X','X','X','X'],
      [' ',' ',' ',' ',' ',' ',' ']
    ],
    [
      ['Y',' ',' ',' ',' ',' ',' '],
      ['Y','Y','Y','Y',' ','●',' '],
      ['Y','Y','Y','Y','Y',' ',' '],
      ['Y',' ','Y','●','Y',' ',' '],
      [' ',' ',' ','Y','Y',' ',' '],
      [' ','●',' ','Y','Y',' ','Y'],
      [' ',' ',' ',' ',' ','Y','Y']
    ],
    [
      [' ',' ','X',' ',' ',' ',' '],
      ['Y','●','X',' ',' ','●',' '],
      ['A','X','X',' ',' ',' ',' '],
      ['A','X','A','A','Y',' ','Y'],
      ['X','X','A','A','A',' ',' '],
      ['X','●',' ','A','A','●',' '],
      [' ',' ',' ',' ','A','A',' ']
    ],
    [
      [' ',' ',' ',' ',' ',' ',' '],
      [' ','●',' ',' ',' ','●','X'],
      [' ',' ',' ','Y','Y','X','X'],
      [' ','Y',' ','●','Y','X','X'],
      [' ',' ',' ',' ','Y','Y','Y'],
      [' ','●',' ',' ','Y','●',' '],
      [' ',' ','Y','Y','Y',' ',' ']
    ],
    [
      [' ',' ','X','Y',' ',' ',' '],
      [' ','●','X','Y',' ','●',' '],
      ['X','X','X',' ',' ','Y','Y'],
      [' ','●',' ','A','A','●','Y'],
      [' ','Y','Y','A',' ',' ','Y'],
      [' ','●','Y',' ',' ','●',' '],
      [' ',' ',' ',' ',' ',' ',' ']
    ]
  ]
},{
  title: 'Archipelago',
  tileset: 'grass',
  entrance: { 'face': 0, 'row': 2, 'col': 3 },
  pickups: [{
    type: 'boat',
    location: { 'face': 0, 'row': 5, 'col': 4 },
  }],
  enemies: [],
  faces: [
    [
      ['X','X','X','|','X','X','X'],
      ['X','X','X','|','X','X','X'],
      ['X','X',' ',' ','Y','X','X'],
      ['X','X',' ','●','Y','X','X'],
      ['X','X',' ','Y','Y','X','X'],
      ['X','X','X','X','X','X','X'],
      ['X','X','X','X','X','X','X']
    ],
    [
      ['A','A','X','X','A','A','X'],
      ['A','Y','X','X','Y','●','A'],
      ['X','X','X','X',' ','A','A'],
      ['X','X','X','X','X','X','X'],
      ['X','X','X','X','X','X','X'],
      ['X','●','Y','X','X','X','X'],
      ['X','X','X','X','X','X','X']
    ],
    [
      ['X','X','X','X','X','X','X'],
      ['X','X','X','X','X','●',' '],
      ['X','X','Y',' ','Y','Y',' '],
      ['X','A','Y','●',' ','A','A'],
      ['Y','A','Y','A','A','A','X'],
      ['Y','●','A','A','A','X','X'],
      ['A',' ','X','X','X','X','X']
    ],
    [
      ['A','A','A','A','Y','A','Y'],
      ['A','●','Y','X','Y','●','A'],
      ['X','X','X','X','X','A','A'],
      ['X','X','X','X','X','X','X'],
      ['X','X','X','X',' ','Y','X'],
      ['X','●',' ','X','Y','●','X'],
      ['X','X','X','X','X','X','X']
    ],
    [
      ['X','X','X','X',' ',' ','X'],
      ['X','●',' ','X',' ','●','X'],
      ['X','Y','Y','Y',' ','X','X'],
      ['X','A','Y','●',' ','-','-'],
      ['X','Y',' ','Y',' ','X','X'],
      ['X','●',' ','X','Y','●','X'],
      ['A','A','A','X','Y','Y','X']
    ],
    [
      [' ','A','Y','X','X','Y','A'],
      ['Y','●','Y','X','Y','●',' '],
      ['Y',' ','Y','X','A','A','A'],
      ['Y','●','Y','X',' ','●','Y'],
      ['Y','Y','Y','X','X','Y','A'],
      ['Y','●','X','X','X','●','A'],
      [' ','X','X','X','X','X','X']
    ]
  ]
},{
  title: 'Just Deserts',
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
      ['A',' ',' ',' ',' ',' ',' '],
      ['A','A',' ','●',' ','X','Y'],
      ['A','A','A',' ',' ','Y',' '],
      ['A','A','W',' ','Y',' ',' '],
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
      ['A','X','X','X','X','X','X'],
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
      ['Y','A','X','X','X',' ',' '],
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