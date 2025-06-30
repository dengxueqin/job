import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '课程学习与编码统计平台',
  description: 'Web开发课程练习展示、WakaTime编码时长统计及百度文心一言AI对话服务',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow container mx-auto py-8 px-4">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
} 