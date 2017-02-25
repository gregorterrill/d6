const level = {
  title: 'The Lost Land of Tutoria',
  tileset: 'grass',
  entrance: { 'face': 0, 'row': 2, 'col': 3 },
  pickups: [{
    type: 'message',
    location: { 'face': 0, 'row': 1, 'col': 3 },
    content: '<p>VILLAGE ELDER: The DARKNESS has brought EVIL to our world. You must light all the PIPS with your MAGIC TORCH to save us!</p>'
  },{
    type: 'message',
    location: { 'face': 1, 'row': 1, 'col': 3 },
    content: '<p>TOWN GUARD: Don\'t be fooled by their adorable appearance! SLIMES are dangerous and will ATTACK you if you get in their way!</p>'
  },{
    type: 'message',
    location: { 'face': 2, 'row': 3, 'col': 1 },
    content: '<p>BARKEEP: You ever notice that BLUE and PURPLE SLIMES never seem to move the same way? Kinda unsettlin\'.</p>'
  },{
    type: 'message',
    location: { 'face': 4, 'row': 3, 'col': 4 },
    content: '<p>HARBORMASTER: You can\'t just go around stealing BOATS. You probably don\'t even know how to land safely on OPEN SHORE. Why, I bet you\'ve never even lit a SEA PIP with the ocean breeze blowing in your hair!</p>'
  },{
    type: 'boat',
    location: { 'face': 4, 'row': 4, 'col': 4 },
  },{
    type: 'message',
    location: { 'face': 3, 'row': 5, 'col': 3 },
    content: '<p>BLACKSMITH: I bet you could make short work of those SLIMES if you had a SWORD. Take mine! Just remember: you need be on the ATTACK. An ENEMY barrelling into you will always knock you down, armed or not.</p><br><p>You got a SWORD!</p>'
  },{
    type: 'sword',
    location: { 'face': 3, 'row': 5, 'col': 3 },
    container: 'hidden'
  },{
    type: 'message',
    location: { 'face': 5, 'row': 3, 'col': 3 },
    content: '<p>LOCAL MYSTIC: The LIGHT is returning to our land at long last! You must be the HERO the PROPHECY foretold!</p>'
  }],
  enemies: [{
    type: 'purple-slime',
    location: { 'face': 1, 'row': 5 , 'col': 1 },
    direction: 'right'
  },{
    type: 'purple-slime',
    location: { 'face': 2, 'row': 5 , 'col': 3 },
    direction: 'right'
  },{
    type: 'blue-slime',
    location: { 'face': 2, 'row': 1 , 'col': 4 },
    direction: 'down'
  },{
    type: 'purple-slime',
    location: { 'face': 3, 'row': 2 , 'col': 4 },
    direction: 'right'
  }],
  faces: [
    [
      ['A','A','A','A','A','A','A'],
      ['A','Y',' ','W','A','A','A'],
      ['A','Y','A',' ','A','F','A'],
      ['A','Y','A','●','F','F','A'],
      ['A','Y','Y','F','F','F','A'],
      ['A',' ',' ','Y','F','F','A'],
      ['A','A','A',' ','A','A','A']
    ],
    [
      ['A','A','A','A','A','A','A'],
      ['A','A',' ','W','Y','●','A'],
      ['A','Y',' ','A',' ','Y','A'],
      ['A',' ','Y','A','A',' ',' '],
      ['A','Y',' ','F','A','A','A'],
      ['A','●',' ',' ','Y','Y','A'],
      ['A','A','A','Y','F','A','A']
    ],
    [
      ['A','A','A','A','A','A','A'],
      ['A','Y',' ',' ',' ','●','A'],
      ['F','Y',' ','A',' ','Y','A'],
      [' ','W','Y','●','Y','Y',' '],
      ['A','A',' ','F','F','F','F'],
      ['A','●','Y','Y','Y','Y','F'],
      ['A','A','A','A','A','A','A']
    ],
    [
      ['A','A','A','A',' ','A','A'],
      ['A','▪','A','A','Y','●','X'],
      ['A','X','X','A',' ','A','X'],
      ['A',' ','X','X','|','X','X'],
      ['A',' ','Y','A',' ','Y','X'],
      ['A','●',' ','W',' ','●','X'],
      ['A','A','A','A','A','A','A']
    ],
    [
      ['A','F','F','Y','A','A','A'],
      ['A','●','F','Y',' ','●','A'],
      ['A',' ','X',' ','Y',' ','A'],
      ['A','Y','X','●','W','Y','A'],
      ['A','X','X','X','X','F','A'],
      ['A','▪','X','X','X','●','A'],
      ['A','X','X','X','X',' ','A']
    ],
    [
      ['A','A','A','A','A','A','A'],
      ['A','●',' ','Y','Y','●','A'],
      ['A','F','Y',' ','F','F','A'],
      ['A','●','F','W','F','●','A'],
      ['Y',' ',' ',' ','Y','Y','A'],
      ['A','●','Y','Y',' ','●','A'],
      ['A','A','A','A','A','A','A']
    ]
  ]
}


export default level