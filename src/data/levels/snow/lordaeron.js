
const level = {
  title: 'The Shores of Lordaeron',
  tileset: 'snow',
  entrance: { 'face': 5, 'row': 3, 'col': 3 },
  pickups: [{
    type: 'message',
    location: { 'face': 5, 'row': 5, 'col': 3 },
    content: 'FISHMONGER: Haven\'t seen many new faces around here since the DOCKS froze over. Anyhow, be careful if you venture out on the ICE. You might slip.'
  },{
    type: 'message',
    location: { 'face': 3, 'row': 5, 'col': 0 },
    content: 'HUNTER: The last BOAT that tried to leave the HARBOR got trapped in the ICE. We probably won\'t be able to get it out til\' spring thaw.'
  },{
    type: 'boat',
    location: { 'face': 1, 'row': 3, 'col': 4 },
  }],
  enemies: [],
  faces: [
    [
      ['Y','C','Y','F','F','C','F'],
      ['F','C','Y','F','Y','Y','F'], // ONE
      [' ','C','F','F','Y','Y','Y'], // ↑ right edge of 5
      ['C','C','C','●','F','Y','Y'], // → top edge of 3
      [' ','C','C','C','Y','F','Y'], // ↓ right edge of 2
      ['F','C','C','C','F','F','Y'], // ← bottom edge of 4
      [' ','C','C','C','C','Y','Y']
    ],
    [
      ['X','V','V','C','F','F','F'],
      ['X','V','C','C','C','●',' '], // TWO
      ['X','X','C','C','C','C','C'], // ↑ left edge of 4
      ['V','X','X','X','X','C','C'], // → bottom edge of 1
      ['X','X','X','C','C','C','C'], // ↓ left edge of 3
      ['X','▪','C','C','C','C','F'], // ← top edge of 6
      ['X','X','V','C','F','F','Y']
    ],
    [
      ['Y','Y','Y','Y','F','Y','Y'],
      ['F','F','Y','Y','F','●','Y'], // THREE
      ['Y','Y',' ',' ','F','F','F'], // ↑ right edge of 1
      ['C','F','Y','●','F','Y','F'], // → top edge of 5
      ['C','Y','F','F','F',' ','Y'], // ↓ right edge of 6
      ['C','●','F','Y','Y','Y',' '], // ← bottom edge of 2
      ['C','C','C',' ','Y',' ',' ']
    ],
    [
      ['X','X',' ','C',' ','Y','F'],
      ['C','●',' ','C','C','●','F'], // FOUR
      ['C','C',' ','C','C',' ','F'], // ↑ left edge of 6
      ['F','C','C','C',' ','Y','F'], // → bottom edge of 5
      ['F','Y',' ','C','F','F','F'], // ↓ left edge of 1
      ['W','●','C','C','F','●',' '], // ← top edge of 2
      [' ','F','C','C','F','Y',' ']
    ],
    [
      [' ',' ',' ','Y','F','F','C'],
      ['Y','●','F','F','F','●','C'], // FIVE
      ['F','F','F',' ','Y','C','C'], // ↑ right edge of 3
      [' ','Y','F','●','Y','F','F'], // → top edge of 1
      ['Y','Y','F','F','Y','Y','Y'], // ↓ right edge of 4
      ['Y','●','Y','F','Y','●',' '], // ← bottom edge of 6
      ['Y','Y',' ','F',' ',' ',' ']
    ],
    [
      ['X','X','X','X','V','X','V'],
      ['X','▪','C','C','C','▪','C'], // SIX
      ['C','C','|','C','|','C','C'], // ↑ left edge of 2
      ['C','●',' ',' ',' ','●','C'], // → bottom edge of 3
      [' ',' ',' ',' ',' ',' ','Y'], // ↓ left edge of 5
      [' ','●','Y','W','Y','●','F'], // ← top edge of 4
      ['F','F','F','Y','F','F','F']
    ]
  ]
}

export default level