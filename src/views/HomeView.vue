<script setup lang="ts">
import PlayIcon from '../components/icons/PlayIcon.vue'
import ThirdScreenIcon from '../components/icons/ThirdScreenIcon.vue'
import Header from '../components/HeaderComponent.vue'
import TetrisComponent from '../components/tetris/TetrisComponent.vue'
import AnswersComponent from '@/components/answers/AnswersComponent.vue'
import ArrowDown from '../components/icons/ArrowDown.vue'
import { ref, onMounted } from 'vue'
import { useButtonAnimation, useCursorHover, useTetrisAnimation } from '@/composables/useAnimation'

const tryForFreeButton = ref<HTMLElement | null>(null)
const tetris = ref<HTMLElement | null>(null)
const thirdScreen = ref<HTMLElement | null>(null)
const cursorHover = ref<HTMLElement | null>(null)

const { animateButton, resetButton } = useButtonAnimation()
const { showCursorHover, hideCursorHover } = useCursorHover()
const { tetrisAnimation } = useTetrisAnimation()

onMounted(() => {
  if (tryForFreeButton.value) {
    tryForFreeButton.value.addEventListener('mousemove', (e) =>
      animateButton(e, tryForFreeButton.value!),
    )
    tryForFreeButton.value.addEventListener('mouseleave', () =>
      resetButton(tryForFreeButton.value!),
    )
  }

  thirdScreen.value?.addEventListener('mouseenter', showCursorHover)
  thirdScreen.value?.addEventListener('mousemove', showCursorHover)
  thirdScreen.value?.addEventListener('mouseleave', hideCursorHover)

  tetris.value?.addEventListener('mouseenter', () => tetrisAnimation(tetris.value!))
})
</script>

<template>
  <Header />
  <section class="main-screen w-full bg-black relative">
    <div class="container pt-32 mx-auto flex flex-col gap-3 lg:gap-10 items-center lg:items-start">
      <div
        class="first-screen-text text-6xl lg:text-[140px] font-semibold lg:leading-[149.52px] text-white"
      >
        AI YouTube
      </div>
      <div class="flex gap-4 items-center">
        <button class="gradient-button hidden lg:inline-flex">
          <span>WHAT IS THIS ?</span>
          <span class="play-icon"> <PlayIcon /></span>
        </button>
        <div
          class="first-screen-text text-6xl lg:text-[140px] font-semibold lg:leading-[149.52px] text-white"
        >
          Metadata
        </div>
      </div>
      <div class="flex flex-col lg:flex-row gap-4 lg:items-center">
        <div
          class="first-screen-text text-6xl text-center lg:text-left lg:text-[140px] font-semibold lg:leading-[149.52px] text-white"
        >
          Translation
        </div>
        <div
          class="mt-10 text-white mx-auto lg:mx-0 w-10/12 text-center lg:text-left lg:w-[236px] lg:text-[17.15px] lg:leading-[28.46px] font-regular"
        >
          Take Your YouTube Content Global by Localizing Your YouTube Metadata.
        </div>
        <div class="w-10/12 px-6 mx-auto md:hidden">
          <button
            class="bg-[#0B42FF] text-white text-lg font-semibold letter-spacing-[4%] mt-4 w-full py-4 rounded-[10px] uppercase"
          >
            Read More
          </button>
        </div>
        <div class="w-10/12 px-6 mx-auto md:hidden">
          <button
            class="flex flex-row items-center justify-center bg-transparent border-2 text-white text-base font-semibold letter-spacing-[4%] mt-4 w-full py-1 rounded-[10px] uppercase"
          >
            <PlayIcon />
            What is this?
          </button>
        </div>
      </div>
    </div>
    <div
      ref="tryForFreeButton"
      class="absolute hidden lg:inline-flex bg-[#2E59E7] text-white w-[144px] h-[144px] md:flex items-center justify-center rounded-full right-[5%] bottom-[-10%] cursor-pointer hover:bg-[#2348c5] transition-all uppercase font-bold"
    >
      try for free
    </div>
  </section>
  <section class="mt-32 second-screen w-full">
    <div class="tetris w-full bg-white" ref="tetris">
      <TetrisComponent />
    </div>
    <div class="bg-white flex flex-col justify-center items-center py-10">
      <ThirdScreenIcon />
      <div
        class="text-5xl md:text-7xl font-semibold leading-12 md:leading-[79px] text-black text-center mx-auto w-9/12 md:w-7/12 my-10"
      >
        Are your videos understandable without voice narration?
      </div>
      <div class="text-4xl font-semibold text-black text-center my-4 mx-auto w-7/12">
        Choose answear
      </div>
      <ArrowDown />
      <AnswersComponent />
    </div>
  </section>
  <section ref="thirdScreen" class="third-screen w-full pb-[25%] relative">
    <img
      ref="cursorHover"
      src="../assets/images/cursor-hover.svg"
      alt="cursor"
      class="cursor-hover"
    />
    <div class="container mx-auto flex flex-col gap-10">
      <div
        class="text-5xl md:text-7xl font-semibold leading-[64px] md:leading-[117px] text-white text-center mx-auto w-7/12 mt-32"
      >
        Still Not Sure What Results Can You Expect?
      </div>
      <div
        class="text-base md:text-2xl font-regular text-white text-center mx-auto w-10/12 md:w-6/12"
      >
        Find out how many views AI Metadata Translation can bring to your channel, and how much time
        it saves!
      </div>
      <div class="w-10/12 px-6 mx-auto md:hidden">
        <button
          class="bg-[#0B42FF] text-white text-lg font-semibold letter-spacing-[4%] mt-4 w-full py-4 rounded-[10px] uppercase"
        >
          Read More
        </button>
      </div>
    </div>
  </section>
</template>
