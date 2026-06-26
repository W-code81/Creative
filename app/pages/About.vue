<template>
  <!-- Hero -->
  <section
    class="relative h-screen bg-cover bg-center rounded-b-3xl overflow-hidden"
    :style="{ backgroundImage: `url('/image/img7.jpg')` }"
  >
    <div class="flex justify-between items-start px-6 md:px-16 pt-36 md:pt-48">
      <div class="text-white">
        <p class="text-base md:text-lg">A little about</p>
        <h1 class="text-7xl md:text-8xl font-bold leading-none mt-1">
          Who I<br />Am
        </h1>
      </div>

      <div class="hidden md:block max-w-xs mt-2">
        <h2 class="text-white/90 text-2xl font-semibold leading-snug">
          Design is how I think, not just what I make.
        </h2>
        <p class="text-sm mt-3 text-white/70">
          A creative director obsessed with clarity, craft, and brand truth.
        </p>
      </div>
    </div>

    <!-- Stats pinned to bottom -->
    <div class="absolute bottom-0 left-0 right-0 py-6 px-4 md:px-6">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-2">
        <div
          v-for="(item, index) in stats"
          :key="index"
          class="bg-black/40 backdrop-blur-sm px-5 md:px-8 py-5
                 rounded-xl flex flex-col items-start text-white"
        >
          <span class="text-xs text-white/60 mb-1">
            <span class="text-orange-400">#</span> 0{{ index + 1 }}
          </span>
          <p class="text-sm md:text-base font-semibold">{{ item.text }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Story section -->
  <section class="py-24 px-6 md:px-12">
    <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">

      <div>
        <span class="text-orange-500 font-semibold text-lg">
          The Story
        </span>
        <h2 class="text-white text-5xl md:text-6xl font-bold leading-tight mt-4">
          Built on<br />
          Curiosity &<br />
          Craft
        </h2>
      </div>

      <div class="flex flex-col gap-8">
        <p class="text-white text-2xl md:text-4xl font-semibold leading-relaxed">
          I've spent years turning complex ideas into clear, compelling visual stories.
        </p>

        <p class="text-gray-400 text-base leading-relaxed">
          From brand strategy to hands-on design execution, I work at the intersection
          of identity and experience — crafting brands that don't just look good,
          but mean something.
        </p>

        <div class="flex items-center justify-between">
          <div>
            <p class="text-gray-400">Let's Build Something</p>
            <p class="text-gray-400">Meaningful Together</p>
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

  <!-- Skills section -->
  <section class="py-24 px-6 md:px-12 border-t border-white/10">
    <div class="max-w-7xl mx-auto">

      <span class="text-orange-500 font-semibold text-lg">What I Do</span>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <div
          v-for="(skill, index) in skills"
          :key="index"
          class="bg-white/5 border border-white/10 rounded-2xl px-8 py-10
                 flex flex-col gap-4 hover:border-orange-500/40
                 transition-all duration-300"
        >
          <span class="text-orange-400 text-xs font-semibold tracking-widest uppercase">
            0{{ index + 1 }}
          </span>
          <h3 class="text-white text-2xl font-bold">{{ skill.title }}</h3>
          <p class="text-gray-400 text-sm leading-relaxed">{{ skill.desc }}</p>
        </div>
      </div>

    </div>
  </section>

  <!-- Image gallery — reusing Cards style -->
  <section class="flex flex-col md:flex-row gap-6 items-center justify-center pb-24 px-6">
    <div
      v-for="(item, index) in imgArray"
      :key="index"
      class="w-80 h-100 rounded-2xl overflow-hidden aspect-[3/4] mt-8
             hover:-translate-y-2 transition-all duration-200"
    >
      <img
        :src="item.src"
        :alt="item.alt"
        class="w-full h-full object-cover opacity-80 hover:opacity-100
               transition-all duration-200"
      />
    </div>
  </section>
</template>

<script lang="ts" setup>
import Coat from '/image/Coat.png'
import Guy from '/image/Guy.png'
import Pef from '/image/Pef.png'

useHead({ title: 'About' })

const stats = [
  { text: '5+ Years Experience' },
  { text: '40+ Brands Shaped' },
  { text: 'Strategy to Execution' },
  { text: 'Global Clients' },
]

const skills = [
  {
    title: 'Brand Strategy',
    desc: 'Positioning, naming, and messaging frameworks that give brands a clear reason to exist.',
  },
  {
    title: 'Visual Identity',
    desc: 'Logo systems, typography, colour, and all the pieces that make a brand instantly recognisable.',
  },
  {
    title: 'Creative Direction',
    desc: 'Leading campaigns, shoots, and design teams to produce work that actually lands.',
  },
]

const imgArray = [
  { alt: 'Coat', src: Coat },
  { alt: 'Guy',  src: Guy  },
  { alt: 'Perfume', src: Pef },
]
</script>