
const level = {
  title: 'The Forest of Guardia',
  tileset: 'grass',
  entrance: { 'face': 3, 'row': 3, 'col': 3 },
  pickups: [{
    type: 'key',
    location: { 'face': 3, 'row': 3, 'col': 6 },
    container: 'chest'
  },{
    type: 'key',
    location: { 'face': 3, 'row': 6, 'col': 3 },
    container: 'chest'
  }],
  enemies: [{
    type: 'skeleton',
    location: { 'face':1 , 'row': 1, 'col': 1 },
    direction: 'right'
  },{
    type: 'purple-slime',
    location: { 'face':4 , 'row': 5, 'col': 3 },
    direction: 'right'
  },{
    type: 'purple-slime',
    location: { 'face':5 , 'row': 3 , 'col': 4 },
    direction: 'down'
  }],
  faces: [
    [
      ['F','Y','F','F','F','F','F'],
      ['F','Y','Y','H',' ','Y',' '], // ONE
      ['F','Y','F','F','F','F','F'], // ↑ right edge of 5
      ['F','H','Y','●','F','F','F'], // → top edge of 3
      ['F',' ','F','F','P','Y','F'], // ↓ right edge of 2
      [' ','Y','Y',' ','Y','Y','Y'], // ← bottom edge of 4
      ['F','F','F','F','F','F','F']
    ],
    [
      ['F','F','F','Y','F','F','F'],
      ['Y',' ','F','Y','F','●','F'], // TWO
      ['F','Y','F','Y','F','H','F'], // ↑ left edge of 4
      ['F','Y',' ','Y','Y','Y','F'], // → bottom edge of 1
      ['F','F','F','F','F',' ','F'], // ↓ left edge of 3
      ['F','●','F','Y','Y','Y','F'], // ← top edge of 6
      ['F','Y','F',' ','F','F','F']
    ],
    [
      ['F','Y','F','F','F','Y','Y'],
      ['F','Y',' ','Y','F','●','Y'], // THREE
      ['F',' ','F','Y','Y','F',' '], // ↑ right edge of 1
      ['Y','Y','F','●','Y','F','Y'], // → top edge of 5
      ['F','Y','F','Y','Y','P',' '], // ↓ right edge of 6
      [' ','●','F',' ','F','F','Y'], // ← bottom edge of 2
      ['Y','Y',' ','Y',' ','Y','Y']
    ],
    [
      ['F','Y','P','Y','P','Y','Y'],
      ['F','●','F','F','F','●','Y'], // FOUR
      ['F','F','Y','Y','Y','F','F'], // ↑ left edge of 6
      ['Y','Y','Y',' ',' ','F',' '], // → bottom edge of 5
      ['F','F','Y',' ','Y','F','F'], // ↓ left edge of 1
      ['F','●','F','F','F','●','Y'], // ← top edge of 2
      ['F','Y','F',' ','Y','Y',' ']
    ],
    [
      ['F','F','F',' ','F','F',' '],
      ['Y','●','Y',' ','F','●','Y'], // FIVE
      ['Y','Y','Y','Y','F','F','F'], // ↑ right edge of 3
      ['Y','F','Y','●','Y','F','F'], // → top edge of 1
      ['Y','F','Y',' ','Y','F','F'], // ↓ right edge of 4
      [' ','●','Y',' ','Y','●',' '], // ← bottom edge of 6
      [' ',' ','F','Y','F',' ','Y']
    ],
    [
      ['F',' ','Y','F','Y','F','F'],
      ['Y','●',' ','F','Y','●','F'], // SIX
      [' ','Y','Y','F','Y','Y','F'], // ↑ left edge of 2
      ['F','●','F','F',' ','●','F'], // → bottom edge of 3
      [' ','Y',' ','F','Y',' ','F'], // ↓ left edge of 5
      [' ','●','Y','Y',' ','●','F'], // ← top edge of 4
      ['F','F','F','F','F','F','F']
    ]
  ]
}

export default level