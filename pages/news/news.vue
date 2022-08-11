<template>
	<view class="news">
		<view class="news-item" v-for="item in news" @click="goDetail(item.id)">
			<image src="../../static/logo.png"></image>
			<!-- <image :src="item.img_url" mode=""></image> -->
			<view class="left">
				<view class="title">{{item.title}}</view>
				<view class="info">
					<text>发表时间：{{ item.add_time | formatDate}}</text>
					<text>浏览：{{item.click}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				news: [],
			}
		},
		onLoad() {
			this.getList()
		},
		methods: {
			async getList() {
				const res = await this.$myRequest({
					url: '/api/getnewslist',
				})
				this.news = res.data.message
				console.log(res)
			},
			goDetail(id) {
				console.log(id)
				uni.navigateTo({
					url: '/pages/news-detail/news-detail?id=' + id
				})
			}
		},
		filters: {
			formatDate(date) {
				const newDate = new Date(date)
				const year = newDate.getFullYear()
				// 时间日期转换
				const mouth = newDate.getMonth().toString().padStart(2,0)
				const day = newDate.getDay().toString().padStart(2,0)
				return year + '-' + mouth + '-' + day
			}
		}
	}
</script>

<style lang="scss">
	.news-item {
		display: flex;
		padding: 14rpx;
		border: 1px solid $shop-color;
		image {
			width: 200rpx;
			height: 160rpx;
			// max-width: 240rpx;
			min-width: 200rpx;
			min-height: 160rpx;
		}

		.left {
			margin-left: 20rpx;

			.info {
				padding: 20rpx 0;
				font-size: 20rpx;
				text:nth-child(2) {
					display: inline-block;
					padding-left: 16rpx;
				}
			}
		}

	}
</style>
