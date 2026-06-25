<template>
    <section class="flex flex-col md:flex-row gap-6 items-center justify-center">
        <div v-for="(item, index) in imgArray"
            :key="index"
            class="w-80 h-100 rounded-2xl overflow-hidden  aspect-[3/4] mt-8">
            <img :src="item.src" :alt="item.alt" class="w-full h-full object-cover">
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