import { ref, computed } from 'vue';

const isAuthenticated = ref(false);

export function useAuth() {
  function checkAuth() {
    isAuthenticated.value = !!localStorage.getItem('token');
  }

  function login(token) {
    localStorage.setItem('token', token);
    checkAuth();
  }

  function logout() {
    localStorage.removeItem('token');
    checkAuth();
  }

  checkAuth(); // Call checkAuth immediately

  return {
    isAuthenticated: computed(() => isAuthenticated.value),
    login,
    logout,
    checkAuth //expose checkAuth if needed
  };
}