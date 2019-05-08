<template>
  <div class="address flex flex-column">
    <div class="top flex flex-column">
      <div class="title">
        <div class="back-btn">back</div>
        <div class="title">城市选择</div>
      </div>
      <div class="search flex">
        <div class="search-input flex">
          <i class="icon">123</i>
          <input type="text" placeholder="请输入地址" v-model="search">
        </div>
      </div>
    </div>
    <div class="city-list-wrapper"  @scroll="handleScroll" ref="scroll">
      <div class="city-list">
        <div class="cities" v-for="(cities, index) in cityList" :key="index">
          <div class="alphabet" :id="cities.idx" v-show="!search">{{cities.idx}}</div>
          <div class="city" :pinyin="city.pinyin" v-for="(city, i) in cities.cities" :key="i" v-show="search ? city.pinyin.includes(search): true">{{city.name}}</div>
        </div>
      </div>
      <div class="alphabet-list flex flex-column">
        <div :class="{active : alpIndex == index}" v-for="(item, index) in alphabet" :key="index" @click="clickAlphabet(index)">{{item}}</div>
      </div>
    </div>
  </div>
</template>
<script>
import {getAddress, postAddress} from '../../axios/api.js'
export default {
  data () {
    return {
      cityList: [],
      alphabet: [],
      scrollTop: 0,
      search: '',
      alpIndex: ''
    }
  },
  beforeMount () {
    getAddress()
      .then(res => {
        this.cityList = res.cityList
        this.alphabet = res.alphabet
        this.alp = res.alphabet[0]
        console.log(res)
      })
      .catch(err => {
        console.log(err.response)
        console.log(err.response.statusText)
      })
  },
  // computed: {
  //   height (item) {
  //     console.log(item)
  //     let dom = document.getElementById(item)
  //     console.log(dom)
  //     // let height = dom.offsetTop
  //     return item + 111
  //   }
  // },
  methods: {
    postMsg () {
      postAddress({x: 1, y: 2})
    },
    clickAlphabet (index) {
      this.alpIndex = index
      let dom = document.getElementById(this.alphabet[index])
      let offsetTop = dom.offsetTop
      document.querySelector('.city-list-wrapper').scrollTo({
        top: offsetTop,
        behavior: 'instant'
      })

      // 语法
      // window.scrollTo(x-coord,y-coord )

      // window.scrollTo(options)
      // 参数节
      // x-coord 是文档中的横轴坐标。
      // y-coord 是文档中的纵轴坐标。
      // options 是一个包含三个属性的对象:
      // top 等同于  y-coord
      // left 等同于  x-coord
      // behavior  类型String,表示滚动行为,支持参数 smooth(平滑滚动),instant(瞬间滚动),默认值auto,实测效果等同于instant
      // dom.scrollTop = offsetTop
      // console.log(document.body)
      // console.log(dom)
      // console.log(alphabet)
      // console.log(offsetTop)
    },
    handleScroll ($event) {
      let scrollTop = $event.currentTarget.scrollTop
      // let clientHeight = $event.currentTarget.clientHeight
      if (this.alpIndex > 0) {
        let prev = document.getElementById(this.alphabet[this.alpIndex]).offsetTop
        if ((scrollTop + 50) <= prev) {
          --this.alpIndex
        }
      }
      if (this.alpIndex < this.alphabet.length) {
        let next = document.getElementById(this.alphabet[this.alpIndex + 1]).offsetTop
        if ((scrollTop + 50) > next) {
          ++this.alpIndex
        }
      }
    }
  }
}
</script>
<style scoped lang="scss">
.address {
  width: 100%;
  height: 100vh;
  justify-content: flex-start;
}
.top {
  color: #fff;
  font-size: 1.25rem;
  background: #0089FF;
  > div {
    height: 50px;
    line-height: 50px;
  }
  > .title {
    width: 100%;
    text-align: center;
    border-bottom: 1px solid #fff;
    .back-btn {
      position: absolute;
      left: 0;
    }
    .title {
      width: 100%;
    }
  }
  > .search {
    .search-input {
      width: 325px;
      height: 30px;
      overflow: hidden;
      margin: auto;
      padding: 0 10px;
      color: #ddd;
      text-align: center;
      border-radius: 15px;
      background: #fff;
      box-sizing: border-box;
      > input {
        flex-grow: 1;
        height: 30px;
        font-size: 14px;
      }
    }
  }
}
.city-list-wrapper {
  width: 100%;
  // height: calc(100% - 100px);
  overflow-y: scroll;
  position: relative;
  .city-list {
    .cities {
      > div {
        height: 50px;
        line-height: 50px;
        border-bottom: 1px solid #E9E9E9;
      }
      .alphabet {
        padding-left: 10px;
        background: #F5F5F5;
      }
      .city {
        margin-left: 10px;
      }
    }
  }
  .alphabet-list {
    position: fixed;
    width: 30px;
    right: 10px;
    top: 100px;
    bottom: 0;
    font-size: 16px;
    justify-content: flex-start;
    > div {
      // flex-grow: 1;
      width: 20px;
      height: 20px;
      // padding-top: 100%;
      line-height: 20px;
      margin-top: 2px;
      border-radius: 50%;
      text-align: center;
    }
    .active {
      color: #fff;
      background: #0089FF
    }
  }
}
</style>
