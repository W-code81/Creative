<template>
  <section class="bg-zinc-900 w-full">
    <div class="flex flex-col md:flex-row md:items-center md:justify-between
                px-6 md:px-12 py-6 gap-4 md:gap-8">

      <!-- Label -->
      <p class="text-white/60 text-sm leading-snug shrink-0">
        Trusted by Brands I've Helped Shape
      </p>

      <!-- Logos: horizontal scroll on mobile, normal row on desktop -->
      <div class="flex items-center gap-6 md:gap-10
                  overflow-x-auto scrollbar-hide pb-1 md:pb-0">
        <div
          v-for="item in Card"
          :key="item.text"
          class="flex items-center gap-2 text-white font-semibold text-sm shrink-0"
        >
          <component :is="item.icon" class="w-5 h-5 shrink-0" />
          <span>{{ item.text }}</span>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { Circle, Hourglass, ToggleRight } from '@lucide/vue'

const Card = [
  { text: "Supa Blox",  icon: Circle },
  { text: "Hype Blox",  icon: Hourglass },
  { text: "Frame Blox", icon: Circle },
  { text: "Ultra Blox", icon: ToggleRight },
]
</script>