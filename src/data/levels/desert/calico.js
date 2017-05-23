
const level = {
  title: 'The Desert of Calico (WIP)',
  tileset: 'desert',
  entrance: { 'face': 1, 'row': 3, 'col': 3 },
  pickups: [{
    type: 'message',
    location: { 'face': 1, 'row': 4, 'col': 1 },
    content: 'GAMBLER: I try not to wander out in the DESERT when I\'m drinking. One time, I fell into some QUICKSAND and I swear, it sucked me straight through the CENTER OF THE WORLD and spat me out the other side.'
  }],
  enemies: [{
    type: 'blue-slime',
    location: { 'face': 4, 'row': 4, 'col': 2 },
    direction: 'left'
  },{
    type: 'blue-slime',
    location: { 'face': 4, 'row': 4, 'col': 4 },
    direction: 'right'
  },{
    type: 'purple-slime',
    location: { 'face': 4, 'row': 2, 'col': 2 },
    direction: 'up'
  },{
    type: 'purple-slime',
    location: { 'face': 4, 'row': 2, 'col': 4 },
    direction: 'up'
  },{
    type: 'purple-slime',
    location: { 'face': 3, 'row': 2, 'col': 5 },
    direction: 'right'
  },{
    type: 'purple-slime',
    location: { 'face': 3, 'row': 4, 'col': 5 },
    direction: 'right'
  },{
    type: 'purple-slime',
    location: { 'face': 3, 'row': 2, 'col': 2 },
    direction: 'right'
  },{
    type: 'purple-slime',
    location: { 'face': 3, 'row': 4, 'col': 2 },
    direction: 'right'
  },{
    type: 'skeleton-archer',
    location: { 'face': 3, 'row': 3, 'col': 1 },
    direction: 'right'
  }],
  faces: [
    [
      [' ',' ',' ',' ',' ',' ',' '],
      [' ',' ','Q',' ',' ',' ',' '], // ONE
      [' ',' ',' ',' ',' ',' ',' '], // ↑ right edge of 5
      [' ',' ',' ','●',' ',' ',' '], // → top edge of 3
      [' ',' ',' ',' ',' ',' ','A'], // ↓ right edge of 2
      ['Y',' ','Y',' ','Q',' ',' '], // ← bottom edge of 4
      ['A','A',' ',' ','A','Y','A']
    ],
    [
      ['X','X','A','A','A','A','A'],
      ['X','X','Y','Q','A','●','A'], // TWO
      ['A','X','Y',' ','F','Y','A'], // ↑ left edge of 4
      ['A','A',' ','Y',' ',' ','A'], // → bottom edge of 1
      ['A','W',' ',' ','Y',' ','A'], // ↓ left edge of 3
      ['A','●','Y',' ',' ','A','A'], // ← top edge of 6
      ['A','A','A','A','A','A','A']
    ],
    [
      ['A',' ','A',' ',' ',' ',' '],
      [' ',' ','A','Y',' ','●',' '], // THREE
      ['Q','A',' ',' ',' ',' ',' '], // ↑ right edge of 1
      ['A','Y',' ','●',' ',' ',' '], // → top edge of 5
      [' ',' ',' ',' ',' ',' ',' '], // ↓ right edge of 6
      [' ','●',' ',' ',' ',' ',' '], // ← bottom edge of 2
      [' ',' ',' ',' ',' ',' ',' ']
    ],
    [
      ['X',' ','F','Y',' ','A',' '],
      ['X','●','F',' ','A','●','A'], // FOUR
      ['A','A','Y',' ',' ','Y',' '], // ↑ left edge of 6
      ['A',' ',' ',' ',' ',' ',' '], // → bottom edge of 5
      ['Q','A','Y',' ','Y',' ','Y'], // ↓ left edge of 1
      [' ','●','A','Y','A','●','A'], // ← top edge of 2
      ['A','F','F',' ',' ','A',' ']
    ],
    [
      [' ',' ','A',' ','A',' ',' '],
      [' ','●',' ',' ',' ','●',' '], // FIVE
      [' ',' ',' ',' ',' ',' ',' '], // ↑ right edge of 3
      [' ',' ',' ','●',' ',' ',' '], // → top edge of 1
      ['A',' ',' ',' ',' ',' ','A'], // ↓ right edge of 4
      [' ','●',' ','Q',' ','●',' '], // ← bottom edge of 6
      [' ',' ',' ',' ',' ',' ',' ']
    ],
    [
      ['X','A','A','A',' ','Y','A'],
      [' ','●','A','Y','Q','●','A'], // SIX
      [' ',' ','H',' ',' ','A','Y'], // ↑ left edge of 2
      ['F','●','A','A','A','●',' '], // → bottom edge of 3
      [' ','F',' ',' ',' ',' ',' '], // ↓ left edge of 5
      [' ','●','Q',' ',' ','●',' '], // ← top edge of 4
      [' ',' ',' ',' ',' ',' ',' ']
    ]
  ]
}

export default level