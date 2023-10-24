"use client";
import { usePathname } from "next/navigation";
import React, { useState, useContext, useEffect } from "react";
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const pathname = usePathname();
  const [toggle, setToggle] = useState(false);
  const [highlight, sethighlight] = useState(pathname);
  const [footerTags, setFootertags] = useState([]);
  const [footerLatest, setFooterLatest] = useState([]);

  useEffect(() => {
    if (pathname.includes("post")) {
      sethighlight("/blog");
      return;
    }
    if (pathname.includes("tags")) {
      sethighlight("/tags");
      return;
    }
    if (pathname.includes("author")) {
      sethighlight("/blog");
      return;
    }
    sethighlight(pathname);
    window.scroll(0, 0);
  }, [pathname]);

  useEffect(() => {}, []);

  return (
    <AppContext.Provider
      value={{
        toggle,
        setToggle,
        highlight,
        sethighlight,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
