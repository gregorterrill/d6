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

		<!-- audio embeds -->
		<audio ref="sound-step" :src="getAudioSource('step')" preload />
		<audio ref="sound-bump" :src="getAudioSource('bump')" preload />
		<audio ref="sound-flame" :src="getAudioSource('flame')" preload />
		<audio ref="sound-sail" :src="getAudioSource('sail')" preload />
		<audio ref="sound-hit" :src="getAudioSource('hit')" preload />
		<audio ref="sound-die" :src="getAudioSource('die')" preload />

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
  data() {
  	return {
  		currentFace: 0,
	  	dieRotation: { x: 0, y: 0, z:0 }
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
  		return require('../assets/sound/' + soundName + '.wav');
  	},

  	// play a sound!
		playSound(soundName) {
			var soundEl = this.$refs['sound-' + soundName];
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

			} else {
			
				//if you're on foot, you can pass these
				switch(this.getTileValue(targetTile)) {
					case ' ':
					case '-':
					case '|':
					case 'Y':
						passable = true;
						break;

					//for water, check if it has a boat on it
					case 'X':
						for (let pickup of store.currentLevel.pickups) {
							if (objectType === 'player' && pickup.type === 'boat' && this.isObjectOnTile(pickup, targetTile)) {
								passable = true;
							}
						}
				}
			}
			
			return passable;
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

		//move the player to a specific tile
		movePlayerToTile(targetTile) {
			store.player.location = targetTile;
			this.rotateDie(this.currentFace, targetTile.face);
			this.currentFace = targetTile.face;
		},

		// move a player in a given direction, moving to an adjacent face if needed
		// also trigger any collision events and play sounds
		movePlayer(direction) {

			let originTile = store.player.location,
					targetTile = null,
					moved = false,
					blocked = false;

			//reset player status
			store.player.status = 'active';

			// check if there is a spot on the current face to move to
			switch(direction) {
		    case 'right':
		    	if (originTile.col+1 <= 6) {
		    		targetTile = { 'face': originTile.face, 'row': originTile.row, 'col': originTile.col+1 };
		    		if (this.isTilePassable(targetTile)) {
				    	moved = true;
				    } else {
				    	blocked = true;
				    }
			    }
		      break;

		    case 'left':
		    	if (originTile.col-1 >= 0) {
		    		targetTile = { 'face': originTile.face, 'row': originTile.row, 'col': originTile.col-1 };
		    		if (this.isTilePassable(targetTile)) {
				    	moved = true;
				    } else {
				    	blocked = true;
				    	
				    }
			    }
		      break;

		   	case 'down':
		    	if (originTile.row+1 <= 6) {
		    		targetTile = { 'face': originTile.face, 'row': originTile.row+1, 'col': originTile.col };
		    		if (this.isTilePassable(targetTile)) {
				    	moved = true;
			    	} else {
				    	blocked = true;
				    }
			    }
		      break;

		    case 'up':
		    	if (originTile.row-1 >= 0) {
		    		targetTile = { 'face': originTile.face, 'row': originTile.row-1, 'col': originTile.col };
		    		if (this.isTilePassable(targetTile)) {
				    	moved = true;
			    	} else {
				    	blocked = true;
				    }
			    }
		      break;
		  }

		  // if position hasn't changed yet, we need to change face
		  if (!moved && !blocked) {
	    	targetTile = this.getAdjacentTileFromOtherFace(direction, store.player.location).tile;
	    	if (this.isTilePassable(targetTile)) {
	  			moved = true;
	  		} else {
	  			blocked = true;
	  		}
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
	  		
	  		//activate pip
	  		} else if (this.getTileValue(targetTile) == '●') {
			  	this.$set(this.level.faces[targetTile.face][targetTile.row], [targetTile.col], '○');
			  	store.pips++;
			  	this.playSound('flame');

			  	if (store.pips === 21) {
			  		this.goToLevel(store.currentLevelNum + 1);
			  	}

			  //you're just blocked
			  } else {
		  		this.playSound('bump');
		  	}
		  }

		  //perform the actual move
		  if (moved) {
		  	this.movePlayerToTile(targetTile);
		  	this.playSound('step');

		  	//check if player walked into an enemy
		  	store.currentLevel.enemies.forEach(function (enemy, i) {
		  		if (this.isObjectOnTile(enemy, store.player.location)) {

		  			if (store.player.items.includes('sword')) {
		  				//kill that sucker
		  				store.currentLevel.enemies.splice(i,1);
		  				this.playSound('hit');
		  				store.player.xp++;

		  			} else {
		  				//hurt player
			  			this.damagePlayer();
			  			//freeze the enemy so they dont move this turn
			  			enemy.status = 'frozen';
			  			//move the player back to the tile they were on
			  			this.movePlayerToTile(originTile);
		  			}
		  		}
		  	}, this);

		  	//check if player walked into a pickup
		  	store.currentLevel.pickups.forEach(function (pickup, i) {
					if (this.isObjectOnTile(pickup, store.player.location)) {
						store.player.items.push(pickup.type); 
						store.currentLevel.pickups.splice(i,1);
					}
				}, this);

		  	this.doEnemyStep();

		  	//check if an enemy has walked into player
		  	for (let enemy of store.currentLevel.enemies) {
		  		if (this.isObjectOnTile(enemy, store.player.location)) {
		  			this.damagePlayer();

		  			//TODO: move th enemy back to the tile they were on
		  		}
		  	}

		  	
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

		//damage the player
		damagePlayer() {
			store.player.hp--;

			this.playSound('hit');
			store.player.status = 'hit';

			//if player died, restart the level
			if (store.player.hp <= 0) {
				this.playSound('die');
				alert('GAME OVER');
				this.goToLevel(store.currentLevel);

			}
		},

		// move enemies
		doEnemyStep() {

			let targetTile = null,
					originTile = null;

			for (let enemy of store.currentLevel.enemies) {

				//if the enemy is frozen (due to a player collision) they dont move this step
				if (enemy.status === 'frozen') {
					enemy.status = 'active';
					continue;
				}

				let adjacentTile = null;
				
				switch (enemy.direction) {

					case 'right':
						
						// get target tile from this or adjacent face
						if (enemy.location.col+1 > 6) {
							adjacentTile = this.getAdjacentTileFromOtherFace(enemy.direction, enemy.location);
							targetTile = adjacentTile.tile;
						} else {
							targetTile = { 'face': enemy.location.face, 'row': enemy.location.row, 'col': enemy.location.col+1 };
						}
						
						// check if the tile is passable to see if we can move
						if (this.isTilePassable(targetTile, 'enemy')) {
							//move and update the direction if we changed faces
							enemy.location = targetTile;
							if (adjacentTile) {
								enemy.direction = adjacentTile.newDirection;
							}
						//otherwise turn around
						} else {
							enemy.direction = 'left';
						}

						break;

					case 'left':
						
						// get target tile from this or adjacent face
						if (enemy.location.col-1 < 0) {
							adjacentTile = this.getAdjacentTileFromOtherFace(enemy.direction, enemy.location);
							targetTile = adjacentTile.tile;
						} else {
							targetTile = { 'face': enemy.location.face, 'row': enemy.location.row, 'col': enemy.location.col-1 };
						}
						
						// check if the tile is passable to see if we can move
						if (this.isTilePassable(targetTile, 'enemy')) {
							//move and update the direction if we changed faces
							enemy.location = targetTile;
							if (adjacentTile) {
								enemy.direction = adjacentTile.newDirection;
							}
						//otherwise turn around
						} else {
							enemy.direction = 'right';
						}

						break;

					case 'down':
	
						// get target tile from this or adjacent face
						if (enemy.location.row+1 > 6) {
							adjacentTile = this.getAdjacentTileFromOtherFace(enemy.direction, enemy.location);
							targetTile = adjacentTile.tile;
						} else {
							targetTile = { 'face': enemy.location.face, 'row': enemy.location.row+1, 'col': enemy.location.col };
						}
						
						// check if the tile is passable to see if we can move
						if (this.isTilePassable(targetTile, 'enemy')) {
							//move and update the direction if we changed faces
							enemy.location = targetTile;
							if (adjacentTile) {
								enemy.direction = adjacentTile.newDirection;
							}
						//otherwise turn around
						} else {
							enemy.direction = 'up';
						}
						break;

					case 'up':

						// get target tile from this or adjacent face
						if (enemy.location.row-1 < 0) {
							adjacentTile = this.getAdjacentTileFromOtherFace(enemy.direction, enemy.location);
							targetTile = adjacentTile.tile;
						} else {
							targetTile = { 'face': enemy.location.face, 'row': enemy.location.row-1, 'col': enemy.location.col };
						}
						
						// check if the tile is passable to see if we can move
						if (this.isTilePassable(targetTile, 'enemy')) {
							//move and update the direction if we changed faces
							enemy.location = targetTile;
							if (adjacentTile) {
								enemy.direction = adjacentTile.newDirection;
							}
						//otherwise turn around
						} else {
							enemy.direction = 'down';
						}
						break;
				}
			}

		},

		// find the tile on an adjacent face (in a given direction) that shares an edge with this one
		// also figure out the directional change if moving from origin tile to that new tile
		getAdjacentTileFromOtherFace(direction, originTile) {
			let targetTile = { 'face': 0, 'row': 0, 'col': 0 },
					newDirection = 'up';

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

			return { 
				'tile': targetTile, 
				'newDirection': newDirection
			};
			
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
			store.player.xp = 0;
			store.player.items = [];
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