import './globals.css';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Dr. Aditya Sharma — Senior Consultant Cardiologist',
  description:
    'Dr. Aditya Sharma · MBBS, MD, DM (Cardiology). 18+ years of clinical experience in interventional cardiology, heart failure management, and preventive cardiac care.',
  keywords: [
    'Dr. Aditya Sharma',
    'cardiologist Mumbai',
    'interventional cardiology',
    'heart specialist',
    'consultant cardiologist',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-white text-slate-900 antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
