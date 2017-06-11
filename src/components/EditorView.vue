<template>
  <div class="editor-view">
    <div>
      <label>内容：</label>
      <input v-model="input.text" placeholder="メモのタイトル">
    </div>
    <div>
      <label>日付：</label>
      <input type="date" v-model="input.date">
    </div>
    <div>
      <label>タグ：</label>
      <input v-model="input.tags" placeholder="空白区切りで指定">
    </div>
    <div>
      <button @click="save">保存</button>
    </div>
  </div>
</template>

<script lang="babel">
  export default {
    data() {
      return {
        input: {
          text: '',
          date: '',
          tags: ''
        }
      };
    },
    computed: {
      tagsArr() {
        // input.tags の文字列を空白で区切って配列に変換する
        // returnに数式いれて返すとかすげえな。。
        //要するに文字が有れば空白区切の配列に。なければ空配列を
        return this.input.tags.trim() !== '' ? this.input.tags.trim().split(/\s+/) : []
      }
    },
    methods: {
      save() {
        // this.input のクローンを生成する
        // 理由も https://app.codegrid.net/entry/2016-vue-3#toc-3
        //空のオブジェクトにどんどんマージしていってる。
        const data = Object.assign({}, this.input, {tags: this.tagsArr})
        /*
        const data = Object.assign({}, this.input)
        だと、タグが空白区切の配列ではなく格納される。
        // console.log(data);
        {tags: this.tagsArr}があることで
        Object {text: "aaaa", date: "2017-02-01", tags: Array[3]}
        */

        //saveイベントが発火するとコールバックとしてaddイベントが発火する。dataはこの引数になる。
        this.$emit('add', data);
      }
    }
  }
</script>