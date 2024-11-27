<template>
    <div class="columns-container">

      <template 
       v-for="(item, index) in items" 
      :key="index"
      
      @click="selectItem(index)">  
      <div class="column" :class="{'sticky': selectedIndex === index}" >
        <div class="column-header">
          <div>{{item}}</div>
          <div class="right">
            <template v-if="selectedIndex == index">     
              <svg  @click="pinned(index)" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3l18 18"></path><path d="M15 4.5l-3.249 3.249m-2.57 1.433L7 10l-1.5 1.5l7 7L14 17l.82-2.186m1.43-2.563L19.5 9"></path><path d="M9 15l-4.5 4.5"></path><path d="M14.5 4L20 9.5"></path></g></svg>         
            </template>
            <template v-else>
              <svg @click="pinned(index)" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 4v6l-2 4v2h10v-2l-2-4V4"></path><path d="M12 16v5"></path><path d="M8 4h8"></path></g></svg>                                            
            </template>
          </div>
        </div>
        <div class="column-content">
          <SkeletonDemo />
        </div>
      </div>
      </template>
  

 

      <!-- <div class="column last-column">
        <div class="column-header">Totales</div>
        <div class="column-content">
          <SkeletonDemo />
        </div>
      </div> -->
    </div>

</template>

<script setup>

import { ref,onMounted } from "vue";
import SkeletonDemo from "@/components/SkeletonDemo.vue";

const items = ref(['America', 'TV Publica', 'El Nueve', 'Telefe','El Trece','Net TV','Bravo TV', 'Totales'])
const selectedIndex = ref(null)

onMounted(() => {
  // Sincronización del scroll vertical entre las columnas
  const columns = document.querySelectorAll(".column-content");

  columns.forEach((col) => {
    col.addEventListener("scroll", () => {
      columns.forEach((otherCol) => {
        if (otherCol !== col) {
          otherCol.scrollTop = col.scrollTop;
        }
      });
    });
  });
});

const pinned = (index) =>{
  console.log("selectedindex, index", selectedIndex.value, index)
  if (selectedIndex.value == index)
    selectedIndex.value = -1
  else
  selectedIndex.value = index

}

</script>
