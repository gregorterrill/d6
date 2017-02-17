<template>
	<div :class="'die__tile die__tile--' + tileType">
		<div :class="'game-object game-object--' + tileObject" v-if="tileObject"></div>
	</div>
</template>

<script>
import store from '../data/store.js'

export default {
	props: ['value','face','row','col'],
	computed: {
		tileType() {
			let type = '';
			switch(this.value) {

				case '●':
					type += 'pip';
					break;

				case '○':
					type += 'pip-active';
					break;

				case 'Y':
					type += 'tree'
					break;

				case 'X':
					type += 'water'
					break;

				case 'A':
					type += 'mountain'
					break;

				case 'W':
					type += 'town'
					break;

				case '-':
					type += 'bridge-hor'
					break;

				case '|':
					type += 'bridge-vert'
					break;

				default:
					type += 'open';
			}
			return type;
		},
		tileObject() {
			let objectName = false;

			if (store.player.location.face === this.face &&
					store.player.location.row === this.row &&
					store.player.location.col === this.col ) {
				objectName = 'player';

				objectName += ' player--' + store.player.status;

				for (let item of store.player.items) {
					objectName += ' player--' + item;
				}
				
			}

			for (let enemy of store.currentLevel.enemies) {
				if (enemy.location.face === this.face &&
						enemy.location.row === this.row &&
						enemy.location.col === this.col ) {

					objectName = enemy.type;
				}
			}

			for (let pickup of store.currentLevel.pickups) {
				if (pickup.location.face === this.face &&
						pickup.location.row === this.row &&
						pickup.location.col === this.col ) {

					objectName = pickup.type;
				}
			}

			return objectName;
		}
	}
}
</script>

<style lang="scss">
.die__row {
	display:block;
}
.die__tile {
	float:left;
	width:64px;
	height:64px;
	font-size: 64px;
  line-height: 64px;
  border-right:1px solid rgba(0,0,0,0.1);
  border-bottom:1px solid rgba(0,0,0,0.1);
  background-size:256px 256px;
  background-image:url('../assets/tiles-grass.png');
  background-position:0 0;
  image-rendering: optimizeSpeed;
  image-rendering: -moz-crisp-edges;
  image-rendering: -o-crisp-edges;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: pixelated;
  image-rendering: optimize-contrast;
  -ms-interpolation-mode: nearest-neighbor;

  &:nth-of-type(7n+7) { border-right:none;}
  &:nth-of-type(1n+43) { border-bottom:none;}
}

.die--tileset-desert .die__tile { background-image:url('../assets/tiles-desert.png'); }

// TILE TYPES
.die__tile--open {
	background-position:0 0;
}

.die__tile--tree {
	background-position:-64px 0;
}

.die__tile--water {
	opacity:0.85;
	background-position:0 -64px;
	animation:water 0.5s infinite;
}

.die__tile--bridge-hor {
	background-position:-64px -64px;
}

.die__tile--bridge-vert {
	background-position:-128px -64px;
}

.die__tile--mountain {
	background-position:-64px -128px;
}

.die__tile--town {
	background-position:-192px -128px;
}

.die__tile--pip {
	background-position:-128px 0;
}

.die__tile--pip-active {
	background-position:-192px 0;
	animation:pip 0.5s infinite;
}

// GENERAL GAME OBJECTS
.game-object {
	width:64px;
	height:64px;
	background-image:url('../assets/sprites.png');
	background-size:128px 512px;
	image-rendering: optimizeSpeed;
  image-rendering: -moz-crisp-edges;
  image-rendering: -o-crisp-edges;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: pixelated;
  image-rendering: optimize-contrast;
  -ms-interpolation-mode: nearest-neighbor;
}

// PICKUP OBJECTS
.game-object--sword {
	background-position:0 -320px;
}
.game-object--boat {
	background-position:0 -448px;
}

// PLAYER OBJECTS
.game-object--player {
	background-position:0 0;
  animation:objectBounce 0.75s infinite;
}

.player--sword {
	background-position:0 -64px;
  animation:objectBounce 0.75s infinite;
}

.player--boat {
	background-position:0 -384px;
  animation:objectBounce 0.5s infinite;
}

.die__tile--bridge-hor,
.die__tile--bridge-vert {
	.player--boat { opacity:0.2; }
}

.player--hit {
	animation:flash 0.1s linear infinite alternate;
}

// ENEMY OBJECTS
.game-object--blueslime {
	opacity:0.7;
	background-position:0 -128px;
  animation:objectBounce 0.5s infinite;
}

.game-object--purpleslime {
	opacity:0.7;
	background-position:0 -192px;
  animation:objectBounce 0.5s infinite;
}

// ANIMATIONS
@keyframes objectBounce {
	0% {background-position-x:0;}
	50% {background-position-x:0;}
  50.001% {background-position-x:-64px;}
  100% {background-position-x:-64px;}
}
@keyframes water {
	0% {background-position:0 -64px;}
	50% {background-position:0 -64px;}
  50.001% {background-position:0 -128px;}
  100% {background-position:0 -128px;}
}
@keyframes pip {
	0% {background-position:-192px 0;}
	50% {background-position:-192px 0;}
  50.001% {background-position:-192px -64px;}
  100% {background-position:-192px -64px;}
}
@keyframes flash {
	from { opacity:1; }
	to { opacity:0.3; }
}

</style>