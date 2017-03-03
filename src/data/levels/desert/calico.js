
const level = {
  title: 'The Desert of Calico (WIP)',
  tileset: 'desert',
  entrance: { 'face': 1, 'row': 3, 'col': 3 },
  pickups: [{
    type: 'message',
    location: { 'face': 1, 'row': 4, 'col': 1 },
    content: 'GAMBLER: I try not to wander out in the DESERT when I\'m drinking. One time, I fell into some QUICKSAND and I swear, it sucked me straight through the CENTER OF THE WORLD and spat me out the other side.'
  }],
  enemies: [],
  faces: [
    [
      [' ',' ',' ',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ',' ',' '], // ONE
      [' ',' ',' ',' ',' ',' ',' '], // ↑ right edge of 5
      [' ',' ',' ','●',' ',' ',' '], // → top edge of 3
      [' ',' ',' ',' ',' ',' ',' '], // ↓ right edge of 2
      [' ',' ',' ',' ',' ',' ',' '], // ← bottom edge of 4
      [' ',' ',' ',' ',' ',' ',' ']
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
      [' ',' ',' ',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ','●',' '], // THREE
      [' ',' ',' ',' ',' ',' ',' '], // ↑ right edge of 1
      [' ',' ',' ','●',' ',' ',' '], // → top edge of 5
      [' ',' ',' ',' ',' ',' ',' '], // ↓ right edge of 6
      [' ','●',' ',' ',' ',' ',' '], // ← bottom edge of 2
      [' ',' ',' ',' ',' ',' ',' ']
    ],
    [
      ['X',' ',' ',' ',' ',' ',' '],
      ['X','●',' ',' ',' ','●',' '], // FOUR
      [' ',' ',' ',' ',' ',' ',' '], // ↑ left edge of 6
      [' ',' ',' ',' ',' ',' ',' '], // → bottom edge of 5
      [' ',' ',' ',' ',' ',' ',' '], // ↓ left edge of 1
      [' ','●',' ',' ',' ','●',' '], // ← top edge of 2
      [' ',' ',' ',' ',' ',' ',' ']
    ],
    [
      [' ',' ',' ',' ',' ',' ',' '],
      [' ','●',' ',' ',' ','●',' '], // FIVE
      [' ',' ',' ',' ',' ',' ',' '], // ↑ right edge of 3
      [' ',' ',' ','●',' ',' ',' '], // → top edge of 1
      [' ',' ',' ',' ',' ',' ',' '], // ↓ right edge of 4
      [' ','●',' ','Q',' ','●',' '], // ← bottom edge of 6
      [' ',' ',' ',' ',' ',' ',' ']
    ],
    [
      ['X','A','A',' ',' ',' ',' '],
      [' ','●',' ',' ',' ','●',' '], // SIX
      [' ',' ',' ',' ',' ',' ',' '], // ↑ left edge of 2
      [' ','●',' ',' ',' ','●',' '], // → bottom edge of 3
      [' ',' ',' ',' ',' ',' ',' '], // ↓ left edge of 5
      [' ','●',' ',' ',' ','●',' '], // ← top edge of 4
      [' ',' ',' ',' ',' ',' ',' ']
    ]
  ]
}

export default level