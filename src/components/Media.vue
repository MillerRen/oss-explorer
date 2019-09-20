<template lang="html">
    <div class="explorer-media-object">
      <div class="thumbnail">
        <img
          v-if="imageTypes[ext]"
          class="media-object-img"
          :src="file.dataURL"
          :data-src="file.url+'?x-oss-process=image/auto-orient,1/resize,m_pad,w_200,h_200/quality,q_100'"
          @click="$emit('select', file)">
        <!-- <video
          v-if="videoTypes[ext]"
          class="media-object-img"
          :src="file.dataURL"
          controls
        >
        </video> -->
        <span v-if="!file.folder&&!imageTypes[ext]"
          class="media-object-img"
          :class="file.name|mime"
          @click="$emit('select', file)">
        </span>
        <span v-if="file.folder"
         class="media-object-img"
         :class="'.folder'|mime"
         @click="$emit('cd', file.name)">
        </span>
        <a class="media-object-name"
          :href="file.url"
          @click="file.folder&&$emit('cd', file.name)"
          target="_blank">
            {{file.name|cutpath}}
        </a>
      </div>
      <button
        type="button"
        class="close"
        @dblclick.stop="$emit('remove', file)"
        title="双击删除">
        <span aria-hidden="true">×</span>
      </button>
    </div>
</template>

<script>
import cutpath from '../filters/cutpath'
import mime from '../filters/mime'

export default {
  name: 'Media',
  filters: {
    cutpath,
    mime
  },
  props: {
    file: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      imageTypes: {
        png: true,
        jpg: true,
        gif: true,
        svg: true,
        bmp: true,
        jpeg: true,
        webp: true
      },
      videoTypes: {
        mp4: true,
        ogg: true,
        avi: true
      }
    }
  },
  computed: {
    ext () {
      return this.file.name.split('.').pop().toLowerCase()
    }
  },
  methods: {
    select (o) {
      this.$emit('change', o)
    }
  }
}
</script>

<style lang="css">
.explorer-media-object{
  width: 100%;
  height: 0;
  padding: 100% 0 10% 0;
  position: relative;
  overflow: visible;
  cursor: pointer;
}
.explorer-media-object .thumbnail {
  position: absolute;
  height: 90%;
  width: 100%;
  top: 0;
  left: 0;
  background-color: #f5f5f5;
  overflow: hidden;
}
.media-object-img {
  display: block;
  width: 100%;
  height: 100%;
  background-size: 50%;
}
.explorer-media-object .media-object-name {
  position: absolute;
  display:block;
  height: 1.5em;
  bottom: 0px;
  left: 0px;
  right: 0px;
  padding-left: 2px;
  background: #000;
  color: #fff;
  opacity: 0.6;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  white-space: nowrap;
}
.explorer-media-object .close {
  display: none;
  position: absolute;
  right: -10px;
  top: -10px;
  width: 20px;
  height: 20px;
  /* border: 1px solid #333; */
  border-radius: 100%;
  background: #fff;
  opacity: 0.8;
}
.explorer-media-object:hover .close {
  display: block;
}
.explorer-media-object.active .thumbnail {
  box-shadow: 0px 1px 4px #337ab7;
}
.explorer-media-object.loading .thumbnail {
  animation-timing-function: ease-in-out;
  animation-name: media-breath;
  animation-duration: 1500ms;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

@keyframes media-breath {
    0% {
        opacity: .4;
        box-shadow: 0 1px 2px rgba(0, 147, 223, 0.4), 0 1px 1px rgba(0, 147, 223, 0.1);
    }

    100% {
        opacity: 1;
        box-shadow: 0 1px 4px #0093df, 0 1px 10px #0093df;
    }
}
</style>
