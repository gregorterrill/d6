 <template>
	<div class="message message--dialog">
		<p v-for="message in messages" v-html="message"></p>
	</div>
</template>

<script>

export default {
	props: ['messages']
}
</script>

<style lang="scss">
.message--dialog {
  z-index:100;
  bottom:1rem;
  left:1rem;
  width:50vw;

  p { margin-bottom:1rem; }
  p:last-child { margin-bottom:0; }
}
</style>