<template>
  <section
    class="relative h-screen bg-cover bg-center rounded-b-3xl overflow-hidden"
    :style="{ backgroundImage: `url('/image/img7.jpg')` }"
  >
    <!-- Top content — pushed lower so it sits mid-hero -->
    <div class="flex justify-between items-start px-6 md:px-16 pt-36 md:pt-48">
      <div class="text-white">
        <p class="text-base md:text-lg">Hey, I'm a</p>
        <h1 class="text-7xl md:text-8xl font-bold leading-none mt-1">
          Creative<br />Director
        </h1>
      </div>

      <!-- Hidden on mobile -->
      <div class="hidden md:block max-w-xs mt-2">
        <h2 class="text-white/90 text-2xl font-semibold leading-snug">
          Great design should feel invisible.
        </h2>
        <p class="text-sm mt-3 text-white/70">
          From logo to language, I build brands that connect and convert.
        </p>
      </div>
    </div>

    <!-- Cards pinned to bottom -->
    <div class="absolute bottom-0 left-0 right-0 py-6 px-4 md:px-6">
      <div
        class="grid grid-cols-2 md:grid-cols-4 gap-2"
      >
        <div
          v-for="(item, index) in col"
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
</template>

<script setup>
const col = [
  { text: "Brand Strategy" },
  { text: "Brand Identity Design" },
  { text: "Packaging Design" },
  { text: "Creative Direction" },
]
</script>