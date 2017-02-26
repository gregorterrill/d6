
const level = {
  title: 'The Mountains of Nibelheim (WIP)',
  tileset: 'grass',
  entrance: { 'face': 2, 'row': 4, 'col': 3 },
  pickups: [{
    type: 'message',
    location: { 'face': 2, 'row': 1, 'col': 1 },
    content: 'MAYOR: Something\'s gone wrong up in the MOUNTAINS. If you\'re willing to investigate, I can give you the KEY to the MOUNTAIN PASS, but I\'m not sending you up there unarmed.',
    conditions: [{
      type: 'hasItem',
      value: 'sword',
      content: 'MAYOR: Alright, looks like you\'re ready. Be careful up there!',
    }]
  },{
    type: 'key',
    location: { 'face': 2, 'row': 1, 'col': 1 },
    container: 'hidden',
    conditions: [{
      type: 'hasItem',
      value: 'sword',
    }]
  },{
    type: 'sword',
    location: { 'face': 5, 'row': 1, 'col': 3 },
    container: 'stone',
  }],
  enemies: [{
    type: 'blue-slime',
    location: { 'face': 1, 'row': 2 , 'col': 3 },
    direction: 'down'
  },{
    type: 'blue-slime',
    location: { 'face': 1, 'row': 4 , 'col': 4 },
    direction: 'down'
  },{
    type: 'purple-slime',
    location: { 'face': 1, 'row': 4 , 'col': 5 },
    direction: 'right'
  },{
    type: 'purple-slime',
    location: { 'face': 1, 'row': 1 , 'col': 1 },
    direction: 'right'
  },{
    type: 'purple-slime',
    location: { 'face': 5, 'row': 1 , 'col': 6 },
    direction: 'right'
  },{
    type: 'purple-slime',
    location: { 'face': 2, 'row': 2 , 'col': 5 },
    direction: 'down'
  },{
    type: 'skeleton',
    location: { 'face': 0, 'row': 1 , 'col': 1 },
    direction: 'down'
  },{
    type: 'skeleton',
    location: { 'face': 0, 'row': 1 , 'col': 5 },
    direction: 'up'
  },{
    type: 'skeleton',
    location: { 'face': 0, 'row': 5 , 'col': 1 },
    direction: 'down'
  },{
    type: 'skeleton',
    location: { 'face': 0, 'row': 5 , 'col': 5 },
    direction: 'up'
  },{
    type: 'skeleton',
    location: { 'face': 0, 'row': 3 , 'col': 1 },
    direction: 'down'
  },{
    type: 'skeleton',
    location: { 'face': 0, 'row': 3 , 'col': 5 },
    direction: 'up'
  }],
  faces: [
    [
      ['A','A','A','A','A','A','A'],
      ['A',' ',' ','A',' ',' ','A'], // ONE
      ['A','A',' ',' ',' ','A','A'], // ↑ right edge of 5
      ['A',' ',' ','●',' ',' ',' '], // → top edge of 3
      ['A','A',' ',' ',' ','A','A'], // ↓ right edge of 2
      ['A',' ',' ','A',' ',' ','A'], // ← bottom edge of 4
      ['A','A','A','A','A','A','A']
    ],
    [
      ['F','F','F','F','F','F','A'],
      ['F','Y','Y',' ',' ','●','A'], // TWO
      ['F',' ','F','Y',' ','A','A'], // ↑ left edge of 4
      ['Y','Y','F','Y','A','A','A'], // → bottom edge of 1
      ['F','Y','F','Y',' ',' ','A'], // ↓ left edge of 3
      ['F','●','F',' ',' ','Y','A'], // ← top edge of 6
      ['F','F','F',' ','Y','A','A']
    ],
    [
      ['A','A','A',' ','A','A','F'],
      ['A','W','A','H','A','●','F'], // THREE
      ['Y',' ',' ',' ',' ',' ','F'], // ↑ right edge of 1
      [' ','Y',' ','●',' ','Y','F'], // → top edge of 5
      ['F','F','Y',' ','Y','F','F'], // ↓ right edge of 6
      ['F','●','F','Y','F','F','F'], // ← bottom edge of 2
      ['F','Y','Y','Y','F','A','A']
    ],
    [
      ['A',' ','A',' ','A','A','A'],
      ['A','●','A',' ','A','●','A'], // FOUR
      ['A','A','Y',' ',' ',' ',' '], // ↑ left edge of 6
      ['A','A',' ',' ',' ','A','A'], // → bottom edge of 5
      ['A',' ',' ',' ',' ',' ','A'], // ↓ left edge of 1
      ['A','●',' ',' ',' ','●','A'], // ← top edge of 2
      ['A',' ',' ',' ',' ',' ','A']
    ],
    [
      ['A','A','A','A','A','A','A'],
      [' ','●',' ',' ',' ','●',' '], // FIVE
      [' ','A',' ','A',' ','A',' '], // ↑ right edge of 3
      [' ','A',' ','●',' ','A',' '], // → top edge of 1
      [' ',' ',' ','A',' ','A',' '], // ↓ right edge of 4
      ['A','●','A','A',' ','●',' '], // ← bottom edge of 6
      [' ',' ',' ','A',' ',' ',' ']
    ],
    [
      ['A','A','A','Y','A','F','F'],
      [' ','●','A',' ','A','●','Y'], // SIX
      [' ',' ','Y','A','A','F','F'], // ↑ left edge of 2
      [' ','●','Y','Y','Y','●','F'], // → bottom edge of 3
      ['Y','A','A','A','A','A','A'], // ↓ left edge of 5
      ['A','●','A',' ','A','●','A'], // ← top edge of 4
      [' ',' ','A','Y','A',' ','A']
    ]
  ]
}

export default level