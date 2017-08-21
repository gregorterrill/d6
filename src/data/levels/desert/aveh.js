const level = {
  title: 'The Oasis of Aveh',
  tileset: 'desert',
  entrance: { 'face': 0, 'row': 4, 'col': 3 },
  pickups: [{
    type: 'message',
    location: { 'face': 3, 'row': 3, 'col': 5 },
    content: 'SHEIKHA: Welcome to AVEH! Our SCOUTS told us of a GREAT HERO fighting through the FORCES OF EVIL at our GATES. You have our thanks!'
  },{
    type: 'message',
    location: { 'face': 2, 'row': 1, 'col': 1 },
    content: 'CAPTAIN OF THE GUARD: The great OASIS OF AVEH is just beyond that GATE, but the FORCES OF EVIL block the way! If you can defeat them, this KEY will open the GATE.',
    conditions: [{
      type: 'hasItem',
      value: 'key',
      content: 'CAPTAIN OF THE GUARD: Please help us defeat the FORCES OF EVIL and clear the way to AVEH!',
    },{
      type: 'enemyGroupDefeated',
      value: 'A',
      content: 'CAPTAIN OF THE GUARD: You...defeated the FORCES OF EVIL!? You must be the HERO that was foretold!'
    }]
  },{
    type: 'key',
    location: { 'face': 2, 'row': 1, 'col': 1 },
    container: 'hidden'
  },{
    type: 'key',
    location: { 'face': 4, 'row': 1, 'col': 3 },
    container: 'chest'
  },{
    type: 'sword',
    location: { 'face': 5, 'row': 6, 'col': 6 },
    container: 'stone'
  }],
  enemies: [{
    type: 'skeleton',
    group: 'A',
    location: { 'face':1 , 'row': 3, 'col': 2 },
    direction: 'right'
  },{
    type: 'skeleton',
    group: 'A',
    location: { 'face':1 , 'row': 3, 'col': 3 },
    direction: 'left'
  },{
    type: 'skeleton',
    group: 'A',
    location: { 'face':1 , 'row': 3, 'col': 4 },
    direction: 'right'
  },{
    type: 'skeleton',
    group: 'A',
    location: { 'face':1 , 'row': 3, 'col': 5 },
    direction: 'left'
  },{
    type: 'blue-slime',
    group: 'A',
    location: { 'face':1 , 'row': 4, 'col': 2 },
    direction: 'up'
  },{
    type: 'blue-slime',
    group: 'A',
    location: { 'face':1 , 'row': 4, 'col': 3 },
    direction: 'up'
  },{
    type: 'blue-slime',
    group: 'A',
    location: { 'face':1 , 'row': 4, 'col': 4 },
    direction: 'up'
  },{
    type: 'blue-slime',
    group: 'A',
    location: { 'face':1 , 'row': 4, 'col': 5 },
    direction: 'up'
  },{
    type: 'purple-slime',
    group: 'A',
    location: { 'face':1 , 'row': 5, 'col': 2 },
    direction: 'right'
  },{
    type: 'purple-slime',
    group: 'A',
    location: { 'face':1 , 'row': 5, 'col': 3 },
    direction: 'right'
  },{
    type: 'purple-slime',
    group: 'A',
    location: { 'face':1 , 'row': 5, 'col': 4 },
    direction: 'right'
  },{
    type: 'purple-slime',
    group: 'A',
    location: { 'face':1 , 'row': 5, 'col': 5 },
    direction: 'right'
  },{
    type: 'skeleton',
    location: { 'face':0 , 'row': 1, 'col': 3 },
    direction: 'right'
  },{
    type: 'skeleton',
    location: { 'face':4 , 'row': 2, 'col': 3 },
    direction: 'right'
  },{
    type: 'skeleton',
    location: { 'face':5 , 'row': 3, 'col': 3 },
    direction: 'right'
  },{
    type: 'skeleton-archer',
    location: { 'face':4 , 'row': 4, 'col': 3 },
    direction: 'left'
  },{
    type: 'skeleton-archer',
    location: { 'face':4 , 'row': 4, 'col': 6 },
    direction: 'left'
  }],
  faces: [
    [
      ['A','A','A','A','A','A','A'],
      ['A','A',' ',' ',' ',' ','A'], // ONE
      ['A','Q',' ',' ','Q',' ','A'], // ↑ right edge of 5
      ['A',' ',' ','●',' ',' ','A'], // → top edge of 3
      ['A','A','A',' ',' ','Q','A'], // ↓ right edge of 2
      ['A',' ','Q','A',' ',' ','A'], // ← bottom edge of 4
      ['A',' ','A','A','Q','F','A']
    ],
    [
      ['A','A',' ','Q','A',' ',' '],
      [' ',' ','A',' ','A','●',' '], // TWO
      [' ','Q','A','H','A','A','A'], // ↑ left edge of 4
      [' ','A',' ',' ',' ',' ','A'], // → bottom edge of 1
      [' ','A',' ',' ',' ',' ','A'], // ↓ left edge of 3
      ['A','●',' ',' ',' ',' ','A'], // ← top edge of 6
      [' ',' ',' ',' ',' ',' ','A']
    ],
    [
      ['Y','Y','A','A',' ',' ',' '],
      [' ','W','A','A',' ','●','A'], // THREE
      [' ','A',' ',' ',' ','A','Y'], // ↑ right edge of 1
      [' ','A',' ','●','A','A','Y'], // → top edge of 5
      [' ',' ',' ','A','A','A',' '], // ↓ right edge of 6
      ['A','●','A','A','A','A',' '], // ← bottom edge of 2
      ['A',' ',' ','H',' ',' ','Y']
    ],
    [
      ['A','A','Y','A','Y','A','A'],
      ['F','●',' ','X','Y','●','A'], // FOUR
      ['Y','Y','X','X','X','Y',' '], // ↑ left edge of 6
      ['A','F','X','X','X','W',' '], // → bottom edge of 5
      ['A','X','X','X','Y',' ','Y'], // ↓ left edge of 1
      ['Y','●','X','X',' ','●','A'], // ← top edge of 2
      ['A','A','F','Y','F','A','A']
    ],
    [
      [' ',' ','F','F','Y',' ',' '],
      ['A','●','Y',' ','F','●',' '], // FIVE
      ['Y',' ','Y','Y',' ','F',' '], // ↑ right edge of 3
      ['Y','F','F','●','F','Y',' '], // → top edge of 1
      [' ','Q',' ','Y',' ',' ','Y'], // ↓ right edge of 4
      [' ','●','A','A','A','●','A'], // ← bottom edge of 6
      ['A','A',' ','Q','A','A','A']
    ],
    [
      ['A',' ',' ','A','Q','A',' '],
      ['A','●','Q','A','A','●','A'], // SIX
      ['A','A','A',' ','Y','Q',' '], // ↑ left edge of 2
      ['A','●','Y',' ','A','●','A'], // → bottom edge of 3
      ['A','Q',' ','A','Q','A','A'], // ↓ left edge of 5
      ['A','●','Y','F','Y','●','A'], // ← top edge of 4
      ['Y','F','F','F','A','A','Y']
    ]
  ]
}

export default level