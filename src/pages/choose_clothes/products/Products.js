import Taro, { Component } from '@tarojs/taro';
import { View, Image, Button } from '@tarojs/components';
import "taro-ui/dist/style/components/flex.scss";
import './products.scss'
import prd1 from '../../../assets/images/product1.png'
import prd2 from '../../../assets/images/product2.png'
import prd3 from '../../../assets/images/product3.png'

export default class Products extends Component {

  state = {

  }


  componentWillMount() { }
  componentDidMount() { }
  componentDidHide() { }
  render() {
    const prodList = [
      {
        img: prd1,
        tilte: '',
        id: ''
      },
      {
        img: prd2,
        tilte: '',
        id: ''
      },
      {
        img: prd3,
        tilte: '',
        id: ''
      }
    ]

    function toDetail(e) {
      Taro.navigateTo({
        url: `/pages/detail/index?id=${e.id}`
      })
    }
    return (
      <View className='products at-row at-row__justify--around'>
        {
          prodList.map(item => <View onClick={toDetail} className='product-item at-col at-col-4' key={item.img}>
            <Image src={item.img} className='product-img'></Image>
          </View>
          )
        }
      </View>

    );
  }
}