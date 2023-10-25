"use client";
import { usePathname } from "next/navigation";
import React, { useState, useContext, useEffect } from "react";
import { client } from "../../sanity/lib/client";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const pathname = usePathname();
  const [toggle, setToggle] = useState(false);
  const [highlight, sethighlight] = useState(pathname);
  const [footerTags, setFootertags] = useState([]);
  const [footerLatest, setFooterLatest] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchModal, setSearchModal] = useState(true);
  const fetchTags = async () => {
    setLoading(true);
    const TagsQuery = "*[_type == 'category'] {title,color}";
    const tagslist = await client.fetch(TagsQuery);
    const LatestQuery =
      '*[_type == "post"]{ _id, title,mainImage,_createdAt, "slug":slug.current }[0..3]';
    const Latestlist = await client.fetch(LatestQuery);
    setFootertags(tagslist);
    setFooterLatest(Latestlist);
  };

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

  useEffect(() => {
    try {
      fetchTags();
    } catch (error) {
      throw new Error(error);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <AppContext.Provider
      value={{
        toggle,
        setToggle,
        highlight,
        sethighlight,
        footerTags,
        footerLatest,
        loading,
        searchModal,
        setSearchModal,
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
