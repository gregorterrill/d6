<template>
  <div id="app">

    <titleScreen v-if="store.windows.title.open"></titleScreen>
    <endScreen v-if="store.windows.end.open"></endScreen>

    <div class="screen-play" v-if="gameInPlay">

      <gameMenu v-if="store.windows.menu.open"></gameMenu>
      <dialogWindow v-if="store.windows.dialog.open" :messages="store.windows.dialog.messages"></dialogWindow>
     
      <div class="message message--top-left">
        <p>~WORLD {{ store.currentLevelNum }}~</p>
        <p>{{ store.currentLevel.title }}<p>
      </div>

      <div class="message message--top-right">
        <p>~MENU~ESC~</p>
        <br>
        <p>PIPS</p>
        <p>&nbsp;{{ store.pips }}/21</p>
        <br>
        <p>STATUS</p>
        <p :class="hpLevel">&nbsp;HP&nbsp;{{ store.player.hp }}/5</p>
        <p>&nbsp;XP&nbsp;{{ store.player.xp }}</p>
        <br>
        <p>INVENTORY</p>
        <p v-for="item in store.player.items">&nbsp;{{ item.charAt(0).toUpperCase() + item.slice(1).replace('-',' ') }}</p>
      </div>

      <div class="btn-controls">
        <button v-on:click="keyPress(27)" class="btn-controls__esc">ESC</button><!--
        --><button v-on:click="keyPress(38)" class="btn-controls__up">↑</button><!--
        --><button v-on:click="keyPress(32)" class="btn-controls__space">SPACE</button><!--
        --><button v-on:click="keyPress(37)" class="btn-controls__left">←</button><!--
        --><button v-on:click="keyPress(40)" class="btn-controls__down">↓</button><!--
        --><button v-on:click="keyPress(39)" class="btn-controls__right">→</button>
      </div>
      
      <div class="die-container">
        <die :level="store.currentLevel"></die>
      </div>

    </div>

  </div>
</template>

<script>
import titleScreen from './components/title-screen.vue'
import endScreen from './components/end-screen.vue'
import gameMenu from './components/game-menu.vue'
import dialogWindow from './components/dialog-window.vue'
import die from './components/die.vue'
import store from './data/store.js'

export default {
  name: 'app',
  components: {
    titleScreen,
    endScreen,
    gameMenu,
    die,
    dialogWindow
  },
  data() {
    return {
      store
    }
  },
  computed: {

    gameInPlay() {
      return (store.windows.title.open || store.windows.end.open) === false;
    },

    hpLevel() {
      if (store.player.hp <= 2) {
        return 'hp-critical';
      } else {
        return 'hp-normal';
      }
    }
  },
  methods: {
    keyPress(keyCode) {

      console.log(keyCode);

      if (document.createEventObject) {
          var eventObj = document.createEventObject();
          eventObj.keyCode = keyCode;
          window.fireEvent("onkeyup", eventObj);
          eventObj.keyCode = keyCode;   
      } else if(document.createEvent) {
          var eventObj = document.createEvent("Events");
          eventObj.initEvent("keyup", true, true);
          eventObj.which = keyCode; 
          eventObj.keyCode = keyCode;
          window.dispatchEvent(eventObj);
      }

      return true;
    }
  },
  beforeCreate() {

    //get progress info from localstorage, if available
    if (localStorage.getItem('currentLevel') !== null) {
      store.currentLevelNum = parseInt(localStorage.getItem('currentLevel'));
    }
    if (localStorage.getItem('playerXP') !== null) {
      store.player.xp = parseInt(localStorage.getItem('playerXP'));
    }

    //copy the level data into currentLevel which we'll use - we don't want to ever actually
    //modify levels itself, since we need a pristine copy to change levels without weirdness
    store.currentLevel = JSON.parse(JSON.stringify(store.levels[store.currentLevelNum]));
  }
}
</script>

<style lang="scss">

@font-face {
    font-family: PressStart2P;
    src: url('./assets/font/PressStart2P.ttf');
}

* {
  box-sizing: border-box;
}
html, body {
  font-family:PressStart2P, monospace;
  padding:0;
  margin:0;
  background-color:#000;
}
h1, p {
  line-height:1.5rem;
  color:white;
  margin:0;
}
a {
  text-decoration:none;
  color:#A4E4FC;

  &:focus, &:hover, &:active {
    color:#F87858;
  }
}

#app {
  position:relative;
  min-height:100vh;

  &::before {
    z-index:0;
    content: "";
    position:absolute;
    top:0;right:0;bottom:0;left:0;
    background-image:url('./assets/space.png');
    animation:starTwinkle 5s ease-in-out infinite alternate;
  }

  &::after {
    z-index:1;
    content: "";
    position:absolute;
    top:0;right:0;bottom:0;left:0;
    background-image:url('./assets/sky.png');
    opacity:0;
    animation:dayNightCycle 30s ease-in-out infinite alternate, cloudMovement 30s linear infinite;
  }
}

.die-container {
  position:relative;
  top:calc(50vh - 225px);
  z-index:2;
  animation:dayNightCycleInner 30s ease-in-out infinite alternate;
}

.message {
  z-index:99;
  position:absolute;
  padding:1rem;
  border:8px solid #FFF;
  border-image: url('./assets/box.png') 8 round;
  background-color:#1a4f9f;
}

.message--bottom-left {
  bottom:1rem;
  left:1rem;
}

.message--bottom-right {
  bottom:1rem;
  right:1rem;
}

.message--top-left {
  top:1rem;
  left:1rem;
}

.message--top-right {
  top:1rem;
  right:1rem;
  min-width:12rem;
}

.btn-controls {
  right:1rem;
  bottom:1rem;
  padding:0;
  position:absolute;
  z-index:999;
  width:13rem;
  text-align:right;
}


.btn-controls button {
  cursor:pointer;
  display:inline-block;
  vertical-align:top;
  text-align:center;
  padding:0;
  margin:0;
  width:4.33rem;
  height:4.33rem;
  background-color:#1a4f9f;
  border:8px solid #FFF;
  border-image: url('./assets/box.png') 8 round;
  color:#FFF;
  font-size:1.5rem;
  line-height:1;
  font-family:PressStart2P, monospace;

  &:focus { outline:none; }
}

button.btn-controls__space,
button.btn-controls__esc {
  font-size:0.5rem;
} 

p.hp-critical {
  color:#de7c70;
}

@keyframes dayNightCycle {
  0%    { opacity: 1; }
  20%   { opacity: 1; }
  80%   { opacity: 0; }
  100%  { opacity: 0; }
}

@keyframes dayNightCycleInner {
  0%    { filter:brightness(100%); }
  20%   { filter:brightness(100%); }
  80%   { filter:brightness(75%); }
  100%  { filter:brightness(75%); }
}

@keyframes starTwinkle {
  from { opacity:1; }
  to { opacity:0.75; }
}

@keyframes cloudMovement {
  from { background-position: -64px -32px; }
  to { background-position: 448px 224px; }
}

</style>
