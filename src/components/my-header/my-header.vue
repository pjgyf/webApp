<template>
	<div class="m-header">
		<div class="icon"></div>
		<h1 class="text">好音乐,好时光</h1>
	</div>
</template>
<script type="text/ecmascript-6">
	export default {}
</script>
<style lang="stylus" rel="stylesheet/stylus">
	@import "~common/stylus/variable"
	@import "~common/stylus/mixin"
	
	.m-header
		position relative
		height 44px
		text-align center
		color $color-theme
		font-size 0
		.icon
			display inline-block
			vertical-align center
			margin-top 6px
			width 30px
			height 30px
			margin-right 9px
			bg-image('logo')
			background-size 30px 30px
		.text
			display inline-block
			vertical-align top
			line-height 44px
			font-size $font-size-large
			
		
		
</style>