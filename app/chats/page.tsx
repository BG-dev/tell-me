import ChatList from "../_components/ChatList";
import { Chat } from "../_types/chat";

export default function Page() {
  const chats: Chat[] = [
    { id: "1", name: "test 1" },
    { id: "2", name: "Alex" },
    { id: "3", name: "John" },
  ];

  return (
    <div>
      <p>My Chats</p>
      <ChatList chats={chats} />
    </div>
  );
}
