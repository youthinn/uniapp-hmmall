<template>
	<view class="nav">
		<view class="nav-item" v-for="(item,index) in navs" :key="index" @click="navItemClick(item.path)">
			<view :class="item.icon"></view>
			<text>{{item.title}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				navs: [
					{
						icon: 'iconfont icon-baihuochaoshi',
						title: '黑马超市',
						path: '/pages/goods/goods'
					},
					{
						icon: 'iconfont icon-lianxiwomenwode',
						title: '联系我们',
						path: '/pages/contact/contact'
					},
					{
						icon: 'iconfont icon-shequ',
						title: '社区图片',
						path: '/pages/pics/pics'
					},
					{
						icon: 'iconfont icon-shipin',
						title: '学习视频',
						path: '/pages/videos/videos'
					},
					
				]
			}
		},
		onLoad() {
			
		},
		methods: {
			navItemClick(url) {
				uni.navigateTo({
					url
				})
			}
		}
	}
</script>

<style lang="scss">
	.nav {
		display: flex;
		.nav-item {
			flex: 1;
			text-align: center;
			view {
				width: 120rpx;
				height: 120rpx;
				background-color: $shop-color;
				border-radius: 60rpx;
				margin: 20rpx auto;
				line-height: 120rpx;
				color: #fff;
				font-size: 50rpx;
			}
			text {
				font-size: 30rpx;
			}
		}
	}
</style>