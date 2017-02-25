const level = {
  title: 'The Gardens of Balamb (WIP)',
  tileset: 'grass',
  entrance: { 'face': 3, 'row': 4, 'col': 3 },
  pickups: [{
    type: 'message',
    location: { 'face': 4, 'row': 5, 'col': 3 },
    content: '<p>HELLO</p>'
  },{
    type: 'boat',
    location: { 'face': 4, 'row': 6, 'col': 3 },
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
    type: 'sea-serpent',
    location: { 'face': 5, 'row': 0, 'col': 0 },
    direction: 'right'
  },{
    type: 'sea-serpent',
    location: { 'face': 1, 'row': 0, 'col': 0 },
    direction: 'right'
  },{
    type: 'blue-slime',
    location: { 'face': 0, 'row': 1, 'col': 6 },
    direction: 'right',
  },{
    type: 'blue-slime',
    location: { 'face': 5, 'row': 0, 'col': 5 },
    direction: 'right',
  },{
    type: 'skeleton',
    location: { 'face': 1, 'row': 1, 'col': 2 },
    direction: 'down'
  },{
    type: 'skeleton',
    location: { 'face': 3, 'row': 3, 'col': 2 },
    direction: 'right'
  },{
    type: 'skeleton',
    location: { 'face': 3, 'row': 3, 'col': 4 },
    direction: 'up'
  }],
  faces: [
    [
      ['Y','Y','Y','X','Y','Y','Y'],
      ['Y','X','X','X','V','X',' '], // ONE
      ['Y','X','Y','Y','Y','X','Y'], // ↑ right edge of 5
      ['X','X','Y','●','Y','X','X'], // → top edge of 3
      ['Y','X','Y','Y','Y','X','Y'], // ↓ right edge of 2
      ['Y','X','X','|','X','X','Y'], // ← bottom edge of 4
      ['Y','Y','X','|','X','Y','Y']
    ],
    [
      ['X','X','X','X','X','X','X'],
      ['X','Y','Y','-','Y','●','X'], // TWO
      ['X','Y','F','X','Y','Y','X'], // ↑ left edge of 4
      ['X','Y','Y','X','F','Y','-'], // → bottom edge of 1
      ['X','F','Y','-',' ','F','X'], // ↓ left edge of 3
      ['X','▪','X','X','Y','Y','X'], // ← top edge of 6
      ['X','X','X','X','X','|','X']
    ],
    [
      ['X','V','V','X','Y','F','F'],
      ['-',' ','V','X','Y','●',' '], // THREE
      ['X','Y','X','X','X','Y',' '], // ↑ right edge of 1
      ['Y','Y','X','▪','X','Y',' '], // → top edge of 5
      ['Y',' ','X','X','X','Y',' '], // ↓ right edge of 6
      ['Y','●','A','Y','Y','Y',' '], // ← bottom edge of 2
      ['X','F','F',' ',' ',' ',' ']
    ],
    [
      ['X',' ',' ','F',' ',' ','X'],
      ['X','●',' ','F',' ','●','X'], // FOUR
      ['X','X','|','X','|','X','X'], // ↑ left edge of 6
      ['Y',' ',' ','X',' ',' ','F'], // → bottom edge of 5
      ['F','Y',' ','-',' ','Y','F'], // ↓ left edge of 1
      ['F','●',' ','X',' ','●','F'], // ← top edge of 2
      ['F','F','Y','X','Y','F','F']
    ],
    [
      [' ',' ',' ',' ','F','Y','F'],
      [' ','●',' ','Y','F','●','F'], // FIVE
      [' ',' ','X','X','X','X','F'], // ↑ right edge of 3
      [' ',' ','X','●',' ','X','X'], // → top edge of 1
      [' ','Y','X',' ',' ','Y',' '], // ↓ right edge of 4
      [' ','●','X','W',' ','●','F'], // ← bottom edge of 6
      ['X','X','X','X','X','X','F']
    ],
    [
      ['X','X','X','X','P',' ','F'],
      [' ','●',' ','X','F','●','F'], // SIX
      [' ',' ',' ','X','F','F','F'], // ↑ left edge of 2
      ['F','●',' ','X',' ','●',' '], // → bottom edge of 3
      [' ',' ',' ','X',' ',' ',' '], // ↓ left edge of 5
      [' ','●',' ','X',' ','●',' '], // ← top edge of 4
      ['X','X','|','X',' ',' ',' ']
    ]
  ]
}

export default level