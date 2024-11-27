<template>
  <div class="top-menu">
    <div class="top-menu-content-left">
      <button class="menu-icon sidebar-icon" @click="toogleSidebar(true)">
        <IconMenu />
      </button>
      <div class="logo" v-if="!themeDark" @click="toggleFullscreen">
        <img src="@/assets/logo.png" >
      </div>
    </div>
    <div class="top-menu-content-right">
      <div class="total-hogares">
        Hogares: 992
      </div>
      <button class="menu-icon" @click="toogleTheme">
        <IconSun />
      </button>
  
    </div>
  </div>
</template>

<script setup>
import { toogleSidebar } from "@/states/useSidebar.js";
import IconMenu from "@/components/icons/IconMenu.vue";
import IconSun from "@/components/icons/IconSun.vue";

import { ref } from "vue";

const isFullScreen = ref(false)
const themeDark = ref(false);

const toogleTheme = () => {
  themeDark.value = !themeDark.value;
  if (themeDark.value)
    document.documentElement.setAttribute("data-theme", "dark");
  else 
  document.documentElement.setAttribute("data-theme", "light");

};

const toggleFullscreen = () => {

  isFullScreen.value = !isFullScreen.value
  isFullScreen.value
    ? document.querySelector('body').requestFullscreen({ navigationUI: 'auto' })
    : document.exitFullscreen();

}

</script>
