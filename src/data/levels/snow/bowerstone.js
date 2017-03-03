
const level = {
  title: 'The Outskirts of Bowerstone',
  tileset: 'snow',
  entrance: { 'face': 1, 'row': 4, 'col': 3 },
  pickups: [{
    type: 'message',
    location: { 'face': 2, 'row': 0, 'col': 2 },
    content: 'DISTRAUGHT BOY: We m-m-made a sledding track outside of TOWN b-but those s-s-spooky SKELETONS came and ch-chased us away.'
  },{
    type: 'message',
    location: { 'face': 0, 'row': 5, 'col': 5 },
    content: 'RANGER: I\'ll let you in on a little secret: taking out ARCHERS is all about STEALTH. You\'ve got to distract them, and then strike from behind or above.'
  },{
    type: 'sword',
    location: { 'face': 5, 'row': 4, 'col': 3 },
    container: 'stone'
  }],
  enemies: [{
    type: 'skeleton',
    location: { 'face': 2, 'row': 2 , 'col': 1 },
    direction: 'right'
  },{
    type: 'skeleton',
    location: { 'face': 0, 'row': 1 , 'col': 1 },
    direction: 'right'
  },{
    type: 'skeleton-archer',
    location: { 'face': 2, 'row': 4 , 'col': 1 },
    direction: 'right'
  },{
    type: 'skeleton-archer',
    location: { 'face': 4, 'row': 2 , 'col': 5 },
    direction: 'left'
  },{
    type: 'skeleton-archer',
    location: { 'face': 0, 'row': 1 , 'col': 2 },
    direction: 'right'
  },{
    type: 'skeleton-archer',
    location: { 'face': 0, 'row': 0 , 'col': 1 },
    direction: 'right'
  },{
    type: 'skeleton-archer',
    location: { 'face': 1, 'row': 0 , 'col': 1 },
    direction: 'right'
  }],
  faces: [
    [
      [' ',' ',' ','C',' ',' ','Y'],
      [' ',' ',' ','C',' ','Y',' '], // ONE
      [' ',' ','A','C','A','A','Y'], // ↑ right edge of 5
      [' ','F','A','●','A','A','I'], // → top edge of 3
      ['F','A','A','A','A','A',' '], // ↓ right edge of 2
      ['Y','Y',' ','A','A','W',' '], // ← bottom edge of 4
      ['F','A','Y',' ','A',' ','Y']
    ],
    [
      ['Y',' ','C','A','Y','Y','A'],
      ['F','Y','C','A',' ','●','A'], // TWO
      ['C','C','C','A',' ','A','Y'], // ↑ left edge of 4
      ['A','A','A','A','Y',' ',' '], // → bottom edge of 1
      [' ','Y','A','Y','A','A','A'], // ↓ left edge of 3
      [' ','●','A','Y','Y','F','Y'], // ← top edge of 6
      ['Y',' ','Y','A',' ','Y',' ']
    ],
    [
      [' ',' ','W','A','C','F','Y'],
      [' ','Y','A','A','C','●','Y'], // THREE
      [' ','A','C','C','C','C','C'], // ↑ right edge of 1
      ['I','A','C','●',' ','F','Y'], // → top edge of 5
      [' ',' ','C',' ',' ','F','Y'], // ↓ right edge of 6
      [' ','●','C','A','Y','F','Y'], // ← bottom edge of 2
      [' ',' ','C',' ',' ','F',' ']
    ],
    [
      ['F','Y','F','C','A','A','A'],
      ['F','●','F','C','A','●',' '], // FOUR
      ['C','C','C','C','A','A',' '], // ↑ left edge of 6
      ['A','A','C','A','A','Y','Y'], // → bottom edge of 5
      ['F','A','C','A','A','F','F'], // ↓ left edge of 1
      ['F','●','C','A',' ','●','F'], // ← top edge of 2
      ['F','Y',' ',' ','C','C','Y']
    ],
    [
      ['F','F',' ','Y','C',' ',' '],
      ['F','●','Y','F','C','●',' '], // FIVE
      ['Y','A',' ',' ','C',' ',' '], // ↑ right edge of 3
      ['Y','A','Y','●','C','C','C'], // → top edge of 1
      [' ','A','Y',' ','F','Y',' '], // ↓ right edge of 4
      [' ','●','A','Y','F','●',' '], // ← bottom edge of 6
      ['Y',' ','A',' ','F','Y',' ']
    ],
    [
      ['Y','F','C','A','Y','Y',' '],
      ['Y','●','C','A','A','●',' '], // SIX
      [' ','A','C','C','C','C','C'], // ↑ left edge of 2
      ['C','●','A','A','A','●',' '], // → bottom edge of 3
      ['A','A','A',' ','Y','F',' '], // ↓ left edge of 5
      [' ','●','F','Y','F','●','F'], // ← top edge of 4
      ['Y','F','F','Y','F','Y','Y']
    ]
  ]
}

export default level