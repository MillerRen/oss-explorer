<template>
  <div class="explorer-uploader">
    <div class="row">
      <div class="col-xs-3 col-sm-2">
        <div class="explorer-media-object">
          <div class="thumbnail" style="border:1px dashed #ccc;">
            <span class="explorer-uploader-handle">+</span>
            <input
              type="file"
              class="explorer-uploader-input"
              title="点击或拖动文件到这里上传文件"
              ref="fileBox"
              :multiple="multiple"
              @change="onChange">
          </div>
        </div>
      </div>
      <div class="col-xs-3 col-sm-2" v-for="file in files" :key="file.name">
        <media
          :file="file"
          :class="{
            active:~uploads.indexOf(file),
            loading: uploading.name === file.name
            }"
          @remove="remove"
        />
        <div class="text-danger" style="margin-top:-20px" v-if="file.message">{{file.message}}</div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-2">
        <button class="btn btn-success btn-sm" @click="upload">上传全部</button>
      </div>
      <div class="col-xs-4">
          <label for="" class="checkbox-inline" v-if="failed.length">
            <input type="checkbox" v-model="autorename"> 自动重命名同名文件
          </label>
      </div>
      <div class="col-xs-6">
        <div v-if="message" class="bg-warning well-sm">{{message}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import Media from './Media.vue'

export default {
  name: 'ExplorerUploader',
  components: {
    Media
  },
  props: {
    multiple: {
      type: Boolean,
      default: true
    },
    uploader: {
      type: Function,
      default: null
    }
  },
  data () {
    return {
      files: [],
      uploads: [],
      failed: [],
      uploading: {},
      message: '',
      autorename: false
    }
  },
  methods: {
    onChange (e) {
      this.message = ''
      this.files = Array.from(e.target.files)
        .map((file) => {
          return {
            name: file.name,
            dataURL: window.URL.createObjectURL(file),
            lastModified: file.lastModified,
            lastModifiedDate: file.lastModifiedDate,
            size: file.size,
            file: file
          }
        })
      // this.upload()
    },
    remove (file) {
      let index = this.files.findIndex((item) => {
        return item.name === file.name
      })
      this.files.splice(index, 1)
    },
    upload () {
      this.message = ''
      this.failed = []
      // 串行逐个上传文件
      let ret = Promise.resolve(null)
      this.files.forEach((file) => {
        let fileName = file.name
        if (this.autorename) {
          let arr = fileName.split('.')
          arr.splice(-1, 0, Date.now())
          fileName = arr.join('.')
        }
        ret = ret.then(() => {
          this.message = `正在上传:${file.name}`
          this.uploading = file
          return this.uploader(fileName, file.file)
            .then(() => {
              this.uploads.push(file)
            })
            .catch((err) => {
              file.message = err.message
              this.failed.push(file)
            })
        })
      })
      ret.then(() => {
        this.message = `成功:${this.uploads.length},失败:${this.failed.length}`
        this.uploads = []
        this.uploading = {}
        this.files = this.failed
        !this.failed.length && this.$emit('change')
      })
    }
  }
}
</script>

<style>
.explorer-uploader-handle {
  position: absolute;
  height: 50px;
  width: 50px;
  top: 50%;
  left: 50%;
  margin-top: -25px;
  margin-left: -25px;
  font-size: 50px;
  line-height: 50px;
  text-align: center;
  opacity: 0.8;
}
.explorer-uploader-input {
    position: absolute;
    right: 0;
    top: 0;
    opacity: 0;
    width: 100%;
    height:100%;
}
</style>
