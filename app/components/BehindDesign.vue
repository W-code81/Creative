<template>
    <section class="py-24 px-6 md:px-12">
        <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">

            <!-- Left -->
            <div>
                <span class="text-orange-500 font-semibold text-lg">
                    Behind the Designs
                </span>

                <h2 class="text-white text-5xl md:text-6xl font-bold leading-tight mt-4">
                    Shaping <br />
                    Experiences That <br />
                    Make Life Simpler
                </h2>
            </div>

            <!-- Right -->
            <div class="flex flex-col gap-8">
                <p class="text-white text-2xl md:text-4xl font-semibold leading-relaxed">
                    I'm a product designer focused on building clean, intuitive interfaces
                    that solve real-world problems.
                </p>

                <div class="flex items-center justify-between">
                    <div>
                        <p class="text-gray-400">
                            Let's Build Something
                        </p>
                        <p class="text-gray-400">
                            Meaningful Together
                        </p>
                    </div>

                    <NuxtLink to="/"
                        class="bg-orange-500 hover:bg-orange-600 group transition-colors duration-200 text-white px-6 py-2 rounded-full flex items-center gap-3">
                        Get in touch

                        <span class="w-8 h-8 rounded-full group-hover:bg-white/80 bg-white text-orange-500 flex items-center justify-center">
                            →
                        </span>
                    </NuxtLink>
                </div>
            </div>

        </div>
    </section>

    <Cards />
</template>