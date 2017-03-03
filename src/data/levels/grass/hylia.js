const level = {
  title: 'The Lake of Hylia',
  tileset: 'grass',
  entrance: { 'face': 4, 'row': 2, 'col': 3 },
  pickups: [{
    type: 'message',
    location: { 'face': 0, 'row': 2, 'col': 4 },
    content: 'FISHERMAN: The SEA SERPENTS that live in the LAKE are usually fairly well-mannered. But I wouldn\'t get too close if I were you.'
  },{
    type: 'boat',
    location: { 'face': 0, 'row': 3, 'col': 5 },
  }],
  enemies: [{
    type: 'purple-slime',
    location: { 'face': 2, 'row': 2, 'col': 4 },
    direction: 'right'
  },{
    type: 'sea-serpent',
    location: { 'face': 0, 'row': 5, 'col': 5 },
    direction: 'left'
  },{
    type: 'sea-serpent',
    location: { 'face': 1, 'row': 1, 'col': 2 },
    direction: 'left'
  }],
  faces: [
    [
      ['V','V','X','|','X','X','X'],
      ['X','X','X','|','X','X','X'],
      ['X','X','Y',' ','W','X','X'],
      ['X','X','F','●',' ','X','X'],
      ['V','X','V','Y','Y','X','X'],
      ['V','V','X','V','X','X','X'],
      ['X','X','X','X','X','V','X']
    ],
    [
      ['X','X','X','X','X','A','V'],
      ['X','X','X','X','X','●','A'],
      ['X','X','X','X','X','A','A'],
      ['X','X','V','X','X','X','X'],
      ['V','V','V','V','X','X','V'],
      ['X','▪','V','X','X','X','V'],
      ['X','V','X','X','V','X','X']
    ],
    [
      ['X','X','X','X','X','X','X'],
      ['V','V','X','X','X','●','Y'],
      ['V','X','X','X','Y','Y',' '],
      ['X','A','X','▪','X','F','F'],
      ['Y','A','X','X','X','F','X'],
      ['Y','●','X','V','X','X','X'],
      [' ','A','A','X','X','X','X']
    ],
    [
      ['X','V','V','V','Y','A','Y'],
      ['V','▪','X','X','Y','●','A'],
      ['X','V','V','X','X','A','A'],
      ['X','X','V','X','X','V','X'],
      ['X','V','V','X','A',' ','X'],
      ['V','▪','V','X','Y','●','X'],
      ['V','V','V','X','V','V','V']
    ],
    [
      ['X','X','X','F','Y',' ','X'],
      ['X','●',' ','A',' ','●','X'],
      ['X','Y','A','Y',' ','X','X'],
      ['V','A','Y','●',' ','-','-'],
      ['X','V',' ','Y','X','X','X'],
      ['X','▪','V','X','X','▪','V'],
      ['V','V','V','X','X','X','V']
    ],
    [
      ['V','V','X','X','X','X','A'],
      ['V','▪','V','X','X','▪',' '],
      ['X','V','X','X','V','A','A'],
      ['X','●','Y','X',' ','●','Y'],
      ['Y','Y','Y','X','V','Y','A'],
      ['Y','●','X','X','V','▪','A'],
      [' ','X','X','V','V','X','X']
    ]
  ]
}

export default level