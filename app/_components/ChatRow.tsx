import clsx from "clsx";
import { Chat, ChatPreview } from "../_types/chat";
import Link from "next/link";

interface ChatRowProps {
  chatPreview: ChatPreview;
  isLast: boolean;
}

export default function ChatRow({ chatPreview, isLast }: ChatRowProps) {
  return (
    <Link
      key={chatPreview.id}
      className={clsx(
        "flex flex-col justify-between h-18 p-2 border border-gray-500",
        {
          "border-b-0": !isLast,
        }
      )}
      href={`/chats/${chatPreview.id}`}
    >
      <span>{chatPreview.name}</span>
      <div className="flex justify-between">
        <p>{chatPreview.lastMessage?.content}</p>
        <p>{chatPreview.lastMessage?.timestamp.getUTCDate()}</p>
      </div>
    </Link>
  );
}
