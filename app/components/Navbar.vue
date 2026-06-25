<template>
    <nav class="h-12 bg-black/20 backdrop-blur-md fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 md:p-10">
        <a href="/" class="text-white">Logo</a>
        <div class="flex items-center justify-center gap-8 text-white cursor-pointer">
            <NuxtLink v-for="item in NAV_LINKS" :key="item.label" :to="item.href">{{ item.label }}</NuxtLink>
        </div>
        <a href="/contact" class="text-white border p-2 rounded-xl hover:bg-white hover:text-black transition-all duration-200 ">Get in touch</a>
    </nav>
</template>


<script lang="ts" setup>
import { NAV_LINKS } from '~/constants/navLink';

</script>