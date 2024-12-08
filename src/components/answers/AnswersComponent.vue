<template>
  <div class="answers flex flex-col md:flex-row gap-20 mt-20 mb-36">
    <div
      v-for="(answer, index) in answerOptions"
      :key="index"
      :ref="(el) => (answers[index] = el as HTMLElement)"
      @mouseenter="handleHover(index)"
      @mouseleave="handleLeave"
      :class="[
        'answer',
        answer.class,
        'flex flex-col items-center justify-center text-4xl text-center font-medium text-white w-[320px] h-[320px] relative capitalize',
        { 'hidden opacity-0': isMobile && hoveredAnswer !== null && hoveredAnswer !== index },
      ]"
    >
      <span class="z-10">{{ answer.label }}</span>
      <div class="answers-hover">
        Awesome! Localizing your YouTube metadata is a perfect choice for you. Let's translate your
        video titles, descriptions, and tags, so people from all around the globe can discover your
        content.
        <button
          class="bg-[#0B42FF] text-white text-lg font-semibold letter-spacing-[4%] mt-4 w-full py-4 rounded-[10px] uppercase"
        >
          Start for Free
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  setup() {
    const answers = ref<HTMLElement[]>([])
    const hoveredAnswer = ref<number | null>(null)
    const isMobile = ref<boolean>(false)

    const answerOptions = [
      { label: 'partially', class: 'answers-partially' },
      { label: 'yes', class: 'answers-yes' },
      { label: 'no', class: 'answers-no' },
    ]

    const handleHover = (index: number) => {
      if (isMobile.value) {
        hoveredAnswer.value = index
      }
    }

    const handleLeave = () => {
      if (isMobile.value) {
        hoveredAnswer.value = null
      }
    }

    const checkIfMobile = () => {
      isMobile.value = window.matchMedia('(max-width: 768px)').matches
    }

    onMounted(() => {
      checkIfMobile()
      window.addEventListener('resize', checkIfMobile)
    })

    onUnmounted(() => {
      window.removeEventListener('resize', checkIfMobile)
    })

    return {
      answers,
      hoveredAnswer,
      isMobile,
      answerOptions,
      handleHover,
      handleLeave,
    }
  },
}
</script>

<style scoped>
.answer.hidden {
  display: none;
  transition: opacity 0.3s ease;
}

.answer.opacity-0 {
  opacity: 0;
  pointer-events: none;
}

.answers-exit {
  animation: fadeOut 0.5s ease forwards;
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    transform: scale(0.9);
  }
}
</style>
