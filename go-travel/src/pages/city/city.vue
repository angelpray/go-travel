<template>
  <div>
    <city-header></city-header>
    <city-search
      :cities='cities'
    >
    </city-search>
    <city-list :cities='cities'
               :hot='hotCities'
               :letter='letter'
    >
    </city-list>
    <city-alphabet
      :cities='cities'
      @change="handleChange"
    >
    </city-alphabet>
  </div>
</template>

<script>
import axios from 'axios'
import CityHeader from '@/pages/city/components/Header.vue'
import CitySearch from '@/pages/city/components/Search.vue'
import CityList from '@/pages/city/components/List.vue'
import CityAlphabet from '@/pages/city/components/Alphabet.vue'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      cities: {},
      hotCities: [],
      letter: ''
    }
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city.json')
        .then(this.handleGetCityInfoSucc)
    },
    handleGetCityInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.cities = data.cities
        this.hotCities = data.hotCities
      }
    },
    handleChange (letter) {
      this.letter = letter
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style lang="stylus" scoped>

</style>
