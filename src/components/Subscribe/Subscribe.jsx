"use client";

export default function Subscribe() {
  return (
    <div className='w-full m-h-36 p-10  text-center'>
      <p className='text-3xl font-bold  mb-4 uppercase'>
        subscribe to <span className='text-primary'> D</span>aily Life
      </p>
      <p>Get the latest posts delivered right to your email.</p>
      <div className='flex mx-auto justify-center items-center mt-5 '>
        <input
          className='px-2 w-64 h-[52px] border border-opacity-30 focus:border-opacity-100 outline-none border-gray-500 bg-gray-50 rounded-md shadow-lg '
          type='email'
          placeholder='Enter Your Email'
        />
        <a
          href='https://app.us21.list-manage.com/subscribe?u=c5540fa3697e777ad6c6177ba&id=aa819ac93a'
          target='_blank'
        >
          <button className='btn_animation !rounded-none text-xs'>
            <span>SUBSCRIBE</span>
          </button>
        </a>
      </div>
    </div>
  );
}
