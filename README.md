# 阿里云OSS文件管理器
> 这是一个基于Vue的轻量级文件管理器,包含了大部分web文件操作.

# 安装
```
npm install --save oss-explorer
```

# 使用
```html
<template>
  <div id="app">
    <explorer
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
import Explorer from 'oss-explorer'
import 'oss-explorer/dist/oss-explorer.css'

export default {
  name: 'app',
  components: {
    Explorer
  },
  data () {
    return {
      clientConfig: null,
      token: localStorage.token,
      path: '',
      privatePath: '',
      stsPath: ``,
      objects: [],
      meta: {}
    }
  }
}
</script>

<style>
</style>
```
更多用法请参考[demo](http://renyufei.com/oss-explorer/)

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your unit tests
```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
