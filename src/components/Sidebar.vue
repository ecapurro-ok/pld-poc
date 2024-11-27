<template>
  <div
    class="backdrop"
    v-if="isSidebarOpen"
    @click="toogleSidebar(false)"
  ></div>

  <div class="sidebar" :class="{ 'sidebar-open': isSidebarOpen }">
    <div class="sidebar-conteiner">
      <div class="top">
        <div class="logo">[User ID]</div>
        <button @click="toogleSidebar(false)">Cerrar Menu</button>
      </div>
      <div class="conteiner">
        <div class="skeleton-sidebar" style="width: 100%">
          <div class="skeletonDemo">
            <ul class="o-vertical-spacing o-vertical-spacing--l">
              <li class="blog-post o-media">
                <div class="o-media__body">
                  <div class="o-vertical-spacing">
                    <h1 class="blog-post__headline">
                      <span class="skeleton-box" style="width: 90%;"></span>
                    </h1>
                    <p>
                      <span class="skeleton-box" style="width: 83%; height:100px;margin-bottom:12px"></span>                          
                      <span class="skeleton-box" style="width: 90%"></span>
                    </p>
                    <p>
                      <span class="skeleton-box" style="width: 80%"></span>
                      <span class="skeleton-box" style="width: 83%"></span>
                    </p>
                    <p>
                      <span class="skeleton-box" style="width: 80%"></span>
                      <span class="skeleton-box" style="width: 80%"></span>
                    </p>
                   
                    <p>
                      <span class="skeleton-box" style="width: 90%"></span>
                      <span class="skeleton-box" style="width: 83%"></span>
                    </p>
                   
                    <p>
                      <span class="skeleton-box" style="width: 90%"></span>
                      <span class="skeleton-box" style="width: 80%"></span>
                      <span class="skeleton-box" style="width: 83%"></span>
                    </p>
                    <p>
                      <span class="skeleton-box" style="width: 90%"></span>
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="apply" @click="toogleSidebar(false)">Aplicar</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { isSidebarOpen, toogleSidebar } from "@/states/useSidebar.js";
</script>
