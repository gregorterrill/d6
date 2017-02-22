const level = {
  title: 'The Hills of Daventry',
  tileset: 'grass',
  entrance: { 'face': 0, 'row': 2, 'col': 3 },
  pickups: [{
    type: 'sword',
    location: { 'face': 5, 'row': 5, 'col': 2 },
    container: 'stone',
  },{
    type: 'boat',
    location: { 'face': 4, 'row': 3, 'col': 5 },
  },{
    type: 'message',
    location: { 'face': 0, 'row': 2, 'col': 4 },
    content: '<p>VILLAGER: Have you come from TUTORIA? Save us too, while you\'re at it! The whole COUNTRYSIDE is overrun with SLIMES!</p>'
  },{
    type: 'message',
    location: { 'face': 4, 'row': 2, 'col': 2 },
    content: '<p>ADVENTURER: Never let a SLIME trap you in the MOUNTAINS! They\'re deadly when you have nowhere to run!</p>'
  }],
  enemies: [{
    type: 'blue-slime',
    location: { 'face': 0, 'row': 2 , 'col': 2 },
    direction: 'down'
  },{
    type: 'purple-slime',
    location: { 'face': 0, 'row': 5 , 'col': 3 },
    direction: 'right'
  },{
    type: 'blue-slime',
    location: { 'face': 0, 'row': 1 , 'col': 6 },
    direction: 'down'
  },{
    type: 'purple-slime',
    location: { 'face': 2, 'row': 3 , 'col': 5 },
    direction: 'down'
  },{
    type: 'purple-slime',
    location: { 'face': 4, 'row': 4 , 'col': 3 },
    direction: 'right'
  },{
    type: 'blue-slime',
    location: { 'face': 5, 'row': 0 , 'col': 5 },
    direction: 'right'
  }],
  faces: [
    [
      ['A','X','X','X','X','X','A'],
      ['Y','Y',' ','Y','X','X','Y'],
      ['A','A','Y',' ','W','X','Y'],
      [' ','Y',' ','●','Y','X',' '],
      ['A','Y','Y','Y','Y','X','Y'],
      ['A','Y','Y','Y',' ','-',' '],
      ['A','Y','A','A','A','X','A']
    ],
    [
      [' ','Y','A','X','X','A','A'],
      ['Y','Y','Y','X','A','●','Y'],
      ['X','X',' ','X','A','A','A'],
      ['Y','X','|','X','X',' ',' '],
      ['Y',' ','Y','X','X','X','Y'],
      [' ','●',' ','X','X','X','X'],
      ['A','A','A','A','A','X','X']
    ],
    [
      ['A',' ','A',' ','A','A','A'],
      ['A','Y','A','Y','A','●','Y'],
      ['A','Y','A','A','A','A','A'],
      ['A',' ','A','●','Y',' ','A'],
      [' ',' ','A','A','A','Y','A'],
      [' ','●','A','A','A',' ','Y'],
      [' ','Y','Y',' ','A','A','A']
    ],
    [
      ['Y','Y','A','X','Y','Y','Y'],
      ['Y','●','A','X','X','●',' '],
      ['A','A','X','X','X','X','Y'],
      ['X','X','X','A','Y','X',' '],
      ['X','A','A','A','A','Y','A'],
      ['A','●','Y','A','A','●','A'],
      ['A','A',' ',' ','A','Y','A']
    ],
    [
      ['A',' ',' ','A','A',' ','X'],
      ['A','●',' ','A','A','●','X'],
      [' ',' ','W','A','Y','X','X'],
      ['A','A',' ','●','Y','X','X'],
      ['A',' ','Y',' ','Y','Y','X'],
      ['A','●',' ','A','Y','▪','X'],
      ['A','A','A','A','A','A','A']
    ],
    [
      [' ','Y','X','Y','A',' ','A'],
      ['Y','▪','X','A','Y','●','A'],
      ['X','X','X','Y','Y','A','P'],
      ['X','●',' ','A','A','●','Y'],
      ['Y','A','A','A','Y','A','Y'],
      ['Y','●',' ','A','A','●',' '],
      [' ','Y','Y','A',' ',' ',' ']
    ]
  ]
}

export default level