<template>
  <div id="app">

    <div v-if="store.windows.menu.open" class="message message--full">
      <p>MENU</p>
      <p>&nbsp;</p>
      <p>CONTROLS</p>
      <p>Arrows to move</p>
      <p>1-6 to view face</p>
      <p>0 to view player</p>
    </div>

    <div v-if="store.windows.dialog.open" class="message message--dialog" v-html="store.windows.dialog.content"></div>

    <div class="message message--top-left">
      <p>WORLD {{ store.currentLevelNum }}</p>
      <p>{{ store.currentLevel.title }}<p>
    </div>

    <div class="message message--top-right">
      <p>PIPS&nbsp;{{ store.pips }}/21</p>
      <p>&nbsp;</p>
      <p>STATUS</p>
      <p :class="hpLevel">HP&nbsp;&nbsp;{{ store.player.hp }}/5</p>
      <p>XP&nbsp;&nbsp;{{ store.player.xp }}</p>
      <p>&nbsp;</p>
      <!--<p>STATUS</p>
      <p>{{ store.player.status.charAt(0).toUpperCase() + store.player.status.slice(1) }}</p>
      <p>&nbsp;</p>-->
      <p>INVENTORY</p>
      <p v-for="item in store.player.items">{{ item.charAt(0).toUpperCase() + item.slice(1) }}</p>
    </div>

    <!--
    <div class="message message--bottom-left">
      <p>DieRPG, a game by <a href="http://gregorterrill.com" target="_blank">Gregor</a></p>
    </div>


     <div class="message message--bottom-right">
      
    </div>
     -->
    
    <div class="die-container">
      <die :level="store.currentLevel"></die>
    </div>

  </div>
</template>

<script>
import die from './components/die.vue'
import store from './data/store.js'

export default {
  name: 'app',
  components: {
    die
  },
  data() {
    return {
      store
    }
  },
  computed: {
    hpLevel() {
      if (store.player.hp <= 2) {
        return 'hp-critical';
      } else {
        return 'hp-normal';
      }
    }
  },
  beforeCreate() {
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
  min-width: 13rem;
}

.message--dialog {
  z-index:100;
  bottom:1rem;
  left:1rem;
  width:50vw;
}

.message--full {
  z-index:101;
  position:fixed;
  top:1rem;right:1rem;bottom:1rem;left:1rem;
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
