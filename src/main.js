import { createApp } from 'vue';
import App from './App';
import './style/base.css';
import './style/screen.styl';
import router from './router';
import store from './store';

const index = createApp(App);
index
  .use(router)
  .use(store)
  .mount('#app');
