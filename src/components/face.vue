<template>
	<div class="die__face" :data-pips="pips" :id="face">
		<tile v-for="(tile, col) in tiles[0]" :value="tile" :face="pips - 1" :row="0" :col="col"></tile>
		<tile v-for="(tile, col) in tiles[1]" :value="tile" :face="pips - 1" :row="1" :col="col"></tile>
		<tile v-for="(tile, col) in tiles[2]" :value="tile" :face="pips - 1" :row="2" :col="col"></tile>
		<tile v-for="(tile, col) in tiles[3]" :value="tile" :face="pips - 1" :row="3" :col="col"></tile>
		<tile v-for="(tile, col) in tiles[4]" :value="tile" :face="pips - 1" :row="4" :col="col"></tile>
		<tile v-for="(tile, col) in tiles[5]" :value="tile" :face="pips - 1" :row="5" :col="col"></tile>
		<tile v-for="(tile, col) in tiles[6]" :value="tile" :face="pips - 1" :row="6" :col="col"></tile>
	</div>
</template>

<script>
import tile from './tile.vue'

export default {
	props: ['face', 'pips', 'tiles'],
	components: {
		tile
	}
}
</script>

<style lang="scss">
.die__face {
	width: 450px;
	height: 450px;
	border:1px solid #222;
	display: block;
	position: absolute;
	background-color: transparent;
	font-size: 6em;
	color: #000;
	text-shadow: none;
	text-align:center;
}

#front 		{ transform: translateZ(225px);}
#back 		{ transform: rotateY(180deg) rotateZ(180deg) translateZ(225px);}
#right 		{ transform: rotateY(90deg) rotateZ(-90deg) translateZ(225px); }
#left 		{ transform: rotateY(-90deg) rotateZ(-90deg) translateZ(225px); }
#top 			{ transform: rotateX(90deg) rotateZ(90deg) translateZ(225px); }
#bottom 	{ transform: rotateX(-90deg) rotateZ(-90deg) translateZ(225px); }
</style>