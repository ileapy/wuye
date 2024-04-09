<template>
	<view class="mine_content">
		<view style="background-color:#fe9e59;"
			:style="{'height':statusHeight==0? '50rpx':(statusHeight==1? '110rpx':'100rpx')}">
		</view>
		<!-- top -->
		<view class="mine_content_top">
			<view class="mine_content_top_setting">
				<image style="width: 60rpx; height: 60rpx;"
					src="https://mp-773911e8-6917-4f03-9f50-e2393807e7c3.cdn.bspapp.com/cloudstorage/e4f6a4e2-918c-4358-9efd-aff7c966cfe6.png"
					mode=""></image>
			</view>
			<!-- head portrait -->
			<view class="mine_content_top_head">
				<u-avatar size="70"
					src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-773911e8-6917-4f03-9f50-e2393807e7c3/8ce21b4a-778e-4af1-a4c2-f7c4aff11949.png"></u-avatar>
				<text style="margin-top: 20rpx;">里派</text>
			</view>
			<!-- list -->
			<view class="mine_content_view_list">
				<view class="mine_content_view_item" v-for="(item,i) in list" :key="i">
					<view class="mine_content_view_image">
						<image style="width: 45rpx; height: 45rpx;padding-top: 10rpx;" :src="item.icon" mode=""></image>
						<text style="font-size: 28rpx;margin-top: 7px;">{{item.title}}</text>
					</view>
				</view>
			</view>
		</view>
		<!-- participation -->
		<view class="mine_content_participation">
			<text style="font-size:45rpx;color:#878787;">我参与的</text>
			<view class="mine_content_participation_right">
				<view>
					<text @click="btnSelect(j)" style="margin-right: 50rpx;"
						:style="{color:current==j?'#FFA763':'#BFBFBF',fontSize:current==j?'42rpx':'35rpx'}"
						v-for="(i,j) in list1" :key="j">{{i}}</text>
				</view>
				<image style="width: 40rpx; height: 40rpx;"
					src="https://mp-773911e8-6917-4f03-9f50-e2393807e7c3.cdn.bspapp.com/cloudstorage/7980f6c4-ddd0-40ac-969e-fd876b0a7777.png"
					mode=""></image>
			</view>
		</view>
		<!-- content-->
		<view style='padding:10rpx 30rpx 20rpx;'>
			<default-expansion @trigger='trigger' :particularsList='particularsList'
				:scrollTop="scrollTop"></default-expansion>
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
				current: 0,
				list: [{
						title: '我发布的',
						icon: 'https://mp-773911e8-6917-4f03-9f50-e2393807e7c3.cdn.bspapp.com/cloudstorage/a0b5eb54-d901-4fe4-b01f-247d9da08a83.png',
					},
					{
						title: '聊天',
						icon: 'https://mp-773911e8-6917-4f03-9f50-e2393807e7c3.cdn.bspapp.com/cloudstorage/d18ddc5f-e932-43b7-8cca-38336180c511.png',
					},
					{
						title: '钱包',
						icon: 'https://mp-773911e8-6917-4f03-9f50-e2393807e7c3.cdn.bspapp.com/cloudstorage/f3d461f2-8d8d-482a-a703-827f52e893fc.png',
					},
					{
						title: '订单',
						icon: 'https://mp-773911e8-6917-4f03-9f50-e2393807e7c3.cdn.bspapp.com/cloudstorage/b4eaa2cd-9e5c-44f4-a112-96012860bd5a.png',
					}
				],
				list1: ['动态', '闲置', '讨论'],
				particularsList: [{
						"id": 1,
						"created_at": "2023-03-16 03:19:51",
						"content": '人与人的关系，大都有个规律。从向往一个人，靠近一个人，到认识一个人，熟悉一个人，到误解一个人，离开一个人，最终回到一个人，释怀一个人。那些释怀的人再相遇时，鼓起勇气也只能问一句：你还好吗？“你还好吗？”不是让你回答我很好。而是想告诉你，没有联系的日子里，我在一直牵挂你.在时光的小河里，用文字追逐一缕心灵的暗香。在这不可惊扰的一刻静谧里，没有泪，没有哀伤，只有生命的坦然与从容，安详和淡泊。',
						"img_list": [
							"https://img2.woyaogexing.com/2023/03/19/d668d0cdd1131e37a001789f0c1e9ada.jpeg",
							"https://img2.woyaogexing.com/2023/03/17/2df5cc78e2334780b3477b4aad613323.jpeg",
							"https://img2.woyaogexing.com/2023/03/15/dd363f9eb70567340bec34a1968777dc.jpeg"
							
							// "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-773911e8-6917-4f03-9f50-e2393807e7c3/6e6291f6-9b9e-4f34-9b92-332ff2195e39.png",
							// "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-773911e8-6917-4f03-9f50-e2393807e7c3/8c0d8d26-a969-4564-aa95-1bf5447bbb41.png",
							// "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-773911e8-6917-4f03-9f50-e2393807e7c3/9d644eff-4b92-4d70-a80d-d1c5af82d1cd.png"
						],
						"user_name": "里派",
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
							"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-773911e8-6917-4f03-9f50-e2393807e7c3/fb73178a-42be-4bdb-b83b-75aa704bb502.png",
							"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-773911e8-6917-4f03-9f50-e2393807e7c3/6e6291f6-9b9e-4f34-9b92-332ff2195e39.png",
							"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-773911e8-6917-4f03-9f50-e2393807e7c3/fb73178a-42be-4bdb-b83b-75aa704bb502.png",
						],
						"user_name": "里派",
						"headimgurl": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-773911e8-6917-4f03-9f50-e2393807e7c3/8ce21b4a-778e-4af1-a4c2-f7c4aff11949.png",
						"need_pd": [{
							"item_id": 1621,
							"item_name": "转载"
						}],
						"showText": false,
					}
				],
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
			},
			btnSelect(index){
				this.current=index
			}
		}
	}
</script>

<style lang="scss">
	.mine_content_top {
		width: 100%;
		// height: 500rpx;
		background: linear-gradient(0.00deg, rgba(250, 130, 77, 1.00) 0.29%, rgba(254, 158, 89, 1.00) 99.709%);
		border-radius: 0 0 50rpx 50rpx;

		.mine_content_top_setting {
			display: flex;
			padding: 0 60rpx;
			/* #ifndef MP-WEIXIN */
			justify-content: right;
			/* #endif */
			/* #ifdef MP-WEIXIN */
			justify-content: left;
			/* #endif */

		}

		.mine_content_top_head {
			display: flex;
			justify-content: center;
			flex-direction: column;
			align-items: center;
			color: #FFFFFF;
			margin: 30rpx 0;
			font-size: 45rpx;
		}

		.mine_content_view_list {
			// border: solid 1px red;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-around;
			padding: 0rpx 15rpx 45rpx;

			.mine_content_view_item {
				// border: solid 1px red;
				width: 175rpx;
				height: 170rpx;
				// margin-bottom: 30rpx;
				// border-radius: 25rpx;

				.mine_content_view_image {
					color: #FFA35C;
					width: 100%;
					height: 170rpx;
					background-repeat: no-repeat;
					background-size: 100% 100%;
					// position: relative;
					background-image: url(https://mp-773911e8-6917-4f03-9f50-e2393807e7c3.cdn.bspapp.com/cloudstorage/b2cec369-5e2c-4103-8c09-6ddf26ed5462.png);
					// border-radius: 25rpx;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
				}
			}
		}
	}

	.mine_content_participation {
		padding: 0 40rpx;
		// border: solid 1px red;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 30rpx 0;

		.mine_content_participation_right {
			display: flex;
			align-items: center;
		}
	}
</style>