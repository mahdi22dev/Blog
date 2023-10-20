import { BsFacebook, BsTwitter, BsWhatsapp, BsLinkedin } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

export const social_share = [
  {
    id: 1,
    title: "facebook",
    bgcolor: "hover:bg-red-500",
    icon: <BsFacebook className='text-white text-2xl bg-blue-500' />,
  },
  {
    id: 2,
    title: "twitter",
    bgcolor: "hover:bg-blue-500",
    icon: <BsTwitter className='text-white text-2xl' />,
  },
  {
    id: 3,
    title: "whatsApp",
    bgcolor: "hover:bg-blue-500",
    icon: <BsWhatsapp className='text-white text-2xl' />,
  },
  {
    id: 4,
    title: "linkedin",
    bgcolor: "hover:bg-blue-500",
    icon: <BsLinkedin className='text-white text-2xl' />,
  },
  {
    id: 5,
    title: "email",
    bgcolor: "hover:bg-blue-500",
    icon: <AiOutlineMail className='text-white text-2xl' />,
  },
];
