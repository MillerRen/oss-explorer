<template lang="html">
  <div class="btn-toolbar clearfix"
    role="toolbar"
    aria-label="...">
    <div class="btn-group btn-group-sm"
      :class="{'pull-right': group.pullRight,'open':group.open}"
      v-for="group in toolbar" :key="group.name">
      <template v-for="btn in group.type=='radio'&&group.options||[group]">
      <button class="btn btn-default btn-sm"
        v-if="!group.hidden"
        :key="btn.name"
        :class="[btn.className, btn.name==group.value&&'active']"
        :title="btn.label"
        @click="onClick(group, btn)">
        <i v-if="btn.icon" class="glyphicon" :class="'glyphicon-'+btn.icon"></i>
        <span v-if="btn.showLabel">{{btn.label}}</span>
        <span class="caret" v-if="group.type=='select'">
        </span>
      </button>
      </template>
      <ul class="dropdown-menu" v-if="group.type=='select'">
        <li v-for="option in group.options" :key="option.name">
          <a href="#" @click.prevent="onClick(group, option)">
            <i v-if="option.icon" class="glyphicon" :class="'glyphicon-'+option.icon"></i>
            {{option.label}}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Toolbar',
  props: {
    toolbar: {
      type: Array,
      default () {
        return [
          {
            name: 'upload',
            label: '上传文件',
            icon: 'upload'
          },
          {
            name: 'mkdir',
            label: '新建文件夹',
            icon: 'folder-open'
          },
          {
            name: 'refresh',
            label: '刷新',
            icon: 'refresh'
          },
          {
            name: 'hide',
            label: '隐藏已选文件',
            icon: 'lock',
            hidden: true
          },
          {
            name: 'sort',
            value: 'lastModified-desc',
            label: '排序',
            type: 'select',
            icon: 'sort-by-attributes-alt',
            className: 'dropdown-toggle',
            open: false,
            options: [
              {
                name: 'lastModified-desc',
                label: '按时间倒序'
              },
              {
                name: 'lastModified-asc',
                label: '按时间正序'
              },
              {
                name: 'name-asc',
                label: '按文件名正序'
              },
              {
                name: 'name-desc',
                label: '按文件名倒序'
              }
            ]
          },
          {
            name: 'view',
            value: 'grid',
            type: 'radio',
            options: [
              {
                name: 'grid',
                label: '按缩略图显示',
                icon: 'th'
              },
              {
                name: 'list',
                label: '按列表显示',
                icon: 'th-list'
              }
            ]
          },
          {
            name: 'userspace',
            pullRight: true,
            value: 'public',
            type: 'radio',
            options: [
              {
                name: 'public',
                label: '公共文件夹',
                icon: 'home'
              },
              {
                name: 'private',
                label: '我的文件夹',
                icon: 'user'
              }
            ]
          },
          {
            name: 'remove',
            label: '批量删除',
            icon: 'trash',
            hidden: true
            // pullRight: true,
            // className: 'btn-warning'
          }
        ]
      }
    }
  },
  methods: {
    onClick (group, option) {
      group.open = !group.open
      if (option.options) return
      group.value = option.name
      this.$emit(group.name, option.name)
    }
  }
}
</script>

<style lang="css">
</style>
