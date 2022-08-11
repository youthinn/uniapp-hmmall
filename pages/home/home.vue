<template>
	<view class="home">
		<!-- 轮播图 -->
		<swiper :indicator-dots="true" :autoplay="true" :interval="2000" :duration="1000" circular>
			<swiper-item v-for="item in swipers" :key="item.id">
				<image :src="item.img"></image>
				<!-- <image :src="item.image_src" mode=""></image> -->
			</swiper-item>
		</swiper>
		<!-- 导航区域 -->
		<home-nav />
		<!-- 商品推荐 -->
		<home-goods />
	</view>
</template>

<script>
	import HomeNav from './child/HomeNav.vue'
	import HomeGoods from './child/HomeGoods.vue'
	export default {
		components: {
			HomeNav,
			HomeGoods
		},
		data() {
			return {
				swipers: []
			}
		},
		onLoad() {
			this.getSwiper()
			// this.getTest()
		},
		methods: {
			// 请求轮播图
			async getSwiper() {
				const res = await this.$myRequest({
					url: '/api/getlunbo',
					// url: '/api/public/v1/home/swiperdata',
					method: 'GET'
				})
				console.log(res)
				this.swipers = res.data.message
			},
			// 测试网络接口
			getTest() {
				uni.request({
					url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
					method: 'GET',
					success: res => {
						console.log(res)
						this.swipers = res.data.message
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.home {
		swiper {
			width: 750rpx;
			height: 380rpx;

			image {
				width: 100%;
				height: 100%;
			}
		}
	}
</style>
