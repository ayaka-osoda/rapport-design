<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<script setup lang="ts">
import { icon } from '@/assets/icon/index';
const props = defineProps<{
  iconCode: 'visiblity' | 'visiblity-off',
  clickable?: boolean,
}>()
const emits = defineEmits(['onClick'])

const sourceMap = {
  'arrow-back': icon.arrowBack,
  'arrow-forward': icon.arrowForward,
  'visiblity': icon.visibility,
  'visiblity-off': icon.visibilityOff,
};

const clickIcon = () => {
  emits('onClick');
}
</script>

<template lang="pug">
div(:class="`icon ${clickable ? 'clickable' : ''}`")
  img(
    :alt="`${iconCode}-icon`"
    :src="sourceMap[iconCode]"
    @click="clickIcon"
  )
</template>

<style scoped>
.icon {
  border-radius: 50%;
  height: 1.8vw;
  opacity: 0.5;
  padding: 0.2vw;
  width: 1.8vw;
}

.icon img {
  height: 100%;
  width: 100%;
}

.icon:hover {
  background-color: #ffeec8ff;
}

.clickable {
  cursor: pointer;
}
</style>