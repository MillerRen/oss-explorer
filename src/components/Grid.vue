<template>
  <div class="explorer-grid">
    <div class="row">
      <template v-for="o in files">
        <div
          class="col-xs-3 col-sm-2"
          v-if="o.name!=prefix"
          :key="o.name">
          <media
            :class="{active: ~value.indexOf(o)}"
            :file="o"
            @remove="$emit('remove', $event)"
            @select="$emit('select', $event)"
            @cd="$emit('cd', $event)"
          />
        </div>
      </template>
    </div>
    <div class="row">
      <button v-if="nextMarker" class="btn btn-block btn-link" @click.prevent="$emit('more')">加载更多</button>
    </div>
  </div>
</template>

<script>
import Media from './Media.vue'
export default {
  name: 'ExplorerGrid',
  components: {
    Media
  },
  props: {
    files: {
      type: Array,
      default () {
        return []
      }
    },
    nextMarker: {
      type: String,
      default: ''
    },
    value: {
      type: Array,
      default () {
        return []
      }
    },
    prefix: {
      type: String,
      default: ''
    }
  }
}
</script>
