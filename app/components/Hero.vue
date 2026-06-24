<template>
    <section class="h-screen bg-[url('/image/Eugene Taylor Brand — ALINA TSVOR.jpg')] bg-cover bg-center">
        <div class="flex justify-between mx-auto border mt-32 mb-16 max-w-12xl">
            <div class="text-black border flex items-center ml-16">
                <p class="text-lg">Hey, i'm a <br>
                    <span class="text-8xl font-bold">Creative <br>Director</span>
                </p>
            </div>

            <div class="text-black flex items-center border mr-16 p-4 max-w-md">
                <div class="flex flex-col items-start space-y-4">
                    <span class="text-2xl font-semibold">Great design should feel invisible.</span>
                <p class="text-sm">
                    From logo to language. I build brands that connect and convert.
                </p> 
                </div>
               
            </div>
        </div>


        <div class="flex item-center justify-center mx-auto md:gap-40 mt-24 border">
            <div v-for="(item, index) in col" :key="index" class="flex flex-col items-start">
                <span class="text-sm">
                    <span class="text-[#FFA500]">#</span> 0{{ index + 1 }}
                </span>

                <p>
                    {{ item.text }}
                </p>
            </div>
        </div>
    </section>
</template>

<script setup>
const col = [{
    text: "Brand Strategy"
}, {
    text: "Brand Identity Design"
}, {
    text: "Packaging Design"
}, {
    text: "Creative Direction"
}]
</script>