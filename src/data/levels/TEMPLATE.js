/*
TUTORIAL
*The Lost Land of Tutoria

GRASS LEVELS
*The Hills of Daventry (King's Quest)
*The Lake of Hylia (Legend of Zelda)
-The Gardens of Balamb (Final Fantasy 8)
The Mountains of Nibelheim (Final Fantasy 7)
The Forest of Guardia (Chrono Trigger)
The Fields of Alefgard (Dragon Warrior)

DESERT LEVELS
*The Pits of Lut Gholein (Diablo 2)
-The Oasis of Aveh (Xenogears)
The Dunes of Varant (Gothic 3)
The Sands of Figaro (Final Fantasy 6)
The Desert of Calico (Stardew Valley)

SNOW LEVELS
The Cliffs of Lothric (Dark Souls)
The Outskirts of Bowerstone (Fable)
The Steppes of Tulga (Mount & Blade)
The Ruins of Lordaeron (Warcraft)
The Shores of Solstheim (Morrowind: Bloodmoon)

LAVA LEVELS
The Volcano of Barrel (Super Mario RPG)
The Caverns of Norfair (Super Metroid)
The Cave of Wonder (Aladdin)
The Catacombs of Tristram (Diablo)
The Ashlands of Vvardenfell (Morrowind)


LEGEND
● unlit pip
○ lit pip
▪ unlit pip in water
□ lit pip in water
A mountain
Y trees
F forest
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
behavior: (null,pacer,hugger,sentry,projectile)
*/

const level = {
  title: 'The Void',
  tileset: 'snow',
  entrance: { 'face': 0, 'row': 2, 'col': 3 },
  pickups: [],
  enemies: [],
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