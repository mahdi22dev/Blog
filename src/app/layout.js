import "./globals.css";
import { Roboto } from "next/font/google";
import Header from "@/components/Header/Header";
import { AppProvider } from "@/context/context";
import NextTopLoader from "nextjs-toploader";

const roboto = Roboto({
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
      <body className={`${roboto.className}`}>
        <NextTopLoader color='#dca8a9' />
        <AppProvider>
          <div className='h-[2px] bg-gray-200'></div>
          <Header />
          <div className='h-[2px] bg-gray-200'></div>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
