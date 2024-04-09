<template>
	<view class="home_content">
		<view style="background-color: #FE9F59;"
			:style="{'height':statusHeight==0? '50rpx':(statusHeight==1? '80rpx':'65rpx')}">
		</view>
		<view class="home_content_center">
			<!-- top -->
			<view class="home_content_center_top">
				<view class="home_content_center_top_left">
					<text style="font-size: 58rpx;margin-bottom: 20rpx;">早上好,里派</text>
					<text style="font-size: 30rpx;">今天天气晴朗,适宜外出活动</text>
				</view>
				<!-- #ifndef MP-WEIXIN -->
				<u-avatar size="60"
					src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-773911e8-6917-4f03-9f50-e2393807e7c3/8ce21b4a-778e-4af1-a4c2-f7c4aff11949.png"></u-avatar>
				<!-- #endif -->
			</view>
			<!--  -->
			<view class="home_content_center_middle">
				<!-- list1 -->
				<view class="middle_list">
					<view class="middle_item" @click="btnOption(index)" :class="{'middle_items':currect==index}"
						v-for="(item,index) in listOne" :key="index">
						<image style="width: 70rpx; height: 70rpx;margin-bottom: 10rpx;" :src="item.icon" mode="">
						</image>
						<text style="font-size: 27rpx;color: #FFAC6B;">{{item.title}}</text>
					</view>
				</view>
				<!-- list2 -->
				<view class="middle_scroll-list">
					<text style="color: #B9B9B7;font-size: 34rpx;">便携服务</text>
					<scroll-view scroll-x="true" @scroll="scroll">
						<view class="scroll-list">
							<view class="scroll-list_item" v-for="(list,i) in listTwo" :key="i">
								<view class='scroll-list_item_image'>
									<image style="width: 55rpx; height: 60rpx;" :src="list.icon" mode=""></image>
								</view>
								<text style="color:#979797;font-size: 26rpx;">{{list.title}}</text>
							</view>
						</view>
					</scroll-view>
				</view>
				<!-- list3 -->
				<view class="dynamic_list">
					<!--  -->
					<view class="dynamic_list_title">
						<text style="color: #B9B9B7;font-size: 34rpx;">小区动态</text>
						<view style="display: flex;align-items: center;">
							<view :class="{'dynamic_list_line':scrollLeft>(120*listTwo.length+40*listTwo.length)/25}"
								style='width: 15rpx;height: 15rpx;border-radius: 50%;background-color:#b4b4b4;margin-right: 7rpx;'>
							</view>
							<view :class="{'dynamic_list_line':scrollLeft>(120*listTwo.length+40*listTwo.length)/17}"
								style='width: 15rpx;height: 15rpx;border-radius: 50%;background-color:#b4b4b4;margin-right: 7rpx;'>
							</view>
							<view :class="{'dynamic_list_line':scrollLeft>(120*listTwo.length+40*listTwo.length)/9}"
								style='width: 15rpx;height: 15rpx;border-radius: 50%;background-color:#b4b4b4;margin-right: 7rpx;'>
							</view>
						</view>
					</view>
					<!-- content-->
					<default-expansion @trigger='trigger' :particularsList='particularsList'
						:scrollTop="scrollTop"></default-expansion>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import defaultExpansion from "@/components/expansion-theme/default.vue"
	export default {
		components: {
			defaultExpansion
		},
		data() {
			return {
				statusHeight: 0,
				currect: null,
				listOne: [{
						title: '家政服务',
						icon: 'https://mp-773911e8-6917-4f03-9f50-e2393807e7c3.cdn.bspapp.com/cloudstorage/c5b9c7de-9d97-48ba-8109-9f12de5ef584.png'
					},
					{
						title: '物业缴费',
						icon: 'https://mp-773911e8-6917-4f03-9f50-e2393807e7c3.cdn.bspapp.com/cloudstorage/67407b3e-4e18-42d6-b7f9-83d020798a96.png'
					},
					{
						title: '小区维修',
						icon: 'https://mp-773911e8-6917-4f03-9f50-e2393807e7c3.cdn.bspapp.com/cloudstorage/61e14ccc-b51c-4664-8784-a183cf63b717.png'
					}
				],
				listTwo: [{
						title: '小区通讯',
						icon: 'https://mp-773911e8-6917-4f03-9f50-e2393807e7c3.cdn.bspapp.com/cloudstorage/df2cdf22-6077-434d-a9b6-beae07ed9e55.png'
					}, {
						title: '停车',
						icon: 'https://mp-773911e8-6917-4f03-9f50-e2393807e7c3.cdn.bspapp.com/cloudstorage/f6144426-3a94-4d87-8628-8dcf13e18805.png'
					}, {
						title: '开锁',
						icon: 'https://mp-773911e8-6917-4f03-9f50-e2393807e7c3.cdn.bspapp.com/cloudstorage/fb686b4b-cee3-4229-af9d-487802d8b757.png'
					}, {
						title: '送水',
						icon: 'https://mp-773911e8-6917-4f03-9f50-e2393807e7c3.cdn.bspapp.com/cloudstorage/93c272fb-3be3-4221-906a-67ebbb2f0f35.png'
					}, {
						title: '来访登记',
						icon: 'https://mp-773911e8-6917-4f03-9f50-e2393807e7c3.cdn.bspapp.com/cloudstorage/36c2c2c5-b516-441a-8db7-268c54daeddc.png'
					},
					{
						title: '娱乐',
						icon: 'https://mp-773911e8-6917-4f03-9f50-e2393807e7c3.cdn.bspapp.com/cloudstorage/e9601061-bb81-4493-89ea-6a45c16975bc.png'
					}, {
						title: '公益',
						icon: 'https://mp-773911e8-6917-4f03-9f50-e2393807e7c3.cdn.bspapp.com/cloudstorage/3e39dbd5-92d7-41a3-b5b5-8033fe07e725.png'
					}
				],
				particularsList: [{
						"id": 1,
						"created_at": "2023-03-16 03:19:51",
						"content": '人与人的关系，大都有个规律。从向往一个人，靠近一个人，到认识一个人，熟悉一个人，到误解一个人，离开一个人，最终回到一个人，释怀一个人。那些释怀的人再相遇时，鼓起勇气也只能问一句：你还好吗？“你还好吗？”不是让你回答我很好。而是想告诉你，没有联系的日子里，我在一直牵挂你.在时光的小河里，用文字追逐一缕心灵的暗香。在这不可惊扰的一刻静谧里，没有泪，没有哀伤，只有生命的坦然与从容，安详和淡泊。',
						"img_list": [
							"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-773911e8-6917-4f03-9f50-e2393807e7c3/fb73178a-42be-4bdb-b83b-75aa704bb502.png",
							"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-773911e8-6917-4f03-9f50-e2393807e7c3/6e6291f6-9b9e-4f34-9b92-332ff2195e39.png",
							"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-773911e8-6917-4f03-9f50-e2393807e7c3/fb73178a-42be-4bdb-b83b-75aa704bb502.png",
							"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-773911e8-6917-4f03-9f50-e2393807e7c3/6e6291f6-9b9e-4f34-9b92-332ff2195e39.png",
							"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-773911e8-6917-4f03-9f50-e2393807e7c3/8c0d8d26-a969-4564-aa95-1bf5447bbb41.png",
							"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-773911e8-6917-4f03-9f50-e2393807e7c3/9d644eff-4b92-4d70-a80d-d1c5af82d1cd.png"
						],
						"user_name": "橙不七",
						"headimgurl": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-773911e8-6917-4f03-9f50-e2393807e7c3/8ce21b4a-778e-4af1-a4c2-f7c4aff11949.png",
						"need_pd": [{
							"item_id": 1621,
							"item_name": "原创"
						}],
						"showText": false,
					},
					{
						"id": 5,
						"created_at": "2023-03-16 03:19:51",
						"content": "情思理还乱，红颜剪不断，秋去冬来成感伤，花谢花开几苍凉？恋恋卷风尘，昙花乍一现，情思已逝暗留香，红颜已往空留叹。冷月夜，寒芳岁，凄风扶盏意消退；十指扣，浓眉皱，情至红颜华年愁。琉璃深处，点点忧伤，绾向前世愿，却了结不断今生残缘。无奈幽幽乱红，纵然血溅春泥，终因一场水月镜花，负了你我，负了天下。转身处，一觞浊酒，于心间，尽洒万碧情缘。",
						"img_list": [
							"https://img2.woyaogexing.com/2023/03/19/d668d0cdd1131e37a001789f0c1e9ada.jpeg",
							"https://img2.woyaogexing.com/2023/03/17/2df5cc78e2334780b3477b4aad613323.jpeg",
							"https://img2.woyaogexing.com/2023/03/15/dd363f9eb70567340bec34a1968777dc.jpeg"
						],
						"user_name": "正一不正经",
						"headimgurl": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-773911e8-6917-4f03-9f50-e2393807e7c3/8ce21b4a-778e-4af1-a4c2-f7c4aff11949.png",
						"need_pd": [{
							"item_id": 1621,
							"item_name": "转载"
						}],
						"showText": false,
					}
				],
				scrollLeft: 0,
				scrollTop: 0
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
		onPageScroll(e) {
			this.scrollTop = e.scrollTop
		},
		onPullDownRefresh() {
			uni.stopPullDownRefresh()
		},
		methods: {
			btnOption(index) {
				this.currect = index
				if (index == 0) {
					uni.navigateTo({
						url: '/pagesA/husbandry/index'
					})
				} else if (index == 1) {
					uni.navigateTo({
						url: '/pagesA/fees/index'
					})
				}
			},
			scroll(e) {
				this.scrollLeft = e.detail.scrollLeft
			},
			trigger(index) {
				var that = this
				that.$set(that.particularsList[index], 'showText', !that.particularsList[index].showText)
				if (that.particularsList[index].showText) {
					that.particularsList[index].scrollTop = this.scrollTop - 30
				} else {
					uni.pageScrollTo({
						scrollTop: that.particularsList[index].scrollTop,
						duration: 250,
					})
				}
			}
		}
	}
</script>

<style lang="scss">
	page {
		babackground-color: #FFFFFF;
	}

	.home_content_center {
		// border: solid 1px blue;

		.home_content_center_top {
			background-color: #FE9F59;
			height: 200rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0 30rpx 130rpx;
			color: #FFFFFF;

			.home_content_center_top_left {
				display: flex;
				flex-direction: column;
				align-items: left;
			}
		}

		.home_content_center_middle {
			// border: solid 1px red;
			border-radius: 40rpx 40rpx 0 0;
			position: relative;
			bottom: 60rpx;
			background-color: #FFFFFF;

			.middle_list {
				padding: 40rpx 30rpx 20rpx;
				display: flex;
				justify-content: space-between;

				.middle_item {
					// border: solid 1px pink;
					background: rgb(255, 255, 255);
					box-shadow: 0px 0px 10px rgba(6, 0, 1, 0.05);
					// box-shadow: 18px 18px 30px rgba(0, 0, 0, 0.2),
					// 	-18px -18px 30px rgba(237, 243, 249, 1);
					transition: all .3s ease-out;
					height: 140rpx;
					width: 140rpx;
					padding: 30rpx;
					border-radius: 40rpx/50rpx;
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.middle_items {
					height: 130rpx;
					width: 130rpx;
					box-shadow: 0 0 0 rgba(0, 0, 0, 0.2),
						0 0 0 rgba(237, 243, 249, 0.8),
						inset 8px 8px 8px rgb(207, 221, 237),
						inset -8px -8px 8px rgba(255, 255, 255, 0.5)
				}
			}
		}

		.middle_scroll-list {
			padding: 40rpx 30rpx 0;
			// border: solid 1px red;
			// height:100%;

			.scroll-list {
				display: flex;
				margin-top: 20rpx;

				.scroll-list_item {
					// border: solid 1px blue;
					display: flex;
					flex-direction: column;
					align-items: center;
					margin-right: 40rpx;
					height: 200rpx;

					.scroll-list_item_image {
						width: 120rpx;
						height: 120rpx;
						background-color: #FFA45C;
						border-radius: 25rpx;
						display: flex;
						justify-content: center;
						align-items: center;
						margin-bottom: 10rpx;
					}
				}
			}
		}

		.dynamic_list {
			padding: 20rpx 30rpx 0;
			// border: solid 1px blue;

			.dynamic_list_title {
				display: flex;
				justify-content: space-between;
				align-items: center;
			}
		}

		.dynamic_list_line {
			background-color: #FE9F59 !important;
		}
	}

	/deep/ .u-scroll-list__indicator {
		display: none !important;
	}
</style>