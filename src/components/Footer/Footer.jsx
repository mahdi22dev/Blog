"use client";
import Link from "next/link";
import Social from "../Header/Social";
import FooterLatest from "./FooterLatest";
import FooterSectionHeader from "./FooterSectionHeader";
import FooterTags from "./FooterTags";
import { footerlinks } from "@/config/footer-links";

export default function Footer() {
  return (
    <footer className=''>
      <div className='grid grid-cols-1 md:grid-cols-2 min-[1440px]:grid-cols-4 bg-gray-300 p-10 gap-3 mt-auto border-t-8'>
        <div className=''>
          <p className='text-[clamp(20px,3vw,30px)] font-bold  mb-4 uppercase'>
            <span className='text-primary'> D</span>aily Life
          </p>
          <div className='flex gap-2  justify-start items-center'>
            {footerlinks.map((link) => {
              return (
                <Link
                  key={link.id}
                  href={link.link}
                  className={`font-medium hover:text-primary transition-all underlineanimation 
                 text-primary`}
                >
                  {link.title}
                </Link>
              );
            })}
          </div>
        </div>
        <div>
          <FooterSectionHeader title={"Latest Articles"} />
          <FooterLatest />
        </div>
        <div>
          <FooterSectionHeader title={"Our Tags"} />
          <FooterTags />
        </div>
        <div>
          <FooterSectionHeader title={"Social"} />
          <Social
            className={"p-3 pl-0 flex gap-2 justify-start items-center"}
          />
        </div>
      </div>
    </footer>
  );
}
