<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<script setup lang="ts">
import { ref } from 'vue'
import RapportIcon from '@/parts/RapportIcon.vue'

const props = defineProps<{
  type: 'text' | 'number' | 'password'
  val: string | number
}>()
const emits = defineEmits(['change'])

const inputType = ref(props.type);
const inputValue = ref(props.val);
const changeValue = (newVal: string | number) => {
  emits('change', newVal);
}
const toggleInputTypePassword = () => {
  if (inputType.value === 'password') {
    inputType.value = 'text'
  } else {
    inputType.value = 'password'
  }
}
</script>

<template lang="pug">
.rapport-input-wrapper
  input.rapport-input(
    :type="inputType"
    v-model="inputValue"
    @change="changeValue(inputValue)"
  )
  .visible-icon-wrapper(v-if="type === 'password'")
    rapport-icon(
      :iconCode="inputType === 'password' ? 'visiblity' : 'visiblity-off'"
      clickable
      @onClick="toggleInputTypePassword"
    )
</template>

<style scoped>
.rapport-input {
  border: 1px solid #ccc;
  border-radius: 0.25vw;
  height: 2vw;
  width: 20vw;
}

.rapport-input:focus,
.rapport-input:focus-visible {
  outline: none;
  border-color: #f9a743ff;
  border-width: 2px;
  transition: border-color ease-in-out 0.1s;
}

.visible-icon-wrapper {
  align-items: center;
  display: flex;
  justify-content: center;
  position: absolute;
  right: 0.8vw;
  top: 50%;
  transform: translateY(-50%);
}
</style>