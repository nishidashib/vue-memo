<template>
  <div class="list-item">
    <div>
      <span>id</span>：
      <span>{{memo.id}}</span>
    </div>
    <div>
      <span>text</span>：
      <span>{{memo.text}}</span>
    </div>
    <div>
      <span>date</span>：
      <span>{{memo.date}}</span>  
    </div>
    <div>
      <span>tags</span>：
      <span>
        <span v-for="tag in memo.tags">{{tag}}</span>
      </span>
    </div>
    <div>
      <button @click="remove(memo.id)">削除</button>
    </div>
  </div>
</template>

<script lang="babel">
  export default {
    props : {
      memo: Object
    },
    methods: {
      remove(id) {
        //親コンポーネントにremove通知 
        //ListViewに通知ってこと？？ でもapp.jsに書いてるんやけどねremoveは。
        //ま、ここはそーゆーもんってしておこうか。
        // <list-view :memos="memos" @remove="remove"></list-view>
        this.$parent.$emit('remove', id)
      }
    }
  }
</script>