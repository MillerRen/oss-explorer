<template lang="html">
  <div class="panel panel-default explorer">
    <div class="panel-heading clearfix">
      <toolbar
        @upload="showUploader=true"
        @remove="remove"
        @hide="hide"
        @mkdir="mkdir"
        @refresh="list"
        @view="changeView"
        @sort="sort"
        :multiple="multiple"
        :prefix="prefix"
      />
    </div>
    <breadcrumb :prefix="prefix" @change="cd" />
    <message ref="message" />
    <div class="panel-body" ref="container">
      <div class="col-sm-2">
        <Sidebar :spaces="spaces" v-model="prefix" @input="refresh" />
      </div>
      <div class="col-sm-10">
        <list
          v-if="view=='list'"
          v-model="value"
          :files="files"
          :nextMarker="nextMarker"
          @cd="cd"
          @select="select"
          @remove="remove"
          @more="more"
        />
        <grid
          v-if="view=='grid'"
          v-model="value"
          :files="files"
          :nextMarker="nextMarker"
          :prefix="prefix"
          @cd="cd"
          @select="select"
          @remove="remove"
          @more="more"
        />
      </div>
      <modal
        v-if="showUploader"
        title="上传文件"
        @close="onCloseUploader"
        ref="modal"
      >
        <uploader
          v-if="showUploader"
          @change="uploaded"
          :multiple="multiple"
          :accept="accept"
          :uploader="upload"
        />
      </modal>
    </div>
  </div>
</template>

<script>
import 'file-icon-vectors/dist/file-icon-vectors.css'
import dayjs from 'dayjs'
import OSS from '../services/oss'
import LazyLoad from 'vanilla-lazyload'
import Toolbar from './Toolbar.vue'
import Breadcrumb from './Breadcrumb.vue'
import Sidebar from './Sidebar.vue'
import Grid from './Grid.vue'
import List from './List.vue'
import Uploader from './Uploader.vue'
import Modal from './Modal.vue'
import Message from './Message.vue'

export default {
  name: 'Explorer',
  components: {
    Toolbar,
    Breadcrumb,
    Sidebar,
    Grid,
    List,
    Modal,
    Message,
    Uploader
  },
  props: {
    delimiter: {
      type: String,
      default: '/'
    },
    // 一次获取资源的数量
    maxKeys: {
      type: Number,
      default: 1000
    },
    multiple: {
      type: Boolean,
      default: false
    },
    accept: {
      type: String,
      default: ''
    },
    limit: {
      type: Number,
      default: 0
    },
    token: {
      type: String,
      default: ''
    },
    stsPath: {
      type: String,
      default: '/api/sts'
    },
    path: {
      type: String,
      default: ''
    },
    privatePath: {
      type: String,
      default: ''
    },
    value: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      files: [],
      spaces: [], // 可以操作的文件夹
      prefix: '', // 当前文件夹
      nextMarker: null, // 最后一个文件标记
      uploads: [],
      showUploader: false,
      view: 'grid'
    }
  },
  created () {
    this.prefix = this.path
    this.client = new OSS({
      delimiter: this.delimiter,
      maxKeys: this.maxKeys,
      stsPath: this.stsPath,
      token: this.token
    })
  },
  methods: {
    changeUserspace (userspace) {
      this.prefix = userspace === 'public' ? this.path : this.privatePath
      this.nextMarker = null
      this.files = []
      return this.list()
    },
    changeView (view) {
      this.view = view
      // 等待视图更新完毕再重新加载图片
      this.$nextTick(() => {
        this.$emit('lazyload')
      })
    },
    cd (prefix) {
      this.prefix = prefix
      this.nextMarker = null
      return this.list({
        prefix: prefix
      })
    },
    select (object) {
      let set = new Set(this.value)
      if (!set.has(object) && this.value.length >= this.limit) {
        return this.showMessage(`最多选${this.limit}个`)
      }
      set.has(object) ? set.delete(object) : set.add(object)
      this.value.splice(0, this.value.length, ...set)
    },
    list (params) {
      let p = this.client.list(Object.assign({
        prefix: this.prefix,
        marker: this.nextMarker
      }, params))
      // 清除上次显示结果
        .then((res) => {
          this.value.splice(0, this.value.length)
          this.files = []
          return res
        })
        .then((res) => {
          this.files = res.files
          this.nextMarker = res.nextMarker
        })
        .catch((err) => {
          this.showMessage(err)
        })
        .finally(() => {
          this.$emit('lazyload')
        })
      this.showMessage(p)
      return p
    },
    refresh () {
      this.nextMarker = ''
      return this.list()
    },
    more () {
      return this.list()
    },
    sort (sort) {
      let arr = sort.split('-')
      let key = arr[0]
      let order = arr[1] === 'asc' ? -1 : 1

      let prefixes = this.files
        .filter(item => item.folder)
        .sort((prev, next) => {
          return prev < next ? order : -order
        })
      let objects = this.files
        .filter(item => !item.folder)
        .sort((prev, next) => {
          return prev[key] < next[key] ? order : -order
        })
      this.files = []
      // 触发重新渲染
      setTimeout(() => {
        this.files = prefixes.concat(objects)
        this.$nextTick(() => {
          this.$emit('lazyload')
        })
      })
    },
    upload (fileName, file) {
      return this.client.upload(fileName, file)
    },
    uploaded () {
      this.showUploader = false
      return this.refresh()
    },
    remove (o) {
      if (o) {
        let p = this.client.delete(o.name)
          .then(() => {
            return this.list()
          })
        this.showMessage(p)
        return p
      }
      if (!this.value.length) {
        return this.showMessage('没有选择文件')
      }
      let tasks = []
      this.value.forEach((object) => {
        tasks.push(this.client.delete(object.name))
      })
      let p = Promise.all(tasks)
        .then((res) => {
          this.value.splice(0, this.value.length)
          return this.list()
        })
        .catch((err) => {
          this.showMessage(err)
        })
        .finally(() => {
          this.loading = false
        })
      this.showMessage(p)
      return p
    },
    hide () {
      if (!this.value.length) {
        return this.showMessage('没有选择文件')
      }
      let tasks = []
      this.value.forEach((object) => {
        tasks.push(this.client.hide(object.name))
      })
      let p = Promise.all(tasks)
        .then((res) => {
          this.value.splice(0, this.value.length)
          return this.list()
        })
        .catch((err) => {
          this.showMessage(err)
        })
        .finally(() => {
          this.loading = false
        })
      this.showMessage(p)
      return p
    },
    mkdir () {
      var folderName = prompt('请输入文件夹名', dayjs().format('YYYY-MM'))
      if (!folderName) return
      this.loading = true
      return this.client.mkdir(this.prefix + folderName)
        .then((res) => {
          return this.list()
        })
        .catch((err) => {
          this.showMessage(err)
        })
        .finally(() => {
          this.loading = false
        })
    },
    showMessage (message) {
      this.$refs.message.open(message)
    },
    onCloseUploader () {
      this.showUploader = false
      this.refresh()
    }
  },
  mounted () {
    this.lazyLoad = new LazyLoad({
      container: this.$refs.container
    })
    this.$on('lazyload', () => {
      this.lazyLoad.update()
    })
    this.client.getClient()
      .then((client) => {
        this.spaces = client.options.path.split(',')
      })
    this.list()
  },
  beforeDestroy () {
    this.lazyLoad.destroy()
  }
}
</script>

<style lang="css">
.explorer {
  position: relative;
}
.explorer .panel-body {
  position:relative;
  height:500px;
  overflow-y:scroll;
}
</style>
