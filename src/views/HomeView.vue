<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from 'vue';
import RapportTextarea from '@/parts/RapportTextarea.vue';
import RapportButton from '@/parts/RapportButton.vue';
import RunningDays from '@/components/RunningDays.vue';
import RapportMessageBox from '@/parts/RapportMessageBox.vue';
import { useMessagesStore } from '@/stores/messages';
import { today } from '@/utils/constants/date';
import { getDay } from '@/utils/functions/dateFunctions';

const messagesStore = useMessagesStore();
const newMessage: Ref<string> = ref('');

const specifiedDay: Ref<Date> = ref(today);
const changeSpecifiedDay = (date: Date) => {
  specifiedDay.value = date;
}

const inputMessage = (str: string) => {
  newMessage.value = str;
};

const clickSend = () => {
  messagesStore.pushMessage('sent', {
    id: 10,
    user_id: 2,
    message: newMessage.value,
    created_at: new Date()
  });
};
</script>

<template lang="pug">
main
  .home-page
    .home-container
      h1 パートナーにありがとうを伝えよう
      running-days(
        :running-date="messagesStore.runningDate"
        :received-days="messagesStore.receivedDays"
        :sent-days="messagesStore.sentDays"
        :specified-day="specifiedDay"
        @change-specified-day="changeSpecifiedDay"
      )
      .messages-container
        .received-message-container
          rapport-message-box(
            title="パートナーからのありがとう"
            :message="messagesStore.getReceivedMessage(specifiedDay)?.message"
            empty-message="メッセージを待ちましょう。"
          )
        .send-message-container
          template(v-if="messagesStore.getSentMessage(specifiedDay)")
            rapport-message-box(
              title="パートナーへのありがとう"
              :message="messagesStore.getSentMessage(specifiedDay).message"
              empty-message="メッセージを送りましょう。"
            )
            h3.send-message-title
              | 今日もありがとうを伝えられたね。明日からも頑張ろう！
          template(v-else)
            h3.send-message-title
              | 今日もありがとうを言ってもらえて嬉しいね。こちらからもありがとうの気持ちを伝えよう！
            rapport-textarea(
              :val="newMessage"
              :size="{ w: '100%', h: '5vw' }"
              :disabled="getDay(specifiedDay) !== getDay(today)"
              @change="inputMessage"
            )
            .send-button-wrapper
              rapport-button(
                appearance="primary"
                :disabled="getDay(specifiedDay) !== getDay(today)"
                @on-click="clickSend"
              )
                | 送信
</template>

<style scoped>
.home-page {
  padding: 0 1vw;
}

.home-container {
  margin: auto;
  width: 60vw;
}

.home-page h1 {
  text-align: center;
}

.messages-container {
  padding: 2vw;
}

.send-message-container {
  display: flex;
  flex-direction: column;
  gap: 0.5vw;
  margin-top: 1.6vw;
}

.send-message-title {
  text-align: center;
  margin-bottom: 0.5vw;
}

.send-button-wrapper {
  margin: auto;
}
</style>
