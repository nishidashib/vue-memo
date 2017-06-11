<template>
  <div class="list-view">
    <div v-if="memos && memos.length !== 0">
      <list-item v-for="memo in memos" :memo="memo">
      </list-item> 
    </div>
    <div v-else>
      表示できるメモがありません。
    </div>
  </div>
</template>

<script lang="babel">
  import ListItem from './ListItem';
  export default {
    props : {
      memos: Array
    },
    components: {
      ListItem
    }
  }
</script>