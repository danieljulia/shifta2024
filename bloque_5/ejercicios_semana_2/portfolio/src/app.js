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
  mounted() {
    fetch('/prueba.json')
      .then(response => response.json())
      .then(data => {
        console.log("he cargado el json",data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }
  
});

app.mount('#app');