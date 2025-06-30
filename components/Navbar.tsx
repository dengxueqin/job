import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="font-bold text-xl text-primary">
            课程学习平台
          </Link>
          
          <div className="flex gap-6">
            <Link href="/" className="hover:text-primary">
              首页
            </Link>
            <Link href="/exercises" className="hover:text-primary">
              课程练习
            </Link>
            <Link href="/qanything" className="hover:text-primary">
              文心一言
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 