<template>
  <nav>
    <div class="container">
      <ul class="navigation">
        <li><router-link to="/">About Us</router-link></li>
        <li><router-link to="/">Pricing</router-link></li>
        <li><router-link to="/">Contact</router-link></li>
      </ul>
      <div class="buttons">
        <a class="btn-main" href>Sign up</a>
        <a class="btn-hot" href>Get a qoute</a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "codepen"
};
</script>

<style lang="sass" scoped>

$color-primary: #f9ed69
$color-secondary: #f08a5d
$color-tertiary: #b83b5e
$color-text-dark: #333333
$color-text-light: #eeeeee

$width-button: 150px

@mixin align
	display: flex
	justify-content: space-between
	align-items: center

@mixin style-link-text($color)
	text-decoration: none
	text-transform: uppercase
	color: $color

//Sass Functions
@function divide($a, $b)
	@return $a/ $b

nav
	//margin: 30px
	//using the function in action
	margin: divide(60, 2) * 1px 
	background-color: $color-primary 
	
	.container
		@include align

.navigation
	list-style: none

	li
		display: inline-block
		margin-left: 30px

		&:first-child
			margin-left: 0

		a:link
			@include style-link-text($color-text-dark)

%btn-placeholder
	padding: 10px
	display: inline-block
	text-align: center
	border-radius: 100px
	width: $width-button
	@include style-link-text($color-text-light)

.btn-main
	&:link
		@extend %btn-placeholder
		background-color: $color-secondary
	
	&:hover
		background-color: darken($color-secondary, 15%)

.btn-hot
	&:link
		@extend %btn-placeholder
		background-color: $color-tertiary

	&:hover
		background-color: lighten($color-tertiary, 10%)
</style>