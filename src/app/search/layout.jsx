
import SearchHeader from "../components/SearchHeader";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Google clone",
  description: "using nextjs and tailwind css",
};

export default function SearchLayout({ children }) {
  return (
   <div className="">

       <SearchHeader />
       {children}
   </div>
       
     
  );
}
