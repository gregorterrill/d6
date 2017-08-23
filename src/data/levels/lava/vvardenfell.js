const level = {
  title: 'The Ashlands of Vvardenfell',
  tileset: 'lava',
  entrance: { 'face': 5, 'row': 3, 'col': 3 },
  pickups: [{
    type: 'message',
    content: 'TRIBESMAN: This area is treacherous, and you\'re sure to take some falls. The SHAMAN in the VILLAGE nearby can HEAL your wounds, and he\'s left some POTIONS in CHESTS to help travellers that get stuck.',
    location: { 'face': 5, 'row': 3, 'col': 2 },
  },{
    type: 'message',
    behavior: 'inn',
    content: 'SHAMAN: It\'s dangerous outside of the VILLAGE. Stay close, and come back to HEAL when you\'re hurt.',
    location: { 'face': 4, 'row': 1, 'col': 2 },
  },{
    type: 'message',
    content: 'MINER: The ORE that the ANCIENTS mined to build the PIPS you\'ve been lighting come from these ROCK FORMATIONS.',
    location: { 'face': 3, 'row': 4, 'col': 3 },
  },{
    type: 'key',
    container: 'chest',
    location: { 'face': 1, 'row': 6, 'col': 6 },
  },{
    type: 'potion',
    container: 'chest',
    location: { 'face': 5, 'row': 2, 'col': 0 },
  },{
    type: 'potion',
    container: 'chest',
    location: { 'face': 1, 'row': 4, 'col': 0 },
  },{
    type: 'potion',
    container: 'chest',
    location: { 'face': 0, 'row': 6, 'col': 0 },
  },{
    type: 'potion',
    container: 'chest',
    location: { 'face': 3, 'row': 0, 'col': 5 },
  },{
    type: 'potion',
    container: 'chest',
    location: { 'face': 5, 'row': 2, 'col': 5 },
  },{
    type: 'boat',
    location: { 'face': 4, 'row': 2, 'col': 2 },
  }],
  enemies: [{
    type: 'sea-serpent',
    location: { 'face': 4, 'row': 3, 'col': 4 },
    direction: 'right'
  },{
    type: 'sea-serpent',
    location: { 'face': 1, 'row': 3, 'col': 1 },
    direction: 'left'
  },{
    type: 'purple-slime',
    location: { 'face': 3, 'row': 2, 'col': 1 },
    direction: 'right'
  },{
    type: 'purple-slime',
    location: { 'face': 1, 'row': 5, 'col': 3 },
    direction: 'down'
  },{
    type: 'purple-slime',
    location: { 'face': 2, 'row': 0, 'col': 3 },
    direction: 'right'
  }],
  faces: [
    [
      ['Y',' ','A','H','F','A','A'],
      [' ',' ','A','P','A','X','X'], // ONE
      ['F','P','A','P','F','X','X'], // ↑ right edge of 5
      ['H','P','P','●','P','P','H'], // → top edge of 3
      ['A','A','F','P','A','F','A'], // ↓ right edge of 2
      ['Y','A','P','P','F','A','A'], // ← bottom edge of 4
      [' ',' ','A','H','A','A','A']
    ],
    [
      ['P',' ',' ','F','A',' ','Y'],
      [' ',' ','Y',' ','A','●',' '], // TWO
      ['Y','X','X','Y','F','A','Y'], // ↑ left edge of 4
      ['X','X','X',' ',' ',' ',' '], // → bottom edge of 1
      [' ','X','X','X','Y','A','A'], // ↓ left edge of 3
      ['Y','●','Y',' ',' ','D','P'], // ← top edge of 6
      [' ','Y',' ','Y','A','F',' ']
    ],
    [
      [' ',' ',' ',' ','-','-',' '],
      ['A','P','A','A','X','▪','A'], // THREE
      ['A','P','F','A',' ','X','A'], // ↑ right edge of 1
      ['Y',' ','Y','●','A','X','X'], // → top edge of 5
      ['A','A',' ','A','P',' ','P'], // ↓ right edge of 6
      ['A','●',' ','A','Y','D','P'], // ← bottom edge of 2
      ['A','A','P','P',' ','P','A']
    ],
    [
      ['P',' ','P',' ','Y',' ','P'],
      [' ','●','P','P',' ','●',' '], // FOUR
      [' ','Y',' ',' ','P',' ',' '], // ↑ left edge of 6
      ['A',' ','P','Y',' ',' ','P'], // → bottom edge of 5
      ['F','A','A','W',' ','Y',' '], // ↓ left edge of 1
      [' ','●','A','F',' ','●',' '], // ← top edge of 2
      [' ',' ','P','P','Y',' ','Y']
    ],
    [
      ['P',' ',' ','X','A',' ',' '],
      [' ','●','W','X','Y','●',' '], // FIVE
      [' ',' ','X','X','X',' ',' '], // ↑ right edge of 3
      ['Y',' ','X','▪','X','X',' '], // → top edge of 1
      [' ',' ','Y','X','Y',' ',' '], // ↓ right edge of 4
      [' ','●',' ',' ',' ','●','A'], // ← bottom edge of 6
      ['P',' ','Y','F','F',' ',' ']
    ],
    [
      ['P','P','P','P','P','P','P'],
      ['P','●',' ','D',' ','●','P'], // SIX
      [' ','P',' ','P','P',' ',' '], // ↑ left edge of 2
      ['P','●','W',' ','P','●','P'], // → bottom edge of 3
      [' ','P','P','P','P',' ',' '], // ↓ left edge of 5
      ['P','●',' ','D','P','●','P'], // ← top edge of 4
      ['P','P','Y',' ',' ','P','P']
    ]
  ]
}

export default level