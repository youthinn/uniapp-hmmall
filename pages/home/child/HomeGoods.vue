<template>
	<view class="recommend">
		<view class="recommend-title">商品推荐</view>
		<goods-list :goods="goods" @goodsItemClick="goGoodsDetail" />
	</view>
</template>

<script>
	import GoodsList from '../../../compont/goods-list/GoodsList.vue'
	export default {
		data() {
			return {
				goods: []
			}
		},
		components: {
			GoodsList
		},
		created() {
			this.getGoods()
		},
		methods: {
			// 请求商品数据
			async getGoods() {
				const res = await this.$myRequest({
					url: '/api/getgoods?pageindex=1'
				})
				this.goods = res.data.message
				// console.log(this.goods)
			},
			// 导航到商品详情页
			goGoodsDetail(id) {
				uni.navigateTo({
					url: '/pages/goods-detail/goods-detail?id=' + id
				})
			},
		}
	}
</script>

<style lang="scss">
	.recommend {
		margin-top: 10px;
		background-color: #eee;

		.recommend-title {
			font: 40rpx 华文中宋;
			line-height: 80rpx;
			background-color: #fff;
			border-top: 3px solid #eee;
			text-align: center;
			color: $shop-color;
			letter-spacing: 20px;
		}


	}
</style>
