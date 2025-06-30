'use client';

import { useState } from 'react';

export default function JSOOP() {
  const [output, setOutput] = useState<string[]>([]);
  
  // 模拟控制台输出
  const logToOutput = (text: string) => {
    setOutput((prev) => [...prev, text]);
  };
  
  // 菜品类示例
  const runDishExample = () => {
    setOutput([]);
    
    class Dish {
      constructor(public name: string, public cuisine: string, public prepTime: number) {}
      
      prepare() {
        return `正在准备${this.cuisine}菜品：${this.name}，预计需要${this.prepTime}分钟`;
      }
      
      serve() {
        return `${this.name}已准备完毕，可以上菜了！`;
      }
    }
    
    const myDish = new Dish('麻婆豆腐', '川菜', 25);
    logToOutput(`创建了菜品：${myDish.name}`);
    logToOutput(myDish.prepare());
    logToOutput(myDish.serve());
    
    class SpecialDish extends Dish {
      constructor(name: string, cuisine: string, prepTime: number, public spiceLevel: string) {
        super(name, cuisine, prepTime);
      }
      
      spiceWarning() {
        return `特别提醒：${this.name}的辣度为${this.spiceLevel}，请谨慎品尝！`;
      }
    }
    
    const spicyDish = new SpecialDish('水煮鱼', '川菜', 30, '极辣');
    logToOutput('---');
    logToOutput(`创建了特色菜品：${spicyDish.name}`);
    logToOutput(spicyDish.prepare());
    logToOutput(spicyDish.spiceWarning());
  };
  
  // 回调函数示例
  const runCallbackExample = () => {
    setOutput([]);
    
    logToOutput('开始准备菜品');
    
    setTimeout(() => {
      logToOutput('菜品准备中...');
    }, 1000);
    
    logToOutput('已下单');
  };
  
  // DOM操作示例
  const runDOMExample = () => {
    const dishDisplay = document.getElementById('dish-display');
    if (dishDisplay) {
      dishDisplay.innerHTML = '今日特色：红烧狮子头';
      dishDisplay.onclick = function() {
        alert('查看详细菜谱！');
      };
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">JavaScript面向对象编程</h1>
      
      <div className="prose max-w-none">
        <p className="mb-6">这是一个关于美食主题的JavaScript面向对象编程练习页面。</p>
        
        <section className="mb-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">类和对象</h2>
          
          <div className="mb-4">
            <button 
              onClick={runDishExample}
              className="px-4 py-2 bg-amber-500 text-white rounded hover:bg-amber-600 transition-colors"
            >
              运行菜品类示例
            </button>
          </div>
          
          <div className="bg-amber-50 p-4 rounded-md mb-4">
            <h3 className="font-semibold mb-2">美食类实现：</h3>
            <pre className="bg-gray-800 text-gray-100 p-3 rounded">
              {`// 菜品基础类
class Dish {
  constructor(name, cuisine, prepTime) {
    this.name = name;
    this.cuisine = cuisine;
    this.prepTime = prepTime;
  }
  
  prepare() {
    console.log(\`正在准备\${this.cuisine}菜品：\${this.name}，预计需要\${this.prepTime}分钟\`);
  }
  
  serve() {
    console.log(\`\${this.name}已准备完毕，可以上菜了！\`);
  }
}

let myDish = new Dish('麻婆豆腐', '川菜', 25);
myDish.prepare();
myDish.serve();

// 特色菜品子类
class SpecialDish extends Dish {
  constructor(name, cuisine, prepTime, spiceLevel) {
    super(name, cuisine, prepTime);
    this.spiceLevel = spiceLevel;
  }
  
  spiceWarning() {
    console.log(\`特别提醒：\${this.name}的辣度为\${this.spiceLevel}，请谨慎品尝！\`);
  }
}

let spicyDish = new SpecialDish('水煮鱼', '川菜', 30, '极辣');
spicyDish.prepare();
spicyDish.spiceWarning();`}
            </pre>
          </div>
          
          {output.length > 0 && (
            <div className="border border-gray-200 rounded p-3 bg-gray-50">
              <h3 className="font-semibold mb-2">输出结果：</h3>
              <div className="font-mono text-sm">
                {output.map((line, index) => (
                  <div key={index} className="py-1">{line}</div>
                ))}
              </div>
            </div>
          )}
        </section>
        
        <section className="mb-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">回调函数</h2>
          
          <div className="mb-4">
            <button 
              onClick={runCallbackExample}
              className="px-4 py-2 bg-amber-500 text-white rounded hover:bg-amber-600 transition-colors"
            >
              运行回调函数示例
            </button>
          </div>
          
          <div className="bg-amber-50 p-4 rounded-md">
            <pre className="bg-gray-800 text-gray-100 p-3 rounded">
              {`console.log('开始准备菜品');

setTimeout(function() {
  console.log('菜品准备中...');
}, 2000);

console.log('已下单');`}
            </pre>
          </div>
        </section>
        
        <section className="mb-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">DOM操作</h2>
          
          <div className="mb-4">
            <button 
              onClick={runDOMExample}
              className="px-4 py-2 bg-amber-500 text-white rounded hover:bg-amber-600 transition-colors"
            >
              运行DOM操作示例
            </button>
          </div>
          
          <div 
            id="dish-display" 
            className="bg-amber-50 p-6 rounded-md text-center cursor-pointer hover:bg-amber-100 transition-colors"
          >
            点击这里查看今日特色菜品
          </div>
          
          <div className="mt-4 bg-amber-50 p-4 rounded-md">
            <pre className="bg-gray-800 text-gray-100 p-3 rounded">
              {`// DOM操作示例
const dishDisplay = document.getElementById('dish-display');
dishDisplay.innerHTML = '今日特色：红烧狮子头';
dishDisplay.onclick = function() {
  alert('查看详细菜谱！');
};`}
            </pre>
          </div>
        </section>
        
        {/* 显示原始代码的按钮 */}
        <details className="mt-8 p-4 bg-gray-50 rounded-md">
          <summary className="font-medium cursor-pointer">查看原始HTML代码</summary>
          <pre className="mt-3 p-4 bg-gray-800 text-gray-100 rounded overflow-x-auto">
            {`<!DOCTYPE html>
<html lang="zh">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>美食JavaScript类与对象</title>
  <script>
    // 菜品类和对象
    class Dish {
      constructor(name, cuisine, prepTime) {
        this.name = name;
        this.cuisine = cuisine;
        this.prepTime = prepTime;
      }
      
      prepare() {
        console.log(\`正在准备\${this.cuisine}菜品：\${this.name}\`);
      }
      
      serve() {
        console.log(\`\${this.name}已准备完毕，可以上菜了！\`);
      }
    }
    
    let myDish = new Dish('麻婆豆腐', '川菜', 25);
    myDish.prepare();
    myDish.serve();

    class SpecialDish extends Dish {
      constructor(name, cuisine, prepTime, spiceLevel) {
        super(name, cuisine, prepTime);
        this.spiceLevel = spiceLevel;
      }
      
      spiceWarning() {
        console.log(\`特别提醒：\${this.name}的辣度为\${this.spiceLevel}，请谨慎品尝！\`);
      }
    }
    
    let spicyDish = new SpecialDish('水煮鱼', '川菜', 30, '极辣');
    spicyDish.prepare();
    spicyDish.spiceWarning();

    // 回调函数练习
    console.log('开始准备菜品');

    setTimeout(function() {
      console.log('菜品准备中...');
    }, 2000);

    console.log('已下单');
  </script>
</head>

<body>
  <h1 onclick="alert('美食菜单!')">JavaScript 美食编程</h1>
  <div id="dish-display">点击这里查看今日特色</div>
</body>

<script>
  myDom = document.getElementById('dish-display');
  console.log(myDom);
  myDom.innerHTML = '今日特色：红烧狮子头';
  myDom.onclick = function() {
    alert('查看详细菜谱！');
  };
</script>

</html>`}
          </pre>
        </details>
      </div>
    </div>
  );
} 