import Taro, { Component } from '@tarojs/taro'
import { Swiper, SwiperItem, View, Image } from '@tarojs/components'

import './banner.scss'
import banner from '../../../assets/images/banner.png'
import banner2 from '../../../assets/images/banner2.png'

export default class Banner extends Component {
  state = {
    imageList: [
      banner,
      banner2
    ]
  }
  render() {

    return (
      <Swiper
        className='banner'
        indicatorColor='#999'
        indicatorActiveColor='#333'
        circular
        indicatorDots
        autoplay
      >
        {
          this.state.imageList.map((img, index) => {
            return (
              <SwiperItem key={index}>
                <View className='banner-item'>
                  <Image
                    className='banner-img'
                    src={img}
                  />
                </View>
              </SwiperItem>
            )
          })
        }
      </Swiper>
    )
  }
}
