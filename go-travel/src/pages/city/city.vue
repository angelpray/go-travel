<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="iconfont header-back">&#xe624;</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'City'
}
</script>

<style lang="stylus" scoped>
  @import '@~styles/variables.styl'
  .header
    line-height $headerHeight
    height $headerHeight
    overflow hidden
    text-align center
    background $bgcolor
    color #fff
    font-size .32rem
    .header-back
      position absolute
      top 0
      left 0
      width .64rem
      text-align center
      font-size $backIconSize
      color #fff
</style>
