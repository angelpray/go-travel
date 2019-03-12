<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="slide-img" :src="item.imgUrl" alt="">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      list: [{
        id: '001',
        imgUrl: 'https://imgs.qunarzz.com/p/tts0/1708/b0/29f1a343e085fb02.jpg_256x144_692c1e97.jpg'
      }, {
        id: '002',
        imgUrl: 'https://imgs.qunarzz.com/p/tts2/1709/39/b352a2aa7fb2f202.jpg_256x144_eec60cde.jpg'
      }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 56%
    background: #eee
    .slide-img
      width: 100%
</style>
