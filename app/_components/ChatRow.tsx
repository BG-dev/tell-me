import clsx from "clsx";
import { Chat } from "../_types/chat";
import Link from "next/link";

interface ChatRowProps {
  chat: Chat;
  isLast: boolean;
}

export default function ChatRow({ chat, isLast }: ChatRowProps) {
  return (
    <Link
      key={chat.id}
      className={clsx("flex h-12 p-1 border border-gray-500", {
        "border-b-0": !isLast,
      })}
      href={`/chats/${chat.id}`}
    >
      <span>{chat.name}</span>
    </Link>
  );
}
