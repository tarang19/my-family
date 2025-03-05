import { createApp } from 'vue'
import './style.css'
import Setting from './components/Setting.vue'

export function mount(element) {
    createApp(Setting).mount(element);
  }
