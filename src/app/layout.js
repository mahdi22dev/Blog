import "./globals.css";
import { Josefin_Sans } from "next/font/google";
import Header from "@/components/Header/Header";
import { AppProvider } from "@/context/context";
import NextTopLoader from "nextjs-toploader";
import { ToastContainer } from "react-toastify";

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
    <html lang='en'>
      <body className={`${josefin_Sans.className}`}>
        <AppProvider>
          <ToastContainer />
          <NextTopLoader color='#dca8a9' height={5} />

          <div className='h-[2px] bg-gray-200'></div>
          <Header />
          <div className='h-[2px] bg-gray-200'></div>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
