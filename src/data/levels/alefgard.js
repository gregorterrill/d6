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
V rocks in water
- horizontal bridge
| vertical bridge
W town
H closed gate
I open gate

PICKUPS
type: (message,boat,debris,sword,potion,key)
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
  title: 'The Fields of Alefgard',
  tileset: 'grass',
  entrance: { 'face': 1, 'row': 3, 'col': 3 },
  pickups: [{
    type: 'sword',
    location: { 'face': 1, 'row': 1, 'col': 3 },
    container: 'stone',
  }],
  enemies: [{
    type: 'purple-slime',
    location: { 'face': 0, 'row': 1, 'col': 4 },
    direction: 'right'
  },{
    type: 'purple-slime',
    location: { 'face': 0, 'row': 5, 'col': 2 },
    direction: 'left'
  },{
    type: 'blue-slime',
    location: { 'face': 0, 'row': 5, 'col': 1 },
    direction: 'up'
  },{
    type: 'blue-slime',
    location: { 'face': 0, 'row': 1, 'col': 5 },
    direction: 'down'
  }],
  faces: [
    [
      [' ',' ',' ',' ',' ','X','X'],
      ['A',' ',' ',' ','Y',' ','X'], // ONE
      [' ',' ','Y',' ',' ',' ','X'], // ↑ right edge of 5
      [' ',' ',' ','●',' ',' ','X'], // → top edge of 3
      [' ',' ',' ',' ',' ',' ',' '], // ↓ right edge of 2
      ['A','Y',' ',' ',' ',' ','A'], // ← bottom edge of 4
      ['A','A',' ',' ',' ','Y','Y']
    ],
    [
      [' ',' ',' ',' ',' ',' ','A'],
      [' ','Y',' ',' ','Y','●','Y'], // TWO
      [' ',' ',' ','Y',' ','Y','Y'], // ↑ left edge of 4
      ['A','H','A',' ',' ','Y','Y'], // → bottom edge of 1
      [' ',' ','A',' ',' ',' ',' '], // ↓ left edge of 3
      [' ','●','A','A','Y',' ',' '], // ← top edge of 6
      [' ','A','A','A',' ',' ',' ']
    ],
    [
      [' ',' ',' ','X',' ',' ',' '],
      [' ',' ',' ','X',' ','●',' '], // THREE
      [' ',' ',' ','X','X',' ',' '], // ↑ right edge of 1
      [' ',' ',' ','●','X',' ',' '], // → top edge of 5
      ['A',' ',' ',' ','X',' ',' '], // ↓ right edge of 6
      ['A','●',' ',' ','X',' ',' '], // ← bottom edge of 2
      ['A','A',' ','X','X',' ',' ']
    ],
    [
      [' ',' ',' ',' ','X',' ',' '],
      [' ','●',' ',' ','X','●',' '], // FOUR
      [' ',' ',' ',' ','X',' ',' '], // ↑ left edge of 6
      [' ',' ',' ',' ','X','X',' '], // → bottom edge of 5
      [' ',' ',' ',' ',' ','X','X'], // ↓ left edge of 1
      ['Y','●',' ',' ',' ','●',' '], // ← top edge of 2
      ['A',' ',' ',' ',' ',' ',' ']
    ],
    [
      [' ',' ',' ',' ',' ',' ',' '],
      [' ','●',' ',' ',' ','●','X'], // FIVE
      [' ',' ',' ',' ',' ','X','X'], // ↑ right edge of 3
      [' ',' ',' ','●','X','X',' '], // → top edge of 1
      [' ',' ',' ',' ','X',' ',' '], // ↓ right edge of 4
      [' ','●',' ',' ','X','●',' '], // ← bottom edge of 6
      [' ',' ',' ',' ','X',' ',' ']
    ],
    [
      [' ',' ',' ','A',' ',' ',' '],
      [' ','●',' ','A',' ','●','A'], // SIX
      [' ',' ',' ','X','|','X','X'], // ↑ left edge of 2
      [' ','●',' ','X',' ','●','X'], // → bottom edge of 3
      ['X','X','X','X',' ',' ',' '], // ↓ left edge of 5
      [' ','●',' ',' ',' ','●',' '], // ← top edge of 4
      [' ',' ',' ',' ',' ',' ',' ']
    ]
  ]
}

export default level