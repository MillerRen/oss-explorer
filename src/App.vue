<template>
  <div id="app">
    <a v-if="!token" :href="link" class="btn btn-success">登录</a>
    <explorer
      v-if="token"
     v-model="objects"
     :token="token"
     :meta="meta"
     :stsPath="stsPath"
     :multiple="true"
     :path="path"
     :privatePath="privatePath"
     :limit="5"
     :maxKeys="1000"
     @select="onSelect">
   </explorer>
  </div>
</template>

<script>
import Explorer from './components/Explorer.vue'
import jwt from 'jsonwebtoken'
import qs from 'qs'

const clientId = '61c1b757d0bcf064bcd5'
const authorizeUri = 'https://github.com/login/oauth/authorize'
const link = `${authorizeUri}?client_id=${clientId}`

export default {
  name: 'app',
  components: {
    Explorer
  },
  data () {
    return {
      clientConfig: null,
      token: '',
      path: '',
      privatePath: '',
      stsPath: 'https://1517151847053460.cn-beijing.fc.aliyuncs.com/2016-08-15/proxy/auth/sts/',
      objects: [],
      meta: {},
      link
    }
  },
  methods: {
    onSelect (object) {
      // console.log('onSelect', object)
    }
  },
  created () {
    this.token = qs.parse(location.search, { ignoreQueryPrefix: true }).token
    if (!this.token) return
    var decoded = jwt.decode(this.token)
    this.path = `${decoded.company}/`
    this.privatePath = `${decoded.user_id}/`
  }
}
</script>

<style>
</style>
