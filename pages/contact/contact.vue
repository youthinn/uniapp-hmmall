<template>
	<view class="contact">
		<image src="http://www.itcast.cn/2018czydz/images/gywmban.jpg" mode=""></image>
		<view class="phone">
			<view @click="phoneClick">联系电话：400-618-9090（点击拨打）</view>
			<view>校区地址：浙江省杭州市下沙经济开发区4号大街187号盛泰时代山</view>
		</view>
		<map class="map" :longitude="longitude" :latitude="latitude" :markers="markers" :scale="scale"></map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				longitude: 114.125723,
				latitude: 22.649963,
				scale: 14,
				markers: [
					{
						longitude: 114.125723,
						latitude: 22.649963,
						iconPath: '../../static/logo.png',
						width: 30,
						height: 30
					}
				]
			}
		},
		methods: {
			phoneClick() {
				uni.makePhoneCall({
					phoneNumber: '400-618-9090'
				})
			}
		}
	}
</script>

<style lang="scss">
	.contact {
		image {
			width: 750rpx;
			height: 320rpx;
		}
		.phone {
			padding: 10rpx 20rpx;
			font-size: 30rpx;
			view {
				line-height: 80rpx;
				border-bottom: 1px solid #eee;
			}
		}
	}
	
	.map {
		width: 750rpx;
		height: 750rpx;
	}
</style>