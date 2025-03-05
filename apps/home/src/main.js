import { createApp } from 'vue'
import './style.css'
import Home from './components/Home.vue'

export function mount(element) {
    createApp(Home).mount(element);
  }
