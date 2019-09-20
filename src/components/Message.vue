<template>
  <div class="alert alert-warning well-sm explorer-message fade" :class="{in:!!message||loading}">
    <img src="../assets/loader.gif" width="15px" height="15px" v-show="loading">
    <span v-if="loading">加载中...</span>
    <span v-else>{{message}}</span>
  </div>
</template>

<script>
export default {
  name: 'ExplorerMessage',
  data () {
    return {
      message: '',
      loading: false
    }
  },
  methods: {
    open (message) {
      if (message.finally) {
        this.loading = true
        return message.finally(() => {
          this.loading = false
        })
      }
      // 如果是Error类型,则先取出报错信息
      this.message = message.message || message
      this.close()
    },
    close (delay = 3000) {
      let timer = setTimeout(() => {
        this.message = ''
        clearTimeout(timer)
      }, delay)
    }
  }
}
</script>

<style>
.explorer-message {
  position: absolute;
  left: 50%;
  top: 75px;
  z-index: 1;
  transform: translate(-50%, -50%);
  box-shadow: 0px 1px 6px;
}
</style>
