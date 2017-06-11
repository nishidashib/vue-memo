<style scoped lang="scss">
  .menu {
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    background-color: #555;
    color: #fff;
    a {
      color: inherit;
      text-decoration: none;
      display: inline-block;
      padding: 10px;
      font-weight: normal;
      font-size: 14px;
      &:link {
        color: inherit;
      }
    }
    a.router-link-active {
      background-color: #fcfcfc;
      color: #555;
    }
  }
</style>
<!-- 
roter-linkは
vue-routerでルーティングされるページへのリンクを張るための要素です。
router-linkにはリンク先のパスをそのままto="/items"と指定することもできますが、
:to="{name: 'root-name'}"と名前を付けたルートのnameを指定するほうが、相対パスなどを気にする必要がなくなるので、便利でわかりやすくなります。
-->
<template>
   <nav class="menu">
    <router-link :to="{name: 'root'}" exact>最新</router-link>
    <router-link :to="{name: 'items'}">一覧</router-link>
    <router-link :to="{name: 'add'}">追加</router-link>
  </nav>
</template>