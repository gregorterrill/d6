
const level = {
  title: 'The Abyss of Tristram',
  tileset: 'lava',
  entrance: { 'face': 0, 'row': 2, 'col': 3 },
  pickups: [{
    type: 'message',
    behavior: 'inn',
    content: 'SHAMAN: I can HEAL you if you get hurt, but be warned, the touch of the WRAITH is lethal.',
    location: { 'face': 0, 'row': 3, 'col': 2 },
  },{
    type: 'message',
    content: 'SORCEROR: The WRAITH and its MINIONS cannot pass over our SEAL, so we are safe here...for now.',
    location: { 'face': 0, 'row': 3, 'col': 4 },
  },{
    type: 'message',
    content: 'ELDER: The WRAITH OF TRISTRAM draws its power from the DARKNESS. The PIPS you\'ve been lighting throughout the WORLDS have weakened him, and these last PIPS are all that remain. You must LIGHT them, and free us from the WRAITH forever!',
    location: { 'face': 0, 'row': 4, 'col': 3 },
  }],
  enemies: [{
    type: 'wraith',
    location: { 'face': 4, 'row': 3, 'col': 4 },
    direction: 'down',
    status: 'active'
  },{
    type: 'skeleton',
    location: { 'face': 3, 'row': 2, 'col': 2 },
    direction: 'left',
    status: 'active'
  },{
    type: 'skeleton',
    location: { 'face': 3, 'row': 2, 'col': 4 },
    direction: 'up',
    status: 'active'
  },{
    type: 'skeleton',
    location: { 'face': 2, 'row': 4, 'col': 3},
    direction: 'left',
    status: 'active'
  },{
    type: 'skeleton',
    location: { 'face': 1, 'row': 2, 'col': 6},
    direction: 'left',
    status: 'active'
  },{
    type: 'skeleton',
    location: { 'face': 1, 'row': 4, 'col': 6},
    direction: 'left',
    status: 'active'
  },{
    type: 'skeleton',
    location: { 'face': 4, 'row': 2, 'col': 3},
    direction: 'up',
    status: 'active'
  }],
  faces: [
    [
      ['V','V','V','S','V','V','V'],
      ['V','X','V',' ','V','X','V'], // ONE
      ['V','X','Y',' ',' ','X','V'], // ↑ right edge of 5
      ['V','X','W','●','W','X','V'], // → top edge of 3
      ['V','X',' ','W',' ','X','V'], // ↓ right edge of 2
      ['V','X','X','X','X','X','V'], // ← bottom edge of 4
      ['V','V','V','V','V','V','V']
    ],
    [
      [' ',' ',' ',' ',' ','Y',' '],
      ['F','D','A','D','A','●','A'], // TWO
      [' ',' ',' ',' ',' ',' ',' '], // ↑ left edge of 4
      ['A','D','A','D','A','D','A'], // → bottom edge of 1
      [' ',' ','Y',' ',' ',' ',' '], // ↓ left edge of 3
      ['A','●','A','D','F','D','A'], // ← top edge of 6
      [' ',' ',' ',' ',' ',' ',' ']
    ],
    [
      [' ',' ',' ','F','A','A','F'],
      ['F','D',' ','D',' ','●',' '], // THREE
      ['A',' ',' ',' ',' ','Y',' '], // ↑ right edge of 1
      ['A','D',' ','●',' ','D','A'], // → top edge of 5
      ['A',' ',' ',' ','Y',' ',' '], // ↓ right edge of 6
      ['A','●',' ','D',' ','D',' '], // ← bottom edge of 2
      ['A','A',' ','A',' ',' ',' ']
    ],
    [
      [' ',' ',' ','A',' ',' ',' '],
      [' ','●','Y','D',' ','●',' '], // FOUR
      [' ',' ',' ','A',' ',' ',' '], // ↑ left edge of 6
      ['A','D','F','D','A','D','A'], // → bottom edge of 5
      [' ',' ',' ','A',' ',' ',' '], // ↓ left edge of 1
      [' ','●',' ','D',' ','●',' '], // ← top edge of 2
      [' ',' ',' ','A',' ',' ',' ']
    ],
    [
      [' ',' ',' ','A',' ','Y',' '],
      [' ','●',' ','D',' ','●',' '], // FIVE
      [' ','A','Y',' ',' ','A',' '], // ↑ right edge of 3
      ['A','D',' ','●',' ','D',' '], // → top edge of 1
      [' ','A',' ','F',' ','A',' '], // ↓ right edge of 4
      [' ','●',' ','D',' ','●',' '], // ← bottom edge of 6
      [' ','Y',' ','A','Y',' ',' ']
    ],
    [
      [' ','A',' ','A',' ','A',' '],
      [' ','●','Y','D',' ','●','Y'], // SIX
      [' ',' ',' ',' ',' ',' ',' '], // ↑ left edge of 2
      ['A','●',' ','D',' ','●','A'], // → bottom edge of 3
      [' ','A',' ',' ','Y','F',' '], // ↓ left edge of 5
      [' ','●',' ','D',' ','●',' '], // ← top edge of 4
      ['Y',' ',' ','A',' ',' ',' ']
    ]
  ]
}

export default level