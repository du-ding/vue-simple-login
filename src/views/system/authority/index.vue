<template>
  <div class="app-main">
    <div class="dtitle">设置权限</div>
    <main>
      <Card :id='2'
            title="user1" />
      <Card :id='3'
            title="user2" />
    </main>
  </div>
</template>

<script>
import Card from "./card.vue"
export default {
  components: {
    Card
  },
  data () {
    return {

    }
  }
}
</script>

<style scoped>
.app-main {
  padding: 20px;
}
main {
  display: flex;
}
</style>