import ChatList from "../_components/ChatList";
import { Chat } from "../_types/chat";

export default function Page() {
  const chats: Chat[] = [
    {
      id: "1",
      name: "test 1",
      messages: [
        { id: "1", content: "hello, my dear friend", timestamp: new Date() },
      ],
    },
    { id: "2", name: "Alex", messages: [] },
    { id: "3", name: "John", messages: [] },
  ];

  return (
    <div>
      <p>My Chats</p>
      <ChatList chats={chats} />
    </div>
  );
}
