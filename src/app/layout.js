import { Inter } from "next/font/google";
import "./globals.css";
import 'react-toastify/dist/ReactToastify.css';
import CustomNavbar from "@/components/CustomNavbar";
import Footer from "@/components/Footer";
import { ToastContainer, toast } from 'react-toastify';

import UserContext from "@/context/UserContext";
import UserProvider from "@/context/userProvider";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserProvider>
        <ToastContainer />
        <CustomNavbar />
        {children}
        <Footer />   
        </UserProvider>   
        </body>

    </html>
  );
}
