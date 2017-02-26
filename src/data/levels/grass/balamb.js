const level = {
  title: 'The Gardens of Balamb',
  tileset: 'grass',
  entrance: { 'face': 3, 'row': 4, 'col': 3 },
  pickups: [{
    type: 'message',
    location: { 'face': 4, 'row': 5, 'col': 3 },
    content: 'GROUNDSKEEPER: These gardens have been here for a MILLENIUM, which is great for tourism. Some of the original inhabitants are still here today, which is decidedly less great.'
  },{
    type: 'boat',
    location: { 'face': 4, 'row': 6, 'col': 3 },
  },{
    type: 'key',
    location: { 'face': 0, 'row': 2, 'col': 3 },
    container: 'chest'
  },{
    type: 'sword',
    location: { 'face': 2, 'row': 5, 'col': 5 },
    container: 'stone'
  }],
  enemies: [{
    type: 'sea-serpent',
    location: { 'face': 0, 'row': 1, 'col': 1 },
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
    location: { 'face': 1, 'row': 2, 'col': 2 },
    direction: 'down'
  },{
    type: 'skeleton-archer',
    location: { 'face': 4, 'row': 4, 'col': 0 },
    direction: 'right'
  },{
    type: 'skeleton-archer',
    location: { 'face': 5, 'row': 2, 'col': 2 },
    direction: 'left'
  },{
    type: 'skeleton-archer',
    location: { 'face': 5, 'row': 4, 'col': 2 },
    direction: 'left'
  },{
    type: 'skeleton',
    location: { 'face': 5, 'row': 3, 'col': 2 },
    direction: 'left'
  }],
  faces: [
    [
      ['Y','Y','Y','X','Y','Y','Y'],
      ['Y','X','X','X','V','X',' '], // ONE
      ['Y','X','Y',' ','Y','X','Y'], // ↑ right edge of 5
      ['X','X','Y','●','Y','X','X'], // → top edge of 3
      ['Y','V','Y','Y','Y','X','Y'], // ↓ right edge of 2
      ['Y','V','X','|','X','X','Y'], // ← bottom edge of 4
      ['Y','Y','X','|','X','Y','Y']
    ],
    [
      ['X','X','X',' ',' ',' ','Y'],
      ['X','X','X','X','X','▪','X'], // TWO
      ['X','Y','Y','-','Y','Y','X'], // ↑ left edge of 4
      ['X','Y','F','X','F','Y','-'], // → bottom edge of 1
      ['X','Y','Y','-',' ','F','X'], // ↓ left edge of 3
      ['X','▪','X','X','Y','Y','X'], // ← top edge of 6
      ['X','X','X','X','X','|','X']
    ],
    [
      ['X','V','V','X','Y','F','F'],
      ['-',' ','V','X','Y','●','F'], // THREE
      ['X','Y','X','X','X','X',' '], // ↑ right edge of 1
      ['Y','Y','X','▪','X','F','F'], // → top edge of 5
      ['Y',' ','X','X','X','F','F'], // ↓ right edge of 6
      ['Y','●','V','V','Y',' ','F'], // ← bottom edge of 2
      ['X','X','V','Y',' ','Y','Y']
    ],
    [
      ['X','Y',' ','F',' ','Y','X'],
      ['X','●',' ','F',' ','●','X'], // FOUR
      ['X','X','|','X','|','X','X'], // ↑ left edge of 6
      ['Y',' ',' ','X',' ',' ','F'], // → bottom edge of 5
      ['F',' ',' ','-',' ','Y','F'], // ↓ left edge of 1
      ['F','●',' ','X',' ','●','F'], // ← top edge of 2
      ['F','F','Y','X','Y','F','F']
    ],
    [
      ['F','F','F','F','Y','Y','F'],
      ['F','●','Y','Y','F','●','F'], // FIVE
      ['F','Y','X','X','X','X','F'], // ↑ right edge of 3
      ['F','Y','X','●',' ','X','X'], // → top edge of 1
      [' ',' ','X',' ',' ','Y',' '], // ↓ right edge of 4
      ['Y','●','X','W',' ','●','F'], // ← bottom edge of 6
      ['X','X','X','X','X','X','F']
    ],
    [
      ['X','X','X','X','P',' ','F'],
      ['Y','●',' ','X','F','●','F'], // SIX
      [' ',' ','Y','X','F','F','F'], // ↑ left edge of 2
      ['F','●','Y','X','Y','●',' '], // → bottom edge of 3
      [' ',' ','Y','X','F','F','F'], // ↓ left edge of 5
      ['Y','●','Y','X',' ','●','A'], // ← top edge of 4
      ['X','X','|','X','Y','Y','H']
    ]
  ]
}

export default level