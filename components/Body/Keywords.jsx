import React from "react";
import { useRouter } from "next/router";

const Keywords = ({ keywords }) => {
  const router = useRouter();
  return (
    <>
      <h3 className="font-extrabold text-2xl text-white my-4">Keywords</h3>
      {keywords.map((keyword) => (
        <button
          key={keyword.id}
          className="bg-slate-300 mr-2 my-2 px-2 rounded-sm"
          onClick={() => {
            router.push(`/search/?movie=${keyword.name}`);
          }}
        >
          {keyword.name}
        </button>
      ))}
    </>
  );
};

export default Keywords;
