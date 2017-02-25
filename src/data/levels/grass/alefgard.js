const level = {
  title: 'The Fields of Alefgard',
  tileset: 'grass',
  entrance: { 'face': 1, 'row': 3, 'col': 3 },
  pickups: [{
    type: 'key',
    location: { 'face': 3, 'row': 4, 'col': 4 },
    container: 'chest',
  },{
    type: 'message',
    location: { 'face': 1, 'row': 4, 'col': 3 },
    content: '<p>SOLDIER: That fool GATEKEEPER lost the KEY to the GATE on a berry-picking trip in the FOREST. Now we can\'t get to the other side of the RIVER!</p>',
    conditions: [{
      type: 'hasItem',
      value: 'key',
      content: '<p>SOLDIER: Hey, you found the KEY! Can you unlock the GATE for us? I\'d do it myself but I can\'t leave my post!</p>',
    },{
      type: 'tileValue',
      location: { 'face': 1, 'row': 3, 'col': 1 },
      value: 'I',
      content: '<p>SOLDIER: Thanks for unlocking the GATE! We owe you one!</p>',
    }]
  },{
    type: 'message',
    location: { 'face': 4, 'row': 5, 'col': 2 },
    content: '<p>SEA CAPTAIN: You can borrow my BOAT, but you\'ve got to tell me how you get your hair like that. Are you using SLIME GOO?</p>'
  },{
    type: 'boat',
    location: { 'face': 4, 'row': 4, 'col': 2 }
  }],
  enemies: [{
    type: 'purple-slime',
    location: { 'face': 0, 'row': 1, 'col': 4 },
    direction: 'right'
  },{
    type: 'purple-slime',
    location: { 'face': 0, 'row': 5, 'col': 2 },
    direction: 'left'
  },{
    type: 'blue-slime',
    location: { 'face': 0, 'row': 5, 'col': 1 },
    direction: 'up'
  },{
    type: 'blue-slime',
    location: { 'face': 0, 'row': 1, 'col': 5 },
    direction: 'down'
  },{
    type: 'purple-slime',
    location: { 'face': 3, 'row': 4, 'col': 3 },
    direction: 'up'
  },{
    type: 'purple-slime',
    location: { 'face': 2, 'row': 2, 'col': 2 },
    direction: 'down'
  },{
    type: 'blue-slime',
    location: { 'face': 2, 'row': 3, 'col': 6 },
    direction: 'right'
  },{
    type: 'blue-slime',
    location: { 'face': 5, 'row': 4, 'col': 4 },
    direction: 'right'
  },{
    type: 'blue-slime',
    location: { 'face': 5, 'row': 6, 'col': 6 },
    direction: 'left'
  }],
  faces: [
    [
      [' ',' ','Y',' ',' ','X','X'],
      ['A',' ',' ',' ','Y',' ','X'], // ONE
      [' ','Y','Y',' ',' ',' ','X'], // ↑ right edge of 5
      ['F',' ',' ','●',' ',' ','X'], // → top edge of 3
      ['F','Y',' ',' ',' ',' ',' '], // ↓ right edge of 2
      ['A','Y',' ',' ',' ',' ','A'], // ← bottom edge of 4
      ['A','A','Y',' ',' ','Y','Y']
    ],
    [
      ['Y','F','Y',' ',' ',' ','A'],
      [' ','Y',' ',' ','Y','●','Y'], // TWO
      [' ',' ',' ','Y',' ','Y','Y'], // ↑ left edge of 4
      ['A','H','A',' ',' ','Y','Y'], // → bottom edge of 1
      [' ','Y','A','W',' ',' ',' '], // ↓ left edge of 3
      ['Y','●','A','A','Y',' ',' '], // ← top edge of 6
      ['A','A','A','A',' ',' ',' ']
    ],
    [
      [' ','A','A','X','F','Y',' '],
      [' ',' ','Y','X','F','●','Y'], // THREE
      ['Y',' ',' ','X','X','F','F'], // ↑ right edge of 1
      ['A','A',' ','▪','X','F','Y'], // → top edge of 5
      ['A','Y','Y','Y','X','X',' '], // ↓ right edge of 6
      ['A','●',' ','Y','X','Y','F'], // ← bottom edge of 2
      ['A','A','X','X','X','Y','Y']
    ],
    [
      [' ','F','F',' ','X',' ','Y'],
      ['F','●','F','F','X','●',' '], // FOUR
      ['F','Y','Y','Y','X','Y',' '], // ↑ left edge of 6
      ['Y','F','F','Y','X','X','Y'], // → bottom edge of 5
      [' ','F','Y','Y',' ','X','X'], // ↓ left edge of 1
      ['Y','●','Y',' ','F','●',' '], // ← top edge of 2
      ['A','F','F','Y','Y','F','Y']
    ],
    [
      ['Y','F','F','Y','F','F','F'],
      ['Y','●','F','Y','Y','●','X'], // FIVE
      [' ','Y','F',' ','Y','X','X'], // ↑ right edge of 3
      ['Y','F','F','▪','X','X',' '], // → top edge of 1
      ['Y','F','X','X','X','Y','F'], // ↓ right edge of 4
      ['Y','●','W','X','X','●','Y'], // ← bottom edge of 6
      [' ',' ',' ',' ','X',' ',' ']
    ],
    [
      [' ','Y',' ','A','Y',' ','Y'],
      ['Y','●','Y','A',' ','●','A'], // SIX
      ['F','F','Y','X','|','X','X'], // ↑ left edge of 2
      ['F','▪','X','X','|','▪','X'], // → bottom edge of 3
      ['X','X','X','X',' ',' ','Y'], // ↓ left edge of 5
      [' ','●','F','F','Y','●',' '], // ← top edge of 4
      [' ','Y','Y','Y',' ',' ',' ']
    ]
  ]
}

export default level