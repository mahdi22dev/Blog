"use client";
import FooterSectionHeader from "./FooterSectionHeader";

export default function Footer() {
  return (
    <footer className=''>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-gray-300 p-10 gap-3 mt-auto border-t-8'>
        <div className=''>
          <p className='text-[clamp(20px,3vw,30px)] font-bold  mb-4 uppercase'>
            <span className='text-primary'> D</span>aily Life
          </p>
        </div>
        <div>
          <FooterSectionHeader title={"Latest Articles"} />
        </div>
        <div>
          <FooterSectionHeader title={"Our Tags"} />
        </div>
        <div>
          <FooterSectionHeader title={"Social"} />
        </div>
      </div>
      <div>privacy</div>
    </footer>
  );
}
