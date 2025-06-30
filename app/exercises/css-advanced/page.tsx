export default function CSSAdvanced() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">美食网站高级样式</h1>
      
      <div className="prose max-w-none">
        <p className="mb-4">这是一个展示美食网站高级CSS概念应用的练习页面。</p>
        
        <section className="my-6">
          <h2 className="text-2xl font-bold mb-4">背景与美食搭配</h2>
          <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-6 rounded-lg shadow-sm">
            <p>
              美食摄影中背景选择非常重要。温暖的背景色能够提升食物的美感和食欲。
              <br />
              背景色彩学： /kæˈskeɪdɪŋ/ 线性渐变 /ˈlɪniər/ 能创造出优雅的食物展示效果。
            </p>
          </div>
        </section>
        
        <section className="my-6">
          <h2 className="text-2xl font-bold mb-4">美食展示盒模型</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="w-full p-5 border border-dashed border-amber-500 rounded-xl bg-white shadow-md">
              <div className="aspect-square flex items-center justify-center">
                <p className="text-center text-amber-800 font-medium">美食展示盒 1</p>
              </div>
            </div>
            <div className="w-full p-5 border border-dashed border-amber-500 rounded-xl bg-white shadow-md">
              <div className="aspect-square flex items-center justify-center">
                <p className="text-center text-amber-800 font-medium">美食展示盒 2</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="my-6">
          <h2 className="text-2xl font-bold mb-4">美食菜单布局</h2>
          <h3 className="text-xl mb-3">不同展示方式</h3>
          <div className="bg-white p-5 rounded-lg shadow-sm mb-4">
            <div className="flex flex-wrap gap-2 mb-4">
              <p className="text-amber-800 px-3 py-1 border border-amber-200 rounded-lg">招牌菜</p>
              <p className="text-amber-800 px-3 py-1 border border-amber-200 rounded-lg">特色饮品</p>
              <p className="text-amber-800 px-3 py-1 border border-amber-200 rounded-lg">甜点</p>
            </div>
          </div>
          
          <h3 className="text-xl mb-3">Flex布局菜单</h3>
          <div className="flex flex-wrap justify-center gap-4 bg-white p-5 rounded-lg shadow-sm">
            <div className="border border-amber-200 p-3 rounded-lg">
              <p className="font-medium">招牌红烧肉</p>
            </div>
            <div className="border border-amber-200 p-3 rounded-lg">
              <p className="font-medium">糖醋排骨</p>
            </div>
            <div className="border border-amber-200 p-3 rounded-lg">
              <p className="font-medium">鱼香茄子</p>
            </div>
            <div className="border border-amber-200 p-3 rounded-lg">
              <p className="font-medium">清蒸鲈鱼</p>
            </div>
          </div>
        </section>
        
        <section className="my-6">
          <h2 className="text-2xl font-bold mb-4">美食交互动画</h2>
          <div className="flex justify-center">
            <div className="w-32 h-32 bg-amber-100 rounded-lg shadow-md flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-amber-500 hover:rounded-full hover:text-white">
              <p className="font-medium text-center">点我查看菜单</p>
            </div>
          </div>
        </section>
        
        {/* 显示原始代码的按钮 */}
        <details className="mt-8 p-4 bg-gray-50 rounded-md">
          <summary className="font-medium cursor-pointer">查看原始HTML代码</summary>
          <pre className="mt-3 p-4 bg-gray-800 text-gray-100 rounded overflow-x-auto">
            {`<!DOCTYPE html>
<html lang="zh">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>美食网站 CSS 核心概念：背景、盒模型、布局、动画</title>
    <style>
      body {
        background-color: #f0f0f0;
      }
      h1 {
        background-image: url("./images/food.jpg");
        background-position: 50% 50%;
        background-repeat: no-repeat;
        text-align: center;
      }
    </style>
  </head>
  <body>
    <h1>美食网站 CSS 核心概念：背景、盒模型、布局、动画</h1>
    <section>
      <h2>背景与美食搭配</h2>
      <div>
        <p>
          美食摄影中背景选择非常重要。温暖的背景色能够提升食物的美感和食欲。
          背景色彩学： /kæˈskeɪdɪŋ/ 线性渐变 /ˈlɪniər/ 能创造出优雅的食物展示效果。
        </p>
      </div>
    </section>
    <section>
      <h2>美食展示盒模型</h2>
      <style>
        .box {
          width: 200px;
          height: 200px;
          border: dashed #e97f02 1px;
          padding: 20px;
          margin-bottom: 2em;
          border-radius: 20px;
        }
      </style>
      <div>
        <div class="box">美食展示盒 1</div>
        <div class="box">美食展示盒 2</div>
      </div>
    </section>
    <section>
      <h2>美食菜单布局</h2>
      <div>
        <h3>不同展示方式</h3>
        <style>
          .display-demo p {
            display: inline;
          }
        </style>
        <div class="display-demo">
          <p>招牌菜</p>
          <p>特色饮品</p>
          <p>甜点</p>
        </div>
        <style>
          .flex-container {
            display: flex;
            flex-direction: row;
            justify-content: center;
          }
          .flex-container p {
            border: 1px solid #e97f02;
            margin-right: 1em;
            padding: 10px;
          }
        </style>
        <div class="flex-container">
          <p>招牌红烧肉</p>
          <p>糖醋排骨</p>
          <p>鱼香茄子</p>
          <p>清蒸鲈鱼</p>
        </div>
      </div>
    </section>
    <section>
      <h2>美食交互动画</h2>
      <style>
        .animate-box {
          width: 100px;
          height: 100px;
          background-color: #fff1e0;
          text-align: center;
          line-height: 100px;
          margin-top: 2em;
          border-radius: 0;
        }
        .animate-box:hover {
          border-radius: 100px;
          color: white;
          background-color: #e97f02;
          transition: all 0.3s;
        }
      </style>
      <div class="animate-box">点我查看菜单</div>
    </section>
  </body>
</html>`}
          </pre>
        </details>
      </div>
    </div>
  );
} 