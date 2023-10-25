"use client";

import { useGlobalContext } from "@/context/context";
import SearchModal from "./SearchModal";

export default function SearchContainer() {
  const { searchModal } = useGlobalContext();
  if (searchModal) {
    return <SearchModal />;
  }
  return;
}
