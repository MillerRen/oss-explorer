<template>
  <div class="explorer-sidebar  row">
    <ul class="nav nav-pills nav-stacked">
      <li v-for="space in spaces" :class="{active:~value.indexOf(space)}" :key="space">
        <a href="" @click.prevent="$emit('input', space)">{{space}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ExplorerSidebar',
  props: {
    value: {},
    spaces: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>
