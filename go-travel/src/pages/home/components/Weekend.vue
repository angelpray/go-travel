<template>
  <div>
    <div class='title'>
      周末去哪儿
    </div>
    <ul>
      <li class='item border-bottom' v-for='(item, index) of weekendList' :key='index'>
        <div class="img-wrapper">
          <img class='item-img'
          :src='item.imgUrl' alt=''>
        </div>
        <div class='item-info'>
          <p class='item-title'>{{item.title}}</p>
          <p class='item-desc'>{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    weekendList: Array
  }
}
</script>

<style lang='stylus' scoped>
  @import '~styles/mixins.styl'
  .title
    line-height .8rem
    background #eee
    text-indent .2rem
  .img-wrapper
    height 0
    overflow hidden
    padding-bottom 36.5%
    .item-img
      width 100%
  .item-info
    padding .1rem
    min-width  0
  .item-title
    line-height .54rem
    font-size .3rem
    ellipsis()
  .item-desc
    line-height .4rem
    color: #ccc
    ellipsis()
</style>
