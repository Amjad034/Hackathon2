
"use client";

import { useRouter } from "next/navigation";

interface NextPageButtonProps {
  nextPage: string;
  label: string;
}

export default function NextPageButton({ nextPage, label }: NextPageButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(nextPage);
  };

  return (
    <button
      onClick={handleClick}
      style={{
        background: "#0070f3",
        color: "#fff",
        padding: "10px 15px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",

        justifyItems:"space-between",
      }}
    >
      {label}
    </button>
  );
}
