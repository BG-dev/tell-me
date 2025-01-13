import { Message } from "./message";

export type Chat = {
  id: string;
  name: string;
  messages: Message[];
};

export type ChatPreview = Omit<Chat, "messages"> & {
  lastMessage: Message | null;
};
