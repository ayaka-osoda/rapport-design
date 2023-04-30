import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { receivedMessages, sentMessages } from '@/utils/constants/messages';
import type { Message } from '@/utils/constants/messages';
import { getDay, getDateAgo } from '@/utils/functions/dateFunctions';
import { today } from '@/utils/constants/date';


export const useMessagesStore = defineStore('messages', () => {
  const receiveds = ref(receivedMessages);
  const sents = ref(sentMessages);
  const pushMessage = (type: string, message: Message) => {
    const messages = type === 'sent' ? sents : receiveds;
    messages.value.push(message)
  }
  const getReceivedMessage = computed(() => (date: Date) =>
    receiveds.value.filter(m => getDay(m.created_at) === getDay(date))[0]
  );
  const getSentMessage = computed(() => (date: Date) =>
    sents.value.filter(m => getDay(m.created_at) === getDay(date))[0]
  );
  const receivedDays = computed(() =>
    receiveds.value.map(message => getDay(message.created_at)).reverse()
  );
  const sentDays = computed(() =>
    sents.value.map(message => getDay(message.created_at)).reverse()
  );

  const runningDate = computed(() => {
    let count = 0;
    const receivedDs = receivedDays.value.slice();
    const sentDs = sentDays.value.slice();

    const todayStr = getDay(today);

    // 本日分のカウント
    if (receivedDs[0] === todayStr && sentDs[0] === todayStr) {
      count++;
      receivedDs.shift();
      sentDs.shift();
    } else if (receivedDs[0] === todayStr) {
      receivedDs.shift();
    } else if (sentDs[0] === todayStr) {
      sentDs.shift();
    }

    // 過去分の連続をカウント
    receivedDs.forEach((day, index) => {
      const countingtAt = getDay(getDateAgo(index + 1));
      if (day === countingtAt && sentDs[index] === countingtAt) {
        count++;
      } else {
        return;
      }
    });
    return count;
  })
  return {
    receiveds,
    sents,
    pushMessage,
    getReceivedMessage,
    getSentMessage,
    receivedDays,
    sentDays,
    runningDate
  }
})
