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
  title: 'Blankland',
  tileset: 'snow',
  entrance: { 'face': 0, 'row': 2, 'col': 3 },
  pickups: [{
    type: 'boat',
    location: { 'face': 0, 'row': 1, 'col': 3 },
  }],
  enemies: [{
    type: 'sea-serpent',
    location: { 'face': 0, 'row': 3, 'col': 6 },
    behavior: 'sentry',
    direction: 'right'
  }, {
    type: 'purple-slime',
    location: { 'face': 0, 'row': 3, 'col': 1 },
    direction: 'right'
  }],
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