<template>
  <div>
    <div class="search">
      <input type="text" class="search-input" placeholder="输入城市或拼音" v-model="keyword" ref="input">
    </div>
    <div class="search-content" v-show="keyword" ref="search">
      <ul>
        <li v-for="item of list" :key="item.id" class="border-bottom search-item"
        >
          {{item.name}}
        </li>
      <li v-show="hasNoData" class="border-bottom search-item">没有相关数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CitySearch',
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  props: {
    cities: Object
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(() => {
        var result = [];
        for ( let key in this.cities) {
          this.cities[key].forEach((value) => {
            if (value.name.indexOf(this.keyword) !== -1 ||
                value.spell.indexOf(this.keyword) !== -1) {
                  result.push(value);
                }
          })
        }
        this.list = result;
      }, 100);
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.search)
  },
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
  .search-content
    position absolute
    top 1.58rem
    right 0rem
    bottom 0rem
    left 0rem
    overflow hidden
    z-index 1
    background #eee
    .search-item
      line-height .64rem
      padding-left .2rem
      color #666
      background #fff
</style>
