<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import url("~@/static/font_icon/iconfont.css");
	
	.gomeImgLoad {
		width: 750rpx;
		height: auto;
	}
</style>
