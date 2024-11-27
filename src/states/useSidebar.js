import { ref } from 'vue';

// Global
export const isSidebarOpen = ref(0);
export const toogleSidebar = (value) => {
  isSidebarOpen.value = value
}
