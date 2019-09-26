<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="sass">
*
	margin: 0
	padding: 0
	
*,
*::before,
*::after
	box-sizing: inherit

html
	box-sizing: border-box
	font-size: 62.5% //10px/16px = 62.5% --> 1rem = 10px

body
	font-size: 16px
	line-height: 1.7
	
</style>
