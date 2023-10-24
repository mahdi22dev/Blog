export default function FooterSectionHeader({ title }) {
  return (
    <div className='flex justify-start items-center gap-3'>
      <p className='text-[clamp(12px,1.5vw,16px)] font-bold capitalize w-2/4 max-w-fit '>
        {title}
      </p>
      <div className='h-[1.9px] w-full md:w-32 lg:w-24 bg-primary'></div>
    </div>
  );
}
