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
</style>