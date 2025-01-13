import { Chat, ChatPreview } from "../_types/chat";
import ChatRow from "./ChatRow";

interface ChatListProps {
  chats: Chat[];
}

export default function ChatList({ chats }: ChatListProps) {
  const chatPreviews: ChatPreview[] = chats.map((chat) => {
    return {
      id: chat.id,
      name: chat.name,
      lastMessage: chat.messages[chat.messages.length - 1],
    };
  });

  return (
    <ul>
      {chats.length &&
        chatPreviews.map((chatPreview, index) => (
          <ChatRow
            chatPreview={chatPreview}
            isLast={index === chats.length - 1}
          />
        ))}
    </ul>
  );
}
