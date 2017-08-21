
const level = {
  title: 'The Sands of Figaro',
  tileset: 'desert',
  entrance: { 'face': 5, 'row': 5, 'col': 3 },
  pickups: [{
    type: 'sword',
    location: { 'face': 5, 'row': 2, 'col': 3 },
    container: 'stone',
  },{
    type: 'message',
    location: { 'face': 5, 'row': 3, 'col': 3 },
    content: 'TREASURE HUNTER: FIGARO CASTLE is locked down tight. You\'ll need a KEY to get in. Track down the FIVE COURIERS out in the DESERT for me, and I might be able to help you with that.',
    conditions: [{
      type: 'hasItem',
      value: 'sword',
      content: 'TREASURE HUNTER: Be careful out there. Those COURIERS can be tricky to catch, and those FLOCKOBOS they\'re riding can run right through QUICKSAND that you\'ll sink right into.',
    },{
      type: 'enemyGroupDefeated',
      value: 'A',
      content: 'TREASURE HUNTER: Nice work taking out those COURIERS. Alright, I\'m a man of my word. Here\'s the KEY to FIGARO CASTLE.',
    },{
      type: 'hasItem',
      value: 'key',
      content: 'TREASURE HUNTER: Did you know there\'s a PIP right inside FIGARO CASTLE!',
    }]
  },{
    type: 'key',
    location: { 'face': 5, 'row': 3, 'col': 3 },
    container: 'hidden',
    conditions: [{
      type: 'enemyGroupDefeated',
      value: 'A',
    }]
  }],
  enemies: [{
    type: 'courier',
    location: { 'face': 1, 'row': 0, 'col': 3 },
    direction: 'right',
    group: 'A'
  },{
    type: 'courier',
    location: { 'face': 2, 'row': 3, 'col': 3 },
    direction: 'left',
    group: 'A'
  },{
    type: 'courier',
    location: { 'face': 3, 'row': 3, 'col': 3 },
    direction: 'right',
    group: 'A'
  },{
    type: 'courier',
    location: { 'face': 4, 'row': 3, 'col': 3 },
    direction: 'left',
    group: 'A'
  },{
    type: 'courier',
    location: { 'face': 5, 'row': 0, 'col': 3 },
    direction: 'right',
    group: 'A'
  }],
  faces: [
    [
      [' ',' ',' ',' ',' ',' ',' '],
      [' ','Y','P','H','P',' ',' '], // ONE
      [' ','P','H','W','H','P','Q'], // ↑ right edge of 5
      [' ','H','W','●','W','H',' '], // → top edge of 3
      [' ','P','H','W','H','P',' '], // ↓ right edge of 2
      ['Y',' ','P','H','P',' ','Y'], // ← bottom edge of 4
      ['Q',' ',' ',' ',' ',' ',' ']
    ],
    [
      ['Q',' ',' ',' ','Y',' ',' '],
      [' ','Y',' ','Q',' ','●',' '], // TWO
      [' ',' ',' ',' ',' ',' ','Q'], // ↑ left edge of 4
      [' ',' ','Q','Y',' ',' ',' '], // → bottom edge of 1
      [' ',' ',' ',' ',' ',' ','Y'], // ↓ left edge of 3
      [' ','●',' ',' ','Q',' ',' '], // ← top edge of 6
      [' ','Q',' ',' ',' ',' ',' ']
    ],
    [
      ['Y','Y',' ','Q',' ',' ',' '],
      [' ',' ',' ',' ',' ','●','Q'], // THREE
      ['Q',' ',' ',' ',' ',' ',' '], // ↑ right edge of 1
      [' ',' ','Q','●',' ','Y',' '], // → top edge of 5
      [' ','Q','Y',' ','Q',' ',' '], // ↓ right edge of 6
      [' ','●',' ',' ',' ',' ',' '], // ← bottom edge of 2
      [' ','Q',' ',' ','Y',' ',' ']
    ],
    [
      [' ','Q',' ','Y',' ',' ',' '],
      [' ','●',' ',' ',' ','●',' '], // FOUR
      ['Y','Q',' ',' ','Q','Y',' '], // ↑ left edge of 6
      [' ',' ','Q',' ',' ',' ','Y'], // → bottom edge of 5
      ['Q',' ',' ','Y',' ',' ',' '], // ↓ left edge of 1
      [' ','●',' ',' ',' ','●','Q'], // ← top edge of 2
      [' ',' ',' ','Q',' ',' ',' ']
    ],
    [
      [' ','Q','Y',' ',' ',' ',' '],
      [' ','●',' ',' ','Q','●',' '], // FIVE
      [' ',' ',' ',' ',' ',' ',' '], // ↑ right edge of 3
      [' ','Y','Q','●',' ',' ',' '], // → top edge of 1
      [' ',' ',' ',' ',' ',' ','Q'], // ↓ right edge of 4
      [' ','●',' ','Q',' ','●',' '], // ← bottom edge of 6
      ['Q',' ',' ',' ','Y',' ',' ']
    ],
    [
      ['Q',' ','Y','Y','Y',' ',' '],
      [' ','●','X','X','X','●',' '], // SIX
      ['Y','F','X',' ','X','F',' '], // ↑ left edge of 2
      [' ','●','X','W','X','●',' '], // → bottom edge of 3
      [' ','F','X','|','X','F','Q'], // ↓ left edge of 5
      [' ','●','F',' ','F','●',' '], // ← top edge of 4
      [' ',' ',' ',' ',' ',' ','Y']
    ]
  ]
}

export default level