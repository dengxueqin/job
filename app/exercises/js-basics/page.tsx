'use client';

import { useState, useEffect } from 'react';

export default function JSBasics() {
  const [timeMessage, setTimeMessage] = useState('');
  const [countResult, setCountResult] = useState<string[]>([]);
  const [cookingTime, setCookingTime] = useState(60);
  
  // 模拟JavaScript示例代码的效果
  useEffect(() => {
    const now = new Date();
    const currentTime = `${now.getHours()}:${now.getMinutes()}`;
    
    if (now.getHours() >= 11 && now.getHours() < 13) {
      setTimeMessage('午餐时间到了，该去吃饭了！');
    } else if (now.getHours() >= 17 && now.getHours() < 19) {
      setTimeMessage('晚餐时间到了，该去吃饭了！');
    } else {
      setTimeMessage('现在不是用餐时间，可以再等等。');
    }
    
    // 模拟for循环
    const countArray: string[] = [];
    for (let i = 1; i <= 5; i++) {
      countArray.push(`准备第${i}道菜`);
    }
    setCountResult(countArray);
    
    // 模拟while循环
    const timer = setInterval(() => {
      setCookingTime((prev) => {
        if (prev <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prev - 10;
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  // 模拟函数示例
  function introduceRecipe() {
    alert('欢迎学习美食烹饪JavaScript教程！');
  }
  
  function describeDish(dishName: string) {
    return `${dishName}是一道美味的特色菜品！`;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">美食JavaScript基础</h1>
      
      <div className="prose max-w-none">
        <p className="mb-6">这是一个关于美食主题的JavaScript基础练习页面。</p>
        
        <section className="mb-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">JavaScript变量与数据类型</h2>
          
          <div className="bg-amber-50 p-4 rounded-md mb-4">
            <h3 className="font-semibold mb-2">美食变量示例：</h3>
            <pre className="bg-gray-800 text-gray-100 p-3 rounded">
              {`let recipeName = '红烧肉';
const SECRET_INGREDIENT = '冰糖';
console.log(recipeName);
console.log(SECRET_INGREDIENT);
console.log(typeof recipeName, typeof SECRET_INGREDIENT);
              
let cookingTime = 60;
let timeUnit = '分钟';
console.log(cookingTime + timeUnit);
console.log(cookingTime + Number('30') + timeUnit);`}
            </pre>
          </div>
          
          <div className="bg-amber-50 p-4 rounded-md">
            <h3 className="font-semibold mb-2">比较运算：</h3>
            <pre className="bg-gray-800 text-gray-100 p-3 rounded">
              {`let requiredTemp = '180';
let actualTemp = 180;
console.log(typeof actualTemp, typeof requiredTemp);
console.log(actualTemp == requiredTemp); // true（类型转换后相等）
console.log(actualTemp === requiredTemp); // false（类型不同）`}
            </pre>
          </div>
        </section>
        
        <section className="mb-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">条件语句与循环</h2>
          
          <div className="bg-amber-50 p-4 rounded-md mb-4">
            <h3 className="font-semibold mb-2">用餐时间判断：</h3>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <p>{timeMessage}</p>
            </div>
            <pre className="bg-gray-800 text-gray-100 p-3 rounded mt-3">
              {`// 分支语句
let currentTime = '${new Date().getHours()}:${new Date().getMinutes()}';
if (currentTime >= '11:00' && currentTime < '13:00') {
  console.log('午餐时间到了，该去吃饭了！');
} else if (currentTime >= '17:00' && currentTime < '19:00') {
  console.log('晚餐时间到了，该去吃饭了！');
} else {
  console.log('现在不是用餐时间，可以再等等。');
}`}
            </pre>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 bg-amber-50 p-4 rounded-md">
              <h3 className="font-semibold mb-2">菜品准备循环：</h3>
              <ul className="list-disc pl-5">
                {countResult.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <pre className="bg-gray-800 text-gray-100 p-3 rounded mt-3">
                {`// for循环
for (let i = 1; i <= 5; i++) {
  console.log('准备第' + i + '道菜');
}`}
              </pre>
            </div>
            
            <div className="flex-1 bg-amber-50 p-4 rounded-md">
              <h3 className="font-semibold mb-2">烹饪倒计时：</h3>
              <div className="text-center py-3">
                <span className="text-2xl font-bold">{cookingTime}</span>
                <span className="ml-1">分钟</span>
              </div>
              <pre className="bg-gray-800 text-gray-100 p-3 rounded mt-3">
                {`// while循环
let cookingTime = 60;
while (cookingTime > 0) {
  console.log('继续烹饪中...');
  cookingTime = cookingTime - 10;
}`}
              </pre>
            </div>
          </div>
        </section>
        
        <section className="mb-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">函数示例</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-amber-50 p-4 rounded-md">
              <h3 className="font-semibold mb-2">简单函数：</h3>
              <button 
                onClick={introduceRecipe}
                className="px-4 py-2 bg-amber-500 text-white rounded hover:bg-amber-600 transition-colors"
              >
                显示菜谱介绍
              </button>
              <pre className="bg-gray-800 text-gray-100 p-3 rounded mt-3">
                {`function introduceRecipe() {
  alert('欢迎学习美食烹饪JavaScript教程！');
}
introduceRecipe();`}
              </pre>
            </div>
            
            <div className="bg-amber-50 p-4 rounded-md">
              <h3 className="font-semibold mb-2">带参数的函数：</h3>
              <div className="p-3 border rounded bg-white mb-3">
                {describeDish('红烧肉')}
              </div>
              <pre className="bg-gray-800 text-gray-100 p-3 rounded">
                {`function describeDish(dishName) {
  return dishName + '是一道美味的特色菜品！';
}
let result = describeDish('红烧肉');
console.log(result);`}
              </pre>
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
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>美食 JavaScript 基础学习</title>
  <script>
    let recipeName = '红烧肉'
    // alert(recipeName)
    console.log(recipeName)
    const SECRET_INGREDIENT = '冰糖'
    console.log(SECRET_INGREDIENT)
    console.log(typeof recipeName, typeof SECRET_INGREDIENT)
    let cookingTime = '60'
    console.log(cookingTime + '分钟')
    console.log(Number(cookingTime) + 30 + '分钟')
    let requiredTemp = '180'
    let actualTemp = 180
    console.log(typeof actualTemp, typeof requiredTemp)
    console.log(actualTemp == requiredTemp)
    console.log(actualTemp === requiredTemp)
    
    // 分支语句
    let current_time = '12:20'
    if (current_time == '12:20') {
      console.log('该去吃午饭了！')
    } else {
      console.log('继续准备美食...')
    }
    
    // for循环
    for (let i = 1; i <= 5; i++) {
      console.log('准备第' + i + '道菜')
    }
    
    // while循环
    let cookingTime = 60
    while (cookingTime > 0) {
      console.log('继续烹饪中...')
      cookingTime = cookingTime - 10
    }
    
    // 函数
    function introduceRecipe() {
      console.log('欢迎学习美食烹饪JavaScript教程！')
    }
    introduceRecipe()
    
    function describeDish(dishName) {
      console.log('今日特色菜品： ' + String(dishName))
    }
    console.log(typeof describeDish('红烧肉'))
    
    function createMenu(appetizer, mainCourse) {
      console.log('今日菜单： ' + String(appetizer) + '，' + String(mainCourse))
    }
    createMenu('酸辣汤', '东坡肉')
    
    function rateDish(dishName) {
      console.log(dishName)
      return dishName + ' - ★★★★★'
    }
    rateDish('宫保鸡丁')
    let rating = rateDish('水煮鱼片')
    console.log(rating)
  </script>
</head>

<body>

</body>

</html>`}
          </pre>
        </details>
      </div>
    </div>
  );
} 