<template>
  <div id="app">
    <!-- <a v-if="!token" :href="link" class="btn btn-success">登录</a> -->
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
     :maxKeys="10"
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
const redirectUri = btoa(location.href)
const link = `${authorizeUri}?client_id=${clientId}&state=${redirectUri}`

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
      stsPath: 'https://1517151847053460.us-west-1.fc.aliyuncs.com/2016-08-15/proxy/auth/oss/',
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
    if (!this.token) return location.replace(this.link)
    var decoded = jwt.decode(this.token)
    this.path = `${decoded.company}/`
    this.privatePath = `${decoded.user_id}/`
  }
}
</script>

<style>
</style>
