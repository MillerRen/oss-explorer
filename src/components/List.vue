<template>
  <table class="explorer-list table table-hover">
    <thead>
      <tr class="info">
        <td>类型</td>
        <td>文件名</td>
        <td>大小</td>
        <td>修改时间</td>
        <td>操作</td>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="o in files"
        :class="{success: ~value.indexOf(o)}"
        :key="o.name"
        @click="$emit('select', o)">
        <td>
          <span class="explorer-mime" :class="o.name|mime"></span>
        </td>
        <td>
          <a :href="o.url" target="_blank" >{{o.name|cutpath}}</a>
        </td>
        <td>{{o.size}}</td>
        <td>{{o.lastModified}}</td>
        <td>
          <button class="btn btn-sm btn-link" @dblclick="$emit('remove', o)" title="双击删除">删除</button>
        </td>
      </tr>
      <tr>
        <td colspan="5">
          <button v-if="nextMarker" class="btn btn-block btn-link" @click.prevent="$emit('more')">加载更多</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import mime from '../filters/mime'
import cutpath from '../filters/cutpath'

export default {
  name: 'ExplorerList',
  filters: {
    cutpath,
    mime
  },
  props: {
    files: {
      type: Array,
      default () {
        return []
      }
    },
    value: {
      type: Array,
      default () {
        return []
      }
    },
    nextMarker: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>
.explorer-mime {
  font-size: 20px;
}
</style>
