
const level = {
  title: 'The Cliffs of Lothric',
  tileset: 'snow',
  entrance: { 'face': 2, 'row': 2, 'col': 3 },
  pickups: [{
    type: 'message',
    location: { 'face': 0, 'row': 6, 'col': 1 },
    content: 'ICE CLIMBER: You know, the terrain was always challenge enough for me. But now you\'ve got FIREBALLS raining down on you too? I think I need a new hobby.'
  },{
    type: 'key',
    location: { 'face': 2, 'row': 2, 'col': 4 },
    container: 'chest',
  },{
    type: 'key',
    location: { 'face': 4, 'row': 2, 'col': 1 },
    container: 'chest',
  },{
    type: 'key',
    location: { 'face': 4, 'row': 2, 'col': 4 },
    container: 'chest',
  },{
    type: 'key',
    location: { 'face': 0, 'row': 1, 'col': 2 },
    container: 'chest',
  },{
    type: 'key',
    location: { 'face': 5, 'row': 5, 'col': 3 },
    container: 'chest',
  },{
    type: 'key',
    location: { 'face': 3, 'row': 1, 'col': 6 },
    container: 'chest',
  }],
  enemies: [{
    type: 'skeleton-archer',
    location: { 'face': 5, 'row': 4 , 'col': 6 },
    direction: 'left'
  },{
    type: 'skeleton-archer',
    location: { 'face': 5, 'row': 4 , 'col': 0 },
    direction: 'right'
  },{
    type: 'skeleton-archer',
    location: { 'face': 1, 'row': 5 , 'col': 6 },
    direction: 'left'
  },{
    type: 'skeleton-mage',
    location: { 'face': 1, 'row': 0 , 'col': 1 },
    direction: 'right'
  }],
  faces: [
    [
      ['A','A','A','A','C','C','C'],
      [' ',' ',' ','A','A','A',' '], // ONE
      ['C','C','C','C','C','A',' '], // ↑ right edge of 5
      ['F','P','C','●','C','A',' '], // → top edge of 3
      ['C','C','C','F','C','A','C'], // ↓ right edge of 2
      [' ',' ','F','Y',' ','C','C'], // ← bottom edge of 4
      ['A','W',' ',' ','A','A','A']
    ],
    [
      ['A',' ',' ',' ',' ','A','A'],
      [' ',' ',' ',' ',' ','●','A'], // TWO
      ['A','Y','C','Y',' ','Y','A'], // ↑ left edge of 4
      ['C','C','C','C','C','C','C'], // → bottom edge of 1
      ['A','A','C','F','C',' ','A'], // ↓ left edge of 3
      ['A','●','C','C','C',' ',' '], // ← top edge of 6
      ['A','A',' ','A','A',' ',' ']
    ],
    [
      ['A','C','A','H','A',' ','C'],
      ['A',' ','A',' ','A','●','C'], // THREE
      ['A','H','A',' ',' ','A','C'], // ↑ right edge of 1
      ['A',' ','A','●',' ','A',' '], // → top edge of 5
      [' ',' ',' ','A',' ','H',' '], // ↓ right edge of 6
      [' ','●',' ','H',' ','A',' '], // ← bottom edge of 2
      [' ',' ','A','A','P','A','A']
    ],
    [
      ['A',' ','C','C','C','C',' '],
      ['A','●','A',' ','C','●',' '], // FOUR
      [' ','A','F',' ','C','Y','Y'], // ↑ left edge of 6
      [' ','H','Y','Y',' ','Y','A'], // → bottom edge of 5
      [' ','A','F','F','A','A','A'], // ↓ left edge of 1
      ['A','●','F','F','F','●','A'], // ← top edge of 2
      ['A','Y','P','C','P','Y','A']
    ],
    [
      [' ',' ','A','H','A','A','A'],
      [' ','●','A','Y',' ','●','A'], // FIVE
      [' ',' ','A','A',' ','A','Y'], // ↑ right edge of 3
      ['A','A','A','●','A','F','Y'], // → top edge of 1
      [' ',' ','A',' ','A','A','H'], // ↓ right edge of 4
      ['Y','●','A','H','A','●',' '], // ← bottom edge of 6
      ['A','A','A',' ',' ',' ',' ']
    ],
    [
      ['A',' ','A','C','A','A','A'],
      ['A','●','A','C','A','●',' '], // SIX
      ['A','A','A','C','A','A','A'], // ↑ left edge of 2
      ['F','●','C','C','C','●','A'], // → bottom edge of 3
      ['C','C','C',' ','C','C','C'], // ↓ left edge of 5
      ['A','●','C',' ','C','●','A'], // ← top edge of 4
      ['A','A','C','A','A','A','A']
    ]
  ]
}

export default level