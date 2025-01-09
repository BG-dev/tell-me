"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col justify-center items-center gap w-full h-full">
      <h2>Something went wrong!</h2>
      <button
        className="p-2 text-gray-100 bg-blue-700 rounded-lg"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}
