<template>
  <div id="note-detail">
    <h1>{{msg}} : {{ $route.params.noteId }}</h1>
  </div>
</template>

<script>
import Auth from '@/apis/auth'

export default {
  data () {
    return {
      msg: '笔记详情列表'
    }
  },

  created() {
    Auth.getInfo()
      .then(res => {
        console.log(res.isLogin)
        if(!res.isLogin) {
          this.$router.push({ path: '/login' })
        }
      })
  }
}
</script>

<style scoped>
h1 {
  color: blue;
}
</style>