import { getDateAgo } from '@/utils/functions/dateFunctions'

export type Message = {
  id: number,
  user_id: number,
  message: string,
  created_at: Date,
}

export const receivedMessages: Message[] = [
  {
    id: 2,
    user_id: 1,
    message: '洗濯物を干してくれてありがとう',
    created_at: getDateAgo(4)
  },
  {
    id: 4,
    user_id: 1,
    message: 'ありがとうを送ってくれてありがとう',
    created_at: getDateAgo(3)
  },
  {
    id: 6,
    user_id: 1,
    message: '子供のお迎え行ってくれてありがとう',
    created_at: getDateAgo(2)
  },
  {
    id: 8,
    user_id: 1,
    message: '今日の朝食の準備ありがとう',
    created_at: getDateAgo(1)
  },
  {
    id: 10,
    user_id: 1,
    message: '帰りにアイスを買ってきてくれてありがとう！',
    created_at: getDateAgo(0)
  }
];
export const sentMessages = [
  {
    id: 1,
    user_id: 2,
    message: 'アプリに登録してくれてありがとう',
    created_at: getDateAgo(5)
  },
  {
    id: 2,
    user_id: 2,
    message: '掃除機をかけてくれてありがとう',
    created_at: getDateAgo(4)
  },
  {
    id: 3,
    user_id: 2,
    message: '旅行の計画を立ててくれてありがとう',
    created_at: getDateAgo(3)
  },
  {
    id: 5,
    user_id: 2,
    message: '運転ありがとう',
    created_at: getDateAgo(2)
  },
  {
    id: 7,
    user_id: 2,
    message: 'お皿洗いしてくれてありがとう',
    created_at: getDateAgo(1)
  },
];
