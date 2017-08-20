
const level = {
  title: 'The Desert of Calico',
  tileset: 'desert',
  entrance: { 'face': 1, 'row': 3, 'col': 3 },
  pickups: [{
    type: 'message',
    location: { 'face': 1, 'row': 4, 'col': 1 },
    content: 'GAMBLER: I try not to wander out in the DESERT when I\'m drinking. One time, I fell into some QUICKSAND and I swear, it sucked me straight through the CENTER OF THE WORLD and spat me out the other side.'
  },{
    type: 'key',
    location: { 'face': 2, 'row': 4, 'col': 4 },
    container: 'chest',
  }],
  enemies: [{
    type: 'blue-slime',
    location: { 'face': 0, 'row': 1, 'col': 4 },
    direction: 'up'
  },{
    type: 'blue-slime',
    location: { 'face': 4, 'row': 2, 'col': 1 },
    direction: 'left'
  },{
    type: 'purple-slime',
    location: { 'face': 1, 'row': 2, 'col': 4 },
    direction: 'down'
  },{
    type: 'skeleton-archer',
    location: { 'face': 3, 'row': 3, 'col': 1 },
    direction: 'right'
  },{
    type: 'skeleton-archer',
    location: { 'face': 0, 'row': 4, 'col': 4 },
    direction: 'left'
  }],
  faces: [
    [
      [' ',' ',' ',' ',' ',' ','A'],
      ['A',' ','Q','A',' ','A','A'], // ONE
      ['A','Y',' ','A','A','A','A'], // ↑ right edge of 5
      ['A','A',' ','●','A',' ',' '], // → top edge of 3
      [' ',' ',' ',' ',' ','Y','A'], // ↓ right edge of 2
      ['Y','A','Y',' ','Q',' ',' '], // ← bottom edge of 4
      ['A','A','F','A','A','Y','A']
    ],
    [
      ['X','X','A','A','A','A','A'],
      ['X','X','Y','Q','A','●','A'], // TWO
      ['A','X','Y',' ','Y','Y','A'], // ↑ left edge of 4
      ['A','A',' ','Y',' ',' ','A'], // → bottom edge of 1
      ['A','W',' ',' ','Y',' ','A'], // ↓ left edge of 3
      ['A','●','Y',' ',' ','A','A'], // ← top edge of 6
      ['A','A','A','A','A','A','A']
    ],
    [
      ['A',' ','A',' ','Q',' ','Y'],
      [' ',' ','A','Y',' ','●',' '], // THREE
      ['Q','A','Q','A','Q',' ','Y'], // ↑ right edge of 1
      ['A','Y',' ','●','A','A','A'], // → top edge of 5
      ['A',' ',' ','A',' ','A','A'], // ↓ right edge of 6
      ['A','●','A',' ',' ','A',' '], // ← bottom edge of 2
      ['A','A',' ',' ','A','Y','Q']
    ],
    [
      ['X',' ','F','Y',' ','A','Q'],
      ['X','●','F',' ','A','●','A'], // FOUR
      ['A','A','F','Y','A','Y','F'], // ↑ left edge of 6
      ['A',' ',' ',' ',' ',' ',' '], // → bottom edge of 5
      ['Q','A','Q',' ','Q','Y','F'], // ↓ left edge of 1
      [' ','●','A','A','A','●','A'], // ← top edge of 2
      ['A','F','Y',' ','Q','A',' ']
    ],
    [
      ['A',' ','Y','A','A','A','A'],
      ['P','●',' ','A',' ','●','A'], // FIVE
      [' ',' ',' ','A',' ',' ',' '], // ↑ right edge of 3
      ['P',' ','A','●','A','A',' '], // → top edge of 1
      ['A','A','A',' ','A','A','A'], // ↓ right edge of 4
      ['A','●','Y','Q','Y','●','A'], // ← bottom edge of 6
      [' ','A','A',' ','A','A',' ']
    ],
    [
      ['X','A','A','A',' ','Y','A'],
      [' ','●','A','Y','Q','●','A'], // SIX
      [' ',' ','H',' ',' ','A','Y'], // ↑ left edge of 2
      ['F','●','A','A','A','●',' '], // → bottom edge of 3
      [' ','Y',' ','A',' ',' ',' '], // ↓ left edge of 5
      [' ','●','Q','A',' ','●','A'], // ← top edge of 4
      [' ',' ','A','A',' ',' ','A']
    ]
  ]
}

export default level