import Root from './page/Root';
import Add from './page/Add';
import Items from './page/Items';

export default {
  // modeを追記
  mode: 'history',
  routes: [
    {
      path: '/', component: Root, name: 'root'
    },
    {
      path: '/add', component: Add, name: 'add'
    },
    {
      path: '/items', component: Items, name: 'items'
    }
  ]
}