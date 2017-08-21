<template>
	<div :class="'die__tile die__tile--' + tileType" :data-face="face" :data-row="row" :data-col="col">
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

				case 'D':
					type += 'decoy';
					break;

				case 'Y':
					type += 'tree';
					break;

				case 'F':
					type += 'forest';
					break;

				case 'X':
					type += 'water';
					type += ' die__tile--special'; //for transparency
					break;

				case 'V':
					type += 'rocks';
					break;

				case 'A':
					type += 'mountain';
					break;

				case 'W':
					type += 'town';
					break;

				case 'H':
					type += 'gate-closed';
					break;

				case 'I':
					type += 'gate-open';
					break;

				case 'C':
					type += 'ice';
					type += ' die__tile--special'; //for transparency
					break;

				case 'P':
					type += 'pit';
					break;

				case 'Q':
					type += 'quicksand';
					break;

				case '-':
					type += 'bridge-hor';
					break;

				case '|':
					type += 'bridge-vert';
					type += ' die__tile--special'; //for rotation
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
				entity += ' player--' + store.player.direction;

				for (let item of store.player.items) {
					entity += ' player--' + item;
				}
				entities.push(entity);
			}

			for (let enemy of store.currentLevel.enemies) {
				if (enemy.location.face === this.face &&
						enemy.location.row === this.row &&
						enemy.location.col === this.col ) {

					entity = 'enemy enemy--' + enemy.type;

					if (enemy.status) {
						entity += ' enemy--' + enemy.status;
					}

					entity += ' enemy--' + enemy.direction;

					entities.push(entity);
				}
			}

			for (let pickup of store.currentLevel.pickups) {
				if (pickup.type !== 'message' &&
						pickup.location.face === this.face &&
						pickup.location.row === this.row &&
						pickup.location.col === this.col ) {

					entity = 'pickup pickup--' + pickup.type;

					if (pickup.container) {
						entity += ' pickup--' + pickup.container;
					}

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

.die__tile:hover::after {
	content: "FACE " attr(data-face) ", ROW " attr(data-row) ", COL " attr(data-col);
	position:absolute;
	top:0;
	left:0;
	background-color:#000;
	color:#FFF;
	padding:4px;
	z-index:99;
	font-size:12px;
	line-height:1.5;
	width:256px;
}

.die__tile,
.die__tile--special::before {
	//opacity:0.6; //DEBUG FOR DESERT
	position:relative;
	float:left;
	width:64px;
	height:64px;
	font-size: 64px;
  line-height: 64px;
  outline:1px solid rgba(0,0,0,0.1);
  background-size:320px 256px;
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

// TILESETS
.die--tileset-desert {
	.die__tile, .die__tile--special::before { background-image:url('../assets/tiles-desert.png'); }
}
.die--tileset-snow {
	.die__tile, .die__tile--special::before { background-image:url('../assets/tiles-snow.png'); }
}
.die--tileset-lava {
	.die__tile, .die__tile--special::before { background-image:url('../assets/tiles-lava.png'); }
}

// TILE TYPES
.die__tile--open {
	background-position:0 0;
}
.die__tile--tree {
	background-position:-64px 0;
}
.die__tile--forest {
	background-position:-128px 0;
}
.die__tile--pit {
	background-position:-192px -64px;
}
.die__tile--quicksand {
	background-position:-256px -64px;
}
.die__tile--rocks {
	opacity:0.85;
	background-position-x: -192px;
	animation:animateTile 0.5s infinite;
}
.die__tile--bridge-hor {
	background-position:0 -64px;
}
.die__tile--mountain {
	background-position:-256px 0;
}
.die__tile--town {
	background-position:-192px 0;
}
.die__tile--gate-closed {
	background-position:-256px -128px;
}
.die__tile--gate-open {
	background-position:-256px -192px;
}
.die__tile--decoy {
	background-position:-128px -64px;
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

//SPECIAL TILES
//these tiles put the tile on a ::before element to apply an effect
//that shouldnt also be applied to entities on the tile
.die__tile--special {
	background-image:none !important;

	&::before {
		content: "";
		position:absolute;
		top:0;right:0;left:0;bottom:0;
		background-position-x: 0;
	}
}
.die__tile--water::before {
	opacity:0.85;
	background-position-x: 0;
	animation:animateTile 0.5s infinite;
}
.die__tile--ice::before {
	background-position:-256px -64px;
	opacity:0.95;
}
.die__tile--bridge-vert::before {
	background-position:0 -64px;
	transform:rotate(90deg);
}

.die--tileset-lava {
	.die__tile--water::before,
	.die__tile--wpip,
	.die__tile--wpip-active,
	.die__tile--rocks { opacity:1; }
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
.pickup {
	z-index:3;
}
.pickup--chest {
	background-position:-128px -320px;
	&.pickup--taken {	background-position:-192px -320px; }
}
.pickup--stone {
	background-position:0 -320px;
	&.pickup--taken {	background-position:-64px -320px;	}
}
.pickup--boat {
	background-position:0 -448px;
	animation:animateSpriteOne 0.5s infinite;
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
  animation:animateSpriteOne 0.5s infinite;
  z-index:5;
}
.player--left,
.player--up {
	transform:scaleX(-1);
}
.player--sword {
	background-position:0 -64px;
  animation:animateSpriteOne 0.5s infinite;
}
.player--attacking {
	background-position:0 -64px;
	animation:animateSpriteTwo 0.25s linear 0s 3 alternate, animateSpriteOne 0.5s linear 1s infinite;
}
.player--sliding {
	background-position:0 0;
	animation:animateSpriteTwo 0.5s linear infinite alternate;
}
.player--hurt,
.player--dead {
	background-position:0 0;
	animation:animateSpriteTwo 0.5s linear infinite alternate, flash 0.5s linear infinite alternate;
}

//PLAYER IN BOAT
.player--boat {
	background-position:0 -384px;
  animation:animateSpriteOne 0.5s infinite;
}
.player--boat.player--hurt {
	animation:animateSpriteOne 0.5s linear infinite alternate,
						flash 0.5s linear infinite alternate;
}
.player--boat.player--dead {
	animation:animateSpriteTwo 0.5s linear infinite alternate,
						flash 0.5s linear infinite alternate;
}
.die__tile--bridge-hor,
.die__tile--bridge-vert {
	.player--boat { opacity:0.2; }
}

// ENEMY ENTITY
.enemy {
	z-index:4;
}
.enemy--left,
.enemy--up {
	transform:scaleX(-1);
}

//SLIMES
.enemy--blue-slime,
.enemy--purple-slime {
	//opacity:0.85;
	background-position:0 -128px;
  animation:animateSpriteOne 0.5s infinite;
  &.enemy--attacking { animation:animateSpriteTwo 0.5s infinite; }
  &.enemy--dying { animation:animateSpriteOne 0.5s infinite, flash 0.5s linear infinite alternate, disappear 0.5s linear 1s infinite; }
}
.enemy--purple-slime {
	background-position:0 -192px;
}

//COURIER
.enemy--courier {
	background-position:0 0;
	animation:animateSpriteThree 0.5s infinite;
	&.enemy--attacking { animation:animateSpriteFour 0.5s infinite; }
  &.enemy--dying { animation:animateSpriteThree 0.5s infinite, flash 0.5s linear infinite alternate, disappear 0.5s linear 1s infinite; }
}

//SKELETONS
.enemy--skeleton {
	background-position:0 0;
	animation:animateSpriteThree 0.5s infinite;
	&.enemy--attacking { animation:animateSpriteFour 0.5s infinite; }
  &.enemy--dying { animation:animateSpriteThree 0.5s infinite, flash 0.5s linear infinite alternate, disappear 0.5s linear 1s infinite; }
}

.enemy--skeleton-archer {
	background-position:0 -128px;
	animation:animateSpriteThree 0.5s infinite;
	&.enemy--attacking { animation:animateSpriteFour 0.5s infinite; }
  &.enemy--dying { animation:animateSpriteThree 0.5s infinite, flash 0.5s linear infinite alternate, disappear 0.5s linear 1s infinite; }
}

.enemy--skeleton-mage {
	background-position:0 -64px;
	animation:animateSpriteThree 0.5s infinite;
	&.enemy--attacking { animation:animateSpriteFour 0.5s infinite; }
  &.enemy--dying { animation:animateSpriteThree 0.5s infinite, flash 0.5s linear infinite alternate, disappear 0.5s linear 1s infinite; }
}

//SERPENTS
.enemy--sea-serpent {
	background-position:0 -256px;
  animation:animateSpriteOne 0.5s infinite;
  &.enemy--attacking { animation:animateSpriteTwo 0.5s infinite; }
  &.enemy--dying { animation:animateSpriteOne 0.5s infinite, flash 0.5s linear infinite alternate, disappear 0.5s linear 1s infinite; }
}

//PROJECTILES
.enemy--fireball,
.enemy--arrow {
	background-position:0 -256px;
	animation:animateSpriteThree 0.5s infinite;
	&.enemy--attacking { animation:animateSpriteThree 0.5s infinite; }
  &.enemy--dying { animation:animateSpriteFour 0.5s infinite, flash 0.5s linear infinite alternate, disappear 0.5s linear 0.5s infinite; }
  &.enemy--down { transform:rotate(90deg); }
	&.enemy--up { transform:rotate(-90deg); }
}

.enemy--arrow {
	background-position:0 -192px;
}

// ANIMATIONS
// these ones are based on the columns in the spritesheet
@keyframes animateSpriteOne {
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
@keyframes animateSpriteThree {
	0% {background-position-x:-256px;}
	50% {background-position-x:-256px;}
  50.001% {background-position-x:-320px;}
  100% {background-position-x:-320px;}
}
@keyframes animateSpriteFour {
	0% {background-position-x:-384px;}
	50% {background-position-x:-384px;}
  50.001% {background-position-x:-448px;}
  100% {background-position-x:-448px;}
}
@keyframes flash {
	0% { opacity: 1; }
	25 { opacity: 0.25; }
	50% { opacity: 0.75 ;}
  75% { opacity: 0.25; }
  100% { opacity: 1; }
}
@keyframes disappear {
	0% { opacity: 0; }
  100% { opacity: 0; }
}

//tile animations are vertical instead
@keyframes animateTile {
	0% {background-position-y: -128px;}
	50% {background-position-y: -128px;}
  50.001% {background-position-y: -192px;}
  100% {background-position-y: -192px;}
}
</style>