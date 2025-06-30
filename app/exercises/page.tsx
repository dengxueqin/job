import Link from 'next/link';

// 美食主题的课程练习数据
const exercisesData = [
  {
    id: 1,
    title: 'CSS基础样式',
    description: '使用CSS为美食网站创建基本样式，展示外部、内部和内联样式的应用',
    path: '/exercises/css-basics',
    technologies: ['HTML5', 'CSS3'],
    foodTheme: '美食样式基础'
  },
  {
    id: 2,
    title: 'CSS高级样式',
    description: '使用高级CSS技术为美食网站实现背景效果、盒模型、灵活布局和动画',
    path: '/exercises/css-advanced',
    technologies: ['HTML5', 'CSS3', 'Flexbox'],
    foodTheme: '美食展示样式'
  },
  {
    id: 3,
    title: 'JavaScript基础',
    description: '使用JavaScript变量、条件语句、循环和函数创建简单的美食相关脚本',
    path: '/exercises/js-basics',
    technologies: ['HTML5', 'JavaScript'],
    foodTheme: '美食JavaScript基础'
  },
  {
    id: 4,
    title: 'JavaScript面向对象编程',
    description: '使用JavaScript类和对象构建美食菜单和烹饪系统',
    path: '/exercises/js-oop',
    technologies: ['JavaScript', 'OOP', 'DOM'],
    foodTheme: '美食菜谱系统'
  },
  {
    id: 5,
    title: 'JavaScript异步编程',
    description: '使用Promise、Async/Await和Fetch API实现美食数据的异步获取',
    path: '/exercises/js-async',
    technologies: ['JavaScript', 'Async/Await', 'Fetch API'],
    foodTheme: '美食数据获取'
  },
];

export default function Exercises() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">美食主题课程练习</h1>
      <p className="text-gray-600">
        本学期完成的所有美食主题Web开发课程练习，包括HTML、CSS、JavaScript等内容，通过美食案例展示各种Web技术的实际应用。
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {exercisesData.map((exercise) => (
          <div key={exercise.id} className="border rounded-lg overflow-hidden bg-white shadow-sm">
            <div className="p-6">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-bold">{exercise.title}</h2>
                <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded">
                  {exercise.foodTheme}
                </span>
              </div>
              <p className="text-gray-600 mb-4">{exercise.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {exercise.technologies.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-2 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <Link href={exercise.path} className="text-amber-600 font-medium hover:underline">
                查看练习 →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 