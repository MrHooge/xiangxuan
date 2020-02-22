import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { AtGrid } from "taro-ui"
import icon1 from '../../../assets/images/1.png'
import icon2 from '../../../assets/images/2.png'
import icon3 from '../../../assets/images/3.png'
import icon4 from '../../../assets/images/4.png'
import icon5 from '../../../assets/images/5.png'
import icon6 from '../../../assets/images/6.png'
import icon7 from '../../../assets/images/7.png'
import icon8 from '../../../assets/images/8.png'

export default class Classify extends Component {
  // eslint-disable-next-line react/sort-comp
  config = {
    navigationBarTitleText: ''
  }

  state = {}

  componentWillMount() { }
  componentDidMount() { }
  componentWillUnmount() { }
  componentDidShow() { }
  componentDidHide() { }
  render() {

    function toProdList(e) {
      console.log(e.value)
      Taro.navigateTo({
        url: `/pages/goods/index?type=${e.value}`
      })
    }
    return (
      <View>
        <AtGrid onClick={toProdList} columnNum='4' hasBorder={false} data={
          [
            {
              image: icon1,
              value: 'T恤'
            },
            {
              image: icon2,
              value: '裙子'
            },
            {
              image: icon3,
              value: '裤子'
            },
            {
              image: icon4,
              value: '衬衫'
            },
            {
              image: icon5,
              value: '雪纺衫'
            },
            {
              image: icon6,
              value: '马甲'
            },
            {
              image: icon7,
              value: '吊带'
            },
            {
              image: icon8,
              value: '套装'
            }
          ]
        }
        />
      </View>
    );
  }
}