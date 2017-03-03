
const level = {
  title: 'The Steppes of Tulga (WIP)',
  tileset: 'snow',
  entrance: { 'face': 5, 'row': 2, 'col': 3 },
  pickups: [],
  enemies: [{
    type: 'skeleton',
    location: { 'face': 5, 'row': 5 , 'col': 0 },
    direction: 'down'
  },{
    type: 'skeleton',
    location: { 'face': 5, 'row': 3 , 'col': 0 },
    direction: 'down'
  },{
    type: 'skeleton',
    location: { 'face': 5, 'row': 1 , 'col': 0 },
    direction: 'down'
  },{
    type: 'skeleton',
    location: { 'face': 5, 'row': 5 , 'col': 6 },
    direction: 'up'
  },{
    type: 'skeleton',
    location: { 'face': 5, 'row': 3 , 'col': 6 },
    direction: 'up'
  },{
    type: 'skeleton',
    location: { 'face': 5, 'row': 1 , 'col': 6 },
    direction: 'up'
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
      [' ','●',' ','C',' ','●',' '], // SIX
      [' ',' ','C','C','C',' ',' '], // ↑ left edge of 2
      [' ','●','C','C','C','●',' '], // → bottom edge of 3
      [' ',' ','C','C','C',' ',' '], // ↓ left edge of 5
      [' ','●',' ','C',' ','●',' '], // ← top edge of 4
      [' ',' ',' ',' ',' ',' ',' ']
    ]
  ]
}

export default level