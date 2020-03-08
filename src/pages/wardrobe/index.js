import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, Button } from '@tarojs/components'
import { AtCheckbox } from 'taro-ui'

import "taro-ui/dist/style/components/checkbox.scss";
import "taro-ui/dist/style/components/icon.scss";
import './wardrobe.scss'
import emptyImg from '../../assets/images/empty.png'
import goods from '../../assets/images/product3.png'

export default class Index extends Component {

  state = {
    data: [
      {
        id: 1,
        img: goods,
        title: '标题标题标题标题标题标题标题标题标题',
        price: 350,
        checked: true
      },
      {
        id: 2,
        img: goods,
        title: '标题标题标题标题标题标题标题标题标题',
        price: 350,
        checked: false
      }
    ],
    empty: emptyImg,
  }
  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  config = {
    navigationBarTitleText: '衣橱'
  }

  render() {
    return (
      <View className='wardrobe'>
        <View className='wardrobe-body'>
          {
            this.state.data.length < 1 ?
              <View className='empty'>
                <Image src={this.state.empty} className='empty-img'></Image>
                <Button className='add-btn'>请添加</Button>
              </View>
              :
              this.state.data.map((item) => <View className='wardrobe-item' key={item.id}>
                <View className='wardrobe-item__hd'>
                  <View className='checkbox' onClick={e => {
                    const tempData = this.state.data
                    tempData.map(_item => {
                      if (item.id === _item.id) {
                        _item.checked = !_item.checked
                        this.setState({
                          data: tempData
                        })
                      }
                    })
                  }}
                  >
                    <View className={`checkbox-body ${item.checked ? 'active' : ''}`}></View>
                  </View>
                </View>
                <View className='wardrobe-item__bd'>
                  <Image src={item.img} className='goods-img'></Image>
                </View>
                <View className='wardrobe-item__ft'>
                  <View className='wardrobe-item__up'>
                    <Text>{item.title}</Text>
                  </View>
                  <View className='wardrobe-item__down'>
                    <Text>{item.price}</Text>
                  </View>
                </View>
              </View>)
          }
        </View>
      </View>
    )
  }
}
