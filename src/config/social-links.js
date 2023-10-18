import { BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";
export const social_links = [
  {
    id: 1,
    title: "facebook",
    bgcolor: "hover:bg-red-500",
    icon: <BsFacebook className='text-white text-2xl' />,
    link: "https://www.facebook.com",
  },
  {
    id: 2,
    title: "twitter",
    bgcolor: "hover:bg-blue-500",
    icon: <BsTwitter className='text-white text-2xl' />,
    link: "https://twitter.com",
  },
  {
    id: 3,
    title: "youtube",
    bgcolor: "hover:bg-rose-500",
    icon: <BsYoutube className='text-white text-2xl' />,
    link: "https://www.youtube.com",
  },
];
