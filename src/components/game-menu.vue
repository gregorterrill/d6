<template>
	<div class="menu">

		<div class="menu__overlay"></div>

		<div class="menu__menu">

			<div class="menu__panel menu__panel--left message">

				<h1 class="menu__title">~MENU~</h1>

				<ul class="menu__options">
					<li class="menu__option"><a @click.prevent="setPanel(0)" :class="'menu__link' + ((currentPanel === 0) ? ' active': '')" href="#">HOW TO PLAY</a></li>
					<li class="menu__option"><a @click.prevent="setPanel(1)" :class="'menu__link' + ((currentPanel === 1) ? ' active': '')" href="#">CONTROLS</a></li>
					<li class="menu__option"><a @click.prevent="setPanel(2)" :class="'menu__link' + ((currentPanel === 2) ? ' active': '')" href="#">SAVE DATA</a></li>
					<li class="menu__option"><a @click.prevent="setPanel(3)" :class="'menu__link' + ((currentPanel === 3) ? ' active': '')" href="#">ABOUT</a></li>
				</ul>

			</div>

			<div class="menu__panel menu__panel--right message">

				<div v-show="currentPanel === 0" class="menu__panel-content">
			    <h2 class="menu__title">~HOW TO PLAY~</h2>
			    <p>Each world is a six-sided die(d6). Light the pips on each face of the die to progress to the next world.</p>
					<br>
			    <p>Enemies move after you move. If you move into a tile occupied by an enemy, you'll attack it. If you move into a tile and then an enemy immediately moves into that same tile, it will attack you.</p>
			    <br>
			    <p>When your Hit Points(HP) reach zero, you die. If you die, you will restart the current level and lose half your Experience Points(XP).</p>
			    <br>
			    <p>Your progress is saved automatically so you can quit and start where you left off later.</p>
		    </div>
		    
				<div v-show="currentPanel === 1" class="menu__panel-content">
			    <h2 class="menu__title">~CONTROLS~</h2>
			    <p>Use the arrows keys or WASD to move and activate pips</p>
			    <p>Press 1-6 to view the corresponding face of the die</p>
			    <p>Press 0 to recenter the view on your current face</p>
			    <p>Press R to restart the current level (costs half your XP)<p>
			    <p>Press ESC to toggle the menu</p>
		    </div>

		    <div v-show="currentPanel === 2" class="menu__panel-content">
			    <h2 class="menu__title">~SAVE DATA~</h2>
			    <p>This is the current data saved in your browser:</p>
			    <br>
			    <p>WORLD:&nbsp;{{ savedLevel }}</p>
			    <p>XP:&nbsp;&nbsp;&nbsp;&nbsp;{{ savedXP }}</p>
			    <br>
			    <p>Save data is stored in your browser's local storage at the beginning of each level. If you clear your browser's cache, your progress will be lost.</p>
	  			<br>
	  			<p>Click below to clear your save data. When you reload the page, you'll restart from the beginning.</p>
	  			<br>
	  			<a @click.prevent="clearData" href="#">CLEAR SAVE DATA</a>
	  		</div>

				<div v-show="currentPanel === 3" class="menu__panel-content">
			    <h2 class="menu__title">~ABOUT~</h2>
			    <p>d6 was created in 2017 as an experiment in Vue by <a href="http://gregorterrill.com" target="_blank">Gregor Terrill</a>, who did all the programming, artwork, and sound effects.</p>
	  			<br>
	  			<p>The background music is <a target="_blank" href="https://soundcloud.com/eric-skiff/come-and-find-me">Come and Find Me</a> by <a target="_blank" href="http://ericskiff.com/music/">Eric Skiff</a> and is used under the Creative Commons license.</p>
	  			<br>
	  			<p>You can read more about the game in <a href="http://gregorterrill.com" target="_blank">this blog post</a>.</p>
	  		</div>

	  	</div>

	  </div>

  	<audio ref="sound-blip" :src="getAudioSource('blip')" preload />
  </div>
</template>

<script>
export default {
	props: [],
	data() {
  	return {
  		currentPanel: 0,
  		savedLevel: 'No data available.',
  		savedXP: 'No data available.'
	  }
  },
  methods: {

  	getSaveData(itemName) {
  		if (localStorage.getItem(itemName) !== null) {
	      return parseInt(localStorage.getItem(itemName));
	    } else {
	    	return 'No data available.';
	    }
  	},
		
		getAudioSource(soundName) {
  		return require('../assets/sound/' + soundName + '.wav');
  	},

		playBlip() {
			const soundEl = this.$refs['sound-blip'];

			if (soundEl) {
				soundEl.currentTime = 0;
				soundEl.play();
			}
		},

		setPanel(panelNum) {
			this.playBlip();
			this.currentPanel = panelNum;
		},

  	handleKeyPress(e) {
			switch(e.keyCode) {

				case 87: //w
		    case 38: //up
					this.currentPanel--;
					if (this.currentPanel < 0) {
						this.currentPanel = 0;
					} else {
						this.playBlip();
					}
					break;

				case 83: //s
		    case 40: //down
		    	this.currentPanel++;
					if (this.currentPanel > 3) {
						this.currentPanel = 3;
					} else {
						this.playBlip();
					}
		      break;
			}
		},

		clearData() {
			localStorage.removeItem('currentLevel');
			localStorage.removeItem('playerXP');
			this.savedLevel = this.getSaveData('currentLevel');
  		this.savedXP = this.getSaveData('playerXP');
  		this.playBlip();
		}
  },
  mounted() {
  	this.savedLevel = this.getSaveData('currentLevel');
  	this.savedXP = this.getSaveData('playerXP');
  	window.addEventListener('keyup', this.handleKeyPress);
  	this.playBlip();
  },
  beforeDestroy() {
  	window.removeEventListener('keyup', this.handleKeyPress);
  	this.playBlip();
  }
}
</script>

<style lang="scss">
.menu__overlay {
	z-index:100;
	position:fixed;
	top:0;right:0;bottom:0;left:0;
	background-color:black;
	opacity:0.75;
}
.menu__menu {
  z-index:101;
  position:fixed;
  top:20vh;right:1rem;bottom:20vh;left:1rem;
}
.menu__panel {
	position:absolute;
	top:0;
	bottom:0;
	overflow-y:scroll;
}
.menu__panel--left {
	width:20%;
	left:0;
}
.menu__panel--right {
	width:calc(80% + 8px);
	right:0;
	padding:2rem;
}
.menu__title {
	color:white;
	font-size:1rem;
	font-weight:normal;
	margin:0;
	padding:0 0 1rem;
	line-height:1;
}
h1.menu__title {
	padding:1rem;
}
.menu__options {
	list-style-type:none;
	padding:0;
	margin:0;
}
.menu__link {
	color:white;
	border:2px solid transparent;
	display:block;
	padding:1rem;

	&.active, &:hover { border-color:white; color: white; }
	&:focus, &:active { color:white; }
}
</style>