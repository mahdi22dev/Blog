"use client";

import { useGlobalContext } from "@/context/context";
import { ButtonVariants } from "@/variants/variants";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { Tooltip } from "react-tooltip";

export default function SearchModal() {
  const { setSearchModal, searchModal } = useGlobalContext();
  const [value, setValue] = useState("Cute Cats");

  return (
    <AnimatePresence>
      <Tooltip id='close' className='z-[101]' />
      <motion.main
        layout
        variants={ButtonVariants}
        initial={"initial"}
        animate={"animate"}
        exit={"exit"}
        key={searchModal}
        className={`${
          searchModal ? "fixed" : "hidden"
        }  top-0 bottom-0 right-0 overflow-hidden overflow-x-hidden w-full min-h-screen bg-primary z-[100]`}
      >
        <IoClose
          className='fixed top-5 right-5  hover:rotate-180 hover:scale-125 transition-all text-4xl cursor-pointer   text-white hover:opacity-50 '
          onClick={() => {
            setSearchModal(false);
          }}
          data-tooltip-id='close'
          data-tooltip-content='Close'
        />
        <div className='w-full h-full flex flex-col justify-center items-center '>
          <p>Search for an article.</p>
          <div className='flex mx-auto justify-center items-center mt-5 '>
            <input
              className='px-2 w-64 h-[52px] border border-opacity-30 focus:border-opacity-100 outline-none border-gray-500 bg-gray-50 rounded-md shadow-lg '
              type='text'
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
              }}
              onClick={() => {
                setValue("");
              }}
              placeholder='Search'
              required
            />
            <Link
              href={`/search?s=${value}`}
              onClick={() => {
                setSearchModal(false);
              }}
            >
              <button
                type='sumbit'
                className='btn_animation !rounded-none text-xs'
              >
                <span>Search</span>
              </button>
            </Link>
          </div>
        </div>
      </motion.main>
    </AnimatePresence>
  );
}
