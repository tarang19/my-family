import { createApp } from 'vue'
import './style.css'
import Auth from './components/Auth.vue'

export function mount(element) {
    createApp(Auth).mount(element);
  }
