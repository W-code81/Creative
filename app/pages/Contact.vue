<template>
  <!-- Hero -->
  <section
    class="relative h-screen bg-cover bg-center rounded-b-3xl overflow-hidden"
    :style="{ backgroundImage: `url('/image/img7.jpg')` }"
  >
    <div class="flex justify-between items-start px-6 md:px-16 pt-36 md:pt-48">
      <div class="text-white">
        <p class="text-base md:text-lg">Let's work</p>
        <h1 class="text-7xl md:text-8xl font-bold leading-none mt-1">
          Together
        </h1>
      </div>

      <div class="hidden md:block max-w-xs mt-2">
        <h2 class="text-white/90 text-2xl font-semibold leading-snug">
          Every great brand starts with a conversation.
        </h2>
        <p class="text-sm mt-3 text-white/70">
          Tell me about your project and let's see what we can build.
        </p>
      </div>
    </div>

    <!-- Info cards pinned to bottom -->
    <div class="absolute bottom-0 left-0 right-0 py-6 px-4 md:px-6">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-2">
        <div
          v-for="(item, index) in info"
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

  <!-- Contact section -->
  <section class="py-24 px-6 md:px-12">
    <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">

      <!-- Left -->
      <div class="flex flex-col gap-10">
        <div>
          <span class="text-orange-500 font-semibold text-lg">Get In Touch</span>
          <h2 class="text-white text-5xl md:text-6xl font-bold leading-tight mt-4">
            Start a<br />Conversation
          </h2>
        </div>

        <!-- Contact details -->
        <div class="flex flex-col gap-6">
          <div
            v-for="(detail, index) in contactDetails"
            :key="index"
            class="flex items-start gap-4 border-b border-white/10 pb-6"
          >
            <div class="w-10 h-10 rounded-full bg-white/5 border border-white/10
                        flex items-center justify-center text-orange-400 shrink-0">
                        
               <!-- icon component -->
              <component :is="detail.icon" class="w-4 h-4" /> 
            </div>
            <div>
              <p class="text-gray-400 text-xs uppercase tracking-widest mb-1">
                {{ detail.label }}
              </p>
              <a
                :href="detail.href"
                class="text-white font-semibold hover:text-orange-400
                       transition-colors duration-200"
              >
                {{ detail.value }}
              </a>
            </div>
          </div>
        </div>

        <!-- Socials -->
        <div>
          <p class="text-gray-400 text-sm mb-4">Find me online</p>
          <div class="flex items-center gap-4">
            <a
              v-for="social in socials"
              :key="social.label"
              :href="social.href"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="social.label"
              class="w-10 h-10 rounded-full bg-white/5 border border-white/10
                     flex items-center justify-center text-white/60
                     hover:border-orange-400/60 hover:text-orange-400
                     transition-all duration-200"
            >
            <!-- social icon component -->
              <component :is="social.icon" class="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <!-- Right — Form -->
      <div class="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10
                  flex flex-col gap-6">

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div class="flex flex-col gap-2">
            <label class="text-gray-400 text-xs uppercase tracking-widest">
              First Name
            </label>
            <input
              v-model="form.firstName"
              type="text"
              placeholder="John"
              class="bg-white/5 border border-white/10 rounded-xl px-4 py-3
                     text-white placeholder:text-white/30 text-sm
                     focus:outline-none focus:border-orange-400/60
                     transition-colors duration-200"
            />
          </div>

          <div class="flex flex-col gap-2">
            <label class="text-gray-400 text-xs uppercase tracking-widest">
              Last Name
            </label>
            <input
              v-model="form.lastName"
              type="text"
              placeholder="Doe"
              class="bg-white/5 border border-white/10 rounded-xl px-4 py-3
                     text-white placeholder:text-white/30 text-sm
                     focus:outline-none focus:border-orange-400/60
                     transition-colors duration-200"
            />
          </div>
        </div>

        <div class="flex flex-col gap-2">
          <label class="text-gray-400 text-xs uppercase tracking-widest">
            Email
          </label>
          <input
            v-model="form.email"
            type="email"
            placeholder="john@example.com"
            class="bg-white/5 border border-white/10 rounded-xl px-4 py-3
                   text-white placeholder:text-white/30 text-sm
                   focus:outline-none focus:border-orange-400/60
                   transition-colors duration-200"
          />
        </div>

        <div class="flex flex-col gap-2">
          <label class="text-gray-400 text-xs uppercase tracking-widest">
            Service
          </label>
          <select
            v-model="form.service"
            class="bg-white/5 border border-white/10 rounded-xl px-4 py-3
                   text-white text-sm focus:outline-none focus:border-orange-400/60
                   transition-colors duration-200 appearance-none"
          >
            <option value="" disabled class="bg-zinc-900">Select a service</option>
            <option
              v-for="service in services"
              :key="service"
              :value="service"
              class="bg-zinc-900"
            >
              {{ service }}
            </option>
          </select>
        </div>

        <div class="flex flex-col gap-2">
          <label class="text-gray-400 text-xs uppercase tracking-widest">
            Message
          </label>
          <textarea
            v-model="form.message"
            rows="5"
            placeholder="Tell me about your project..."
            class="bg-white/5 border border-white/10 rounded-xl px-4 py-3
                   text-white placeholder:text-white/30 text-sm
                   focus:outline-none focus:border-orange-400/60
                   transition-colors duration-200 resize-none"
          />
        </div>

        <button
          class="bg-orange-500 hover:bg-orange-600 group transition-colors duration-200
                 text-white px-6 py-3 rounded-full flex items-center justify-between
                 w-full mt-2"
          @click="handleSubmit"
        >
          <span class="font-semibold">
            {{ submitted ? 'Message Sent!' : 'Send Message' }}
          </span>
          <span
            class="w-8 h-8 rounded-full group-hover:bg-white/80 bg-white
                   text-orange-500 flex items-center justify-center"
          >
            {{ submitted ? '✓' : '→' }}
          </span>
        </button>

      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Mail, Phone, MapPin, Instagram, Twitter } from 'lucide-vue-next'

useHead({ title: 'Contact' })

const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  service: '',
  message: '',
})

const submitted = ref(false)

const handleSubmit = () => {
  // wire up to your email/API here
  submitted.value = true
  setTimeout(() => {
    submitted.value = false
    form.value = { firstName: '', lastName: '', email: '', service: '', message: '' }
  }, 3000)
}

const info = [
  { text: 'Lagos, Nigeria' },
  { text: 'hello@creative.com' },
  { text: 'Open to Projects' },
  { text: 'Fast Response' },
]

const services = [
  'Brand Strategy',
  'Brand Identity Design',
  'Packaging Design',
  'Creative Direction',
]

const contactDetails = [
  {
    label: 'Email',
    value: 'hello@creative.com',
    href: 'mailto:hello@creative.com',
    icon: Mail,
  },
  {
    label: 'Phone',
    value: '+234 800 000 0000',
    href: 'tel:+2348000000000',
    icon: Phone,
  },
  {
    label: 'Location',
    value: 'Lagos, Nigeria',
    href: '#',
    icon: MapPin,
  },
]

const socials = [
  { label: 'Instagram', href: '#', icon: Instagram },
  { label: 'Twitter',   href: '#', icon: Twitter   },
]
</script>