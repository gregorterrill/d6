<template>

	<div class="end">

		<div class="end__message message">

			<h1>PIP&bull;SEEK</h1>
			
			<p>YOU WON!</p>

			<p>You gained a total of {{ store.player.xp }}XP!</p>

			<br>

			<p>YOUR RANKING</p>

			<p>{{ this.ranking }}</p>

			<br>

			<p>THANKS FOR PLAYING!</p>

			<a class="twitter-share-button" :href="shareLink">TWEET YOUR SCORE</a>

		</div>

  </div>
</template>

<script>
import store from '../data/store.js'

export default {
	props: [],
	data() {
    return {
      store
    }
  },
  computed: {
		ranking() {
			let ranking = 'Pipsqueak';
			if (store.player.xp >= 50) 		{ ranking = 'Peasant'; }
			if (store.player.xp >= 100) 	{ ranking = 'Charlatan'; }
			if (store.player.xp >= 150) 	{	ranking = 'Squire'; }
			if (store.player.xp >= 180) 	{	ranking = 'Hero'; }
			if (store.player.xp >= 200) 	{	ranking = 'Champion'; }
			if (store.player.xp >= 220) 	{	ranking = 'Legend'; }
			if (store.player.xp === 242) 	{ ranking = 'Perfectionist'; }

			return ranking;
		},
		shareLink() {
			let link = 'https://twitter.com/home?status=I%20just%20beat%20PIP%E2%80%A2SEEK%20with%20a%20score%20of%20' + store.player.xp + 'XP!%20Play%20at%20http%3A//pipseek.gregorterrill.com';
			return link;
		}
	}
}
</script>

<style lang="scss">
.end {
	position:fixed;
	top:0;right:0;bottom:0;left:0;
	background-color:#000;
	z-index:101;
}

.end__message {
	position:fixed;
	z-index:102;
	top:20vh;
	bottom:20vh;
	min-height:28rem;
	left:50%;
	width:40rem;
	margin-left:-20rem;
	text-align:center;

	h1 {
		margin:2rem 1rem;
	}
	p {
		margin:1rem 0;
	}
}
</style>