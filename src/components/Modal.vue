<template>
  <div class="modal fade in explorer-modal">
    <div class="modal-backdrop fade in" @click="$emit('close')"></div>
    <div class="modal-dialog" ref="dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" @click="$emit('close')" aria-label="Close"><span aria-hidden="true">×</span></button>
          <h4 class="modal-title">{{title}}</h4>
        </div>
        <div class="modal-body">
          <slot></slot>
        </div>
        <!-- <div class="modal-footer">
          <slot name="footer"></slot>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExplorerModal',
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  mounted () {
    this.$el.style.height = this.$el.parentNode.scrollHeight + 'px'
    this.$refs.dialog.style.top = this.$el.parentNode.scrollTop + 'px'
  }
}
</script>

<style>
.explorer-modal {
  display: block;
  position: absolute;
}
.explorer-modal .modal-backdrop {
  position: absolute;
  z-index: -1;
}
.explorer-modal .modal-body {
  max-height: 400px;
  overflow-y: scroll;
}
</style>
