const level = {
  title: 'The Hills of Daventry',
  tileset: 'grass',
  entrance: { 'face': 1, 'row': 3, 'col': 4 },
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
    content: 'VILLAGER: There\'s an old legend in these parts about a powerful SWORD in a STONE! With the whole COUNTRYSIDE overrun with SLIMES, I bet that would come in handy!'
  },{
    type: 'message',
    location: { 'face': 4, 'row': 2, 'col': 2 },
    content: 'ADVENTURER: Never let a SLIME trap you in the MOUNTAINS! They\'re deadly when you have nowhere to run!'
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
      ['F','F','Y',' ','W','X','Y'],
      [' ','Y',' ','●','Y','X',' '],
      ['A','Y','Y','Y','Y','X','Y'],
      ['A','Y','Y','Y',' ','-',' '],
      ['A','Y','F',' ','F','X','A']
    ],
    [
      [' ','Y','A','X','X','A','A'],
      ['Y','Y','Y','X','A','●','Y'],
      ['X','X',' ','X','A','F','F'],
      ['Y','X','|','X',' ','Y','Y'],
      ['Y',' ','Y','X','X','Y','F'],
      [' ','●',' ','X','X','X','X'],
      ['A','A','A','A','A','X','X']
    ],
    [
      ['A',' ','F',' ','A','A','A'],
      ['A','Y','F','Y','A','●','Y'],
      ['A','Y','F','F','F','A','A'],
      ['A',' ','F','●','Y',' ','A'],
      [' ',' ','A','F','F','Y','A'],
      [' ','●','A','A','A',' ','Y'],
      [' ','Y','Y',' ','A','A','A']
    ],
    [
      ['Y','Y','A','X','Y','Y','Y'],
      ['Y','●','A','X','X','●',' '],
      ['A','A','X','X','X','X','Y'],
      ['X','X','X','F','Y','X',' '],
      ['X','A','F','F','F','Y','A'],
      ['A','●','Y','F','F','●','A'],
      ['A','A',' ','Y','F','Y','A']
    ],
    [
      ['A',' ',' ','A','A',' ','X'],
      ['A','●',' ','F','A','●','X'],
      [' ',' ','W','F','Y','X','X'],
      ['A','A',' ','●','Y','X','X'],
      ['F',' ','Y',' ','Y','Y','X'],
      ['F','●',' ','A','Y','▪','X'],
      ['F','F','A','A','A','A','A']
    ],
    [
      [' ','Y','X','Y','A',' ','A'],
      ['Y','▪','X','A','Y','●','A'],
      ['X','X','X','Y','Y','A','P'],
      ['X','●',' ','A','A','●','Y'],
      ['Y','F','F','F','Y','A','Y'],
      ['Y','●','Y','F','A','●',' '],
      [' ','Y','Y','A',' ',' ',' ']
    ]
  ]
}

export default level