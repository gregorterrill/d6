/*
LEGEND
● unlit pip
○ lit pip
▪ unlit pip in water
□ lit pip in water
A mountain
Y trees
P pit
X water
- horizontal bridge
| vertical bridge
W town
*/

const level = {
  title: 'The Pits of Lut Gholein',
  tileset: 'desert',
  entrance: { 'face': 5, 'row': 3, 'col': 3 },
  pickups: [{
    type: 'potion',
    location: { 'face': 0, 'row': 4, 'col': 0 },
    container: 'chest'
  },{
    type: 'old-key',
    location: { 'face': 0, 'row': 5, 'col': 1 },
    container: 'chest'
  }],
  enemies: [{
    type: 'sea-serpent',
    location: { 'face': 5, 'row': 4, 'col': 0 },
    direction: 'right',
    behavior: 'sentry'
  },{
    type: 'sea-serpent',
    location: { 'face': 5, 'row': 4, 'col': 6 },
    direction: 'left',
    behavior: 'sentry'
  }],
  faces: [
    [
      [' ',' ',' ',' ',' ',' ',' '],
      [' ',' ','A','P','A',' ',' '], // ONE
      [' ','A','A','P','A','A',' '], // ↑ right edge of 5
      [' ','P','P','●','P','P',' '], // → top edge of 3
      [' ','A','A','P','A','A',' '], // ↓ right edge of 2
      [' ',' ','A','P','A',' ',' '], // ← bottom edge of 4
      [' ',' ',' ',' ',' ',' ',' ']
    ],
    [
      [' ',' ',' ',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ','●',' '], // TWO
      [' ',' ',' ',' ',' ',' ',' '], // ↑ left edge of 4
      [' ',' ',' ',' ',' ',' ',' '], // → bottom edge of 1
      [' ',' ',' ',' ',' ',' ',' '], // ↓ left edge of 3
      [' ','●',' ',' ',' ',' ',' '], // ← top edge of 6
      [' ',' ',' ',' ',' ',' ',' ']
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
      [' ',' ',' ',' ',' ',' ',' '],
      [' ','●',' ',' ',' ','●',' '], // FOUR
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
      [' ','●',' ',' ',' ','●',' '], // ← bottom edge of 6
      [' ',' ',' ',' ',' ',' ',' ']
    ],
    [
      [' ',' ',' ',' ',' ',' ',' '],
      [' ','●','P','P','P','●',' '], // SIX
      [' ','P','P','P','P','P',' '], // ↑ left edge of 2
      [' ','●','P',' ','P','●',' '], // → bottom edge of 3
      ['X','P','P',' ','P','P','X'], // ↓ left edge of 5
      [' ','●','P',' ','P','●',' '], // ← top edge of 4
      [' ',' ','P',' ','P',' ',' ']
    ]
  ]
}

export default level