'use client';

import { useState, useEffect } from 'react';

export default function JSAsync() {
  const [output, setOutput] = useState<string[]>([]);
  const [recipeData, setRecipeData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  
  // 模拟控制台输出
  const logToOutput = (text: string) => {
    setOutput((prev) => [...prev, text]);
  };
  
  // 简单的异步示例
  const runSetTimeoutExample = () => {
    setOutput([]);
    
    logToOutput('准备烹饪食谱...');
    
    setTimeout(() => {
      logToOutput('步骤1：准备食材');
    }, 1000);
    
    logToOutput('厨师已经开始工作');
  };
  
  // Promise示例
  const runPromiseExample = () => {
    setOutput([]);
    
    function prepareIngredients() {
      return new Promise<void>((resolve) => {
        logToOutput('正在准备食材...');
        setTimeout(() => {
          logToOutput('食材准备完毕！');
          resolve();
        }, 1500);
      });
    }
    
    logToOutput('开始烹饪流程');
    prepareIngredients().then(() => {
      logToOutput('开始烹饪主菜');
    });
  };
  
  // Async/Await示例
  const runAsyncAwaitExample = async () => {
    setOutput([]);
    
    async function marinate() {
      logToOutput('开始腌制食材...');
      await new Promise((resolve) => {
        setTimeout(() => {
          logToOutput('食材腌制完成！');
          resolve({});
        }, 1500);
      });
    }
    
    logToOutput('准备开始烹饪流程');
    await marinate();
    logToOutput('开始烹饪主菜');
  };
  
  // 模拟API调用获取菜谱数据
  const fetchRecipes = async () => {
    setLoading(true);
    setRecipeData([]);
    
    try {
      // 模拟API请求延迟
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // 模拟菜谱数据
      const mockRecipes = [
        { id: 1, name: '宫保鸡丁', chef: '李厨师', date: '2025-01-15' },
        { id: 2, name: '鱼香肉丝', chef: '王厨师', date: '2025-02-03' },
        { id: 3, name: '麻婆豆腐', chef: '张厨师', date: '2025-01-28' },
        { id: 4, name: '水煮鱼片', chef: '赵厨师', date: '2025-02-10' },
        { id: 5, name: '红烧肉', chef: '刘厨师', date: '2025-01-22' }
      ];
      
      setRecipeData(mockRecipes);
    } catch (error) {
      console.error('获取菜谱失败:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">美食JavaScript异步编程</h1>
      
      <div className="prose max-w-none">
        <p className="mb-6">这是一个关于美食主题的JavaScript异步编程练习页面。</p>
        
        <section className="mb-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">异步基础</h2>
          
          <div className="mb-4">
            <button 
              onClick={runSetTimeoutExample}
              className="px-4 py-2 bg-amber-500 text-white rounded hover:bg-amber-600 transition-colors"
            >
              运行setTimeout示例
            </button>
          </div>
          
          <div className="bg-amber-50 p-4 rounded-md mb-4">
            <pre className="bg-gray-800 text-gray-100 p-3 rounded">
              {`setTimeout(() => {
  console.log('步骤1：准备食材');
}, 1000);

console.log('厨师已经开始工作');`}
            </pre>
          </div>
        </section>
        
        <section className="mb-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Promise</h2>
          
          <div className="mb-4">
            <button 
              onClick={runPromiseExample}
              className="px-4 py-2 bg-amber-500 text-white rounded hover:bg-amber-600 transition-colors"
            >
              运行Promise示例
            </button>
          </div>
          
          <div className="bg-amber-50 p-4 rounded-md mb-4">
            <pre className="bg-gray-800 text-gray-100 p-3 rounded">
              {`function prepareIngredients() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('食材准备完毕！');
      resolve();
    }, 1000);
  });
}

console.log('开始烹饪流程');
prepareIngredients().then(() => {
  console.log('开始烹饪主菜');
});`}
            </pre>
          </div>
        </section>
        
        <section className="mb-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Async/Await</h2>
          
          <div className="mb-4">
            <button 
              onClick={runAsyncAwaitExample}
              className="px-4 py-2 bg-amber-500 text-white rounded hover:bg-amber-600 transition-colors"
            >
              运行Async/Await示例
            </button>
          </div>
          
          <div className="bg-amber-50 p-4 rounded-md mb-4">
            <pre className="bg-gray-800 text-gray-100 p-3 rounded">
              {`async function marinate() {
  await new Promise((resolve) => {
    setTimeout(() => {
      console.log('食材腌制完成！');
      resolve();
    }, 1000);
  });
}

(async () => {
  console.log('准备开始烹饪流程');
  await marinate();
  console.log('开始烹饪主菜');
})();`}
            </pre>
          </div>
        </section>
        
        <section className="mb-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">模拟API请求获取菜谱</h2>
          
          <div className="mb-4">
            <button 
              onClick={fetchRecipes}
              className="px-4 py-2 bg-amber-500 text-white rounded hover:bg-amber-600 transition-colors"
              disabled={loading}
            >
              {loading ? '加载中...' : '获取菜谱数据'}
            </button>
          </div>
          
          <div className="bg-amber-50 p-4 rounded-md mb-4">
            <pre className="bg-gray-800 text-gray-100 p-3 rounded">
              {`async function getRecipes() {
  const url = 'https://api.example.com/recipes';
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('网络响应失败');
    }
    const recipes = await response.json();
    return recipes;
  } catch (error) {
    console.error('获取菜谱失败:', error);
    return [];
  }
}

// 调用函数获取数据
getRecipes().then(recipes => {
  console.log('菜谱数据:', recipes);
  displayRecipes(recipes);
});`}
            </pre>
          </div>
          
          {recipeData.length > 0 && (
            <div className="border border-gray-200 rounded overflow-hidden">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="py-2 px-4 border-b text-left">序号</th>
                    <th className="py-2 px-4 border-b text-left">菜品名称</th>
                    <th className="py-2 px-4 border-b text-left">厨师</th>
                    <th className="py-2 px-4 border-b text-left">创建日期</th>
                  </tr>
                </thead>
                <tbody>
                  {recipeData.map((recipe) => (
                    <tr key={recipe.id} className="hover:bg-gray-50">
                      <td className="py-2 px-4 border-b">{recipe.id}</td>
                      <td className="py-2 px-4 border-b">{recipe.name}</td>
                      <td className="py-2 px-4 border-b">{recipe.chef}</td>
                      <td className="py-2 px-4 border-b">{recipe.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
        
        {output.length > 0 && (
          <section className="mb-8 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-3">执行结果</h2>
            <div className="border border-gray-200 rounded p-3 bg-gray-50">
              <div className="font-mono text-sm">
                {output.map((line, index) => (
                  <div key={index} className="py-1">{line}</div>
                ))}
              </div>
            </div>
          </section>
        )}
        
        {/* 显示原始代码的按钮 */}
        <details className="mt-8 p-4 bg-gray-50 rounded-md">
          <summary className="font-medium cursor-pointer">查看原始HTML代码</summary>
          <pre className="mt-3 p-4 bg-gray-800 text-gray-100 rounded overflow-x-auto">
            {`<!DOCTYPE html>
<html lang="zh">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>美食JavaScript异步编程</title>
</head>

<body>
  <h1>美食JavaScript异步编程</h1>
  <div id="demo">
    
  </div>
  <script>
    setTimeout(() => {
      console.log('准备食材')
    }, 2000);
    console.log('厨师已经准备开始工作');

    function prepareIngredients() {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log('食材准备完毕！')
          resolve();
        }, 1000)
      })
    }
    prepareIngredients().then(() => {
      console.log('开始烹饪主菜')
    })

    async function marinate() {
      await new Promise((resolve) => {
        setTimeout(() => {
          console.log('食材腌制完成！')
          resolve();
        }, 1000)
      });
    }

    (async () => {
      await marinate();
      console.log('开始烹饪主菜');
    })();

    async function getRecipes(chef, cuisine) {
      const url = \`https://api.example.com/recipes?chef=\${chef}&cuisine=\${cuisine}\`;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('网络响应失败');
        }
        const recipes = await response.json();
        // 提取菜谱数据
        const recipeNames = recipes.map(recipe => recipe.name);
        return recipeNames;
      } catch (error) {
        console.error('获取菜谱失败:', error);
        return [];
      }
    }

    // 模拟调用
    function showRecipesTable(recipes) {
      let html = '<table border="1" cellpadding="5"><tr><th>序号</th><th>菜品名称</th></tr>';
      recipes.forEach((recipe, idx) => {
        html += \`<tr><td>\${idx + 1}</td><td>\${recipe}</td></tr>\`;
      });
      html += '</table>';
      document.getElementById('demo').innerHTML = html;
    }

    // 模拟API调用
    setTimeout(() => {
      const mockRecipes = ['红烧肉', '宫保鸡丁', '鱼香肉丝', '水煮鱼片', '麻婆豆腐'];
      showRecipesTable(mockRecipes);
    }, 1500);
  </script>
</body>

</html>`}
          </pre>
        </details>
      </div>
    </div>
  );
} 