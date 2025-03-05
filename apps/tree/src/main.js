import { createApp } from 'vue'
import './style.css'
import Tree from './components/Tree.vue'

export function mount(element) {
    createApp(Tree).mount(element);
  }
