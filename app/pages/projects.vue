<template>
  <!-- Hero -->
  <section
    class="relative h-screen bg-cover bg-center rounded-b-3xl overflow-hidden"
    :style="{ backgroundImage: `url('/image/img7.jpg')` }"
  >
    <div class="flex justify-between items-start px-6 md:px-16 pt-36 md:pt-48">
      <div class="text-white">
        <p class="text-base md:text-lg">A look at my</p>
        <h1 class="text-7xl md:text-8xl font-bold leading-none mt-1">
          Selected<br />Work
        </h1>
      </div>

      <div class="hidden md:block max-w-xs mt-2">
        <h2 class="text-white/90 text-2xl font-semibold leading-snug">
          Every project starts with a problem worth solving.
        </h2>
        <p class="text-sm mt-3 text-white/70">
          Strategy, identity, and direction — built for real impact.
        </p>
      </div>
    </div>

    <!-- Category pills pinned to bottom -->
    <div class="absolute bottom-0 left-0 right-0 py-6 px-4 md:px-6">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-2">
        <div
          v-for="(item, index) in categories"
          :key="index"
          class="bg-black/40 backdrop-blur-sm px-5 md:px-8 py-5
                 rounded-xl flex flex-col items-start text-white
                 cursor-pointer hover:bg-orange-500/20 transition-all duration-200"
          :class="{ 'border border-orange-400/60': activeCategory === item.text }"
          @click="activeCategory = item.text"
        >
          <span class="text-xs text-white/60 mb-1">
            <span class="text-orange-400">#</span> 0{{ index + 1 }}
          </span>
          <p class="text-sm md:text-base font-semibold">{{ item.text }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Projects grid -->
  <section class="py-24 px-6 md:px-12">
    <div class="max-w-7xl mx-auto">

      <div class="flex items-end justify-between mb-12">
        <div>
          <span class="text-orange-500 font-semibold text-lg">The Work</span>
          <h2 class="text-white text-5xl md:text-6xl font-bold leading-tight mt-4">
            Projects That<br />Moved the Needle
          </h2>
        </div>
        <span class="text-gray-400 text-sm hidden md:block">
          {{ filteredProjects.length }} projects
        </span>
      </div>

      <!-- Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          v-for="(project, index) in filteredProjects"
          :key="index"
          class="group relative rounded-2xl overflow-hidden aspect-[4/3]
                 cursor-pointer hover:-translate-y-1 transition-all duration-300"
        >
          <!-- Image -->
          <img
            :src="project.image"
            :alt="project.title"
            class="w-full h-full object-cover opacity-80
                   group-hover:opacity-100 group-hover:scale-105
                   transition-all duration-500"
          />

          <!-- Overlay -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          <!-- Info -->
          <div class="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <span class="text-orange-400 text-xs font-semibold tracking-widest uppercase">
              {{ project.category }}
            </span>
            <h3 class="text-white text-2xl md:text-3xl font-bold mt-2">
              {{ project.title }}
            </h3>
            <p class="text-white/60 text-sm mt-1">{{ project.year }}</p>
          </div>

          <!-- Arrow on hover -->
          <div class="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10
                      backdrop-blur-sm flex items-center justify-center text-white
                      opacity-0 group-hover:opacity-100 transition-all duration-300
                      group-hover:bg-orange-500">
            →
          </div>
        </div>
      </div>

    </div>
  </section>

  <!-- CTA -->
  <section class="py-24 px-6 md:px-12 border-t border-white/10">
    <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">

      <div>
        <span class="text-orange-500 font-semibold text-lg">
          Next Project
        </span>
        <h2 class="text-white text-5xl md:text-6xl font-bold leading-tight mt-4">
          Could Be<br />
          Yours
        </h2>
      </div>

      <div class="flex flex-col gap-8">
        <p class="text-white text-2xl md:text-4xl font-semibold leading-relaxed">
          Got a brand that needs to connect and convert? Let's make it happen.
        </p>

        <div class="flex items-center justify-between">
          <div>
            <p class="text-gray-400">Ready to get started?</p>
            <p class="text-gray-400">Let's talk about your project</p>
          </div>

          <NuxtLink to="/contact"
            class="bg-orange-500 hover:bg-orange-600 group transition-colors duration-200
                   text-white px-6 py-2 rounded-full flex items-center gap-3">
            Get in touch
            <span class="w-8 h-8 rounded-full group-hover:bg-white/80 bg-white
                         text-orange-500 flex items-center justify-center">
              →
            </span>
          </NuxtLink>
        </div>
      </div>

    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import Coat from '/image/Coat.png'
import Guy from '/image/Guy.png'
import Pef from '/image/Pef.png'

useHead({ title: 'Projects' })

const activeCategory = ref('All')

const categories = [
  { text: 'All' },
  { text: 'Brand Identity' },
  { text: 'Packaging' },
  { text: 'Creative Direction' },
]

const projects = [
  {
    title: 'Aura Brand System',
    category: 'Brand Identity',
    year: '2024',
    image: Coat,
  },
  {
    title: 'Sensa Packaging',
    category: 'Packaging',
    year: '2024',
    image: Pef,
  },
  {
    title: 'Volta Campaign',
    category: 'Creative Direction',
    year: '2023',
    image: Guy,
  },
  {
    title: 'Melo Identity',
    category: 'Brand Identity',
    year: '2023',
    image: Coat,
  },
]

const filteredProjects = computed(() =>
  activeCategory.value === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory.value)
)
</script>