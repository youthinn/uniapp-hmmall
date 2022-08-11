<template>
	<view class="goods-detail">
		<swiper :indicator-dots="true" :autoplay="true" :interval="2000" :duration="1000" circular>
			<swiper-item v-for="item in swipers">
				<!-- <image :src="item.src" mode=""></image> -->
				<image src="../../static/logo.png" mode=""></image>
			</swiper-item>
		</swiper>
		<view class="box1">
			<view class="price">
				<text>￥{{detatilInfo.sell_price}}</text>
				<text>￥{{detatilInfo.market_price}}</text>
			</view>
			<view class="goods-detail-title">{{detatilInfo.title}}</view>
		</view>
		<view class="line"></view>
		<view class="box2">
			<view>货号：{{detatilInfo.goods_no}}</view>
			<view>库存：{{detatilInfo.stock_quantity}}</view>
		</view>
		<view class="line"></view>
		<view class="box3">
			<view class="title">详情介绍</view>
			<view class="content">
				<rich-text :nodes="contents"></rich-text>
			</view>
		</view>
		<nav-bar></nav-bar>
	</view>
</template>

<script>
	import NavBar from '../../compont/nav-bar/NavBar.vue'
	
	export default {
		data() {
			return {
				id: 0,
				swipers: [],
				detatilInfo: {},
				contents: ''
			}
		},
		components: {
			NavBar
		},
		onLoad(options) {
			this.id = options.id
			this.getSwipers()
			this.getDetailInfo()
			this.getDetailContent()
		},
		methods: {
			async getSwipers() {
				const res = await this.$myRequest({
					url: '/api/getthumimages/' + this.id
				})
				// console.log(res)	
				this.swipers = res.data.message[0]
			},
			async getDetailInfo() {
				const res = await this.$myRequest({
					url: '/api/goods/getinfo/' + this.id
				})
				this.detatilInfo = res.data.message[0]
				// console.log(this.detatilInfo)
			},
			async getDetailContent() {
				const res = await this.$myRequest({
					url: '/api/goods/getdesc/' + this.id
				})
				this.contents = res.data.message[0].content
			}
		}
	}
</script>

<style lang="scss">
	.goods-detail {
		padding-bottom: 50px;
		swiper {
			height: 700rpx;

			swiper-item {
				width: 750rpx;

				image {
					width: 100%;
					height: 100%;
				}
			}
		}

		.box1 {
			padding: 10px;

			.price {
				font-size: 36rpx;
				color: $shop-color;
				line-height: 80rpx;

				text:nth-child(2) {
					color: #ccc;
					font-size: 28rpx;
					text-decoration: line-through;
					margin-left: 20rpx;
				}
			}

			.goods-detail-title {
				font-size: 38rpx;
				line-height: 60rpx;
			}
		}

		.line {
			width: 750rpx;
			height: 8rpx;
			background-color: #eee;
		}

		.box2 {
			padding: 0 10rpx;
			font-size: 38rpx;
			line-height: 80rpx;
		}
		.box3 {
			padding: 0 10rpx;
			// padding-bottom: 50px;
			.title {
				font-size: 34rpx;
				line-height: 80rpx;
				border-bottom: 1px solid #eee;
			}
			.content {
				margin-top: 10rpx;
				font-size: 32rpx;	
				line-height: 46rpx;
			}
		}
	}
</style>
