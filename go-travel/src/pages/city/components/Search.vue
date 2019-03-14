<template>
  <div class="search">
    <input type="text" class="search-input" placeholder="输入城市或拼音">
  </div>
</template>

<script>
export default {
 name: "CitySearch"
}
</script>

<style lang="stylus" scoped>
  @import '@~styles/variables.styl'
  .search
    background $bgcolor
    padding 0 .1rem
    height .72rem
    .search-input
      box-sizing border-box
      height .62rem
      line-height .62rem
      width 100%
      text-align center
      border-radius .1rem
      padding 0 .1rem
      color #666
</style>

