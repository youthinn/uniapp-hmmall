<template>
	<view class="news-detail">
		<view class="title">{{detail.title}}</view>
		<view class="info">
			<text>发表时间：{{detail.add_time | formatDate}}</text>
			<text>浏览：{{detail.click}}</text>
		</view>
		<view class="content" v-html="">
			<rich-text :nodes="detail.content"></rich-text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id: 0,
				detail: {}
			}
		},
		onLoad(options) {
			this.id = options.id
			// console.log(this.id)
			this.getNewsDetail()
		},
		methods: {
			async getNewsDetail(id) {
				const res = await this.$myRequest({
					url: '/api/getnew/' + this.id,
				})
				this.detail = res.data.message[0]
				console.log(this.detail)
			}
		}
	}
</script>

<style lang="scss">
	.news-detail {
		font-size: 32rpx;
		box-sizing: border-box;
		padding: 20rpx;
		.title {
			text-align: center;
			line-height: 80rpx;
			font: 600 40rpx 华文中宋;
			color: $shop_color;
		}
		.info {
			display: flex;
			justify-content: space-between;
		}
	}
</style>
