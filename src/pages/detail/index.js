import Taro, { Component } from '@tarojs/taro';
import { View, Text, Image, Swiper, SwiperItem } from '@tarojs/components';
import { AtNavBar, AtTag, AtTabBar } from 'taro-ui'
import "taro-ui/dist/style/components/tag.scss"
import "taro-ui/dist/style/components/tab-bar.scss"
import "taro-ui/dist/style/components/badge.scss"
import './detail.scss'
import product from '../../assets/images/product8.png'
import RecomdItems from '../choose_clothes/hot_products/HotProducts'
import Likes from '../../assets/images/likes.png'
import Yichu from '../../assets/images/yichu.png'


export default class Detail extends Component {

  // eslint-disable-next-line react/sort-comp
  config = {
    navigationBarTitleText: '商品详情页'
  }
  constructor() {
    super(...arguments)
  }
  state = {
    imageList: [
      product,
      product,
      product,
      product
    ],
    current: 0
  }
  backClick() {
    Taro.navigateBack()
  }
  handleClick(value) {
    this.setState({
      current: value
    })
  }
  componentWillMount() { }
  componentDidMount() { }
  componentWillUnmount() { }
  componentDidShow() { }
  componentDidHide() { }
  componentDidCatchError() { }
  componentDidNotFound() { }
  render() {
    return (
      <View>
        {/* <AtNavBar
          color='#000'
          title='商品详情页'
          leftIconType='chevron-left'
          onClickLeftIcon={this.backClick.bind(this, '返回')}
        /> */}
        <View className='detail-body'>
          <View className='detail-swiper'>
            <Swiper
              className='detail-banner'
              indicatorColor='#999'
              indicatorActiveColor='#333'
              circular
              indicatorDots
              autoplay
            >
              {
                this.state.imageList.map((img, index) => {
                  return (
                    <SwiperItem key={index} className='banner-item'>
                      <Image
                        className='banner-img'
                        src={img}
                      />
                    </SwiperItem>
                  )
                })
              }
            </Swiper>
          </View>
          <View className='detail-parameter'>
            <View>标题标题标题标题标题标题标题标题标题标题</View>
            <View className='detail-price'>￥350</View>
            <View>
              <AtTag className='detail-tag' active circle size='small' >标签</AtTag>
              <AtTag className='detail-tag' active circle size='small' >标签</AtTag>
            </View>
          </View>
          <View className='detail-info'>
            <View className='info-title'>商品参数</View>
            <View className='info-item'>品牌：玄鸟</View>
            <View className='info-item'>颜色：红色、蓝色</View>
            <View className='info-item'>尺码：S、M、L</View>
          </View>
        </View>
        <View className='recommend'>
          <View className='recomd-title'>为你推荐</View>
          <View className='recomd-items'>
            <RecomdItems className='recomd-items' />
          </View>
        </View>
        <View className='flex-options'>
          <View className='flex-options__l'>
            <AtTabBar
              tabList={[
                { title: '喜欢', image: Likes },
                { title: '衣橱', image: Yichu, text: '0' },
              ]}
              color='#161616'
              onClick={this.handleClick.bind(this)}
              current={this.state.current}
            />
          </View>

          <View className='flex-options__r'>
            <Text className='options-button'>加入衣橱</Text>
          </View>
        </View>
      </View>
    );
  }
}