<template>
  <div id="app">
    <w-header></w-header>
    <transition :name='slide_mode' :duration="{ enter: 500, leave: 800 }" >
      <!-- <keep-alive> -->
        <router-view class='child-view'></router-view>
      <!-- </keep-alive> -->
    </transition>
    <i-footer></i-footer>
  </div>
</template>

<script>
import footer from './components/footer/footer.vue'
import wHeader from './components/w-header/w-header.vue'
export default {
  name: 'app',
  data(){
    return {
      slide_mode:'slide-left'
    }
  },
  watch: {
    '$route' (to, from) {
      console.log('haha',to.path)
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.slide_mode = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
  },
  components: {
      'i-footer':footer,
      'w-header':wHeader
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
#app
  width:100%
  height 100%
.child-view
  transition all .3s 
.slide-left-enter,.slide-right-leave-active
  // opacity 0
  -webkit-transform translate(100%,0)
  transform translate(100%,0)
.slide-left-leave-active,.slide-right-enter
  -webkit-transform translate(-100%,0)
  transform translate(-100%,0)
  opacity 0

</style>
