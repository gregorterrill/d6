
const level = {
  title: 'The Mountains of Nibelheim',
  tileset: 'grass',
  entrance: { 'face': 2, 'row': 4, 'col': 3 },
  pickups: [{
    type: 'message',
    location: { 'face': 2, 'row': 1, 'col': 1 },
    content: 'MAYOR: Something\'s gone wrong up in the MOUNTAINS. If you\'re willing to investigate, I can give you the KEY to the MOUNTAIN PASS, but I\'m not sending you up there UNARMED.',
    conditions: [{
      type: 'hasItem',
      value: 'sword',
      content: 'MAYOR: Alright, looks like you\'ve got yourself a WEAPON. Be careful up there! Come back and see me if you run into any TROUBLE!',
    },{
      type: 'tileValue',
      location: { 'face': 2, 'row': 1, 'col': 3 },
      value: 'I',
      content: 'MAYOR: OH MY GOD LOOK AT ALL THOSE SKELETONS! THIS WAS A TERRIBLE IDEA! YOU HAVE TO GET RID OF THEM!',
    },{
      type: 'enemyGroupDefeated',
      value: 'A',
      content: 'MAYOR: Thanks for taking care of all those SKELETONS. Earlier I forgot to mention there\'s an INNER GATE at the far side of the MOUNTAIN PASS. Here\'s the key to that one.',
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
    type: 'key',
    location: { 'face': 2, 'row': 1, 'col': 1 },
    container: 'hidden',
    conditions: [{
      type: 'enemyGroupDefeated',
      value: 'A',
    }]
  },{
    type: 'sword',
    location: { 'face': 5, 'row': 1, 'col': 3 },
    container: 'stone',
  },{
    type: 'potion',
    location: { 'face': 0, 'row': 3, 'col': 1 },
    container: 'chest',
  },{
    type: 'key',
    location: { 'face': 3, 'row': 1, 'col': 3 },
    container: 'chest',
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
    group: 'A',
    location: { 'face': 0, 'row': 1 , 'col': 4 },
    direction: 'down'
  },{
    type: 'skeleton',
    group: 'A',
    location: { 'face': 0, 'row': 1 , 'col': 5 },
    direction: 'down'
  },{
    type: 'skeleton',
    group: 'A',
    location: { 'face': 0, 'row': 2 , 'col': 5 },
    direction: 'down'
  },{
    type: 'skeleton',
    group: 'A',
    location: { 'face': 0, 'row': 3 , 'col': 5 },
    direction: 'down'
  },{
    type: 'skeleton-archer',
    location: { 'face': 0, 'row': 5 , 'col': 5 },
    direction: 'left'
  },{
    type: 'skeleton-mage',
    location: { 'face': 3, 'row': 3 , 'col': 1 },
    direction: 'left'
  },{
    type: 'skeleton-archer',
    location: { 'face': 4, 'row': 6 , 'col': 0 },
    direction: 'right'
  },{
    type: 'skeleton-archer',
    location: { 'face': 4, 'row': 4 , 'col': 6 },
    direction: 'left'
  },{
    type: 'skeleton-archer',
    location: { 'face': 4, 'row': 2 , 'col': 6 },
    direction: 'left'
  },{
    type: 'purple-slime',
    location: { 'face': 5, 'row': 3 , 'col': 2 },
    direction: 'right'
  },{
    type: 'blue-slime',
    location: { 'face': 5, 'row': 1 , 'col': 0 },
    direction: 'down'
  }],
  faces: [
    [
      ['A','A','A','A','A','A','A'],
      ['A','F','Y','H',' ',' ','A'], // ONE
      ['A','Y',' ','A','A',' ','A'], // ↑ right edge of 5
      ['A',' ','Y','●','A',' ',' '], // → top edge of 3
      ['A','A','Y','Y','A','A','A'], // ↓ right edge of 2
      [' ',' ',' ',' ',' ',' ','A'], // ← bottom edge of 4
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
      ['A','A','A','A','A','A','A'],
      ['A','●','A',' ','A','●','A'], // FOUR
      ['A','H','A',' ','A',' ','Y'], // ↑ left edge of 6
      ['A',' ',' ',' ',' ',' ','A'], // → bottom edge of 5
      ['A','V','X','X','X','V','A'], // ↓ left edge of 1
      ['A','▪','V','V','V','▪','Y'], // ← top edge of 2
      ['Y','Y',' ',' ',' ','Y','Y']
    ],
    [
      ['A','A','A','A','A','A','A'],
      ['P','●','A',' ','P','●','A'], // FIVE
      [' ',' ',' ',' ',' ',' ',' '], // ↑ right edge of 3
      ['Y','A',' ','●','P','P','A'], // → top edge of 1
      ['Y','A',' ',' ',' ',' ',' '], // ↓ right edge of 4
      ['A','●','A','Y','Y','●','A'], // ← bottom edge of 6
      [' ',' ',' ',' ',' ','Y','A']
    ],
    [
      ['A','A','A','Y','A','F','F'],
      ['F','●','A',' ','A','●','Y'], // SIX
      [' ',' ','Y','A','A','F','F'], // ↑ left edge of 2
      [' ','●','Y','Y','Y','●','F'], // → bottom edge of 3
      ['Y','A','A','A','A','A','A'], // ↓ left edge of 5
      ['Y','●','A','A','A','●','A'], // ← top edge of 4
      ['Y','Y','Y','A',' ',' ','A']
    ]
  ]
}

export default level