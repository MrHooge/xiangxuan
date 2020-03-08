// import '@tarojs/async-await'
import Taro, { Component } from '@tarojs/taro'
// import { Provider } from '@tarojs/redux'

import Index from './pages/choose_clothes'

// import configStore from './store'
import 'taro-ui/dist/style/index.scss'

import './app.scss'


// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }
// const store = configStore()


class App extends Component {

  componentDidMount() { }

  componentDidShow() { }

  componentDidHide() { }

  componentDidCatchError() { }

  config = {
    pages: [
      'pages/mine/index',
      'pages/wardrobe/index',
      'pages/choose_clothes/index',
      'pages/goods/index',
      'pages/detail/index',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '象选',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: "#333333",
      selectedColor: "#161616",
      list: [
        {
          text: "首页",
          pagePath: "pages/choose_clothes/index",
          selectedIconPath: "./assets/images/icon/index_on.png",
          iconPath: "./assets/images/icon/index.png"
        },
        {
          text: "衣橱",
          pagePath: "pages/wardrobe/index",
          selectedIconPath: "./assets/images/icon/wardrobe_on.png",
          iconPath: "./assets/images/icon/wardrobe.png"
        },
        {
          text: "我的",
          pagePath: "pages/mine/index",
          selectedIconPath: "./assets/images/icon/me_on.png",
          iconPath: "./assets/images/icon/me.png"
        }
      ]
    }
  }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
