<template>
	<view class="pics">
		<!-- 标题 -->
		<scroll-view scroll-y="true" class="left">
			<view v-for="(item,index) in titles" :key="item.id" :class="index === currentIndex ? 'active' : ''"
				@click="titlesClick(index,item.id)">{{item.title}}</view>
		</scroll-view>
		<!-- 内容 -->
		<scroll-view scroll-y="true" class="right">
			<view v-for="item in contenxts" class="right-item">
				<view class="item-title">{{item.title}}</view>
				<image :src="cover" class="item-img"></image>
				<text class="item-text">{{item.zhaiyao}}</text>
			</view>
			<view v-if="contenxts.length === 0">暂无数据</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				titles: [{
						title: "家居生活",
						id: 14
					},
					{
						title: "摄影设计",
						id: 15
					},
					{
						title: "明星美女",
						id: 16
					},
					{
						title: "空间设计",
						id: 17
					},
					{
						title: "户型装饰",
						id: 18
					},
					{
						title: "广告摄影",
						id: 19
					},
					{
						title: "摄影学习",
						id: 20
					},
					{
						title: "摄影器材",
						id: 21
					},
					{
						title: "明星写真",
						id: 22
					},
					{
						title: "清纯甜美",
						id: 23
					},
					{
						title: "古典美女",
						id: 24
					}
				],
				currentIndex: 0,
				flag: true,
				contenxts: [],
				imgUrl: 'https://cn.bing.com/images/search?view=detailV2&ccid=myCV35we&id=0B5E4EDFBF38C91267764B3B717574D8589788FC&thid=OIP.myCV35weXPP1aF6nFT48ugHaE7&mediaurl=https%3a%2f%2fts1.cn.mm.bing.net%2fth%2fid%2fR-C.9b2095df9c1e5cf3f5685ea7153e3cba%3frik%3d%252fIiXWNh0dXE7Sw%26riu%3dhttp%253a%252f%252fimg95.699pic.com%252fphoto%252f50053%252f4612.jpg_wh860.jpg%26ehk%3dtB5XYpYjix%252fIFKiL1C8eo1%252b93LMyIYQsTaCEvg6jL4U%253d%26risl%3d%26pid%3dImgRaw%26r%3d0&exph=573&expw=860&q=%e5%ae%b6%e5%b1%85%e5%9b%be%e7%89%87&simid=607999217278193248&FORM=IRPRST&ck=16C1A091384B387EB34452CD6DBDCCE9&selectedIndex=3&ajaxhist=0&ajaxserp=0',
				cover: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/094a9dc0-50c0-11eb-b680-7980c8a877b8.jpg',
				}
		},
		onLoad() {
			this.getTitle()
		},
		methods: {
			async getTitle() {
				const res = await this.$myRequest({
					url: '/api/getimgcategory'
				})
				// this.titles = res.data.message
			},
			async titlesClick(index, id) {
				this.currentIndex = index

				const res = await this.$myRequest({
					url: '/api/getimages/' + id
				})
				
				this.contenxts = res.data.message
				console.log(this.contenxts)
			}
		}
	}
</script>

<style lang="scss">
	.pics {
		width: 750rpx;
		height: 100%;
		display: flex;

		.left {
			width: 200rpx;
			height: 100vh;
			text-align: center;
			border-right: 1px solid #eee;

			view {
				height: 60px;
				line-height: 60px;
				color: #333;
				font-size: 30rpx;
				border-bottom: 1px solid #eee;
			}

			.active {
				background-color: $shop-color;
				color: #fff;
			}
		}


		.right {
			flex: 1;
			height: 100vh;
			box-sizing: border-box;
			justify-content: center;
			.right-item {
				width: 96%;
				margin: 0 auto;
				box-sizing: border-box;
				padding: 10px;
				box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
				.item-title {
					font: 600 38rpx 华文中宋;
				}
				.item-img {
					width: 100%;
					border-radius: 16rpx;
					margin: 16rpx 0;
				}
				.item-text {
					text-indent: 2em;
					line-height: 60rpx;
				}
			}
		}

	}
</style>
