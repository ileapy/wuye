<template>
	<view class="details_content">
		<!-- top -->
		<view style="background-color:#fe9e59;"
			:style="{'height':statusHeight==0? '50rpx':(statusHeight==1? '110rpx':'100rpx')}">
		</view>
		<!--  -->
		<view class="details_content_center_top">
			<image @click="nav" style="width: 25rpx; height: 40rpx;"
				src="https://mp-773911e8-6917-4f03-9f50-e2393807e7c3.cdn.bspapp.com/cloudstorage/646f3749-07a6-42bb-ad1c-604f1825ad64.png"
				mode=""></image>
			<view class="details_content_center_top_right" :style="{visibility:statusHeight==2?'hidden':''}">
				<image style="width: 55rpx; height: 55rpx;"
					src="https://mp-773911e8-6917-4f03-9f50-e2393807e7c3.cdn.bspapp.com/cloudstorage/a173c22e-362e-4758-a80a-7c26a727130b.png"
					mode=""></image>
				<image style="width: 55rpx; height: 55rpx;"
					src="https://mp-773911e8-6917-4f03-9f50-e2393807e7c3.cdn.bspapp.com/cloudstorage/0cf614d5-ffd7-460c-bce0-e3633c0c1661.png"
					mode=""></image>
				<image style="width: 55rpx; height: 55rpx;"
					src="https://mp-773911e8-6917-4f03-9f50-e2393807e7c3.cdn.bspapp.com/cloudstorage/6cabe832-9287-45bb-8d95-a29d41a297b8.png"
					mode=""></image>
			</view>
		</view>
		<!-- list -->
		<view style='background-color:#FFFFFF;
		border-radius:45rpx 45rpx 0px 0px;position: relative;bottom: 40rpx;'>
			<!-- top -->
			<!-- <view class="details_list"> -->
			<view class="details_list_item">
				<!-- top -->
				<view class="details_list_item_top">
					<view class="details_list_item_top_left">里派</view>
					<view class="details_list_item_top_center">
						<text style="color:#757572;font-size: 33rpx;margin-bottom: 2rpx;">里派便利店</text>
						<view style="display: flex;align-items: center;">
							<image v-for="(s,c) in 5" :key="c" style="width: 30rpx; height: 30rpx;margin-right: 10rpx;"
								src="https://mp-773911e8-6917-4f03-9f50-e2393807e7c3.cdn.bspapp.com/cloudstorage/635181fb-6b04-41ce-b79f-10a96ceb3330.png"
								mode=""></image>
							<text style="color:#FFA45C;margin-left: 10rpx;">5.0</text>
						</view>
						<text style="color: #91918F; font-size: 25rpx;margin-top: 2rpx;">配送费5(满20免配送费)</text>
					</view>
					<text
						style="color:#FFA45C;font-size: 26rpx;width: 130rpx;margin-left: 30rpx;display: flex;align-items: center;justify-content: right;">674条评价</text>
				</view>
				<!-- types of-->
				<view class="details_list_item_type">
					<text
						style="font-size: 25rpx;color:#91918F;border: solid 1px #91918F;border-radius: 17px;padding: 2rpx 12rpx;text-align: center;"
						v-for="(y,w) in list4" :key="w">{{y}}</text>
				</view>
			</view>
			<!-- </view> -->
			<!-- filtrate -->
			<!-- <view class="details_content_filtrate_participation">
				<view
					style='border-radius: 100rpx;box-shadow: 0.78px 4.94px 18px rgba(6, 0, 1, 0.05);width: 350rpx;visibility:hidden;'>
					<u-search bgColor='#FFFFFF' height='37' searchIconSize='0' inputAlign='center' :showAction="false"
						placeholder="搜索社区闲置"></u-search>
				</view>
				<view class="details_content_filtrate_participation_right">
					<text @click="btnSelects(x)"
						:style="{color:currents==x?'#FFA763':'#BFBFBF',fontSize:currents==x?'35rpx':'32rpx'}"
						v-for="(i,x) in list1" :key="x">{{i}}</text>
				</view>
			</view> -->
			<!-- filtrate -->
			<!-- scroll -->
			<view class="u-wrap">
				<view class="u-menu-wrap">
					<scroll-view scroll-y scroll-with-animation class="u-tab-view menu-scroll-view"
						:scroll-top="scrollTop" :scroll-into-view="itemId">
						<view v-for="(item,index) in tabbar" :key="index" class="u-tab-item"
							:class="[current == index ? 'u-tab-item-active' : '']" @tap.stop="swichMenu(index)">
							<text style="margin-bottom: 30rpx;" class="u-line-1">{{item.name}}</text>
							<text class="u-line-1">{{item.number}}</text>
						</view>
					</scroll-view>
					<scroll-view :scroll-top="scrollRightTop" scroll-y scroll-with-animation class="right-box"
						@scroll="rightScroll">
						<view class="page-view">
							<view class="class-item" :id="'item' + index" v-for="(item , index) in tabbar" :key="index">
								<!-- <view class="item-title">
									<text>{{item.name}}</text>
								</view> -->
								<view class="item-container">
									<view class="thumb-box" v-for="(item1, index1) in item.foods" :key="index1">
										<image class="item-menu-image" :src="item1.icon" mode="aspectFill"></image>
										<view class="item-menu-name">{{item1.name}}</view>
										<view class="item-menu-names">
											<text>750g/个</text>
											<text>48推荐</text>
										</view>
										<view class="item-menu-namess">
											<text>￥{{item1.cat}}</text>
											<view style="background-color: #FFA45C;border-radius: 50%;display:flex;
												justify-content: center;align-items: center;">
												<image style="height:22rpx;width: 22rpx;padding: 10rpx;"
													src="https://mp-773911e8-6917-4f03-9f50-e2393807e7c3.cdn.bspapp.com/cloudstorage/f1a1ebfa-7ac8-46ef-8aaa-68cec87f9b64.png"
													mode="aspectFit"></image>
											</view>
										</view>
									</view>
								</view>
							</view>
						</view>
					</scroll-view>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	import classifyData from './js/classify.data.js';
	export default {
		data() {
			return {
				statusHeight: 0,
				currents: 0,
				list1: ['最新发布', '价格', '热度'],
				list4: ['进口零食', '24小时', '支持预定', '日用百货'],
				list5: [{
						icon: 'https://mp-773911e8-6917-4f03-9f50-e2393807e7c3.cdn.bspapp.com/cloudstorage/484deaec-2b23-4c64-8cfb-c5227674adf3.png',
						title: '水果蛋糕',
						price: '148',
						unit: '包'
					},
					{
						icon: 'https://mp-773911e8-6917-4f03-9f50-e2393807e7c3.cdn.bspapp.com/cloudstorage/9802814e-566a-491a-a315-e8c07169de05.png',
						title: '水果奶昔',
						price: '68',
						unit: '包'
					},
					{
						icon: 'https://mp-773911e8-6917-4f03-9f50-e2393807e7c3.cdn.bspapp.com/cloudstorage/0d0f7e87-c871-4c92-88bb-1df579b5450f.png',
						title: '点心面包',
						price: '164',
						unit: '袋'
					},
					{
						icon: 'https://mp-773911e8-6917-4f03-9f50-e2393807e7c3.cdn.bspapp.com/cloudstorage/9802814e-566a-491a-a315-e8c07169de05.png',
						title: '水果奶昔',
						price: '68',
						unit: '包'
					}
				],
				scrollTop: 0, //tab标题的滚动条位置
				oldScrollTop: 0,
				current: 0, // 预设当前项的值
				menuHeight: 0, // 左边菜单的高度
				menuItemHeight: 0, // 左边菜单item的高度
				itemId: '', // 栏目右边scroll-view用于滚动的id
				tabbar: classifyData,
				menuItemPos: [],
				arr: [],
				scrollRightTop: 0, // 右边栏目scroll-view的滚动条高度
				timer: null, // 定时器


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
		onReady() {
			this.getMenuItemTop()
		},
		methods: {
			// 点击左边的栏目切换
			async swichMenu(index) {
				if (this.arr.length == 0) {
					await this.getMenuItemTop();
				}
				if (index == this.current) return;
				this.scrollRightTop = this.oldScrollTop;
				this.$nextTick(function() {
					this.scrollRightTop = this.arr[index];
					this.current = index;
					this.leftMenuStatus(index);
				})
			},
			// 获取一个目标元素的高度
			getElRect(elClass, dataVal) {
				new Promise((resolve, reject) => {
					const query = uni.createSelectorQuery().in(this);
					query.select('.' + elClass).fields({
						size: true
					}, res => {
						// 如果节点尚未生成，res值为null，循环调用执行
						if (!res) {
							setTimeout(() => {
								this.getElRect(elClass);
							}, 10);
							return;
						}
						this[dataVal] = res.height;
						resolve();
					}).exec();
				})
			},
			// 观测元素相交状态
			async observer() {
				this.tabbar.map((val, index) => {
					let observer = uni.createIntersectionObserver(this);
					// 检测右边scroll-view的id为itemxx的元素与right-box的相交状态
					// 如果跟.right-box底部相交，就动态设置左边栏目的活动状态
					observer.relativeTo('.right-box', {
						top: 0
					}).observe('#item' + index, res => {
						if (res.intersectionRatio > 0) {
							let id = res.id.substring(4);
							this.leftMenuStatus(id);
						}
					})
				})
			},
			// 设置左边菜单的滚动状态
			async leftMenuStatus(index) {
				this.current = index;
				// 如果为0，意味着尚未初始化
				if (this.menuHeight == 0 || this.menuItemHeight == 0) {
					await this.getElRect('menu-scroll-view', 'menuHeight');
					await this.getElRect('u-tab-item', 'menuItemHeight');
				}
				// 将菜单活动item垂直居中
				this.scrollTop = index * this.menuItemHeight + this.menuItemHeight / 2 - this.menuHeight / 2;
			},
			// 获取右边菜单每个item到顶部的距离
			getMenuItemTop() {
				new Promise(resolve => {
					let selectorQuery = uni.createSelectorQuery();
					selectorQuery.selectAll('.class-item').boundingClientRect((rects) => {
						// 如果节点尚未生成，rects值为[](因为用selectAll，所以返回的是数组)，循环调用执行
						if (!rects.length) {
							setTimeout(() => {
								this.getMenuItemTop();
							}, 10);
							return;
						}
						rects.forEach((rect) => {
							// 这里减去rects[0].top，是因为第一项顶部可能不是贴到导航栏(比如有个搜索框的情况)
							this.arr.push(rect.top - 280);
							resolve();
						})
					}).exec()
				})
			},
			// 右边菜单滚动
			async rightScroll(e) {
				this.oldScrollTop = e.detail.scrollTop;
				if (this.arr.length == 0) {
					await this.getMenuItemTop();
				}
				if (this.timer) return;
				if (!this.menuHeight) {
					await this.getElRect('menu-scroll-view', 'menuHeight');
				}
				setTimeout(() => { // 节流
					this.timer = null;
					// scrollHeight为右边菜单垂直中点位置
					let scrollHeight = e.detail.scrollTop + this.menuHeight / 2;
					for (let i = 0; i < this.arr.length; i++) {
						let height1 = this.arr[i];
						let height2 = this.arr[i + 1];
						// 如果不存在height2，意味着数据循环已经到了最后一个，设置左边菜单为最后一项即可
						if (!height2 || scrollHeight >= height1 && scrollHeight < height2) {
							this.leftMenuStatus(i);
							return;
						}
					}
				}, 10)
			},
			nav() {
				uni.navigateBack({
					delta: 1
				})
			},
			btnSelects(index) {
				this.currents = index
			}
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #FFFFFF;
	}

	.details_content_center_top {
		display: flex;
		padding: 0 40rpx;
		justify-content: space-between;
		// align-items: top;
		// align-items: center;
		background: linear-gradient(0.00deg, rgba(252, 142, 82, 1.00) 0.463%,
				rgba(254, 158, 89, 1.00) 99.536%);
		height: 300rpx;

		.details_content_center_top_right {
			width: 350rpx;
			// border: solid 1px red;
			margin-left: 20rpx;
			display: flex;
			justify-content: space-around;
			// align-items: center;
			// visibility: hidden;
		}
	}

	// .details_list {
	// 	border: solid 1px pink;
	// 	padding: 0rpx 25rpx 0rpx;
	// 	position: relative;
	// 	bottom:200rpx;
	// 	background-color:#FFFFFF;

	.details_list_item {
		// border: solid 1px red;
		box-shadow: 0px 5px 13px rgba(6, 0, 1, 0.06);
		border-radius: 20px;
		padding: 20rpx 30rpx 20rpx;
		position: relative;
		bottom: 130rpx;
		margin: 0 40rpx;
		background-color: #FFFFFF;
		// margin-bottom: 30rpx;

		.details_list_item_top {
			display: flex;
			justify-content: space-between;
			padding: 20rpx 0 0 0;

			.details_list_item_top_left {
				width: 160rpx;
				height: 110rpx;
				background-color: #FFA45C;
				border-radius: 8rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				color: #FFFFFF;
				font-size: 28rpx;
			}

			.details_list_item_top_center {
				// border: solid 1px blue;
				margin-left: 20rpx;
			}
		}

		.details_list_item_type {
			margin: 20rpx 0 20rpx 0rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding-right: 20rpx;
		}
	}

	// }
	.details_content_filtrate_participation {
		padding: 20rpx 40rpx 40rpx 30rpx;
		// border: solid 1px red;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 30rpx 0 0rpx;
		position: relative;
		bottom: 160rpx;

		.details_content_filtrate_participation_right {
			display: flex;
			align-items: center;
			justify-content: space-between;
			width: 400rpx;
			// border: solid 1px red;
			margin-left: 40rpx;
			// padding-left: 0rpx;
		}
	}

	.u-wrap {
		height: 1000rpx;
		/* #ifdef H5 */
		height: 1000rpx;
		/* #endif */
		display: flex;
		flex-direction: column;
		// border: solid 1px blue;
		position: absolute;
		width: 100%;
		top: 180rpx;
		// position: relative;
		// bottom: 110rpx;
		// padding-top: 120rpx;
		// margin-bottom: 30rpx;
	}

	.u-menu-wrap {
		flex: 1;
		display: flex;
		overflow: scroll;
	}

	.u-search-text {
		font-size: 26rpx;
		color: $u-tips-color;
		margin-left: 10rpx;
	}

	.u-tab-view {
		width: 140rpx;
		height: 100%;
		// border: solid 1px blue;
		padding: 30rpx 10rpx 10rpx 30rpx;
		overflow: scroll;
	}

	.u-tab-item {
		height: 160rpx;
		background: #F7F7F7;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;
		font-size: 26rpx;
		color: #C1C1C1;
		font-weight: 400;
		line-height: 1;
		// border: solid 1px red;
		border-radius: 40rpx;
		margin-bottom: 40rpx;
		// padding: 20rpx 10rpx;
	}

	.u-tab-item-active {
		position: relative;
		color: #FFFFFF;
		font-size: 30rpx;
		font-weight: 600;
		background: #FFA45C;
	}

	// .u-tab-item-active::before {
	// 	content: "";
	// 	position: absolute;
	// 	border-left: 4px solid red;
	// 	height: 32rpx;
	// 	left: 0;
	// 	top: 39rpx;
	// }

	.u-tab-view {
		height: 900rpx;
	}

	.right-box {
		// background-color: rgb(250, 250, 250);
	}

	.page-view {
		padding: 16rpx 10rpx;
		// border: solid 1px red;
	}

	.class-item {
		margin-bottom: 30rpx;
		background-color: #fff;
		padding: 16rpx;
		border-radius: 8rpx;
	}

	.class-item:last-child {
		min-height: 100vh;
	}

	.item-title {
		font-size: 26rpx;
		color: $u-main-color;
		font-weight: bold;
		visibility: hidden;
	}

	.item-menu-name {
		font-weight: normal;

		color: #7E7E7E;
		font-size: 30rpx;
		padding: 10rpx 14rpx 8rpx;
	}

	.item-menu-names {
		font-weight: normal;
		font-size: 26rpx;
		color: #7E7E7E;
		padding: 0 14rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.item-menu-namess {
		font-weight: normal;
		font-size: 32rpx;
		color: #FFAC6B;
		padding: 0 14rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		// border: solid 1px red;
		padding: 14rpx 18rpx 0 14rpx;
	}

	.item-container {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		// border: solid 1px red;
	}

	.thumb-box {
		width: 265rpx;
		height: 320rpx;
		display: flex;
		align-items: left;
		// justify-content: center;
		flex-direction: column;
		margin-bottom: 40rpx;
		// border: solid 1px blue;
		background: rgb(255, 255, 255);
		box-shadow: 0px 1px 13px rgba(6, 0, 1, 0.1);
		border-radius: 25rpx;
		overflow: hidden;
	}

	.item-menu-image {
		width: 100%;
		height: 150rpx;
		// border: solid 1px red;

	}
</style>