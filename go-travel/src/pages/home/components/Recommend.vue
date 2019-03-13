<template>
  <div>
    <div class='title'>
      热销推荐
    </div>
    <ul>
      <li class='item border-bottom' v-for='(item, index) of list' :key='index'>
        <img class='item-img'
        :src='item.imgUrl' alt=''>
        <div class='item-info'>
          <p class='item-title'>{{item.title}}</p>
          <p class='item-desc'>{{item.desc}}</p>
          <button class='item-button'>查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      list: [{
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1511/34/34170b200db08a5a90.img.jpg_250x250_02eb6e72.jpg',
        title: '东莞龙凤山庄影视渡假村',
        desc: '谁说童话里都是骗人的？'
      }, {
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1511/34/34170b200db08a5a90.img.jpg_250x250_02eb6e72.jpg',
        title: '东莞龙凤山庄影视渡假村',
        desc: '谁说童话里都是骗人的？'
      }, {
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1511/34/34170b200db08a5a90.img.jpg_250x250_02eb6e72.jpg',
        title: '东莞龙凤山庄影视渡假村',
        desc: '谁说童话里都是骗人的？'
      }]
    }
  }
}
</script>

<style lang='stylus' scoped>
  @import '~styles/mixins.styl'
  .title
    margin-top .2rem
    line-height .8rem
    background #eee
    text-indent .2rem
  .item
    overflow hidden
    display flex
    height 1.9rem
    .item-img
      width 1.7rem
      height 1.7rem
      padding .1rem
    .item-info
      flex: 1
      padding .1rem
      min-width  0
    .item-title
      line-height .54rem
      font-size .32rem
      ellipsis()
    .item-desc
      line-height .4rem
      color: #ccc
      ellipsis()
    .item-button
      line-height .44rem
      margin-top .17rem
      background #ff9300
      padding 0 0.2rem
      border-radius .1rem
      color: #fff
</style>
