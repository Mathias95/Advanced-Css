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

		<section>
			<div class="layout-container">
				<header class="grid-header">Header</header>
				<div class="small-box small-box--1">Small box 1</div>
				<div class="small-box small-box--2">Small box 2</div>
				<div class="small-box small-box--3">Small box 3</div>
				<aside class="grid-sidebar">Sidebar</aside>
				<main class="grid-content">Main Content</main>
				<footer class="grid-footer">Footer</footer>
			</div>
		</section>

		<section>
			<div class="play-container">
				<div class="play-item play-item--1">Modern</div>
				<div class="play-item play-item--2">CSS</div>
				<div class="play-item play-item--3">With</div>
				<div class="play-item play-item--4">Flexbox</div>
				<div class="play-item play-item--5">and</div>
				<div class="play-item play-item--6">Grid</div>
				<div class="play-item play-item--7">is</div>
				<div class="play-item play-item--8">great</div>
			</div>
		</section>

		<section>
			<div class="play-wrapper">
				<div class="box-item box-item--1">Modern</div>
				<div class="box-item box-item--2">CSS</div>
				<div class="box-item box-item--3">With</div>
				<div class="box-item box-item--4">Flexbox</div>
				<div class="box-item box-item--5">and</div>
				<div class="box-item box-item--6">Grid</div>
				<div class="box-item box-item--7">is</div>
				<div class="box-item box-item--8">great and amazing and just awesome to work with</div>
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
	font-family: sans-serif

/*Row container for float grid*/
.row
	& > *
		background-color: #ff0000ad 
		color: white
		height: 50px
		display: flex
		align-items: center
		justify-content: center


/*CSS Grid playground area*/
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


/* METHOD 1: USING LINE NUMBERS */
// .layout-container
// 	max-width: 1140px
// 	margin: 0 auto
// 	display: grid
// 	grid-template-rows: 100px 200px 400px 100px
// 	grid-template-columns: repeat(3, 1fr) 200px
// 	grid-row-gap: 30px
// 	grid-column-gap: 30px

// 	& > *
// 		background-color: #ff0000ad
// 		color: #ffffff
// 		padding: 20px
// 		font-size: 20px
// 		display: flex
// 		justify-content: center
// 		align-items: center

// .grid-header
// 	grid-column: 1 / -1

// .grid-sidebar
// 	grid-column: 4 / 5
// 	grid-row: 2 / 4

// .grid-content
// 	grid-column: 1 / span 3

// .grid-footer
// 	grid-column: 1 / -1


/* METHOD 2: USING LINE NAMES */
// .layout-container
// 	max-width: 1140px
// 	margin: 0 auto
// 	display: grid
// 	grid-template-rows: [header-start] 100px [header-end box-start] 200px [box-end main-start] 400px [main-end footer-start] 100px [footer-end]
// 	grid-template-columns: repeat(3, [col-start] 1fr [col-end]) 200px [grid-end]
// 	grid-row-gap: 30px
// 	grid-column-gap: 30px

// 	& > *
// 		background-color: #ff0000ad
// 		color: #ffffff
// 		padding: 20px
// 		font-size: 20px
// 		display: flex
// 		justify-content: center
// 		align-items: center

// .grid-header
// 	grid-column: col-start 1 / grid-end

// .grid-sidebar
// 	grid-column: col-end 3 / grid-end
// 	grid-row: box-start / main-end

// .grid-content
// 	grid-column: col-start 1 / col-end 3

// .grid-footer
// 	grid-column: col-start 1 / grid-end


/* METHOD 3: NAMING GRID AREAS */
.layout-container
	max-width: 1140px
	margin: 0 auto
	display: grid
	grid-template-rows: 100px 200px 400px 100px
	grid-template-columns: repeat(3, 1fr) 200px
	grid-row-gap: 30px
	grid-column-gap: 30px
	//replacing a . with an area name make the space empty
	grid-template-areas: ". head head ." "box-1 box-2 box-3 side" "main main main side" "footer footer footer footer"

	& > *
		background-color: #ff0000ad
		color: #ffffff
		padding: 20px
		font-size: 20px
		display: flex
		justify-content: center
		align-items: center

.grid-header
	grid-area: head

.small-box
	&--1
		grid-area: box-1
	&--2
		grid-area: box-2
	&--3
		grid-area: box-3

.grid-sidebar
	grid-area: side

.grid-content
	grid-area: main

.grid-footer
	grid-area: footer


/*Implicit and Explicit Grid*/
.play-container
	max-width: 1140px
	margin: 0 auto
	margin-top: 80px
	background-color: #dddddd
	display: grid
	//grid-template-rows: repeat(2, 150px)
	//grid-template-columns: repeat(2, 1fr)
	grid-gap: 30px

	//This is good to use, if you don't know how many items there will be in the grid container. Forintance for dynamic content
	grid-auto-rows: 80px
	grid-auto-flow: row dense
	//grid-auto-flow: column
	//grid-auto-columns: 1fr

	//Align grid items to grid area
	//align-items: center //default is set to stretch like in flexbox
	//justify-items: center //this does not exsit in flexbox since it is not 2 dimensional

	//Align grid tracks to grid container
	grid-template-rows: repeat(2, 100px)
	grid-template-columns: repeat(2, 200px)
	height: 1000px
	justify-content: center //center / start / end / space-between / space-around / space-evenly
	align-content: center //center / start / end / space-between / space-around / space-evenly

	.play-item
		padding: 20px
		color: white
		font-size: 30px
		background-color: #ff0000ad

		&--4
			background-color: crimson
			grid-row: 2 / span 3
			align-self: stretch
			justify-self: stretch

		&--6
			background-color: lightcoral
			grid-row: 2 / span 2

		&--7
			background-color: palevioletred
			grid-column: 1 / -1


/* */
.play-wrapper
	max-width: 90%
	margin: 0 auto
	margin-top: 80px
	background-color: #dddddd
	display: grid
	//Using min-content and max-content
	//grid-template-rows: repeat(2, 150px)
	//grid-template-rows: repeat(2, min-content)
	//grid-template-rows: 150px min-content
	//grid-template-columns: min-content 1fr 1fr min-content

	//Using minmax function
	// grid-template-rows: repeat(2, minmax(150px, min-content))
	// grid-template-columns: minmax(200px, 1fr) repeat(3, 1fr)

	//Using auto-fill and auto-fit - to make it responsive without media quries
	grid-template-rows: repeat(2, minmax(150px, min-content))
	grid-template-columns: repeat(auto-fill, 100px)
	grid-template-columns: repeat(auto-fit, 100px)
	//this part makes it responsive #nomediaquries
	grid-template-columns: repeat(auto-fit, minmax(100px, 1fr))

	.box-item
		padding: 20px
		color: white
		font-size: 30px
		background-color: #ff0000ad

		&--1
			background-color: orangered

		&--2
			background-color: yellowgreen

		&--3
			background-color: blueviolet
		
		&--4
			background-color: palevioletred
		
		&--5
			background-color: royalblue
		
		&--6
			background-color: goldenrod
		
		&--7
			background-color: crimson
		
		&--8
			background-color: darkslategrey
</style>
