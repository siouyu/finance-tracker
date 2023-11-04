"use client";

import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";

import { authContext } from "@/lib/store/auth-context";
import SignIn from "@/components/SignIn";

export default function Home(){
  const { user } = useContext(authContext);
  const router = useRouter();

  if (!user) {
    return <SignIn />;
  }

  useEffect(() => {
    if (user) {
      router.push("/accounting");
    }
  }, [user]);
}
