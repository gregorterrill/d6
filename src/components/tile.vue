<template>
	<div :class="'die__tile die__tile--' + tileType">
		<div :class="'game-object game-object--' + object" v-for="object in tileObjects"></div>
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
		tileObjects() {
			let objects = [],
				objectName = '';

			if (store.player.location.face === this.face &&
					store.player.location.row === this.row &&
					store.player.location.col === this.col ) {
				objectName = 'player';
				
				objectName += ' player--' + store.player.status;

				for (let item of store.player.items) {
					objectName += ' player--' + item;
				}

				objects.push(objectName);
			}

			for (let enemy of store.currentLevel.enemies) {
				if (enemy.location.face === this.face &&
						enemy.location.row === this.row &&
						enemy.location.col === this.col ) {

					objectName = enemy.type;

					if (enemy.status) {
						objectName += ' ' + enemy.type + '--' + enemy.status;
					}

					objects.push(objectName);
				}
			}

			for (let pickup of store.currentLevel.pickups) {
				if (pickup.location.face === this.face &&
						pickup.location.row === this.row &&
						pickup.location.col === this.col ) {

					objects.push(pickup.type);
				}
			}

			return objects;
		}
	}
}
</script>

<style lang="scss">
.die__row {
	display:block;
}
.die__tile {
	position:relative;
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
	position:absolute;
	top:0;right:0;bottom:0;left:0;
	width:64px;
	height:64px;
	background-image:url('../assets/sprites.png');
	background-size:512px 512px;
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
.game-object--message {
	display:none;
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

.player--hurt,
.player--dead {
	animation:playerHurt 0.5s linear infinite alternate;
}
.player--attacking {
	animation:playerAttack 0.25s linear infinite alternate;
}

// ENEMY OBJECTS
.game-object--blueslime {
	opacity:0.7;
	background-position:0 -128px;
  animation:objectBounce 0.5s infinite;
}

.blueslime--attacking {
	animation:enemyAttack 0.5s infinite;
}

.game-object--purpleslime {
	opacity:0.7;
	background-position:0 -192px;
  animation:objectBounce 0.5s infinite;
}

.purpleslime--attacking {
	animation:enemyAttack 0.5s infinite;
}

// ANIMATIONS
@keyframes enemyAttack {
	0% {background-position-x:-192px;}
	50% {background-position-x:-192px;}
  50.001% {background-position-x:-128px;}
  100% {background-position-x:-128px;}
}
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
@keyframes playerHurt {
	0% {opacity:1; background-position:-128px 0px;}
	25 { opacity: 0.3; }
	50% { opacity:0.7; background-position:-128px 0px;}
  50.001% {background-position:-192px 0px;}
  75% { opacity: 0.3; }
  100% {opacity:1; background-position:-192px 0px;}
}
@keyframes playerAttack {
	0% {background-position:-128px -64px;}
	50% {background-position:-128px -64px;}
  50.001% {background-position:-192px -64px;}
  100% {background-position:-192px -64px;}
}

</style>