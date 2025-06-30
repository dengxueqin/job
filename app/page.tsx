import Link from 'next/link';

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">欢迎来到我的课程学习平台</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          这是一个集合课程练习展示、编码时长统计和文心一言AI对话服务的Web应用
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">课程练习</h2>
          <p className="mb-4">查看本学期所有课程练习项目，包括HTML、CSS、JavaScript、React等</p>
          <Link href="/exercises" className="text-primary font-medium hover:underline">
            浏览课程练习 →
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">编码时长统计</h2>
          <p className="mb-4">通过WakaTime API记录和展示个人编程学习时间</p>
          <p className="text-primary font-medium">页脚已集成WakaTime统计</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">文心一言AI对话</h2>
          <p className="mb-4">体验百度大语言模型对话服务，获取学习帮助</p>
          <Link href="/qanything" className="text-primary font-medium hover:underline">
            前往AI对话服务 →
          </Link>
        </div>
      </section>

      <section className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">关于本项目</h2>
        <p>
          本项目是使用Next.js框架开发的Web应用，集成了WakaTime API进行编码时长统计，
          并接入了百度文心一言大语言模型对话服务。项目展示了本学期所学的各种Web开发技术，
          包括HTML、CSS、JavaScript、React以及Next.js框架的应用。
        </p>
      </section>
    </div>
  );
} 