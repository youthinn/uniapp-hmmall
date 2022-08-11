<template>
	<view class="goods-list">
		<goods-list :goods="goods"></goods-list>
		<view class="goods-bottom" v-if="flag">------我是有底线的------</view>
	</view>
</template>

<script>
	import GoodsList from '../../compont/goods-list/GoodsList.vue'
	export default {
		data() {
			return {
				pageindex: 1,
				goods: [],
				flag: false
			}
		},
		components: {
			GoodsList
		},
		onLoad() {
			this.getGoodsList()
		},
		onReachBottom() {
			if(this.goods.length < this.pageindex * 10) return this.flag = true
			this.pageindex++
			this.getGoodsList()
		},
		onPullDownRefresh() {
			this.pageindex = 1
			this.goods = []
			this.flag = false
			setTimeout(() => {
				this.getGoodsList(() => {
					uni.stopPullDownRefresh()
				})
			},1000)
		},
		methods: {
			async getGoodsList(callBack) {
				const res = await this.$myRequest({
					url: '/api/getgoods?pageindex=' + this.pageindex
				})
				this.goods = [...this.goods,...res.data.message]
				callBack && callBack()
			}
		}
	}
</script>

<style lang="scss">
	.goods-list {
		background-color: #eee;
		.goods-bottom {
			color: #b2b2b2;
			text-align: center;
			line-height: 68rpx;
		}
	}
</style>