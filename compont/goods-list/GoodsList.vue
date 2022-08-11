<template>
	<view>
		<view class="goods-list" v-for="item in goods" :key="item.id" @click="navigator(item.id)">
			<view class="goods-item">
				<!-- <image :src="item.img_url"></image> -->
				<image src="../../static/logo.png"></image>
				<view class="price">
					<text>￥{{item.sell_price}}</text>
					<text>￥{{item.market_price}}</text>
				</view>
				<view class="goods-title">{{item.title}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: ['goods'],
		methods: {
			navigator(id) {
				this.$emit('goodsItemClick',id)
			}
		}
	}
</script>

<style lang="scss">
	.goods-list {
		width: 100%;
		background-color: #eee;
		padding: 0 15rpx;
		// display: flex;
		flex-wrap: wrap;
		justify-content: space-between;

		.goods-item {
			background-color: #fff;
			width: 355rpx;
			margin-top: 8px;
			padding: 14rpx;
			box-sizing: border-box;
			border-radius: 8px;
			float: left;

			image {
				width: 80%;
				height: 180px;
				display: block;
				margin: auto;
			}

			.price {
				color: $shop-color;
				font-size: 36rpx;
				margin: 14rpx 0;

				text:nth-child(2) {
					color: #ccc;
					font-size: 28rpx;
					margin-left: 16rpx;
					text-decoration: line-through;
				}
			}

			.goods-title {
				font-size: 28rpx;
				line-height: 40rpx;
				padding-bottom: 20rpx;
				padding-top: 10rpx;
			}
		}
	}
</style>
