import { createApp } from 'vue';
import jsonData from './data.json';

const app = createApp({
  data() {
    return {
      menuVisible: false,
      portfolio: jsonData,
      test: 'hola'
    };
  },
  methods: {
    toggleMenu() {
      this.menuVisible = !this.menuVisible;
    }
  },
  
});

app.mount('#app');