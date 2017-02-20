<template>
	<div :class="'die__tile die__tile--' + tileType">
		<div :class="'entity ' + entity" v-for="entity in tileEntities"></div>
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

				case '▪':
					type += 'wpip';
					break;
				
				case '□':
					type += 'wpip-active';
					break;

				case 'Y':
					type += 'tree'
					break;

				case 'X':
					type += 'water'
					break;

				case 'V':
					type += 'rocks'
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
		tileEntities() {
			let entities = [],
				entity = '';

			if (store.player.location.face === this.face &&
					store.player.location.row === this.row &&
					store.player.location.col === this.col ) {
				entity = 'player';
				
				entity += ' player--' + store.player.status;

				for (let item of store.player.items) {
					entity += ' player--' + item;
				}

				if (store.player.direction === 'left') {
					entity += ' player--left';
				}

				entities.push(entity);
			}

			for (let enemy of store.currentLevel.enemies) {
				if (enemy.location.face === this.face &&
						enemy.location.row === this.row &&
						enemy.location.col === this.col ) {

					entity = 'enemy--' + enemy.type;

					if (enemy.status) {
						entity += ' enemy--' + enemy.status;
					}

					entity += ' enemy--' + enemy.direction;

					entities.push(entity);
				}
			}

			for (let pickup of store.currentLevel.pickups) {
				if (pickup.location.face === this.face &&
						pickup.location.row === this.row &&
						pickup.location.col === this.col ) {

					entity = 'pickup--' + pickup.type;

					if (pickup.status) {
						entity += ' pickup--' + pickup.status;
					}

					entities.push(entity);
				}
			}

			return entities;
		}
	}
}
</script>

<style lang="scss">
.die__row {
	display:block;
}
.die__tile,
.die__tile--water::before {
	position:relative;
	float:left;
	width:64px;
	height:64px;
	font-size: 64px;
  line-height: 64px;
  outline:1px solid rgba(0,0,0,0.1);
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


.die--tileset-desert {
	.die__tile, .die__tile--water::before { background-image:url('../assets/tiles-desert.png'); }
}
.die--tileset-snow {
	.die__tile, .die__tile--water::before { background-image:url('../assets/tiles-snow.png'); }
}

// TILE TYPES
.die__tile--open {
	background-position:0 0;
}

.die__tile--tree {
	background-position:-64px 0;
}

.die__tile--water {
	background-image:none !important;

	&::before {
		content: "";
		position:absolute;
		top:0;right:0;left:0;bottom:0;
		opacity:0.85;
		background-position-x: 0;
		animation:animateTile 0.5s infinite;
	}
}

.die__tile--rocks {
	opacity:0.85;
	background-position-x: -192px;
	animation:animateTile 0.5s infinite;
}

.die__tile--bridge-hor {
	background-position:0 -64px;
}

.die__tile--bridge-vert {
	background-position:-192px -64px;
}

.die__tile--mountain {
	background-position:-128px 0;
}

.die__tile--town {
	background-position:-192px 0;
}

.die__tile--pip {
	background-position:-128px -64px;
}

.die__tile--pip-active {
	background-position-x: -128px;
	animation:animateTile 0.5s infinite;
}

.die__tile--wpip {
	opacity:0.85;
	background-position:-64px -64px;
}

.die__tile--wpip-active {
	opacity:0.85;
	background-position-x: -64px;
	animation:animateTile 0.5s infinite;
}

// GENERAL GAME ENTITIES
.entity {
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

// PICKUP ENTITIES
.pickup--generic {
	background-position:0 -256px;
	&.pickup--taken {	background-position:-64px -256px;	}
}
.pickup--sword {
	background-position:0 -320px;
	&.pickup--taken {	background-position:-64px -320px;	}
}
.pickup--boat {
	background-position:0 -448px;
	animation:animateSprite 0.5s infinite;
}
.pickup--debris {
	background-position:0 -448px;
	animation:animateSpriteTwo 0.5s infinite;
}

.pickup--message,
.pickup--hidden {
	display:none;
}

// PLAYER ENTITIES
.player {
	background-position:0 0;
  animation:animateSprite 0.5s infinite;
  z-index:2;
}
.player--left {
	transform:scaleX(-1);
}
.player--sword {
	background-position:0 -64px;
  animation:animateSprite 0.5s infinite;
}
.player--hurt,
.player--dead {
	animation:playerHurt 0.5s linear infinite alternate;
}
.player--attacking {
	animation:playerAttack 0.25s linear infinite alternate;
}

//PLAYER IN BOAT
.player--boat {
	background-position:0 -384px;
  animation:animateSprite 0.5s infinite;
}
.player--boat.player--hurt {
	animation:playerShipHurt 0.5s linear infinite alternate;
}
.player--boat.player--dead {
	animation:playerShipwreck 0.5s linear infinite alternate;
}

// ENEMY ENTITY
.enemy--blue-slime {
	opacity:0.7;
	background-position:0 -128px;
  animation:animateSprite 0.5s infinite;
}
.enemy--purple-slime {
	opacity:0.7;
	background-position:0 -192px;
  animation:animateSprite 0.5s infinite;
}
.enemy--serpent {
	background-position:0 -256px;
  animation:animateSprite 0.5s infinite;
}
.enemy--fireball, 
.enemy--fireball.enemy--attacking {
	background-position:0 -256px;
  animation:animateFireball 0.5s infinite;
}
.enemy--left,
.enemy--down {
	transform:scaleX(-1);
}

.enemy--fireball.enemy--down {
	transform:rotate(90deg);
}
.enemy--fireball.enemy--up {
	transform:rotate(-90deg);
}

.enemy--attacking {
	animation:animateSpriteTwo 0.5s infinite;
}

.die--tileset-snow .enemy--blue-slime,
.die--tileset-snow .enemy--purple-slime {
	opacity:0.85;
}

// STUFF THAT GOES UNDER BRIDGES!
.die__tile--bridge-hor,
.die__tile--bridge-vert {
	.player--boat,
	.enemy--fireball { opacity:0.2; }
}

// ANIMATIONS
@keyframes animateSprite {
	0% {background-position-x:0;}
	50% {background-position-x:0;}
  50.001% {background-position-x:-64px;}
  100% {background-position-x:-64px;}
}
@keyframes animateSpriteTwo {
	0% {background-position-x:-128px;}
	50% {background-position-x:-128px;}
  50.001% {background-position-x:-192px;}
  100% {background-position-x:-192px;}
}
@keyframes animateTile {
	0% {background-position-y: -128px;}
	50% {background-position-y: -128px;}
  50.001% {background-position-y: -192px;}
  100% {background-position-y: -192px;}
}
@keyframes animateFireball {
	0% {background-position-x:-256px;}
	50% {background-position-x:-256px;}
  50.001% {background-position-x:-320px;}
  100% {background-position-x:-320px;}
}
@keyframes playerHurt {
	0% {opacity:1; background-position:-128px 0px;}
	25 { opacity: 0.3; }
	50% { opacity:0.7; background-position:-128px 0px;}
  50.001% {background-position:-192px 0px;}
  75% { opacity: 0.3; }
  100% {opacity:1; background-position:-192px 0px;}
}
@keyframes playerShipHurt {
	0% {opacity:1; background-position:0 -384px;}
	25 { opacity: 0.3; }
	50% { opacity:0.7; background-position:0 -384px;}
  50.001% {background-position:-64px -384px;}
  75% { opacity: 0.3; }
  100% {opacity:1; background-position:-64px -384px;}
}
@keyframes playerShipwreck {
	0% {opacity:1; background-position:-128px -384px;}
	25 { opacity: 0.3; }
	50% { opacity:0.7; background-position:-128px -384px;}
  50.001% {background-position:-192px -384px;}
  75% { opacity: 0.3; }
  100% {opacity:1; background-position:-192px -384px;}
}
@keyframes playerAttack {
	0% {background-position:-128px -64px;}
	50% {background-position:-128px -64px;}
  50.001% {background-position:-192px -64px;}
  100% {background-position:-192px -64px;}
}

</style>