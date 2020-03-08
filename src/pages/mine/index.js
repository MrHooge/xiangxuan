import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { AtList, AtListItem } from "taro-ui"

import './mine.scss'
import avatar from '../../assets/images/avatar.png'

export default class Index extends Component {

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  config = {
    navigationBarTitleText: '我的',
    navigationBarBackgroundColor: '#FB4C51',
    navigationBarTextStyle: 'white'
  }

  render() {
    return (
      <View className='index'>
        <View className='mine'>
          <View className='mine-body'>
            <View className='main-avatar'>
              <Image src={avatar} className='avatar-img'></Image>
            </View>
            <View className='mine-username'>
              <Text className='username'>用户名</Text>
            </View>
          </View>
          <View className='live-plan'>
            <Text className='live-font-h3'>创建直播计划</Text>
            <Text className='live-font-red'>直播从此开始</Text>
          </View>
        </View>
        <View className='mine-list'>
          <AtList>
            <AtListItem title='直播记录' arrow='right' />
            <AtListItem title='个人信息' arrow='right' />
          </AtList>
        </View>
      </View>
    )
  }
}
