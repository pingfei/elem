<template>
  <div class="address">
    <div @click="postMsg">address</div>
  </div>
</template>
<script>
import {getAddress, postAddress} from '../../axios/api.js'
export default {
  data () {
    return {}
  },
  beforeMount () {
    getAddress()
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err.response)
        console.log(err.response.statusText)
      })
  },
  methods: {
    postMsg () {
      postAddress({x: 1, y: 2})
    }
  }
}
</script>
<style scoped lang="scss">
</style>
