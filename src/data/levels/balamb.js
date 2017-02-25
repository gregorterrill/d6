const level = {
  title: 'The Gardens of Balamb',
  tileset: 'grass',
  entrance: { 'face': 0, 'row': 2, 'col': 3 },
  pickups: [{
    type: 'boat',
    location: { 'face': 2, 'row': 4, 'col': 2 },
  }],
  enemies: [{
    type: 'sea-serpent',
    location: { 'face': 0, 'row': 1, 'col': 1 },
    direction: 'right'
  },{
    type: 'sea-serpent',
    location: { 'face': 0, 'row': 5, 'col': 1 },
    direction: 'right'
  },{
    type: 'blue-slime',
    location: { 'face': 0, 'row': 1, 'col': 6 },
    direction: 'right',
  },{
    type: 'skeleton',
    location: { 'face': 1, 'row': 1, 'col': 2 },
    direction: 'down'
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
}

export default level