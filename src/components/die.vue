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
  	this.$refs['music'].volume = 0.25; //0.25;
  },
  data() {
  	return {
  		currentFace: 0,
	  	dieRotation: { x: 0, y: 0, z:0 },
	  	sounds: ['step','bump','flame','sail','hit','die','pickup','fireball','fizzle','win'],
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
					store.windows.menu.open = !store.windows.menu.open;
					//TODO: dont allow other keypresses until this closes
					break;

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

		// get the contents of a tile, which will just be one character, eg. "X" for water
		getTileValue(targetTile) {
			return this.level.faces[targetTile.face][targetTile.row][targetTile.col];
		},

		// check if a tile blocks movement
		isTilePassable(targetTile, objectType = 'player') {
			let passable = false;

			//if you're on a boat, you can pass water and bridges
			if (store.player.items.includes('boat') && objectType === 'player') {

				switch(this.getTileValue(targetTile)) {
					case 'X':
					case '-':
					case '|':
						passable = true;
						break;
				}

			// projectiles can move over open water and open land, pits and bridges
			} else if (objectType === 'projectile') {
				
				switch(this.getTileValue(targetTile)) {
					case 'X':
					case ' ':
					case '-':
					case '|':
					case 'P':
						passable = true;
						break;
				}

			// player on foot, and land-based enemies
			} else {
				switch(this.getTileValue(targetTile)) {
					case ' ':
					case '-':
					case '|':
					case 'Y':
					case 'W':
						passable = true;
						break;
				}
			}

			//the player on foot only
			if (!store.player.items.includes('boat') && objectType === 'player') {
				switch(this.getTileValue(targetTile)) {

					case 'P':
						passable = true;
						break;

					//if the player is trying to move onto a water tile, check if it has a boat on it
					case 'X':
							for (let pickup of store.currentLevel.pickups) {
								if (pickup.type === 'boat' && this.isObjectOnTile(pickup, targetTile)) {
									passable = true;
								}
							}
						break;
				}
			}

			//for enemies, we need to check if there's another (non-projectile) enemy on the tile
			//as enemies can't move into other enemies
			if (objectType === 'enemy') {
				for (let otherEnemy of store.currentLevel.enemies) {
					if (this.isObjectOnTile(otherEnemy, targetTile) && otherEnemy.behavior != 'projectile') {
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

		//check if an object is on a tile
		isObjectOnTile(object, tile) {
			let onTile = false;
			if (tile.face === object.location.face &&
  				tile.row === object.location.row &&
  				tile.col === object.location.col) {
				onTile = true;
			}
			return onTile;
		},

		//move an object to target tile
		//object is either 'player' or an object in currentLevel
		moveObjectToTile(targetTile, object = 'player') {

			//if it's the player we need to also rotate the cube
			if (object === 'player') {
				store.player.location = targetTile;
				this.rotateDie(this.currentFace, targetTile.face);
				this.currentFace = targetTile.face;
			} else {
				object.location = targetTile;
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
					blocked = false;

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
	  		
	  		//activate land pip from land, or sea pip from boat
	  		} else if ((this.getTileValue(targetTile) == '●' && !store.player.items.includes('boat')) ||
	  			(this.getTileValue(targetTile) == '▪' && store.player.items.includes('boat'))) {
			  	this.lightPip(targetTile);

			  //you're just blocked
			  } else {
		  		this.playSound('bump');
		  	}
		  }

		  //perform the actual move
		  if (moved) {
		  	this.moveObjectToTile(targetTile);

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
		  	this.resolvePlayerAttack(originTile);

		  	//if the player moved into a pickup, get it
		  	this.collectPickups();

		  	//enemies move and shoot
		  	this.doEnemyStep();
		  }		  
		},

		//resolve attacks against enemies - we need the origin tile in case we get repelled back
		resolvePlayerAttack(originTile) {

	  	//reset enemy status and check if player walked into an enemy
	  	store.currentLevel.enemies.forEach(function (enemy, i) {

	  		//reset enemy status
	  		enemy.status = 'active';

	  		//check if player moved into enemy
	  		if (this.isObjectOnTile(enemy, store.player.location)) {

	  			//if you walk into a fireball, you die
	  			if (enemy.behavior === 'projectile') {
	  				this.damagePlayer(5, enemy.type);
	  				enemy.status = 'dead';
	  				return;
	  			}

	  			//dont bother if the player is on a boat - overlaps mean they are under a bridge with an enemy on it
	  			if (!store.player.items.includes('boat') || 
	  				(store.player.items.includes('boat') && enemy.type === 'serpent')) {

		  			if (store.player.items.includes('sword')) {
		  				//kill that sucker
		  				store.currentLevel.enemies.splice(i,1);
		  				store.player.xp++;
		  				store.player.status = 'attacking';
		  				this.showDialog('<p>Defeated ' + enemy.type.replace('-',' ').toUpperCase() + ' and gained 1 XP!</p>', 'hit');

		  			} else {
		  				//hurt player
			  			this.damagePlayer(1, enemy.type);
			  			//attacking enemies dont move this turn
			  			enemy.status = 'attacking';
			  			//move the player back to the tile they were on
			  			this.moveObjectToTile(originTile);
		  			}
		  		}
	  		}
		  }, this);
		},

		//player collects any pickups they're standing on
		collectPickups() {
			store.currentLevel.pickups.forEach(function (pickup, i) {
				if (this.isObjectOnTile(pickup, store.player.location)) {

					//messages open their content in a dialog
					if (pickup.type == 'message') {
						this.showDialog(pickup.content, false, true);

					//sword that are on pedestals get replaced by empty pedestals
					} else if (pickup.type == 'sword' && pickup.status != 'hidden') {

						if (pickup.status != 'taken') { 
							store.player.items.push(pickup.type);
							pickup.status = 'taken';
							this.showDialog('<p>You found a ' + pickup.type.toUpperCase() + '!</p>', 'pickup');
						}

					//all other pickups are added to inventory and removed from level
					} else {
						store.player.items.push(pickup.type); 
						store.currentLevel.pickups.splice(i,1);

						if (pickup.type !== 'boat') { 
							this.showDialog('<p>You found a ' + pickup.type.toUpperCase() + '!</p>', 'pickup');
						}
					}	
				}
			}, this);
		},

		// move enemies
		doEnemyStep() {

			//activate all enemies - any new enemies created during this step (eg. fireballs) will be appended to the array and also activated this step
			for (let enemy of store.currentLevel.enemies) {
				//sentries have unique activations
				if (enemy.behavior === 'sentry') {
					this.activateSentry(enemy);
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
								if (!this.isTilePassable({ 'face': enemy.location.face, 'row': enemy.location.row, 'col': i }, 'projectile')) {
									shotBlocked = true;
								}
							}
						} else {
							for (let i = enemy.location.col + 1; i <= store.player.location.col; i++) {
								if (!this.isTilePassable({ 'face': enemy.location.face, 'row': enemy.location.row, 'col': i }, 'projectile')) {
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
								'behavior': 'projectile',
								'location': enemy.location,
								'direction': enemy.direction,
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
					adjacentTile = this.findAdjacentTile(originTile, enemy.direction),
					enemyType = (enemy.behavior) ? enemy.behavior : 'enemy';

			// STEP 1: get target tile to move to
			targetTile = adjacentTile.tile;
	
			// STEP 2: check if the tile is passable to see if we can move or if we need to do something else
			if (this.isTilePassable(targetTile, enemyType)) {
				//move and update the direction if we changed faces
				this.moveObjectToTile(targetTile, enemy);
				enemy.direction = adjacentTile.newDirection;
			
			// projectiles fizzle if they can't move
			} else if (enemy.behavior === 'projectile') {
				enemy.status = 'dead';
				this.playSound('fizzle');

			//regular enemies turn around
			} else {
				enemy.direction = this.getOppositeDirection(enemy.direction);
			}

			// STEP 3: if we're touching the player, hurt the player and move back
			if (this.isObjectOnTile(enemy, store.player.location)) {

				//projectiles immediately kill you
				if (enemy.behavior === 'projectile') {
					this.damagePlayer(5, enemy.type);
					enemy.status = 'dead';

				//dont do damage if the player is on a boat - overlaps mean they are under a bridge with an enemy on it
				} else if (!store.player.items.includes('boat')) {
	  			this.damagePlayer(1, enemy.type);
	  			//move the enemy back to the tile they were on
			  	this.moveObjectToTile(originTile, enemy);
			  	enemy.direction = originDirection;
			  	enemy.status = 'attacking';
	  		}
	  	}

	  	// STEP 4: projectiles only - check if we're on an enemy, pip, or boat
	  	if (enemy.behavior === 'projectile') {
	  		//light pips
	  		if (this.getTileValue(targetTile) === '●' || this.getTileValue(targetTile) === '▪') {
	  			this.lightPip(targetTile);
	  			enemy.status = 'dead';
	  			//dont need to play fizzle sound as pip lighting noise will play
	  		}

	  		//kill enemies
	  		for (let otherEnemy of store.currentLevel.enemies) {
					if (this.isObjectOnTile(otherEnemy, enemy.location) && otherEnemy.behavior != 'projectile') {
						otherEnemy.status = 'dead';
						enemy.status = 'dead';
						this.playSound('fizzle');
					}
				}

				//stop at pickups, if its a boat, sink it
				store.currentLevel.pickups.forEach(function (pickup, i) {
					if (this.isObjectOnTile(pickup, enemy.location)) {
						if (pickup.type === 'boat') {
							pickup.type = 'debris';
						}
						enemy.status = 'dead';
						this.playSound('fizzle');
					}
				}, this);
	  	}
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

				let xpLost = store.player.xp;
				store.player.xp = 0;

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
				store.player.xp = 0;
				store.player.direction = 'right';
				store.player.status = 'active';
				store.windows.dialog.open = false;
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
				store.windows.dialog.open = false;
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
			store.pips = 0;
			
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