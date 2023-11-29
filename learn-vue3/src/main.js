// import './assets/main.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import { createApp } from 'vue'
import App from './App.vue'
// import AppCard from '@/components/AppCard.vue';

const app = createApp(App);

// 컴포넌트 전역 등록
// app.component('AppCard', AppCard);

app.mount('#app');

import 'bootstrap/dist/js/bootstrap.js';