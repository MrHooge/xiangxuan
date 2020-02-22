import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtSearchBar } from 'taro-ui'
import './index.scss'
import Banner from './banner/Banner'
import Classify from './classify/Classify'
import Products from './products/Products'
import HotProducts from './hot_products/HotProducts'

export default class Index extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      value: ''
    }
  }
  // eslint-disable-next-line react/sort-comp
  onChange(value) {
    this.setState({
      value: value
    })
  }

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  config = {
    navigationBarTitleText: '选衣'
  }

  render() {
    return (
      <View className='index'>
        <AtSearchBar
          placeholder='搜索你想要的衣服'
          value={this.state.value}
          onChange={this.onChange.bind(this)}
        />
        <Banner></Banner>
        <Classify></Classify>
        <View className='main-body'>
          <View className='panel'>
            <View className='panel__title'>新品推荐</View>
            <View className='panel__content no-padding'>
              <View className='example-item'>
                <Products></Products>
              </View>
            </View>
          </View>
        </View>
        <View className='main-body'>
          <View className='panel'>
            <View className='panel__title'>热门推荐</View>
            <View className='panel__content no-padding'>
              <View className='example-item'>
                <HotProducts />
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
