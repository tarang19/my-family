<template>
  <div id="home" v-if="isAuthenticated"></div>
  <div id="setting" v-if="isAuthenticated"></div>
  <div id="tree" v-if="isAuthenticated"></div>
  <div id="auth" v-if="!isAuthenticated"></div>
</template>

<script setup>
import { onMounted, computed } from 'vue';
import { mount as mountAuth } from "../../../apps/auth/dist/auth.js";
import { mount as mountHome } from "../../../apps/home/dist/Home.js";
import { mount as mountSetting } from "../../../apps/setting/dist/Setting.js";
import { mount as mountTree } from "../../../apps/tree/dist/Tree.js";
import { useAuth } from '../../composables/useAuth.js'; 

const { isAuthenticated } = useAuth();
const isAuthenticatedComputed = computed(()=>isAuthenticated.value);

onMounted(() => {
  mountMicroFrontends();
});

function mountMicroFrontends() {
  if (!isAuthenticatedComputed.value) {
    mountAuth(document.querySelector('#auth'));
  } else {
    mountHome(document.querySelector('#home'));
    mountSetting(document.querySelector('#setting'));
    mountTree(document.querySelector('#tree'));
  }
}
</script>