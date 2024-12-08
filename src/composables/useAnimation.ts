import { ref } from 'vue'

export const useButtonAnimation = () => {
  const move = ref(20)

  const animateButton = (e: MouseEvent, button: HTMLElement) => {
    const rect = button.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2

    const xMove = Math.max(Math.min(x, move.value), -move.value)
    const yMove = Math.max(Math.min(y, move.value), -move.value)

    button.style.transform = `translate(${xMove}px, ${yMove}px)`
    button.style.transition = 'transform 0.2s ease-out'
  }

  const resetButton = (button: HTMLElement) => {
    button.style.transform = 'translate(0px, 0px)'
  }

  return { animateButton, resetButton }
}

export const useCursorHover = () => {
  const cursorHover = ref<HTMLElement | null>(null)
  const thirdScreen = ref<HTMLElement | null>(null)

  const showCursorHover = (e: MouseEvent) => {
    if (!thirdScreen.value || !cursorHover.value) return

    const rect = thirdScreen.value.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    if (cursorHover.value.style) {
      cursorHover.value.style.transform = `translate(${x}px, ${y}px)`
      cursorHover.value.style.opacity = '1'
    }
  }

  const hideCursorHover = () => {
    if (cursorHover.value?.style) {
      cursorHover.value.style.opacity = '0'
    }
  }

  return { cursorHover, thirdScreen, showCursorHover, hideCursorHover }
}

export const useTetrisAnimation = () => {
  const colors = ['#EA41EE', '#5867C0', '#39B65D', '#FFFFFF', '#2E59E7']

  const tetrisAnimation = (tetris: HTMLElement) => {
    if (!tetris) return

    tetris.style.transition = 'background-color 0.2s ease-in-out'
    tetris.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
  }

  return { tetrisAnimation }
}
