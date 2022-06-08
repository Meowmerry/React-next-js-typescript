import React from "react";
import { useRouter } from "next/router";

export default function Welcome() {
  const router = useRouter();

  return (
    <>
      <div>welcome</div>
      <button onClick={() => router.push("/welcome-login")}>
        Go to Loging
      </button>
    </>
  );
}
