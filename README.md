# 去旅行 基于VUE

## 阶段一 项目初始化

1. viewport，html标签

2. normalize.css引入

3. 1像素边框问题，border.css引入

4. 移动设备click300ms点击延迟问题，fastClick模块引入，使用`fastClick.attach(document.body)`

5. iconfont注册项目

## 阶段二 首页header区域开发

1. 引入stylus，stylus-loader（webpack插件？）

2. 新建components，新建Header.vue，写组件

3. 在Home中引入Header,并且声明components字段，根据组件名称使用Header组件

4. 根据设计稿，编写Header.vue：分为左-输入-右三块div，并用div.header包裹

5. 写样式，修改style的lang属性为stylus

6. 防止组件样式对其他组件样式影响，添加scoped值

7. 移动端布局一般采用rem，因此header高度.86rem(为了让其垂直居中，使用line-height)，header-left宽度.64rem,float:left,header-right宽度1.24rem，float为right。input区域为flex：1，整个header为flex。header背景色改变##00bcd4。让城市居中显示。

8. 输入框区域背景#fff，圆角.1rem，上边距.12rem.左边距.2rem,高度.64rem

9. 输入框内容，字体颜色，上下居中

## 阶段三 iconfont的使用和代码优化

1. iconfont字体下载，并放到项目目录下，删除拼音样式

2. main.js中引入iconfont

3. Header.vue中使用，添加span.icon，到官网添加按钮代码

4. 将返回按钮的span换成div，添加back-icon类名，居中放大。

5. 放大按钮，给输入框添加padding-left

6. 把向下的箭头添加一个arrow-icon字体变小一点，.24rem.再使用负间距。

7. header背景颜色变量，在styles创建variable.styl，保存$bgcolor变量。

8. Header使用变量$bgcolor，`@import '~@/styles/varibles.styl'`引入。【@表示src目录,想要在css中使用目录别名必须加~】

9.  给styles目录起别名，在webpack.base.conf.js的resolove选项。【需要重启服务器】

## 首页轮播图

1. 使用分支开发，index-swiper

2. 使用vue-awesome-swiper，需要在main.js引入相关模块,并`Vue.use(vueAwesomeSwiper)`

3. 创建Swiper组件。复制相关代码到template中

4. 添加data属性，删除不需要用到的属性

5. 在home中引入HomeSwiper组件，使用HomeSwiper组件。

6. 删除左右箭头和滚动条并且将文字换成图片。让图片100%宽度。

7. 解决页面的抖动，在最外层增加一层div.wrapper，overflow-hidden，height-0，padding-bottom-31.25%，width：100%，添加背景色：#eee。实现宽高比。【或者直接使用height:31.25vw但有兼容性问题】

8. 添加页面上的指示点，给swiperOption添加pagination字段，并传入类名。

9. 指示点的显示颜色，需要使用 >>> 进行穿透，就可以进行修改。

10. 循环输出，在data中添加swiperList数组，有id和imgUrl。在swiper-slide中循环遍历。

11. 添加loop字段为true

## 图片区域页面布局

1. 分支：index-incons

2. 创建icons.vue，编写基本组件

3. 应用到Home组件中

4. 图标区域icons的宽高大概是2：1，div，使用防抖动即可。

5. icon左浮动，宽度，padding-bottom都是25%。

6. icon，overflow, position:relative

7. div.icon-img,position:absolute,top:0,left:0,right:0,bottom:.44rem

8. img.icon-img-content,height:100%,icon-height:0;

9. img.icon-img-conteng,display: block,margin: 0 auto;

10. icon-img,box-sizing:border-box,padding:.1rem

11. p.icon-desc,display，left: 0, right:0, bottom:0, .height: .44rem,line-height: .44rem, color: $darkTextColor=#333

## 图片区域逻辑实现

1. 拷贝swiper代码，包裹所有icon，使用swiper-slide包裹icon

2. 处理滑动的高度问题，使用穿透

3. 遍历数据循环输出，iconList: id,imgUrl,dec.循环icon块

4. 使用计算属性对使用forEach对iconList进行循环处理，判断是第几页算法，使用pages计算属性

5. 对swiper-slide进行循环

6. 图标说明需要进行省略号描述

7. 使用mixin.styl

## 推荐组件开发

1. 分支，index-recommend

2. Recommend.vue,基本组件内容编写

3. 在home中引入组件

4. div.recommend-title, line-hight..8rem,background.#eee,text-indent..2rem,margin-top,icons，margin-top

5. ul>li.item>img.item-img>div.item-info>p.item.title>p.item-desc.item.button

6. 相关样式，.item,flex,height,overflow,

7. item-img.width,height,padding,

8. item-info,flex-1,padding

9. item-title line-hight,font-size

10. item- desc line-hight color #ccc

11. item-button background #ff9300 padding border-radius margin-top

12. li.border-bottom

13. 小技巧，在li中添加min-width=0达到省略号的效果

## 周末组件开发

1. weekend.vue组件开发

2. 类似推荐组件开发，修改相关样式即可

## ajax获取首页数据

1. 在vue中发送ajax有很多工具可以使用：浏览器自带fetch，axios（推荐，非常强大）

2. 不可能每个组件都发送自己的ajax请求

3. 在home.vuez中使用ajax，可以传给每一个组件。引入axios

4. 生命周期函数mounted。

5. methods:getHomeInfo获取ajax数据，axios.get请求url，获取ajax数据。返回一个promise。.then(getHomeInfoSucc),console.log(res)

6. 在没有后端的支持下，在static中实现模拟后端的数据，创建mock，创建index.json。因为static是整个工程唯一能让外部访问的目录。

7. 本地模拟的数据没必要放到线上，使用git忽略掉。

8. 使用webpack的代理，改变url. 
```js
'/api': {
  target: 'http://localhost:8080',
  pathRewrite: {
    '^/api': '/static/mock'
  }
}
```

9.  修改index.json

## 首页父子组件数据传递

1. 首页进行了ajax数据获取，需要将数据传递给子组件

2. res.data，存储页面的各种数据，判断是否获取得到了数据，赋值给data属性【res是axios返回过来的响应在参数中使用】

3. 解决轮播第一页的问题

4. 解决自动轮播的问题

## 城市选择页面路由配置

1. 分支，city-route

2. index.js添加路由，/city,City,City,引入city组件

3. city/city.vue，基本组件内容

4. route-link标签，跳转路由，to=/city,

5. components: