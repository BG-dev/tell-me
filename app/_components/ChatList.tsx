import { Chat } from "../_types/chat";
import ChatRow from "./ChatRow";

interface ChatListProps {
  chats: Chat[];
}

export default function ChatList({ chats }: ChatListProps) {
  return (
    <ul>
      {chats.length &&
        chats.map((chat, index) => (
          <ChatRow chat={chat} isLast={index === chats.length - 1} />
        ))}
    </ul>
  );
}
