<template>
  <nav class="h-12 bg-black/20 backdrop-blur-md fixed top-0 left-0 right-0 z-50
              flex items-center justify-between px-6 md:px-12 py-5 md:p-10">

    <a href="/" class="text-white">Logo</a>

    <!-- Desktop links -->
    <div class="hidden md:flex items-center gap-8 text-white">
      <NuxtLink v-for="item in NAV_LINKS" :key="item.label" :to="item.href">
        {{ item.label }}
      </NuxtLink>
    </div>

    <!-- Right side -->
    <div class="flex items-center gap-4">
      <a href="/contact"
         class="text-white border p-2 rounded-xl hover:bg-white hover:text-black
                transition-all duration-200 text-sm">
        Get in touch
      </a>

      <!-- Hamburger — mobile only -->
      <button
        class="md:hidden text-white flex flex-col justify-center gap-1.5 w-6"
        @click="menuOpen = !menuOpen"
        aria-label="Toggle menu"
      >
        <span
          class="block h-0.5 bg-white transition-all duration-300 origin-center"
          :class="menuOpen ? 'rotate-45 translate-y-2' : ''"
        />
        <span
          class="block h-0.5 bg-white transition-all duration-300"
          :class="menuOpen ? 'opacity-0' : ''"
        />
        <span
          class="block h-0.5 bg-white transition-all duration-300 origin-center"
          :class="menuOpen ? '-rotate-45 -translate-y-2' : ''"
        />
      </button>
    </div>
  </nav>

  <!-- Mobile slide-down menu -->
  <Transition
    enter-active-class="transition-all duration-300 ease-out"
    enter-from-class="opacity-0 -translate-y-4"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition-all duration-200 ease-in"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 -translate-y-4"
  >
    <div
      v-if="menuOpen"
      class="md:hidden fixed top-12 left-0 right-0 z-40
             bg-black/90 backdrop-blur-md px-6 py-6 flex flex-col gap-6"
    >
      <NuxtLink
        v-for="item in NAV_LINKS"
        :key="item.label"
        :to="item.href"
        class="text-white text-lg font-medium border-b border-white/10 pb-4
               hover:text-orange-400 transition-colors duration-200"
        @click="menuOpen = false"
      >
        {{ item.label }}
      </NuxtLink>
    </div>
  </Transition>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { NAV_LINKS } from '~/constants/navLink'

const menuOpen = ref(false)
</script>