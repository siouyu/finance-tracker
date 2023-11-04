"use client";

import { Inter } from 'next/font/google'
import './globals.css'

import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import Head from "./head";
import Nav from "@/components/Navigation";

import FinanceContextProvider from '@/lib/store/finance-context';
import AuthContextProvider from '@/lib/store/auth-context';
import ProtectedRoute from '@/components/RouterProtect';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head />
      <body className={inter.className}>
        <AuthContextProvider>
          <FinanceContextProvider>
            <ToastContainer />
              <Nav />
              <ProtectedRoute>
                {children}
              </ProtectedRoute> 
          </FinanceContextProvider>
        </AuthContextProvider>
      </body>
    </html>
  );
}
