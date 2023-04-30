<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<script setup lang="ts">
defineProps<{
  appearance: 'primary' | 'secondary' | 'tertiary' | 'quaternary',
  disabled?: boolean,
}>()
const emits = defineEmits(['onClick'])

const onClickButton = () => {
  emits('onClick');
}
</script>

<template lang="pug">
button.rapport-button(
  :class="appearance"
  :disabled="disabled"
  @click="onClickButton"
)
  slot
</template>

<style scoped>
.rapport-button {
  border: 1px solid #ccc;
  border-radius: 0.25vw;
  cursor: pointer;
  font-size: 1vw;
  min-width: 4vw;
  padding: 0.4vw 1vw;
  width: fit-content;
}

.rapport-button:hover {
  opacity: 0.8;
  transition: opacity ease-in-out 0.2s;
}

.rapport-button:disabled:hover {
  cursor: not-allowed;
  opacity: 1;
}

.rapport-button.primary {
  background-color: #f9a743ff;
  border-color: #f9a743ff;
}

.rapport-button.secondary {
  background-color: #fbd398ff;
  border-color: #fbd398ff;
}

.rapport-button.tertiary {
  background-color: #ffeec8ff;
  border-color: #ffeec8ff;
}

.rapport-button.quaternary {
  background-color: #fff;
  border-color: #999;
}
</style>