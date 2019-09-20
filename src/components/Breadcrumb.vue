<template lang="html">
  <ol class="breadcrumb explorer-breadcrumb">
    <li></li>
    <li v-for="(p, index) in path" :key="p">
      <a :href="p" @click.prevent="openFolder(index)">{{p}}</a>
    </li>
  </ol>
</template>

<script>
export default {
  name: 'Breadcrumb',
  props: {
    prefix: {
      type: String,
      default: ''
    }
  },
  computed: {
    path () {
      return this.prefix.split('/')
    }
  },
  methods: {
    openFolder (index) {
      var prefix = this.path.slice(0, index + 1).join('/') + '/'
      this.$emit('change', prefix)
    }
  }
}
</script>

<style lang="css">
.explorer-breadcrumb {
  margin-bottom: 0;
  padding-top: 0;
  padding-bottom: 0;
  border-radius: 0;
}
</style>
