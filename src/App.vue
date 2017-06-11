<style lang="scss">
  @import '../static/styles.scss';
</style>
<template>
  <div class="app">
    <editor-view @add="add"></editor-view>
    <list-view :memos="memos" @remove="remove"></list-view>
  </div>
</template>

<script lang="babel">
import EditorView from './components/EditorView'
import ListView from './components/ListView'

//結局このApp,vueってmain.jsから呼び出しされるっぽくて、
//このクラス名がappでこれはListItemクラスを継承してるようにしとかないとだめっっぽいです。
export default {
  name: 'app',
  data() {
    return {
      memos: [
        {
          id: 1,
          text: 'テスト',
          date: '16-10-28',
          tags: ['タグ1', 'タグ2']
        },
        {
          id: 2,
          text: 'テスト2',
          date: '16-11-28',
          tags: ['タグ2', 'タグ3']
        }
      ]
    };
  },
  methods: {
    add(newMemo) {
      // newMemo.id = this.nextId();//computedメソッドにすると叱られる。。。
      newMemo.id = this.nextId;
      this.memos.push(newMemo);
    },
    //そっか親ってここになるのか、、親コンポーネントがここに書いてるから？？
    remove(id) {
      //findIndexとか、覚えといた方が良さげ。。
      const index = this.memos.findIndex((memo) => {
        return memo.id === id;
      });
      this.memos.splice(index, 1);//なるほど、spliceで取り除くってことか。。
      //で、memosが変更されると、自動で通知されて削除されるってことね。
    }
  },
  computed: {
    nextId() {
      // this.memos の中で一番大きい id + 1 を返す
      //言ってる意味はなんとなくやけど、、ちょっと後回しにしよかなと。。
      return this.memos.reduce((id, memo) => {
          return id < memo.id ? memo.id : id;
        }, 0) + 1;
    }
  },
  components: {
    EditorView,
    ListView
  }
}
</script>