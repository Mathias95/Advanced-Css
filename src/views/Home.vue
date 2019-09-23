<template>
  <div class="home">
		<h1>This is the welcome page, with thumbnails of the different project, with links</h1>
		<router-link to="/trillo">This is the trillo project</router-link>
		<router-link to="/natours">This is the natours project</router-link>
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