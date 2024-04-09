<template>
	<view class="dynamic_content">
		<view style="background-color: #FFFFFF;"
			:style="{'height':statusHeight==0? '50rpx':(statusHeight==1? '110rpx':'100rpx')}">
		</view>
		<view class="dynamic_content_view">
			<view class="dynamic_content_view_navbar">
				<image @click="nav" style="width: 25rpx; height: 40rpx;margin-right: 30rpx;"
					src="https://mp-773911e8-6917-4f03-9f50-e2393807e7c3.cdn.bspapp.com/cloudstorage/73e593ab-dfff-4dd2-a7c2-216411e6cb2a.png"
					mode=""></image>
				<u-avatar size="60"
					src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-773911e8-6917-4f03-9f50-e2393807e7c3/8ce21b4a-778e-4af1-a4c2-f7c4aff11949.png"></u-avatar>
				<view style="display: flex;flex-direction: column;align-items: left;
					justify-content: center;margin-left: 20rpx;">
					<text style="font-size: 36rpx;color:#7C7C79;margin-bottom: 4rpx;">橙不七</text>
					<text style="font-size: 30rpx;color:#7C7C79;">发布于2019年07年30日 09:00</text>
				</view>
			</view>
			<!-- content -->
			<view style='background-color:#FFFFFF;padding: 30rpx 40rpx 20rpx;
				color:#787875;font-size: 32rpx;'>
				人与人的关系,大都有个规律。从向往一个人,靠近一个人,熟悉一个人,离开一个人,最终回到一个人。
			</view>
			<!-- swiper -->
			<u-swiper @change="swiperChage" :current='current' :list="list1" height='170' previousMargin="35"
				nextMargin="35" circular :autoplay="false" radius="5" bgColor="#ffffff"></u-swiper>
			<view class="dynamic_content_view_list">
				<view class="dynamic_content_view_item" @click="multiple(i)" v-for="(item,i) in list2" :key="i">
					<view class="dynamic_content_view_image" :style="{backgroundImage:`url(${item.bgImg})`}">
						<view v-if="current!=i" style='width:180rpx;height:180rpx;background-color: #FFFFFF;
						opacity: 0.67;border-radius: 25rpx;'></view>
					</view>
				</view>
			</view>
			<!-- comment-addition -->
			<view
				style='display: flex;justify-content: space-between;align-items: center;padding: 0 50rpx 90rpx;background-color: #FFFFFF;'>
				<view style="display: flex;align-items: center;" v-for="(addition,v) in list3" :key="v">
					<image style="width: 38rpx; height: 38rpx;" :src="addition.icon" mode=""></image>
					<text style="color:#AAAAAA;margin-left: 10rpx;">{{addition.number}}</text>
				</view>
			</view>
			<!-- comment  -->
			<view class="dynamic_comment">
				<view v-for="(i,x) in list4" :key="x" style="margin-bottom: 50rpx;">
					<view class="dynamic_comment_item">
						<view class="dynamic_comment_item_left">
							<u-avatar
								style="box-shadow: 18px 18px 30px rgba(0, 0, 0, 0.2),-18px -18px 30px rgba(237, 243, 249, 1);"
								size="50" :src="i.icon"></u-avatar>
							<view style='display:flex;flex-direction: column;align-items: left;
								justify-content: center;margin-left: 20rpx;'>
								<text style="margin-bottom: 8rpx;color:#787875;">{{i.name}}</text>
								<text style="color:#ABABAB;">{{i.content}}</text>
							</view>
						</view>
						<text style="color:#BCBCBC;font-size:32rpx;
						">{{i.time}}</text>
					</view>
					<view v-if="i.children.length>0" v-for="(s,z) in i.children" :key="z" class="dynamic_comment_items">
						<view class="dynamic_comment_item_lefts">
							<u-avatar
								style="box-shadow: 18px 18px 30px rgba(0, 0, 0, 0.2),-18px -18px 30px rgba(237, 243, 249, 1);"
								size="50" :src="s.icon"></u-avatar>
							<view style='display:flex;flex-direction: column;align-items: left;
								justify-content: center;margin-left: 20rpx;'>
								<text style="margin-bottom: 8rpx;color:#787875;">{{s.name}}</text>
								<text style="color:#ABABAB;">{{s.content}}</text>
							</view>
						</view>
						<text style="color:#BCBCBC;font-size:32rpx;;
						">{{s.time}}</text>
					</view>
				</view>
			</view>
			<!-- footer -->
			<view style='display: flex;justify-content: space-around;align-items: center;position: fixed;
					bottom: 0;width: 100%;height: 160rpx;background-color: #FFFFFF;
					box-shadow: 2.5px 4.33px 24px rgba(6, 0, 1, 0.1);border-radius:50rpx 50rpx 0rpx 0rpx;'>
				<view style="display: flex;align-items: center;" v-for="(addition,v) in list3" :key="v">
					<image style="width: 45rpx; height: 45rpx;" :src="addition.icon1" mode=""></image>
					<text style="color:#AAAAAA;margin-left: 10rpx;
						color:#FFA660;font-size:34rpx;">{{addition.title}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				statusHeight: 0,
				current: 0,
				list1: [
					"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-773911e8-6917-4f03-9f50-e2393807e7c3/fb73178a-42be-4bdb-b83b-75aa704bb502.png",
					"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-773911e8-6917-4f03-9f50-e2393807e7c3/6e6291f6-9b9e-4f34-9b92-332ff2195e39.png",
					"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-773911e8-6917-4f03-9f50-e2393807e7c3/fb73178a-42be-4bdb-b83b-75aa704bb502.png",
				],
				list2: [{
						bgImg: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-773911e8-6917-4f03-9f50-e2393807e7c3/fb73178a-42be-4bdb-b83b-75aa704bb502.png',
					},
					{
						bgImg: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-773911e8-6917-4f03-9f50-e2393807e7c3/6e6291f6-9b9e-4f34-9b92-332ff2195e39.png',
					},
					{
						bgImg: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-773911e8-6917-4f03-9f50-e2393807e7c3/fb73178a-42be-4bdb-b83b-75aa704bb502.png',
					}
				],
				list3: [{
					number: 58,
					title: '评论',
					icon: 'https://mp-773911e8-6917-4f03-9f50-e2393807e7c3.cdn.bspapp.com/cloudstorage/fa92156a-c4e1-4d4f-a560-e5658c7830cf.png',
					icon1: 'https://mp-773911e8-6917-4f03-9f50-e2393807e7c3.cdn.bspapp.com/cloudstorage/a43a9f9f-c9d8-40ad-b506-7448d4586e0e.png',
				}, {
					number: 78,
					title: '点赞',
					icon: 'https://mp-773911e8-6917-4f03-9f50-e2393807e7c3.cdn.bspapp.com/cloudstorage/ae079712-57ee-4cdd-860e-4e3969ea9cd0.png',
					icon1: 'https://mp-773911e8-6917-4f03-9f50-e2393807e7c3.cdn.bspapp.com/cloudstorage/8368dc93-a790-4e34-a254-461909d4b91a.png',
				}],
				list4: [{
						icon: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-773911e8-6917-4f03-9f50-e2393807e7c3/8ce21b4a-778e-4af1-a4c2-f7c4aff11949.png',
						name: '橙不七',
						content: 'hahahahahaha',
						time: '09:00',
						children: [{
							icon: 'https://mp-773911e8-6917-4f03-9f50-e2393807e7c3.cdn.bspapp.com/cloudstorage/22d5ef2b-604c-47a8-857a-f56559dc68c2.jpg',
							name: '正一不正经',
							content: '笑个der笑个der',
							time: '09:30',
						}]

					},
					{
						icon: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-773911e8-6917-4f03-9f50-e2393807e7c3/8ce21b4a-778e-4af1-a4c2-f7c4aff11949.png',
						name: '苹果只吃皮',
						content: 'hahahahahaha',
						time: '09:30',
						children: []
					}
				]
			}
		},
		onLoad() {
			// #ifdef APP-PLUS
			let type = uni.getSystemInfoSync().platform
			switch (type) {
				case 'android':
					this.statusHeight = 0
				case 'ios':
					this.statusHeight = 1
					break;
				default:
					break;
			}
			// #endif
			// #ifdef MP-WEIXIN
			this.statusHeight = 2
			// #endif
		},
		methods: {
			nav() {
				uni.navigateBack({
					delta: 1
				})
			},
			multiple(i) {
				this.current = i
			},
			swiperChage(e) {
				this.current = e.current
			}
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #F6F6F6;
	}

	.dynamic_content_view {
		.dynamic_content_view_navbar {
			// border: solid 1px red;
			display: flex;
			align-items: center;
			// justify-content: space-between;
			padding: 0 40rpx;
			background-color: #FFFFFF;
		}

		.dynamic_content_view_list {
			// border: solid 1px red;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-around;
			padding: 40rpx 40rpx 20rpx;
			background-color: #FFFFFF;

			.dynamic_content_view_item {
				width: 180rpx;
				height: 180rpx;
				margin-bottom: 30rpx;
				border-radius: 25rpx;

				.dynamic_content_view_image {
					width: 100%;
					height: 180rpx;
					background-repeat: no-repeat;
					background-size: 100% 100%;
					position: relative;
					border-radius: 25rpx;
				}
			}
		}

		.dynamic_comment {
			// border: solid 1px red;
			padding-bottom: 160rpx;
			position: relative;
			top: -50rpx;
			background: rgb(246, 246, 246);
			border-radius: 50rpx 50rpx 0rpx 0rpx;
			padding: 60rpx 50rpx 150rpx;

			.dynamic_comment_item {
				// border: solid 1px red;
				display: flex;
				justify-content: space-between;

				.dynamic_comment_item_left {
					// border: solid 1px red;
					display: flex;
				}
			}

			.dynamic_comment_items {
				// border: solid 1px red;
				display: flex;
				justify-content: space-between;
				padding-left: 100rpx;
				margin-top: 40rpx;

				.dynamic_comment_item_lefts {
					// border: solid 1px red;
					display: flex;
				}
			}
		}
	}
</style>
<style lang="scss" scoped>
	/deep/.u-swiper__wrapper__item__wrapper {
		border-radius: 40rpx !important;
	}
</style>