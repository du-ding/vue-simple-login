<template>
  <div class="app-main">

    <div id='target'>
      <!-- <dv-loading v-if="loading">Loading...</dv-loading> -->
      <main>
        <Top />
        <Main />
        <Bottom />
      </main>
    </div>
  </div>
</template>

<script>

import Top from './components/top'
import Main from './components/main'
import Bottom from './components/bottom'
export default {
  name: 'homeIndex',
  components: { Top, Main, Bottom },
  data () {
    return {
      loading: true,
    }
  },
  created () {
    console.log("homePage")
    setTimeout(() => {
      this.loading = false
    }, 1000)
  },

}
</script>

<style scoped>
.app-main {
  height: 100%;
  width: 100%;
}
main {
  width: 100%;
  background-color: #161e28;
}
#target {
  width: 100%;
  height: 100%;
}
</style>