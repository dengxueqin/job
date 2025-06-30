export default function HTMLBasics() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">HTML基础练习</h1>
      
      <div className="prose max-w-none">
        <p>这是一个展示HTML5基础知识的练习页面。</p>
        
        <h2>HTML5元素演示</h2>
        
        <section className="my-6 p-4 border rounded-md bg-gray-50">
          <h3 className="text-xl font-bold">1. 标题</h3>
          <div className="bg-white p-4 rounded-md my-2 shadow-sm">
            <h1 className="text-2xl mb-1">H1 标题</h1>
            <h2 className="text-xl mb-1">H2 标题</h2>
            <h3 className="text-lg mb-1">H3 标题</h3>
            <h4 className="text-md mb-1">H4 标题</h4>
            <h5 className="text-sm mb-1">H5 标题</h5>
            <h6 className="text-xs">H6 标题</h6>
          </div>
        </section>
        
        <section className="my-6 p-4 border rounded-md bg-gray-50">
          <h3 className="text-xl font-bold">2. 文本格式化</h3>
          <div className="bg-white p-4 rounded-md my-2 shadow-sm">
            <p><strong>粗体文本</strong> 使用 strong 标签</p>
            <p><em>斜体文本</em> 使用 em 标签</p>
            <p><u>下划线文本</u> 使用 u 标签</p>
            <p><mark>高亮文本</mark> 使用 mark 标签</p>
            <p><code>代码文本</code> 使用 code 标签</p>
          </div>
        </section>
        
        <section className="my-6 p-4 border rounded-md bg-gray-50">
          <h3 className="text-xl font-bold">3. 列表</h3>
          <div className="bg-white p-4 rounded-md my-2 shadow-sm">
            <h4 className="font-bold mb-2">无序列表</h4>
            <ul className="list-disc pl-5">
              <li>列表项 1</li>
              <li>列表项 2</li>
              <li>列表项 3</li>
            </ul>
            
            <h4 className="font-bold mb-2 mt-4">有序列表</h4>
            <ol className="list-decimal pl-5">
              <li>第一项</li>
              <li>第二项</li>
              <li>第三项</li>
            </ol>
          </div>
        </section>
        
        <section className="my-6 p-4 border rounded-md bg-gray-50">
          <h3 className="text-xl font-bold">4. 表格</h3>
          <div className="bg-white p-4 rounded-md my-2 shadow-sm overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-2">标题 1</th>
                  <th className="border p-2">标题 2</th>
                  <th className="border p-2">标题 3</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2">单元格 1</td>
                  <td className="border p-2">单元格 2</td>
                  <td className="border p-2">单元格 3</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-2">单元格 4</td>
                  <td className="border p-2">单元格 5</td>
                  <td className="border p-2">单元格 6</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
      
      <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-md">
        <h3 className="font-bold text-lg text-blue-800">学习资源</h3>
        <p className="mb-2">推荐的HTML5学习资源：</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">MDN Web 文档 - HTML</a></li>
          <li><a href="https://www.w3school.com.cn/html/index.asp" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">W3School HTML 教程</a></li>
        </ul>
      </div>
    </div>
  );
} 