import "./globals.css";
import { Josefin_Sans } from "next/font/google";
import Header from "@/components/Header/Header";
import { AppProvider } from "@/context/context";
import NextTopLoader from "nextjs-toploader";
import { ToastContainer } from "react-toastify";
import BackToTopButton from "@/components/Post/BackToTopButton";
import Footer from "@/components/Footer/Footer";
import SearchModal from "@/components/Search/SearchModal";
import SearchContainer from "@/components/Search/SearchContainer";

const josefin_Sans = Josefin_Sans({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Daily Life",
  description: "Blog for those how need to hack life",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='!scroll-smooth'>
      <body className={`${josefin_Sans.className}`}>
        <AppProvider>
          <SearchContainer />
          <div id='top' className='hidden'></div>
          <BackToTopButton />
          <ToastContainer />
          <NextTopLoader color='#dca8a9' height={5} zIndex={100000} />
          <div className='h-[2px] bg-gray-200'></div>
          <Header />
          <div className='h-[2px] bg-gray-200'></div>
          {children}
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
