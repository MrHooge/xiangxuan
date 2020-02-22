
import Taro, { Component } from '@tarojs/taro';
import { View, Image, Text } from '@tarojs/components';

import prod1 from '../../../assets/images/product4.png'
import prod2 from '../../../assets/images/product5.png'
import prod3 from '../../../assets/images/product6.png'
import prod4 from '../../../assets/images/product7.png'

import './hotproducts.scss'

export default class HotProducts extends Component {


  state = {}

  componentWillMount() { }
  componentDidMount() { }
  componentWillUnmount() { }
  componentDidShow() { }
  componentDidHide() { }
  render() {
    const prodItem = [
      {
        img: prod1,
        title: '女士优雅百搭裙裤',
        price: '￥367',
        likes: 24
      },
      {
        img: prod2,
        title: '女士优雅百搭裙裤女士优雅百搭裙裤女士优雅',
        price: '￥367',
        likes: 24
      },
      {
        img: prod3,
        title: '女士优雅百搭裙裤女士优雅百搭裙裤女士优雅',
        price: '￥367',
        likes: 24
      },
      {
        img: prod4,
        title: '女士优雅百搭裙裤',
        price: '￥367',
        likes: 24
      }
    ]
    return (
      <View>
        <View className='list'>
          <View className='list-half'>
            {
              prodItem.map((item, index) => index % 2 === 0 && <View className='card' key={index}>
                <Image src={item.img} className='product-img'></Image>
                <Text className='product-title'>{item.title}</Text>
                <View className='product-infos'>
                  <Text className='product-price'>{item.price}</Text>
                  <Text className='product-likes'>{item.likes}人喜欢</Text>
                </View>
              </View>
              )
            }
          </View>
          <View className='list-half'>
            {
              prodItem.map((item, index) => index % 2 !== 0 && <View className='card' key={index}>
                <Image src={item.img} className='product-img'></Image>
                <Text className='product-title'>{item.title}</Text>
                <View className='product-infos'>
                  <Text className='product-price'>{item.price}</Text>
                  <Text className='product-likes'>{item.likes}人喜欢</Text>
                </View>
              </View>
              )
            }
          </View>

        </View>
      </View >
    );
  }
}