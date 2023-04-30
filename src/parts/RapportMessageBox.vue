<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps<{
  title: string,
  message?: string,
  emptyMessage: string,
}>()
const displayMessage = computed(() =>
  props.message ? props.message : props.emptyMessage
);
</script>

<template lang="pug">
.rapport-message-box(:class="!message ? 'message-empty' : ''")
  .rapport-message-container
    .rapport-message-title
      | {{ title }}
    .rapport-message
      | {{ displayMessage }}
</template>

<style scoped>
.rapport-message-box {
  background: #ffeec8;
  border-radius: 1.8vw;
  padding: 1vw;
}

.rapport-message-container {
  border: dashed 2px #f9a743;
  border-radius: 1vw;
  min-height: 8vw;
  padding: 1vw;
}

.rapport-message-box.message-empty {
  background: #f7f7f7;
}

.message-empty .rapport-message-container {
  border-color: #999;
}

.rapport-message-title {
  margin-bottom: 0.25vw;
}

.rapport-message {
  font-size: 1.2vw;
  color: #666;
}

/* .rapport-button {
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
} */
</style>