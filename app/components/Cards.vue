<template>
    <section class="flex flex-col md:flex-row gap-6 items-center justify-center">
        <div v-for="(item, index) in imgArray"
            :key="index"
            class="w-80 h-100 rounded-2xl overflow-hidden  aspect-[3/4] mt-8 hover:-translate-y-2 transition-all duration-200">
            <img :src="item.src" :alt="item.alt" class="w-full h-full object-cover opacity-80 hover:opacity-100 transition-all duration-200">
        </div>


    </section>
</template>


<script lang="ts" setup>
import Coat from "/image/Coat.png"
import Guy from "/image/Guy.png"
import Pef from "/image/Pef.png"

const imgArray = [
    {
        alt: "Coat",
        src: Coat
    },
    {
        alt: "Guy",
        src: Guy
    },
    {
        alt: "Pefume",
        src: Pef
    }]
</script>