<template>
  <div class="home">
		<h1>This is the welcome page, with thumbnails of the different project, with links</h1>
		<router-link to="/natours">Natours project</router-link>
		<router-link to="/trillo">Trillo project</router-link>
		<router-link to="/nexter">Nexter project</router-link>
		<router-link to="/grid">Grid Playground</router-link>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'home',
	components: {}
};
</script>

<style lang="sass">

</style>