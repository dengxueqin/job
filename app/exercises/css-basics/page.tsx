export default function CSSBasics() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">美食样式基础</h1>
      
      <div className="prose max-w-none">
        <p className="mb-4">这是一个关于美食样式的CSS基础练习页面。</p>
        
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-4">使用样式表的三种方式</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 style={{
              fontFamily: "'cooper', '楷体'",
              textDecoration: "underline",
              color: "chocolate"
            }} className="text-xl mb-4">美食样式设计指南</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>外部样式表 - 适用于整个美食网站</li>
              <li>内部样式表 - 适用于当前美食页面</li>
              <li style={{ color: "darkorange" }}>内嵌样式表 - 适用于特定美食元素</li>
            </ul>
            
            <div className="mt-6">
              <p className="mb-2">对于美食网站，样式应当：</p>
              <ol className="list-decimal pl-5 space-y-1">
                <li>使用温暖的色调（红色、橙色、黄色）</li>
                <li>使用衬线字体增加传统感</li>
                <li>为美食图片添加柔和阴影</li>
              </ol>
            </div>
          </div>
        </div>
        
        {/* 显示原始代码的按钮 */}
        <details className="mt-8 p-4 bg-gray-50 rounded-md">
          <summary className="font-medium cursor-pointer">查看原始HTML代码</summary>
          <pre className="mt-3 p-4 bg-gray-800 text-gray-100 rounded overflow-x-auto">
            {`<!DOCTYPE html>
<html lang="zh">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>美食CSS练习</title>
    <link rel="stylesheet" href="styles\\main.css" />
    <style>
      h2 {
        font-family: "cooper", "楷体";
        text-decoration: underline;
        color: chocolate;
      }
    </style>
  </head>
  <body>
    <h1>美食样式练习</h1>
    <div>
      <h2>使用样式表的三种方式</h2>
      <ul>
        <li>外部样式表 - 适用于整个美食网站</li>
        <li>内部样式表 - 适用于当前美食页面</li>
        <li style="color: darkorange">内嵌样式表 - 适用于特定美食元素</li>
      </ul>
    </div>
  </body>
</html>`}
          </pre>
        </details>
      </div>
    </div>
  );
} 