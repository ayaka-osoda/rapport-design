<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  val: string,
  size?: { w?: string, h?: string },
  disabled?: boolean,
}>()
const emits = defineEmits(['change'])

const inputValue = ref(props.val)
const style = { width: props.size?.w, height: props.size?.h }
const changeValue = (newVal: string) => {
  emits('change', newVal);
}
</script>

<template lang="pug">
textarea.rapport-textarea(
  v-model="inputValue"
  :style="style"
  :disabled="disabled"
  @change="changeValue(inputValue)"
)
</template>

<style scoped>
.rapport-textarea {
  border: 1px solid #efefef;
  border-radius: 0.4vw;
  color: #333;
  font-size: 1vw;
  padding: 0.5vw;
  resize: none;
}

.rapport-textarea:focus,
.rapport-textarea:focus-visible {
  outline: none;
  border-color: #f9a743ff;
  border-width: 2px;
  transition: border-color ease-in-out 0.1s;
}

.rapport-textarea:disabled {
  background-color: #efefef;
  border-color: #efefef;
  cursor: not-allowed;
}
</style>