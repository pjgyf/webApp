<template>
	<div class="song-list">
		<ul>
			<li @click="selectItem(song,index)" v-for="(song,index) in songs" class="item">
				<div class="content">
					<h2 class="name">{{song.name}}</h2>
					<p class="dec">{{getDesc(song)}}</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script type="text/ecmascript-6">
	export default{
		props:{
			songs:{
				type:Array,
				default:[]
			}
		},
		methods:{
			selectItem(item,index){
				this.$emit('select',item,index)
			},
			getDesc(song){
				return `${song.singer} - ${song.album}`
			}
		}
	}
</script>
<style rel="stylesheet/stylus" scoped lang="stylus">
	@import "~common/stylus/variable"
	@import "~common/stylus/mixin"
	
	.song-list
		.item
			display flex 
			aligin-items center
			box-sizing border-box
			height	64px
			font-size $font-size-medium
			.content
				flex 1
				line-height 20px
				overflow hidden
				.name
					no-wrap()
					color $color-text
				.dec
					no-wrap()
					margin-top 4px
					color $color-text-d
</style>