<template>
  <div class="threeDspace">
		<div :class="'die die--tileset-' + tileset" id="die" :style="{ transform: 'rotateX(' + adjustedDieRotation.x + 'deg) rotateY(' + adjustedDieRotation.y + 'deg) rotateZ(' + adjustedDieRotation.z + 'deg)' }">
			
			<face pips="1" face="front" :tiles="level.faces[0]"></face>
			<face pips="6" face="back" :tiles="level.faces[5]"></face>

			<face pips="4" face="left" :tiles="level.faces[3]"></face>
			<face pips="3" face="right" :tiles="level.faces[2]"></face>
			
			<face pips="5" face="top" :tiles="level.faces[4]"></face>
			<face pips="2" face="bottom" :tiles="level.faces[1]"></face>

			<!-- the core is for visual effect with transparent water only -->
			<div class="core">
				<div class="core__face"></div>
				<div class="core__face"></div>
				<div class="core__face"></div>
				<div class="core__face"></div>
				<div class="core__face"></div>
				<div class="core__face"></div>
			</div>
		
		</div>

		<audio v-for="sound in sounds" :ref="'sound-' + sound" :src="getAudioSource(sound)" preload />
		<!-- http://ericskiff.com/music/ -->
		<audio ref="music" :src="getAudioSource('music')" preload autoplay loop />

	</div>
</template>

<script>
import face from './face.vue'
import store from '../data/store.js'

export default {
	components: {
		face
	},
	props: ['level'],
	created() {
		window.addEventListener('keyup', this.handleKeyPress);
  },
  mounted() {
  	//set the music volume
  	this.$refs['music'].volume = 0.25;
  	//rotate the cube to the player face
  	store.player.location = store.currentLevel.entrance;
  	this.resetDieRotation();
  },
  data() {
  	return {
  		currentFace: 0,
	  	dieRotation: { x: 0, y: 0, z:0 },
	  	sounds: ['step','bump','flame','sail','hit','die','pickup','fireball','fizzle','win','unlock'],
	  }
  },
  computed: {
  	//which tileset to use
  	tileset() {
			return store.currentLevel.tileset;
		},
  	// tilts the die to the edges your closest to
  	adjustedDieRotation() {
  		let rotation = { 
  			x: this.dieRotation.x,
  			y: this.dieRotation.y,
  			z: this.dieRotation.z
  		};

  		//dont tilt the die if we're looking at a face other than the one the player is on
  		if (store.player.location.face != this.currentFace) {
  			return rotation;
  		}

  		//determine which axes to shift based on col and row position for each face
  		const faceAxes = [
  			{ col: 'y', colMultiplier: '-1', row: 'x', rowMultiplier: '1' }, //ONE
  			{ col: 'y', colMultiplier: '-1', row: 'z', rowMultiplier: '1' }, //TWO
  			{ col: 'z', colMultiplier: '1', row: 'x', rowMultiplier: '1' }, //THREE
  			{ col: 'z', colMultiplier: '-1', row: 'x', rowMultiplier: '1' }, //FOUR
  			{ col: 'y', colMultiplier: '-1', row: 'z', rowMultiplier: '1' }, //FIVE
  			{ col: 'y', colMultiplier: '1', row: 'x', rowMultiplier: '1' }, //SIX
  		];

  		//make column-based adjustments
			switch (store.player.location.col) {
  			case 6:
  				rotation[faceAxes[this.currentFace].col] += (30 * faceAxes[this.currentFace].colMultiplier);
  				break;
  			case 5:
  				rotation[faceAxes[this.currentFace].col] += (18 * faceAxes[this.currentFace].colMultiplier);
  				break;
  			case 4:
  				rotation[faceAxes[this.currentFace].col] += (10 * faceAxes[this.currentFace].colMultiplier);
  				break;
  			case 2:
  				rotation[faceAxes[this.currentFace].col] -= (10 * faceAxes[this.currentFace].colMultiplier);
  				break;
  			case 1:
  				rotation[faceAxes[this.currentFace].col] -= (18 * faceAxes[this.currentFace].colMultiplier);
  				break;
  			case 0:
  				rotation[faceAxes[this.currentFace].col] -= (30 * faceAxes[this.currentFace].colMultiplier);
  				break;
  		}

  		//make row-based adjustments
  		switch (store.player.location.row) {
  			case 6:
  				rotation[faceAxes[this.currentFace].row] += (30 * faceAxes[this.currentFace].rowMultiplier);
  				break;
  			case 5:
  				rotation[faceAxes[this.currentFace].row] += (18 * faceAxes[this.currentFace].rowMultiplier);
  				break;
  			case 4:
  				rotation[faceAxes[this.currentFace].row] += (10 * faceAxes[this.currentFace].rowMultiplier);
  				break;
  			case 2:
  				rotation[faceAxes[this.currentFace].row] -= (10 * faceAxes[this.currentFace].rowMultiplier);
  				break;
  			case 1:
  				rotation[faceAxes[this.currentFace].row] -= (18 * faceAxes[this.currentFace].rowMultiplier);
  				break;
  			case 0:
  				rotation[faceAxes[this.currentFace].row] -= (30 * faceAxes[this.currentFace].rowMultiplier);
  				break;
  		}

  		return rotation;
  	}
  },
	methods: {

		// require the audio file, because webpack chokes on these when treated like other files
		getAudioSource(soundName) {

			if (soundName == 'music') {
				return require('../assets/sound/come-and-find-me-by-eric-skiff.mp3');
			}

  		return require('../assets/sound/' + soundName + '.wav');
  	},

  	// play a sound!
		playSound(soundName) {
			const soundEl = this.$refs['sound-' + soundName][0];

			if (soundEl) {
				soundEl.currentTime = 0;
				soundEl.play();
			}
		},

		//close menu on ESC press
		closeMenu(e) {
			if (e.keyCode === 27) {
				store.windows.menu.open = false;
				window.removeEventListener('keyup', this.closeMenu);
				window.addEventListener('keyup', this.handleKeyPress);
			}
		},

		// press some keys!
		handleKeyPress(e) {
			switch(e.keyCode) {

				//DEBUG: LEVEL SKIP
				case 188: //<
					this.goToLevel(store.currentLevelNum - 1);
					break;
				case 190: //>
					this.goToLevel(store.currentLevelNum + 1);
					break;
				case 219: //{
					this.goToLevel(store.currentLevelNum - 5);
					break;
				case 221: //}
					this.goToLevel(store.currentLevelNum + 5);
					break;

				case 27: //esc
					store.windows.menu.open = true;
					window.removeEventListener('keyup', this.handleKeyPress);
					window.addEventListener('keyup', this.closeMenu);
					break;

				//MOVEMENT

		    case 87: //w
		    case 38: //up
		    	if (store.player.location.face != this.currentFace) {
  					this.resetDieRotation();
					} else {
		    		this.movePlayer('up');
		    	}
		      break;

		    case 65: //a
		    case 37: //left
		    	if (store.player.location.face != this.currentFace) {
  					this.resetDieRotation();
					} else {
						store.player.direction = 'left';
		    		this.movePlayer('left');
		    	}
		      break;

		    case 83: //s
		    case 40: //down
		    	if (store.player.location.face != this.currentFace) {
  					this.resetDieRotation();
					} else {
		    		this.movePlayer('down');
		    	}
		      break;

		    case 68: //d
		    case 39: //right
		    	if (store.player.location.face != this.currentFace) {
  					this.resetDieRotation();
					} else {
						store.player.direction = 'right';
		    		this.movePlayer('right');
		    	}
		      break;

		    // DIE ROTATIONS

		    case 49: //number key 1
		    case 50: //number key 2
		    case 51: //number key 3
		    case 52: //number key 4
		    case 53: //number key 5
		    case 54: //number key 6
		    	this.rotateDie(this.currentFace, e.keyCode - 49);
		    	this.currentFace = e.keyCode - 49;
		    	break;

		    case 48: //zero rotates back to current player face
		    	this.resetDieRotation();
		    	break;

		    // LEVEL RESET
		    case 82: //r

		    	let message = '<p>You restarted the level';
		    	let xpLost = store.player.xp;
					if (store.player.xp > 0) {
		    		store.player.xp = Math.floor(store.player.xp / 2);
		    		xpLost -= store.player.xp;
		    		message += ', losing ' + xpLost + ' XP';
		    	}
		    	message += '!</p>';
					this.goToLevel(store.currentLevelNum);
					this.showDialog(message);
		    	break;
		  };
		},

		// rotate the die back to the face the player is on
		resetDieRotation() {
			this.rotateDie(this.currentFace, store.player.location.face);
			this.currentFace = store.player.location.face;
		},

		// rotate the die from any face to any other face
		rotateDie(startingFace, endingFace) {

			if (startingFace === endingFace) return;

			switch(startingFace) {

				//ONE
				case 0:
					if (endingFace === 1) {
						this.dieRotation.y += 90;
						this.dieRotation.z += 90;
					} else if (endingFace === 2) {
						this.dieRotation.x += 90;
						this.dieRotation.z += 90;
					} else if (endingFace === 3) {
						this.dieRotation.x -= 90;
						this.dieRotation.z += 90;
					} else if (endingFace === 4) {
						this.dieRotation.y += 90;
						this.dieRotation.z -= 90;
					} else if (endingFace === 5) {
						this.dieRotation.x += 180;
					}
				break;

				//TWO
				case 1:
					if (endingFace === 0) {
						this.dieRotation.y -= 90;
						this.dieRotation.z -= 90;
					} else if (endingFace === 2) {
						this.dieRotation.x += 90;
						this.dieRotation.y -= 90;							
					} else if (endingFace === 3) {
						this.dieRotation.x -= 90;
						this.dieRotation.y -= 90;
					} else if (endingFace === 4) {
						this.dieRotation.z -= 180;
					} else if (endingFace === 5) {
						this.dieRotation.x += 180;
						this.dieRotation.y -= 90;
						this.dieRotation.z -= 90;
					}
				break;

				//THREE
				case 2:
					if (endingFace === 0) {
						this.dieRotation.x -= 90;
						this.dieRotation.z -= 90;
					} else if (endingFace === 1) {
						this.dieRotation.x -= 90;
						this.dieRotation.y += 90;							
					} else if (endingFace === 3) {
						this.dieRotation.x -= 180;
					} else if (endingFace === 4) {
						this.dieRotation.x -= 90;
						this.dieRotation.y += 90;
						this.dieRotation.z += 180;
					} else if (endingFace === 5) {
						this.dieRotation.x += 90;
						this.dieRotation.z -= 90;
					}
				break;

				//FOUR
				case 3:
					if (endingFace === 0) {
						this.dieRotation.x += 90;
						this.dieRotation.z -= 90;
					} else if (endingFace === 1) {
						this.dieRotation.x += 90;
						this.dieRotation.y += 90;
					} else if (endingFace === 2) {
						this.dieRotation.x += 180;
					} else if (endingFace === 4) {
						this.dieRotation.x += 90;
						this.dieRotation.y += 90;
						this.dieRotation.z -= 180;
					} else if (endingFace === 5) {
						this.dieRotation.x -= 90;
						this.dieRotation.z -= 90;
					}
				break;

				//FIVE
				case 4:
					if (endingFace === 0) {
						this.dieRotation.y -= 90;
						this.dieRotation.z += 90;
					} else if (endingFace === 1) {
						this.dieRotation.z += 180;
					} else if (endingFace === 2) {
						this.dieRotation.x += 90;
						this.dieRotation.y -= 90;
						this.dieRotation.z -= 180;
					} else if (endingFace === 3) {
						this.dieRotation.x -= 90;
						this.dieRotation.y -= 90;
						this.dieRotation.z += 180;
					} else if (endingFace === 5) {
						this.dieRotation.x -= 180;
						this.dieRotation.y -= 90;
						this.dieRotation.z += 90;
					}
				break;

				//SIX
				case 5:
					if (endingFace === 0) {
						this.dieRotation.x -= 180;
					} else if (endingFace === 1) {
						this.dieRotation.x -= 180;
						this.dieRotation.y += 90;
						this.dieRotation.z += 90;
					} else if (endingFace === 2) {
						this.dieRotation.x -= 90;
						this.dieRotation.z += 90;
					} else if (endingFace === 3) {
						this.dieRotation.x += 90;
						this.dieRotation.z += 90;
					} else if (endingFace === 4) {
						this.dieRotation.x += 180;
						this.dieRotation.y += 90;
						this.dieRotation.z -= 90;
					}
				break;
			}

		},

		getOppositeDirection(direction){
			let oppositeDirection = 'left';

			switch (direction) {
				case 'right':
					oppositeDirection = 'left';
					break;
				case 'left':
					oppositeDirection = 'right';
					break;
				case 'up':
					oppositeDirection = 'down';
					break;
				case 'down':
					oppositeDirection = 'up';
					break;
			}

			return oppositeDirection;
		},

		getClockwiseDirection(direction){
			let clockwiseDirection = 'left';

			switch (direction) {
				case 'right':
					clockwiseDirection = 'down';
					break;
				case 'left':
					clockwiseDirection = 'up';
					break;
				case 'up':
					clockwiseDirection = 'right';
					break;
				case 'down':
					clockwiseDirection = 'left';
					break;
			}

			return clockwiseDirection;
		},

		getCounterClockwiseDirection(direction){
			let clockwiseDirection = 'left';

			switch (direction) {
				case 'right':
					clockwiseDirection = 'up';
					break;
				case 'left':
					clockwiseDirection = 'down';
					break;
				case 'up':
					clockwiseDirection = 'left';
					break;
				case 'down':
					clockwiseDirection = 'right';
					break;
			}

			return clockwiseDirection;
		},

		// get the contents of a tile, which will just be one character, eg. "X" for water
		getTileValue(targetTile) {
			return this.level.faces[targetTile.face][targetTile.row][targetTile.col];
		},

		// check if a tile blocks movement
		// typeOfEntity will be either 'player', 
		// the behavior of an enemy (eg. 'projectile'/'sentry'),
		// OR 'lineOfSight' for very specific use case
		isTilePassable(targetTile, typeOfEntity = 'player') {
			let passable = false,
					tileValue = this.getTileValue(targetTile);

			//PLAYER ON BOAT
			//boats can move through water and bridges
			if (typeOfEntity === 'player' && store.player.items.includes('boat') && ['X','-','|'].includes(tileValue)) {
				passable = true;
			}

			//PLAYER ON FOOT		
			if (typeOfEntity === 'player' && !store.player.items.includes('boat')) {
				
				//on foot, you can pass through most terrain
				if ([' ','-','|','Y','W','P','I'].includes(tileValue)) {
					passable = true;

				//if the player is trying to move onto a water tile, check if it has a boat on it
				} else if (tileValue === 'X') {
					for (let pickup of store.currentLevel.pickups) {
						if (pickup.type === 'boat' && this.isEntityOnTile(pickup, targetTile)) {
							passable = true;
						}
					}
				}
			}

			//PROJECTILES can move over open water and open land, rocks, open gates and pits
			if (typeOfEntity === 'projectile' && ['X','P',' ','I','V'].includes(tileValue)) {
				passable = true;
			}

			//LINE OF SIGHT is the same as projectiles, but is also blocked by enemies and pickups
			if (typeOfEntity === 'lineOfSight' && ['X','P',' ','I','V'].includes(tileValue)) {
				passable = true;

				for (let otherEnemy of store.currentLevel.enemies) {
					if (this.isEntityOnTile(otherEnemy, targetTile) && this.isAlive(otherEnemy)) {
						passable = false;
					}
				}
				for (let pickup of store.currentLevel.pickups) {
					if (this.isEntityOnTile(pickup, targetTile) && pickup.type !== 'message') {
						//fix for if player just got onto a boat
						if (targetTile.col !== store.player.location.col) {
							passable = false;
						}
					}
				}
			}

			//NORMAL ENEMIES can move through land, bridges, gates, and trees
			if ((typeOfEntity === 'pacer' || typeOfEntity === 'guard') && [' ','-','|','Y','I'].includes(tileValue)) {
				passable = true;

				//for enemies, we need to check if there's another (non-projectile) enemy
				//on the tile as enemies can't move into other enemies
				for (let otherEnemy of store.currentLevel.enemies) {
					if (this.isEntityOnTile(otherEnemy, targetTile) && this.isAlive(otherEnemy)) {
						passable = false;
					}
				}
			}
			
			return passable;
		},

		//light up a pip!
		lightPip(targetTile) {
			//we have to use the set syntax so the array gets watched properly
			//see: https://vuejs.org/v2/guide/list.html#Caveats
			if (this.getTileValue(targetTile) === '●') {
			  this.$set(this.level.faces[targetTile.face][targetTile.row], [targetTile.col], '○');
		  } else if (this.getTileValue(targetTile) === '▪') {
		  	this.$set(this.level.faces[targetTile.face][targetTile.row], [targetTile.col], '□');
		  }
		  store.pips++;
	  	this.playSound('flame');
	  	this.checkForLevelComplete();
		},

		//display a dialog and optionally, play a sound. 
		showDialog(messageContent, sound = false, overrideOtherMessages = false) {

			if (!store.windows.dialog.open || (store.windows.dialog.open && overrideOtherMessages)) {
				store.windows.dialog.open = true;
				store.windows.dialog.content = messageContent;
			}

			if (sound) {
				this.playSound(sound);
			}
		},

		//check if an entity is on a tile
		isEntityOnTile(entity, tile) {
			let onTile = false;
			if (tile.face === entity.location.face &&
  				tile.row === entity.location.row &&
  				tile.col === entity.location.col) {
				onTile = true;
			}
			return onTile;
		},

		//move an entity to target tile
		//entity is either 'player' or an entity in currentLevel
		moveEntityToTile(targetTile, entity = 'player') {

			//if it's the player we need to also rotate the cube
			if (entity === 'player') {
				store.player.location = targetTile;
				this.rotateDie(this.currentFace, targetTile.face);
				this.currentFace = targetTile.face;
			} else {
				entity.location = targetTile;
			}
		},

		//get the tile adjacent to any other tile
		findAdjacentTile(originTile, direction) {

			let targetTile = null,
					newDirection = direction;

			//check if tile is on the same face
			if (direction === 'right' && (originTile.col+1) <= 6) {
				targetTile = { 'face': originTile.face, 'row': originTile.row, 'col': originTile.col+1 };
			} else if (direction === 'left' && (originTile.col-1) >= 0) {
				targetTile = { 'face': originTile.face, 'row': originTile.row, 'col': originTile.col-1 };
			} else if (direction === 'down' && (originTile.row+1) <= 6) {
				targetTile = { 'face': originTile.face, 'row': originTile.row+1, 'col': originTile.col };
			} else if (direction === 'up' && (originTile.row-1) >= 0) {
				targetTile = { 'face': originTile.face, 'row': originTile.row-1, 'col': originTile.col };
			}

			//tile is on a different face, so we need to get the tile and figure out the directional change
			if (!targetTile) {

				// ONE
				if (originTile.face === 0) {
					if (direction === 'right') {
						targetTile = { 'face': 2, 'row': 0, 'col': 6 - originTile.row };
						newDirection = 'down';
					} else if (direction === 'left') {
						targetTile = { 'face': 3, 'row': 6, 'col': 6 - originTile.row };
						newDirection = 'up';
					} else if (direction === 'up') {
						targetTile = { 'face': 4, 'row': 6 - originTile.col, 'col': 6 };
						newDirection = 'left';
					} else if (direction === 'down') {
						targetTile = { 'face': 1, 'row': originTile.col, 'col': 6 };
						newDirection = 'left';
					}
				}

				// TWO
				if (originTile.face === 1) {
					if (direction === 'right') {
						targetTile = { 'face': 0, 'row': 6, 'col': originTile.row };
						newDirection = 'up';
					} else if (direction === 'left') {
						targetTile = { 'face': 5, 'row': 0, 'col': originTile.row };
						newDirection = 'down';
					} else if (direction === 'up') {
						targetTile = { 'face': 3, 'row': originTile.col, 'col': 0 };
						newDirection = 'right';
					} else if (direction === 'down') {
						targetTile = { 'face': 2, 'row': 6 - originTile.col, 'col': 0 };
						newDirection = 'right';
					}
				}

				// THREE
				if (originTile.face === 2) {
					if (direction === 'right') {
						targetTile = { 'face': 4, 'row': 0, 'col': 6 - originTile.row };
						newDirection = 'down';
					} else if (direction === 'left') {
						targetTile = { 'face': 1, 'row': 6, 'col': 6 - originTile.row };
						newDirection = 'up';
					} else if (direction === 'up') {
						targetTile = { 'face': 0, 'row': 6 - originTile.col, 'col': 6 };
						newDirection = 'left';
					} else if (direction === 'down') {
						targetTile = { 'face': 5, 'row': originTile.col, 'col': 6 };
						newDirection = 'left';
					}
				}

				// FOUR
				if (originTile.face === 3) {
					if (direction === 'right') {
						targetTile = { 'face': 4, 'row': 6, 'col': originTile.row };
						newDirection = 'up';
					} else if (direction === 'left') {
						targetTile = { 'face': 1, 'row': 0, 'col': originTile.row };
						newDirection = 'down';
					} else if (direction === 'up') {
						targetTile = { 'face': 5, 'row': originTile.col, 'col': 0 };
						newDirection = 'right';
					} else if (direction === 'down') {
						targetTile = { 'face': 0, 'row': 6 - originTile.col, 'col': 0 };
						newDirection = 'right';
					}
				}

				// FIVE
				if (originTile.face === 4) {
					if (direction === 'right') {
						targetTile = { 'face': 0, 'row': 0, 'col': 6 - originTile.row };
						newDirection = 'down';
					} else if (direction === 'left') {
						targetTile = { 'face': 5, 'row': 6, 'col': 6 - originTile.row };
						newDirection = 'up';
					} else if (direction === 'up') {
						targetTile = { 'face': 2, 'row': 6 - originTile.col, 'col': 6 };
						newDirection = 'left';
					} else if (direction === 'down') {
						targetTile = { 'face': 3, 'row': originTile.col, 'col': 6 };
						newDirection = 'left';
					}
				}

				// SIX
				if (originTile.face === 5) {
					if (direction === 'right') {
						targetTile = { 'face': 2, 'row': 6, 'col': originTile.row };
						newDirection = 'up';
					} else if (direction === 'left') {
						targetTile = { 'face': 3, 'row': 0, 'col': originTile.row };
						newDirection = 'down';
					} else if (direction === 'up') {
						targetTile = { 'face': 1, 'row': originTile.col, 'col': 0 };
						newDirection = 'right';
					} else if (direction === 'down') {
						targetTile = { 'face': 4, 'row': 6 - originTile.col, 'col': 0 };
						newDirection = 'right';
					}
				}
			}

			return { 
				'tile': targetTile, 
				'newDirection': newDirection
			};
		},

		// move a player in a given direction, moving to an adjacent face if needed
		// also trigger any collision events and play sounds
		movePlayer(direction) {

			let originTile = store.player.location,
					targetTile = this.findAdjacentTile(originTile, direction).tile,
					moved = false,
					blocked = false,
					needEnemyStep = true;

			//reset player status
			store.player.status = 'active';

			// check if the target tile is passable or not
			if (this.isTilePassable(targetTile)) {
	    	moved = true;
	    } else {
	    	blocked = true;
	    }

	  	//perform the blocked effects
	  	if (blocked) {

	  		//disembark from boat (you must be coming from open water to open land - 
	  		//that means no disembarking to forests or from under a bridge)
	  		if (store.player.items.includes('boat') 
	  				&& this.getTileValue(targetTile) == ' '
	  				&& this.getTileValue(originTile) == 'X') {
	  			store.player.items.splice(store.player.items.indexOf('boat'),1);
	  			store.currentLevel.pickups.push({
	  				'type': 'boat',
	  				'location': originTile
	  			});
	  			moved = true;
	  			blocked = false;
	  			store.player.status = 'disembarking';
	  		
	  		//activate land pip from land, or sea pip from boat
	  		} else if ((this.getTileValue(targetTile) == '●' && !store.player.items.includes('boat')) ||
	  			(this.getTileValue(targetTile) == '▪' && store.player.items.includes('boat'))) {
			  	this.lightPip(targetTile);

			  //if its a closed gate, unlock it if you have a key
			  } else if (this.getTileValue(targetTile) == 'H' 
			  	&& !store.player.items.includes('boat')
			  	&& store.player.items.includes('key')) {
			  	this.$set(this.level.faces[targetTile.face][targetTile.row], [targetTile.col], 'I');
			  	store.player.items.splice(store.player.items.indexOf('key'),1);
			  	this.showDialog('<p>You used your KEY to unlock the GATE!<p>', 'unlock');

			  //you're just blocked
			  } else {
		  		this.playSound('bump');
		  	}
		  }

		  //perform the actual move
		  if (moved) {
		  	this.moveEntityToTile(targetTile);

		  	//close any open dialogs
		  	store.windows.dialog.open = false;

		  	//play sound based on mode of travel
		  	if (store.player.items.includes('boat')) {
		  		this.playSound('sail');
		  	} else {
		  		this.playSound('step');
		  	}

		  	//damage player if they walked into a pit
		  	if (this.getTileValue(store.player.location) === 'P') {
		  		this.damagePlayer(2, 'pit');
		  	}

		  	//if the player moved into an enemy, attack them
		  	needEnemyStep = this.resolvePlayerAttack(originTile);

		  	//enemies move and shoot UNLESS something prevented it
		  	if (needEnemyStep) {
		  		this.doEnemyStep();
		  	}

		  	//if the player moved into a pickup, get it
		  	this.collectPickups();
		  }		  
		},

		//resolve attacks against enemies - we need the origin tile in case we get repelled back
		//returns whether or not we need an enemy step this turn
		resolvePlayerAttack(originTile) {

			let needEnemyStep = true;

	  	//reset enemy status and check if player walked into an enemy
	  	store.currentLevel.enemies.forEach(function (enemy, i) {

	  		//if the enemy is already dead or dying, skip the interaction
	  		if (enemy.status === 'dying' || enemy.status === 'dead') {
	  			enemy.status = 'dead';
	  			return;
	  		}

	  		//reset enemy status
	  		enemy.status = 'active';

	  		//check if player moved into enemy
	  		if (this.isEntityOnTile(enemy, store.player.location)) {

	  			//if you walk into a fireball, you die and it fizzles
	  			if (this.getEnemyBehavior(enemy) === 'projectile') {
	  				this.damagePlayer(5, enemy.type);
	  				enemy.status = 'dying';
	  				return;
	  			}

	  			//you're on land
	  			if (!store.player.items.includes('boat') && store.player.status != 'disembarking') {
	  				if (store.player.items.includes('sword')) {
		  				//kill that sucker
		  				enemy.status = 'dying';
		  				store.player.xp += this.getEnemyTier(enemy);
		  				store.player.status = 'attacking';
		  				this.showDialog('<p>Defeated ' + enemy.type.replace('-',' ').toUpperCase() + ' and gained ' + this.getEnemyTier(enemy) + ' XP!</p>', 'hit');

		  			} else {
		  				//hurt player
		  				this.damagePlayer(this.getEnemyTier(enemy), enemy.type);
			  			//attacking enemies dont move this turn
			  			enemy.status = 'attacking';
			  			//move the player back to the tile they were on
			  			this.moveEntityToTile(originTile);
		  			}

		  		//if you tried to disembark into an enemy, make it seem like you were blocked
		  		//and cancel the enemy step this turn
		  		} else if (store.player.status === 'disembarking') {
		  			this.playSound('bump');
		  			this.moveEntityToTile(originTile);
		  			needEnemyStep = false;

		  		//you're on a boat, only sea things hurt you
	  			} else {

	  				if (enemy.type === 'sea-serpent') {
	  					this.damagePlayer(2, enemy.type);
	  					enemy.status = 'attacking';
	  					this.moveEntityToTile(originTile);
	  				}
	  			}

	  		}
		  }, this);

		  return needEnemyStep;
		},

		//player collects any pickups they're standing on
		collectPickups() {
			store.currentLevel.pickups.forEach(function (pickup, i) {
				if (this.isEntityOnTile(pickup, store.player.location)) {

					//messages open their content in a dialog
					if (pickup.type === 'message') {
						//inns are a special type of message that also fully heal the player
						if (pickup.behavior === 'inn') {
							this.healPlayer(5, pickup.type);
						}
						this.showDialog(pickup.content, false, true);

					//sword that are on pedestals get replaced by empty pedestals
					//generic pickups open their chests
					} else if (pickup.type !== 'boat' && pickup.status != 'hidden') {

						//consumables are used right away
						if (pickup.type === 'potion' && pickup.status !== 'taken') {
							if (store.player.hp < 5) {
								pickup.status = 'taken';
								this.healPlayer(2, pickup.type); //dialog will be shown by healPlayer
							} else {
								this.showDialog('<p>You found a ' + pickup.type.replace('-',' ').toUpperCase() + ' but decided to leave it for now. You might need it later if you hurt yourself!</p>', 'pickup');
							}
						//take the thing
						} else if (pickup.status != 'taken') { 
							store.player.items.push(pickup.type);
							pickup.status = 'taken';
							this.showDialog('<p>You found a ' + pickup.type.replace('-',' ').toUpperCase() + '!</p>', 'pickup');
						}

					//all other pickups are added to inventory and removed from level
					} else {
						store.player.items.push(pickup.type); 
						store.currentLevel.pickups.splice(i,1);

						if (pickup.type !== 'boat') { 
							this.showDialog('<p>You found a ' + pickup.type.replace('-',' ').toUpperCase() + '!</p>', 'pickup');
						}
					}	
				}
			}, this);
		},

		// move enemies
		doEnemyStep() {

			//activate all enemies - any new enemies created during this step (eg. fireballs) will be appended to the array and also activated this step
			for (let enemy of store.currentLevel.enemies) {

				//dying or dead enemies don't do anything, and they'll be cleared out
				if (enemy.status === 'dying' || enemy.status === 'dead') {
					continue;
				}

				let enemyBehavior = this.getEnemyBehavior(enemy);
				
				//sentries have unique activations
				if (enemyBehavior === 'sentry') {
					this.activateSentry(enemy);
				
				//if a projectile has circled the entire cube, fizzle it, otherwise it moves
				//this means the projectile can just get back around to the sentry that launched it and kill it
				} else if (enemyBehavior === 'projectile') {
					if (enemy.tilesMoved >= 28) {
						enemy.status = 'dying';
						this.playSound('fizzle');
					} else {
						this.activateEnemy(enemy);
					}

				//attacking enemies don't activate
				} else if (enemy.status !== 'attacking') {
					this.activateEnemy(enemy);
				}
			}

			//remove any enemies that were marked for death
			store.currentLevel.enemies = store.currentLevel.enemies.filter(function(enemy){
				return (enemy.status != 'dead');
			});
		},

		//activate a sentry enemy, which is stationary and shoots a seen player
		activateSentry(enemy) {

			let shotBlocked = false;

			//check if the player is in the same face
			if (store.player.location.face == enemy.location.face) {

				//check if the player is in the correct direction
				if ((enemy.direction === 'left' && store.player.location.col < enemy.location.col) ||
					(enemy.direction === 'right' && store.player.location.col > enemy.location.col)) {

					//if the player is in this row, shoot at them
					if (store.player.location.row == enemy.location.row) {

						//check if there are any obstacles in the columns between and dont shoot if so
						if (store.player.location.col < enemy.location.col) {
							for (let i = store.player.location.col; i < enemy.location.col; i++) {
								if (!this.isTilePassable({ 'face': enemy.location.face, 'row': enemy.location.row, 'col': i }, 'lineOfSight')) {
									shotBlocked = true;
								}
							}
						} else {
							for (let i = enemy.location.col + 1; i <= store.player.location.col; i++) {
								if (!this.isTilePassable({ 'face': enemy.location.face, 'row': enemy.location.row, 'col': i }, 'lineOfSight')) {
									shotBlocked = true;
								}
							}
						}
					
						//fire
						if (!shotBlocked) {
							enemy.status = 'attacking';
							
							//spawn a fireball at the sentry's location (it will move one tile in the correct direction
							//because this loop will still run it at the end)
							store.currentLevel.enemies.push({
								'type': 'fireball',
								'location': enemy.location,
								'direction': enemy.direction,
								'tilesMoved': 0
							});
							this.playSound('fireball');
						}
					}

				//if the player is in the other direction, turn to face them
				} else if (store.player.location.col !== enemy.location.col) {
					enemy.direction = this.getOppositeDirection(enemy.direction);
				}
			}
		},

		//activate an individual moving enemy
		activateEnemy(enemy) {

			let targetTile = null,
					originTile = enemy.location,
					originDirection = enemy.direction,
					adjacentTile = null,
					enemyBehavior = this.getEnemyBehavior(enemy),
					moved = false;

			

			// STEP 1: get target tile to move to
			if (enemyBehavior === 'guard') {
				//guards hug walls, and continue searching until they find a way to move
				adjacentTile = this.findAdjacentTile(originTile, this.getCounterClockwiseDirection(enemy.direction));
				targetTile = adjacentTile.tile;

				while (!moved) {
					if (this.isTilePassable(targetTile, enemyBehavior)) {
						//move and update the direction if we changed faces
						this.moveEntityToTile(targetTile, enemy);
						enemy.direction = adjacentTile.newDirection;
						moved = true;
					} else {
						//set up to try again
						enemy.direction = this.getClockwiseDirection(enemy.direction);
						adjacentTile = this.findAdjacentTile(originTile, this.getCounterClockwiseDirection(enemy.direction));
						targetTile = adjacentTile.tile;
					}
				}
			//pacers and projectiles just try to go in the direction they're going
			} else {
				adjacentTile = this.findAdjacentTile(originTile, enemy.direction);
				targetTile = adjacentTile.tile;

				if (this.isTilePassable(targetTile, enemyBehavior)) {
					//move and update the direction if we changed faces
					this.moveEntityToTile(targetTile, enemy);
					enemy.direction = adjacentTile.newDirection;
					moved = true;
				
				// projectiles fizzle if they can't move
				} else if (enemyBehavior === 'projectile') {
					enemy.status = 'dying';
					this.playSound('fizzle');

				//regular enemies turn around if they can't move
				} else {
					enemy.direction = this.getOppositeDirection(enemy.direction);
				}
			}

			// STEP 2: if we're touching the player, hurt the player and move back
			if (this.isEntityOnTile(enemy, store.player.location)) {

				//projectiles immediately kill you
				if (enemyBehavior === 'projectile') {
					this.damagePlayer(5, enemy.type);
					enemy.status = 'dying';

				//do damage UNLESS the player is on a boat - overlaps mean they are under a bridge with an enemy on it
				} else if (!store.player.items.includes('boat')) {
					//hurt player
  				this.damagePlayer(this.getEnemyTier(enemy), enemy.type);

	  			//move the enemy back to the tile they were on
			  	this.moveEntityToTile(originTile, enemy);
			  	enemy.direction = originDirection;
			  	enemy.status = 'attacking';
	  		}
	  	}

	  	// STEP 3: check for projectile collisions
	  	if (enemyBehavior === 'projectile') {
	  		//light pips
	  		if (this.getTileValue(targetTile) === '●' || this.getTileValue(targetTile) === '▪') {
	  			this.lightPip(targetTile);
	  			enemy.status = 'dying';
	  			//dont need to play fizzle sound as pip lighting noise will play
	  		}

	  		//kill enemies
	  		for (let otherEnemy of store.currentLevel.enemies) {
					if (this.isEntityOnTile(otherEnemy, enemy.location) && this.isAlive(otherEnemy)) {
						otherEnemy.status = 'dying';
						enemy.status = 'dying';
						this.playSound('fizzle');
					}
				}

				//stop at pickups, if its a boat, sink it
				store.currentLevel.pickups.forEach(function (pickup, i) {
					if (this.isEntityOnTile(pickup, enemy.location)) {
						if (pickup.type === 'boat') {
							pickup.type = 'debris';
						}
						enemy.status = 'dying';
						this.playSound('fizzle');
					}
				}, this);

				enemy.tilesMoved++;
	  	
	  	} else {
	  		//check if normal enemies walked into projectiles
				for (let otherEnemy of store.currentLevel.enemies) {
					if (this.isEntityOnTile(otherEnemy, enemy.location) && this.getEnemyBehavior(otherEnemy) === 'projectile' && otherEnemy.status !== 'dying') {
						otherEnemy.status = 'dying';
						enemy.status = 'dying';
						this.playSound('fizzle');
					}
				}
	  	}
		},

		//get damage and xp reward for an enemy
		getEnemyTier(enemy) {
			let tier = 1;

			if (['purple-slime','blue-slime'].includes(enemy.type)) {
				tier = 1;
			} else if (['sea-serpent','skeleton'].includes(enemy.type)) {
				tier = 2;
			}

			//allow manual overrides
			if (enemy.tier) {
				tier = enemy.tier;
			}

			return tier;
		},

		//get enemy behavior based on type
		getEnemyBehavior(enemy) {
			let behavior = false;

			//pacers turn around when they hit an obstacle
			if (['purple-slime','blue-slime'].includes(enemy.type)) {
				behavior = 'pacer';
			//sentries dont move, and shoot players in line of sight
			} else if (['sea-serpent'].includes(enemy.type)) {
				behavior = 'sentry';
			//guards hug a wall and turn 90deg when they hit an obstacle
			} else if (['skeleton'].includes(enemy.type)) {
				behavior = 'guard';
			//projectiles kill enemies and players in their path
			} else if (['fireball','arrow'].includes(enemy.type)) {
				behavior = 'projectile';
			}

			//allow manual overrides
			if (enemy.behavior) {
				behavior = enemy.behavior;
			}

			return behavior;

		},

		//dead and dying things are not alive, neither are projectiles!
		isAlive(enemy) {
			let alive = true;
			if (enemy.status === 'dying' || enemy.status === 'dead' || this.getEnemyBehavior(enemy) === 'projectile') {
				alive = false;
			}
			return alive;
		},

		healPlayer(amount = 1, cause = 'potion') {
			let message = '<p>';

			store.player.hp += amount;

			if (store.player.hp > 5) {
				store.player.hp = 5;
			}

			if (cause === 'potion') {
				message += 'You found a ' + cause.replace('-',' ').toUpperCase() + ' and took a swig. ';
			}

			message += 'You were healed ' + amount + ' HP!</p>';
			this.showDialog(message, 'pickup');
		},

		//damage the player (cause is the enemy type, eg 'purple-slime')
		damagePlayer(amount = 1, cause = 'an-enemy') {

			let message = '';

			store.player.hp -= amount;

			if (store.player.hp <= 0) {
				store.player.hp = 0;
			}
			store.player.status = 'hurt';

			if (cause === 'pit') {
				message = '<p>You fell into a PIT taking ' + amount + ' DMG!</p>';
			} else {
				message = '<p>' + cause.replace('-',' ').toUpperCase() + ' hit you for ' + amount + ' DMG!</p>';
			}
			this.showDialog(message, 'hit');

			//if player died, restart the level
			if (store.player.hp === 0) {
				store.player.status = 'dead';

				//lose half your xp, rounded down
				let xpLost = store.player.xp;
				if (store.player.xp > 0) {
	    		store.player.xp = Math.floor(store.player.xp / 2);
	    		xpLost -= store.player.xp;
	    	}

				message = message.slice(0,-5); //strip off "!</p>";
				message += ', and you were DEFEATED! You lost ' + xpLost + ' XP!</p><p>&nbsp;<p>Press SPACE to RETRY.</p>';

				this.showDialog(message, 'die', true);

				//require a player input, then continue murdering player
				window.removeEventListener('keyup', this.handleKeyPress);
				window.addEventListener('keyup', this.killPlayer);
			}
		},

		//reset the player, reload the level, and re-enable normal keypresses
		killPlayer(e) {
			if (e.keyCode === 32) {
				this.goToLevel(store.currentLevelNum);

				window.removeEventListener('keyup', this.killPlayer);
				window.addEventListener('keyup', this.handleKeyPress);
			}
		},

		//if we have 21 lit pips, display a success message and wait for input to continue
		checkForLevelComplete() {
			if (store.pips === 21) {

				//we'll randomly tack one of these on to the level complete message
				const successPhrases = [
					'Everyone is very impressed!',
					'You receive a ton of FAN MAIL!',
					'The LOCALS hold a CELEBRATION in your honor!',
					'Your MOTHER sends you a LETTER OF CONGRATULATIONS!',
					'A BAR in town offers you a 50% OFF COUPON!',
					'The PRINCESS still refuses to go on a DATE with you.',
					'An ADORABLE CHILD names her pet SLIME after you.',
					'An OLD WOMAN makes you a delicious CASSEROLE.',
					'VILLAGES erect STATUES of you, but they don\'t really capture your ESSENCE.',
					'The KING insists his ROYAL GUARD could have handled it.'
				];

				store.player.xp += 10;
				this.showDialog('<p>You brought LIGHT back to ' + store.currentLevel.title.toUpperCase() + '! ' + successPhrases[Math.floor(Math.random() * successPhrases.length)] + ' You gain 10 XP!</p><p>&nbsp;</p><p>Press SPACE to travel to a NEW WORLD.</p>', 'win', true);

				//require a player input, then continue murdering player
				window.removeEventListener('keyup', this.handleKeyPress);
				window.addEventListener('keyup', this.completeLevel);
	  		
	  	}
		},

		//change levels and re-enable normal keypresses
		completeLevel(e) {
			if (e.keyCode === 32) {
				this.goToLevel(store.currentLevelNum + 1);

		  	window.removeEventListener('keyup', this.completeLevel);
				window.addEventListener('keyup', this.handleKeyPress);
			}
		},

		// load a level and reset player location / die rotation
		goToLevel(levelNum) {

			//don't load an invalid level
			if (levelNum < 0 || levelNum >= store.levels.length) return;

			//change levels
			store.currentLevelNum = levelNum;
			store.currentLevel = JSON.parse(JSON.stringify(store.levels[store.currentLevelNum]));

			//reset player info and progress
			store.player.location = store.currentLevel.entrance;
			store.player.hp = 5;
			store.player.items = ['torch'];
			store.player.direction = 'right';
			store.player.status = 'active';
			store.pips = 0;

			//close dialogs (so if you need to persist a dialog between level changes, call it after)
			store.windows.dialog.open = false;
			
			//reset the rotation
			this.resetDieRotation();
		}


	}

}
</script>

<style lang="scss">
.threeDspace {
	margin:auto;
	width: 450px;
	height: 450px;
	perspective: 1000px;
}
#die {
	width: 100%;
	height: 100%;
	position: absolute;
	transform-style: preserve-3d;
	transition: transform 1s;
}

#die.level-changing {
	transform: scale(0) rotateX(360deg) rotateY(360deg) rotateZ(180deg);
	transition: transform 5s;
}

.core {
	width: 100%;
	height: 100%;
	position: absolute;
	transform-style: preserve-3d;
  left: 25px;
  top: 25px;

  .core__face {
		width:400px;
		height:400px;
		border-color:#000;
		background-color:#000;
		position:absolute;
		backface-visibility: hidden;
		&:nth-of-type(1) 		{ transform: translateZ(200px);}
		&:nth-of-type(2) 		{ transform: rotateY(180deg) rotateZ(180deg) translateZ(200px);}
		&:nth-of-type(3) 		{ transform: rotateY(90deg) rotateZ(-90deg) translateZ(200px); }
		&:nth-of-type(4) 		{ transform: rotateY(-90deg) rotateZ(-90deg) translateZ(200px); }
		&:nth-of-type(5) 		{ transform: rotateX(90deg) rotateZ(90deg) translateZ(200px); }
		&:nth-of-type(6) 		{ transform: rotateX(-90deg) rotateZ(-90deg) translateZ(200px); }
	}
}

</style>