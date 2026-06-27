<template>
    <!-- Hero -->
    <section class="relative h-screen bg-cover bg-center rounded-b-3xl overflow-hidden"
        :style="{ backgroundImage: `url(${image})` }">
        <!-- Overlay -->
        <div class="absolute inset-0 bg-black/50" />

        <div class="relative flex justify-between items-start px-6 md:px-16 pt-36 md:pt-48">
            <div class="text-white">
                <p class="text-base md:text-lg text-orange-400 font-semibold">{{ category }}</p>
                <h1 class="text-7xl md:text-8xl font-bold leading-none mt-1">
                    {{ title }}
                </h1>
            </div>

            <div class="hidden md:block max-w-xs mt-2">
                <h2 class="text-white/90 text-2xl font-semibold leading-snug">
                    {{ description }}
                </h2>
                <p class="text-sm mt-3 text-white/70">{{ year }}</p>
            </div>
        </div>

        <!-- Info cards pinned to bottom -->
        <div class="absolute bottom-0 left-0 right-0 py-6 px-4 md:px-6">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-2">
                <div v-for="(block, index) in content" :key="index" class="bg-black/40 backdrop-blur-sm px-5 md:px-8 py-5
                 rounded-xl flex flex-col items-start text-white">
                    <span class="text-xs text-white/60 mb-1">
                        <span class="text-orange-400">#</span> 0{{ index + 1 }}
                    </span>
                    <p class="text-sm md:text-base font-semibold">{{ block.heading }}</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Content section -->
    <section class="py-24 px-6 md:px-12">
        <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">

            <!-- Left -->
            <div>
                <span class="text-orange-500 font-semibold text-lg">{{ category }}</span>
                <h2 class="text-white text-5xl md:text-6xl font-bold leading-tight mt-4">
                    {{ title }}
                </h2>
                <p class="text-gray-400 mt-6 text-base leading-relaxed">
                    {{ description }}
                </p>

                <!-- Meta -->
                <div class="flex items-center gap-8 mt-10 border-t border-white/10 pt-8">
                    <div>
                        <p class="text-gray-400 text-xs uppercase tracking-widest mb-1">Year</p>
                        <p class="text-white font-semibold">{{ year }}</p>
                    </div>
                    <div>
                        <p class="text-gray-400 text-xs uppercase tracking-widest mb-1">Category</p>
                        <p class="text-white font-semibold">{{ category }}</p>
                    </div>
                </div>
            </div>

            <!-- Right — content blocks -->
            <div class="flex flex-col gap-10">
                <div v-for="(block, index) in content" :key="index"
                    class="flex flex-col gap-3 border-b border-white/10 pb-10 last:border-0 last:pb-0">
                    <span class="text-orange-400 text-xs font-semibold tracking-widest uppercase">
                        0{{ index + 1 }}
                    </span>
                    <h3 class="text-white text-2xl font-bold">{{ block.heading }}</h3>
                    <p class="text-gray-400 leading-relaxed">{{ block.body }}</p>
                </div>
            </div>

        </div>
    </section>

    <!-- Project image -->
    <section class="px-6 md:px-12 pb-24">
        <div class="max-w-7xl mx-auto">
            <div class="rounded-2xl overflow-hidden aspect-[16/9]">
                <img :src="image" :alt="title" class="w-full h-full object-cover opacity-80" />
            </div>
        </div>
    </section>

    <!-- CTA -->
    <section class="py-24 px-6 md:px-12 border-t border-white/10">
        <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
            <div>
                <span class="text-orange-500 font-semibold text-lg">Next Step</span>
                <h2 class="text-white text-5xl md:text-6xl font-bold leading-tight mt-4">
                    Let's Build<br />Yours Next
                </h2>
            </div>

            <div class="flex flex-col gap-8">
                <p class="text-white text-2xl md:text-4xl font-semibold leading-relaxed">
                    Got a project that needs this kind of thinking? Let's talk.
                </p>

                <div class="flex items-center justify-between">
                    <div>
                        <p class="text-gray-400">Ready to get started?</p>
                        <p class="text-gray-400">Let's talk about your project</p>
                    </div>

                    <NuxtLink to="/contact" class="bg-orange-500 hover:bg-orange-600 group transition-colors duration-200
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

    <!-- Back to projects -->
    <div class="px-6 md:px-12 pb-12">
        <NuxtLink to="/projects" class="inline-flex items-center gap-3 text-gray-400 hover:text-white
             transition-colors duration-200 group">
            <span class="w-8 h-8 rounded-full border border-white/10 flex items-center
               justify-center group-hover:border-orange-400 group-hover:text-orange-400
               transition-all duration-200">
                ←
            </span>
            Back to Projects
        </NuxtLink>
    </div>
</template>

<script lang="ts" setup>
import projects from '~/constants/projects'

// slug form url
const projectID = useRoute().params.slug as string

// filtered the projects array to find the slug that matches
const filteredProject = projects.find(p => p.slug === projectID)

// creates 404 - just learnt this
if (!filteredProject) {
    throw createError({ statusCode: 404, statusMessage: 'Project not found' })
}

// destructured the props form the array
const { title, category, image, year, description, content } = filteredProject

// dynamic title
useHead({ title })
</script>