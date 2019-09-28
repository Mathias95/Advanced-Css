<template>
  <section class="home">
		<div class="home__container">
			<h1 class="home__title">Advanced CSS Projects</h1>
			<div class="home__links">
				<div class="home__item">
					<router-link class="home__link" to="/natours">
						<img src="../assets/img/Natours-frontpage.png" alt="Project Natours">
						<span>Natours project</span>
					</router-link>
				</div>
				<div class="home__item">
					<router-link class="home__link" to="/nexter">
						<img src="../assets/img/Nexter-frontpage.png" alt="Project Nexter">
						<span>Nexter project</span>
					</router-link>
				</div>
				<div class="home__item">
					<router-link class="home__link" to="/trillo">
						<img src="../assets/img/Trillo-frontpage.png" alt="Project Trillo">
						<span>Trillo project</span>
					</router-link>
				</div>
			</div>
		</div>
  </section>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'home',
	components: {}
};
</script>

<style lang="sass" scoped>

.home
	height: 100vh
	display: flex
	align-items: center
	justify-content: center
	font-family: sans-serif
	background-color: #ffffff

	&__container
		max-width: 90%
		margin: 0 auto
		display: flex
		flex-direction: column
		align-items: center

	&__title
		margin-bottom: 8rem
		color: #54483a
		font-size: 3.5rem

	&__links
		display: grid
		grid-template-columns: repeat(3, 1fr)
		grid-gap: 10rem

	&__item
		text-align: center

	&__link
		text-decoration: none

		img
			display: block
			width: 100%
			transition: all 400ms
			box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.4)
			border-radius: .5rem

			&:hover
				transform: translateY(-.8rem)
				box-shadow: 0 2.5rem 4rem rgba(0, 0, 0, 0.5)

		span
			display: inline-block
			margin-top: 2.5rem
			color: #777777
			font-size: 1.8rem
</style>