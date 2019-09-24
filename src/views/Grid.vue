<template>
	<div class="grid-page">
		<!-- Grid column layout using floats -->
		<section class="grid-test">
			<div class="row">
				<div class="col-1-of-2">Col 1 of 2</div>
				<div class="col-1-of-2">Col 1 of 2</div>
			</div>
			<div class="row">
				<div class="col-1-of-3">Col 1 of 3</div>
				<div class="col-1-of-3">Col 1 of 3</div>
				<div class="col-1-of-3">Col 1 of 3</div>
			</div>
			<div class="row">
				<div class="col-1-of-3">Col 1 of 3</div>
				<div class="col-2-of-3">Col 2 of 3</div>
			</div>
			<div class="row">
				<div class="col-1-of-4">Col 1 of 4</div>
				<div class="col-1-of-4">Col 1 of 4</div>
				<div class="col-1-of-4">Col 1 of 4</div>
				<div class="col-1-of-4">Col 1 of 4</div>
			</div>
			<div class="row">
				<div class="col-1-of-4">Col 1 of 4</div>
				<div class="col-1-of-4">Col 1 of 4</div>
				<div class="col-2-of-4">Col 2 of 4</div>
			</div>
			<div class="row">
				<div class="col-1-of-4">Col 1 of 4</div>
				<div class="col-3-of-4">Col 3 of 4</div>
			</div>
			<div class="row">
				<div class="col-4-of-4">Col 4 of 4</div>
			</div>
		</section>

		<section>
			<div class="grid-container">
				<div class="grid-item grid-item--1">1: Orange</div>
				<div class="grid-item grid-item--2">2: Green</div>
				<div class="grid-item grid-item--3">3: Violet</div>
				<div class="grid-item grid-item--4">4: Pink</div>
				<div class="grid-item grid-item--5">5: Blue</div>
				<div class="grid-item grid-item--6">6: Green</div>
			</div>
		</section>
	</div>
</template>

<script>
export default {
  name: 'grid'
};
</script>

<style lang="sass" scoped>
.grid-page
	padding: 100px 0

.row
	& > *
		background-color: #ff0000ad 
		color: white
		height: 50px
		display: flex
		align-items: center
		justify-content: center

.grid-container
	background-color: #eeeeee
	width: 1140px
	margin: 80px auto
	display: grid
	grid-template-rows: repeat(2, 150px)
	//grid-template-columns: repeat(2, 150px) 1fr
	//grid-template-columns: 50% 1fr 2fr
	grid-template-columns: repeat(3, 1fr)
	grid-row-gap: 30px
	grid-column-gap: 30px

.grid-item
	padding: 20px
	font-size: 30px
	font-family: sans-serif
	color: #ffffff

	&--1
		background-color: orangered
		// grid-row-start: 2
		// grid-row-end: 3
		// grid-column-start: 2
		// grid-column-end: 3

		//short way of the code above
		// grid-row: 2 / 3
		// grid-column: 2 / 3

		//shorter way of the code above
		grid-area: 2 / 2 / 3 / 3
		z-index: 10

	&--2
		background-color: yellowgreen
		//grid-column: 1 / span 3
		// This will always make sure to span all till the end of the grid column
		grid-column: 1 / -1

	&--3
		background-color: blueviolet
		grid-column: 1 / 3
		grid-row: 2 / 3

	&--4
		background-color: palevioletred

	&--5
		background-color: royalblue
		grid-row: 1 / 3
		grid-column: 3 / 4

	&--6
		background-color: goldenrod
		grid-row: 1 / 2
		grid-column: 2 / 3
</style>
