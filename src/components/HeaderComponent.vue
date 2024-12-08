<script setup lang="ts">
import PoweredByIcon from './icons/PoweredByIcon.vue'
import AIMetaDataIcon from './icons/AIMetaDataIcon.vue'
import { onMounted, ref } from 'vue'
import { type ComponentPublicInstance } from 'vue'

interface MenuItem {
  label: string
  to: string
}

const signUpButton = ref<ComponentPublicInstance | null>(null)

const menuItems: MenuItem[] = [
  { label: 'About', to: '/about' },
  { label: 'How it Works', to: '#' },
  { label: 'Cases', to: '#' },
  { label: 'Pricing', to: '#' },
  { label: 'FAQ', to: '#' },
]

onMounted(() => {
  signUpButton.value?.$el.addEventListener('mouseleave', () => {
    signUpButton.value?.$el.classList.add('sign-up-button-leave')
    signUpButton.value?.$el.classList.remove('sign-up-button-enter')
  })

  signUpButton.value?.$el.addEventListener('mouseenter', () => {
    signUpButton.value?.$el.classList.remove('sign-up-button-leave')
    signUpButton.value?.$el.classList.add('sign-up-button-enter')
  })
})
</script>

<template>
  <header class="header flex justify-between items-center w-full py-6">
    <div class="container mx-auto flex justify-between items-center">
      <a href="/" class="logo flex gap-2 items-center decoration-none">
        <AIMetaDataIcon color="#CCCCCC" />
        <div class="line"></div>
        <PoweredByIcon color="#CCCCCC" />
      </a>
      <nav class="text-white items-center flex gap-6 text-[12px] uppercase font-regular">
        <RouterLink v-for="item in menuItems" :key="item.label" :to="item.to">{{
          item.label
        }}</RouterLink>
      </nav>
      <div class="buttons flex items-center gap-4 text-white text-base uppercase font-bold">
        <RouterLink to="/login">Login</RouterLink>
        <RouterLink ref="signUpButton" class="sign-up-button px-6 py-2" to="/signup">
          <span>Sign Up</span>
        </RouterLink>
      </div>
    </div>
  </header>
</template>
