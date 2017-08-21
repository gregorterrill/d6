<template>

	<div class="end">

		<div class="end__message message">
			<h1>PIP&bull;SEEK</h1>
			<p>You won!</p>
		</div>

  </div>
</template>

<script>
import store from '../data/store.js'

export default {
	props: [],
	data() {},
  methods: {}
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
	left:50%;
	width:40rem;
	margin-left:-20rem;
	text-align:center;
}
</style>