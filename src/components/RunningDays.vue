<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<script setup lang="ts">
import { computed } from 'vue';
import { image } from '@/assets/image/index'
import RapportIcon from '@/parts/RapportIcon.vue';
import {
  getAWeekIncludingTheSpecifiedDate,
  getDay,
  toDate,
  formatYYYYMM,
  formatDD,
  getDateAgoFromDesignated
} from '@/utils/functions/dateFunctions'

const props = defineProps<{
  runningDate: number,
  receivedDays: string[],
  sentDays: string[],
  specifiedDay: Date,
}>();

const emits = defineEmits(['changeSpecifiedDay']);
const clickRunningDay = (newVal: Date) => {
  emits('changeSpecifiedDay', newVal);
}
const year = computed(() => props.specifiedDay.getFullYear());
const month = computed(() => props.specifiedDay.getMonth());
const day = computed(() => props.specifiedDay.getDate());

const sourceMap = {
  'nosend': image.nosend,
  'sendonlybyyou': image.sentOnlyByYou,
  'sendonlybyme': image.sentOnlyByMe,
  'fullsend': image.fullsend,
};

const specifiedWeek = computed(() => getAWeekIncludingTheSpecifiedDate(year.value, month.value, day.value));

const sendIcon = (day: Date) => {
  if (props.receivedDays.includes(getDay(day)) && props.sentDays.includes(getDay(day))) {
    return 'fullsend'
  } else if (props.receivedDays.includes(getDay(day))) {
    return 'sendonlybyyou'
  } else if (props.sentDays.includes(getDay(day))) {
    return 'sendonlybyme'
  } else {
    return 'nosend'
  }
};

const toPreviousWeek = () => clickRunningDay(getDateAgoFromDesignated(specifiedWeek.value[0], 1));
const toNextWeek = () => clickRunningDay(getDateAgoFromDesignated(specifiedWeek.value[specifiedWeek.value.length - 1], -1));
</script>

<template lang="pug">
.running-days-container
  .running-days-wrapper
    .running-days
      | {{ `継続日数：${runningDate}日` }}
  .running-dates-wrapper
    .running-year
      rapport-icon(
        icon-code="arrow-back"
        clickable
        @onClick="toPreviousWeek()"
      )
      span
        | {{ formatYYYYMM(specifiedDay) }}
      rapport-icon(
        icon-code="arrow-forward"
        clickable
        @onClick="toNextWeek()"
      )
    .running-dates
      .running-date(
        v-for="date in specifiedWeek"
        @click="clickRunningDay(date)"
      )
        img.send-icon(
          :alt="`${sendIcon(date)}-icon`"
          :src="sourceMap[sendIcon(date)]"
        )
        span.send-day
          | {{ formatDD(date) }}

</template>

<style scoped>
.running-days-container {
  display: flex;
  flex-direction: column;
  gap: 0.5vw;
  margin-top: 1vw;
}

.running-year {
  font-size: 1.1vw;
  display: flex;
  justify-content: space-around;
  padding: 0 8vw;
}

.running-days-wrapper {
  text-align: center;
}

.running-days {
  background-color: #fbd398ff;
  border-radius: 2vw;
  margin: 0 auto;
  padding: 0.25vw 1vw;
  width: fit-content;
}

.running-dates-wrapper {
  padding: 0 10vw;
}

.running-dates {
  display: flex;
  justify-content: space-around;
  margin-top: 0.5vw;
}

.running-date {
  align-items: center;
  cursor: pointer;
  display: flex;
  flex-direction: column;
}

.send-icon {
  width: 2.8vw;
}
</style>
