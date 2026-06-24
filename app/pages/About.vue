<template>
    <div class="flex flex-col items-center justify-center mx-auto pt-24 relative overflow-hidden space-y-6">
         <h1 class="text-7xl">ABOUT PAGE</h1>
         <NuxtLink to="/" class="border rounded-2xl p-6 hover:bg-black hover:text-white transition-all duration-200 ">home</NuxtLink>
          <button class="border rounded-2xl p-6 hover:bg-black hover:text-white transition-all duration-200" @click=counter++>{{ counter }}</button>
    </div>
</template>


<script lang="ts" setup>

useHead({
    title: "Home",
})

const counter = useState("count", () => 0);

</script>
