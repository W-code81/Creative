<template>
  <section class="flex items-center  relative z-10 overflow-hidden">
    <div class=" flex items-center justify-around bg-white/20 w-full p-6 ">
      <div>
          <span class="text-white block mb-4">
        Trusted by Brands I've Helped Shape
      </span>
      </div>
    

      <div class="flex items-center gap-8">
        <div
          v-for="item in Card"
          :key="item.text"
          class="flex items-center gap-2"
        >
          <component :is="item.icon" />
          <p>{{ item.text }}</p>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { Circle, Hourglass } from "@lucide/vue";

const Card = [
  {
    text: "Supa Blox",
    icon: Circle,
  },
  {
    text: "Hype Blox",
    icon: Hourglass,
  },
  {
    text: "Frame Blox",
    icon: Circle,
  },
  {
    text: "Ultra Blox",
    icon: Circle,
  },
];
</script>