import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './wardrobe.scss'

export default class Index extends Component {

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
        <Text>衣橱</Text>
      </View>
    )
  }
}
