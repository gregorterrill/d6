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
H closed gate
I open gate

PICKUPS
type: (message,boat,debris,sword,potion)
location: { 'face': 0, 'row': 0, 'col': 0 }
container: (null,hidden,chest,stone)
content: (html content, message type only)

ENEMIES
type: (purple-slime,blue-slime,sea-serpent)
location: { 'face': 0, 'row': 0, 'col': 0 }
direction: (left,right,up,down)
behavior: (null,sentry,projectile)
*/

const level = {
  title: 'The Void',
  tileset: 'snow',
  entrance: { 'face': 0, 'row': 2, 'col': 3 },
  pickups: [{
    type: 'key',
    location:  { 'face': 0, 'row': 5, 'col': 2 },
    container: 'chest'
  },{
    type: 'key',
    location:  { 'face': 0, 'row': 6, 'col': 0 },
    container: 'chest'
  }],
  enemies: [{
    type: 'sea-serpent',
    behavior: 'sentry',
    direction: 'right',
    location:  { 'face': 0, 'row': 2, 'col': 0 },
  }],
  faces: [
    [
      [' ',' ',' ',' ','A','A',' '],
      [' ',' ',' ',' ',' ','A',' '], // ONE
      ['X',' ',' ',' ',' ','H',' '], // ↑ right edge of 5
      [' ',' ',' ','●',' ','A',' '], // → top edge of 3
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