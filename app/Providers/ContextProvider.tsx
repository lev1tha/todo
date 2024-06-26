"use client";
import React, { useState, useEffect } from "react";
import { GlobalProvider } from "../context/GlobalContextProvider";

interface Props {
  children: React.ReactNode;
}
function ContextProvider({ children }: Props) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsReady(true);
    }, 200);
  }, []);

  if (!isReady) {
    return null;
  }


  return <GlobalProvider>{children}</GlobalProvider>;
}

export default ContextProvider;
